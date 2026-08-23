# 从零开发并调试一个原生动作插件 (Step-by-Step Tutorial)

本教程以官方 **`xy_https` (HTTP Server API 服务插件)** 为例，带领开发者从零搭建工程、编写 Axum 原生 HTTP 路由服务、编译动态库并在 XY Runner 中完成调试运行。

---

## 步骤 1：创建插件工程 (Project Setup)

1. 创建标准 Rust 库工程：
   ```bash
   cargo new --lib xy_https
   cd xy_https
   ```

2. 配置 `Cargo.toml`：
   ```toml
   [package]
   name = "xy_https"
   version = "0.1.0"
   edition = "2024"
   description = "Official HTTP Server API Plugin for XY Runner"

   [lib]
   crate-type = ["cdylib", "rlib"]

   [dependencies]
   xy_plugin_sdk = { path = "../xy_plugin_sdk" }
   axum = "0.8"
   tokio = { version = "1.0", features = ["full"] }
   chrono = "0.4"
   log = "0.4"
   anyhow = "1.0"
   serde = { version = "1.0", features = ["derive"] }
   serde_json = "1.0"
   ```

---

## 步骤 2：编写元数据清单 `manifest.json`

在工程根目录下创建 `manifest.json`：
```json
{
  "plugin_id": "xy_https",
  "tag": "HttpServer",
  "display_name": "HTTP API 服务 (HTTP Server)",
  "group": "网络 (Network)",
  "description": "启动轻量级 HTTP API 服务，提供 /api/v1/version (版本信息)、/api/v1/latest_version (最新发布说明)、/api/v1/features (特性清单) 路由接口",
  "keywords": ["http", "https", "server", "api", "服务", "接口", "web", "version", "latest_version", "features", "axum"],
  "fields": [
    {
      "name": "port",
      "display_name": "监听端口",
      "intrinsic_type": "number",
      "default_type": "number",
      "default_value": "8080",
      "presets": ["8080", "8000", "3000", "5000"],
      "description": "HTTP Server 监听的 TCP 端口号"
    }
  ],
  "output_type": "string",
  "version": "1.0.0"
}
```

---

## 步骤 3：编写动作处理核心代码 `src/lib.rs`

在 `src/lib.rs` 中直接引入 Axum、Tokio 与标准 `ActionRunner` trait：

