# XY Runner Native Dynamic Plugin ABI Specification

## 1. Overview & Architecture

XY Runner utilizes a **Native Dynamic Library Plugin Architecture** (`.dll` on Windows, `.so` on Linux, `.dylib` on macOS) based on `libloading`. Plugins are compiled as native shared libraries (`crate-type = ["cdylib"]`) and executed directly by the host engine.

This design guarantees:
- **Zero Sandbox Restrictions**: Full access to native OS sockets, multi-threading (Tokio/threads), DuckDB, hardware acceleration, and system APIs.
- **Uniform Execution Model**: Native plugins directly implement the same standard `ActionRunner` trait as built-in runners.
- **Decoupled Architecture**: Host contains zero plugin-specific business logic. Plugins are loaded and dispatched dynamically via exported C-ABI symbols.

---

## 2. C-ABI Symbol Exports

Every native plugin exports standard C-ABI functions using `extern "C"`:

### 1. `xy_plugin_get_manifest`
Returns a null-terminated UTF-8 C string containing the plugin's JSON manifest.

```c
const char* xy_plugin_get_manifest(void);
```

### 2. `xy_plugin_set_log_level`
Initializes or updates the plugin's internal logging filter with the host's log level / filter string.

```c
void xy_plugin_set_log_level(const char* log_level);
```

### 3. `xy_plugin_create_runner`
Allocates and returns a raw trait pointer (`*mut dyn ActionRunner`) for the plugin runner.

```c
void* xy_plugin_create_runner(void);
```

### 4. `xy_plugin_free_runner`
Safely drops and deallocates the runner instance using the **plugin's own memory allocator**, preventing cross-allocator heap corruption.

```c
void xy_plugin_free_runner(void* runner_ptr);
```

---

## 3. The `ActionRunner` Trait Interface

```rust
pub trait ActionRunner: Send + Sync {
    /// Deserializes action configuration properties from binary or JSON payload.
    fn load_data(&mut self, data: &[u8], version: u32) -> anyhow::Result<()>;

    /// Executes the action within the current workflow context.
    fn run_with_context(&self, ctx: &mut ExecutionContext) -> ActionResult;
}
```

### Context & Flow Control
- **`ExecutionContext`**:
  - `ctx.set_variable("var_name", "value")`: Sets workflow-scoped variables for downstream nodes.
  - `ctx.get_variable("var_name")`: Reads workflow variables.
  - `ctx.resolve_ref("NodeAlias.property")`: Resolves upstream output references.
- **`ActionResult`**:
  - `ActionResult::string(json_or_text)`: Successful execution returning a string output.
  - `ActionResult::Next`: Successful step flow.
  - `ActionResult::Goto("NodeAlias")`: Branching jump flow.
  - `ActionResult::fail("error message")`: Execution failure.

---

## 4. `xy_plugin_sdk` & The `xy_export_plugin!` Macro

Plugin authors use the `xy_export_plugin!` macro provided by `xy_plugin_sdk` to automatically generate the exported C-ABI symbols:

```rust
use xy_plugin_sdk::{xy_export_plugin, ActionRunner, ActionResult, ExecutionContext};

#[derive(Default)]
pub struct MyRunner {
    pub port: u16,
}

impl ActionRunner for MyRunner {
    fn load_data(&mut self, data: &[u8], _version: u32) -> anyhow::Result<()> {
        // Deserialization logic
        Ok(())
    }

    fn run_with_context(&self, ctx: &mut ExecutionContext) -> ActionResult {
        // Native execution logic (Tokio, Axum, DuckDB, etc.)
        ActionResult::string("done")
    }
}

// Export native dynamic library symbols
xy_export_plugin!(MyRunner, include_str!("../manifest.json"));
```

---

## 5. Memory Safety & Lifecycle

1. **Library Pinning**: `DynamicPlugin` holds an `Arc<libloading::Library>` preventing dynamic library unloading while runner instances or adapters are alive.
2. **RAII Wrapper**: Host wraps `*mut dyn ActionRunner` inside `NativePluginRunnerGuard`, which invokes `xy_plugin_free_runner` in its `Drop` implementation.
3. **Panic Safety**: Plugins should catch internal panics (`std::panic::catch_unwind`) and return `ActionResult::fail(...)` to prevent crashing the host application.
