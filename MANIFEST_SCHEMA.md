# XY Runner 插件 Manifest 元数据规范 (Manifest Schema)

每个 XY Runner 动作插件必须包含一份元数据清单（`manifest.json` 或由 Wasm 导出的 `get_manifest` 提供），用于指导宿主系统完成动作注册、UI 面板自动渲染与 AI 语义推导。

---

## 1. 结构与完整字段定义 (JSON Schema)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "plugin_id": "xy_https",
  "tag": "HttpServer",
  "display_name": "HTTP API 服务 (HTTP Server)",
  "group": "网络 (Network)",
  "description": "启动轻量级 HTTP 服务，监听指定端口并响应 API 路由请求",
  "keywords": ["http", "https", "server", "api", "服务", "接口", "web"],
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

## 2. 字段详细说明 (Field Specification)

### 2.1 根级属性
| 字段名 | 类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `plugin_id` | `string` | **必填** | 插件唯一包名命名空间（如 `xy_https`、`com.author.crypto`），小写下划线或点号。 |
| `tag` | `string` | **必填** | 动作短标识名（PascalCase，如 `HttpServer`、`CalculateHash`）。 |
| `display_name` | `string` | **必填** | UI 显示名称（支持中英双语，如 `HTTP API 服务 (HTTP Server)`）。 |
| `group` | `string` | 选填 | 动作归属分类（默认 `"插件 (Plugin)"`，如 `"网络 (Network)"`、`"系统 (System)"`）。 |
| `description` | `string` | **必填** | 动作功能详细说明，供用户提示与大模型意图推导。 |
| `keywords` | `list<string>` | 选填 | 检索关键词，用于向量检索模型建立 Embedding 索引。 |
| `fields` | `list<field_meta>` | **必填** | 动作所需参数字段列表。 |
| `output_type` | `string` | 选填 | 输出数据类型（`"string"`, `"number"`, `"real"`, `"bytes"`, `"tuple"`，默认 `"string"`）。 |
| `version` | `string` | 选填 | 语义化版本号（SemVer，如 `"1.0.0"`）。 |

---

### 2.2 参数字段定义 (`field_meta`)
| 属性名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `name` | `string` | 字段变量名（SnakeCase，如 `port`, `route_path`）。 |
| `display_name` | `string` | 属性面板标签显示的中文名称。 |
| `intrinsic_type` | `string` | 原始基础类型：`"string"`, `"number"`, `"real"`, `"boolean"`, `"tuple"`, `"range"`。 |
| `default_type` | `string` | 默认类型模式：`"string"`, `"number"`, `"real"`, `"expr"` (表达式), `"ref"` (引用)。 |
| `default_value` | `string` | 默认初始值字符串。 |
| `presets` | `list<string>` | 快捷预设选项下拉列表（用户可在输入框右侧快速选择）。 |
| `description` | `string` | 参数用途说明（大模型槽位抽取根据此描述提取值）。 |

---

## 3. 全限定名 (FQN) 与 Tag 重名消歧规范

1. **全限定名 (FQN)**：每个动作在系统内部具有全局唯一的 FQN，格式为 `<plugin_id>::<tag>`（如 `xy_https::HttpServer`）。
2. **系统保留字保护**：内置动作 Tag（`Wait`, `Exit`, `Jump`, `WinRun`, `FileRead` 等）受系统保护，第三方插件同名时将强制使用 FQN，并在日志中警告。
3. **插件间重名**：若两个不同插件声明了相同的 `tag`，首个注册者获得短别名，后续插件通过 FQN 调用并在 UI 显式标注包名来源。