```rust
use axum::{extract::Query, response::Json, routing::get, Router};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::collections::HashMap;
use std::net::SocketAddr;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;
use xy_plugin_sdk::{xy_export_plugin, ActionRunner, ActionResult, ExecutionContext};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HttpServer {
    #[serde(default = "default_port")]
    pub port: u16,
}

fn default_port() -> u16 {
    8080
}

impl Default for HttpServer {
    fn default() -> Self {
        Self {
            port: default_port(),
        }
    }
}

// ----------------------------------------------------------------------------
// Axum HTTP 路由处理函数 (3 个 GET 接口)
// ----------------------------------------------------------------------------

/// GET /api/v1/version - 查询当前应用所有版本信息
async fn handle_get_version() -> Json<Value> {
    Json(json!({
        "status": 0,
        "app_name": "xy-app",
        "current_version": "1.0.0",
        "build_date": "2026-08-21",
        "versions": [
            { "version": "1.0.0", "release_date": "2026-08-21", "type": "stable" },
            { "version": "0.9.0", "release_date": "2026-07-15", "type": "beta" }
        ]
    }))
}

/// GET /api/v1/latest_version - 查询最新版本发布说明与更新信息
async fn handle_get_latest_version() -> Json<Value> {
    Json(json!({
        "status": 0,
        "latest_version": "1.0.0",
        "release_date": "2026-08-21",
        "changelog": [
            "1. Native dynamic plugin system with zero sandbox restrictions",
            "2. Embedded Axum HTTP API Server",
            "3. AI vector semantic search & LLM slot extraction"
        ],
        "download_url": "https://github.com/xy-app/xy/releases/latest"
    }))
}

/// GET /api/v1/features - 查询系统支持的特性功能列表
async fn handle_get_features() -> Json<Value> {
    Json(json!({
        "status": 0,
        "features": [
            { "id": "workflow_engine", "name": "Workflow Execution Engine", "status": "enabled" },
            { "id": "native_plugin_system", "name": "Native Dynamic Plugin Architecture", "status": "enabled" },
            { "id": "ai_semantic_search", "name": "AI Vector Semantic Search", "status": "enabled" },
            { "id": "duckdb_persistence", "name": "DuckDB Embedded Database", "status": "enabled" }
        ],
        "total": 4
    }))
}

fn start_axum_server(port: u16) {
    std::thread::spawn(move || {
        let rt = tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .unwrap();

        rt.block_on(async move {
            let app = Router::new()
                .route("/api/v1/version", get(handle_get_version))
                .route("/api/v1/latest_version", get(handle_get_latest_version))
                .route("/api/v1/features", get(handle_get_features));

            let addr = SocketAddr::from(([0, 0, 0, 0], port));
            let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
            axum::serve(listener, app).await.unwrap();
        });
    });
}

// ----------------------------------------------------------------------------
// ActionRunner Trait 实现
// ----------------------------------------------------------------------------

impl ActionRunner for HttpServer {
    fn load_data(&mut self, data: &[u8], _version: u32) -> anyhow::Result<()> {
        if let Ok(val) = serde_json::from_slice::<serde_json::Value>(data) {
            if let Some(p_num) = val.get("port").and_then(|p| p.as_u64()) {
                self.port = p_num as u16;
            }
        }
        Ok(())
    }

    fn run_with_context(&self, ctx: &mut ExecutionContext) -> ActionResult {
        let port = self.port;
        start_axum_server(port);

        // 写入上下文变量供后续工作流节点使用
        ctx.set_variable("http_server_port", &port.to_string());
        ctx.set_variable("http_server_version_route", "/api/v1/version");
        ctx.set_variable("http_server_latest_version_route", "/api/v1/latest_version");
        ctx.set_variable("http_server_features_route", "/api/v1/features");
        ctx.set_variable("http_server_status", "listening");

        let base_url = format!("http://127.0.0.1:{}", port);
        let payload = serde_json::json!({
            "status": "listening",
            "port": port,
            "endpoints": {
                "version": format!("{}/api/v1/version", base_url),
                "latest_version": format!("{}/api/v1/latest_version", base_url),
                "features": format!("{}/api/v1/features", base_url)
            }
        });

        ActionResult::string(&payload.to_string())
    }
}

// 导出原生 C-ABI 符号
xy_export_plugin!(HttpServer, include_str!("../manifest.json"));
```

---

## 步骤 4：编译与安装 (Build & Deploy)

1. 执行编译（`build.rs` 会自动将产物与清单输出到对应的 `target/<profile>/plugins/` 目录中）：
   ```bash
   cargo build -p xy_https --release
   ```
2. 插件输出会自动放置在 `target/release/plugins/`，供应用启动时直接扫描加载。若需分发到全局插件目录，可按需复制：
   ```powershell
   Copy-Item "target/release/plugins/xy_https.dll" "plugins/xy_https.dll" -Force
   ```

---

## 步骤 5：验证与运行 (Testing & Verification)

1. 启动 XY Runner 应用程序。
2. 观察控制台日志：
   ```
   [PluginScanner] Discovered dynamic plugin library: .../plugins/xy_https.dll
   [PluginManager] Successfully registered native action plugin 'HTTP API 服务 (HTTP Server)' (FQN: 'xy_https::HttpServer', ShortTag: YES)
   ```
3. 在工作流中运行该动作，并使用浏览器或 `curl` 测试 3 个 GET 接口：
   ```bash
   curl http://127.0.0.1:8080/api/v1/version
   curl http://127.0.0.1:8080/api/v1/latest_version
   curl http://127.0.0.1:8080/api/v1/features
   ```
