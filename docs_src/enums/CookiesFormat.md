# CookiesFormat

* Default
> 默认数据类型

* Netscape

> 指的是一种文本文件格式，用于存储网络浏览器中�?HTTP Cookies。这种格式最初由 Netscape Navigator 浏览器定义和使用，尽管现在浏览器内部通常使用更复杂的数据库或二进制格式来管理 Cookies，但 Netscape 格式因其简单性，在某些场景下（例如自动化测试、数据导�?导入或调试）仍然被用作一种通用的交换格式�?


"Cookies Netscape 格式" (Cookies Netscape Format) 指的是一�?*文本文件格式**，用于存储网络浏览器中的 HTTP Cookies。这种格式最初由 Netscape Navigator 浏览器定义和使用，尽管现在浏览器内部通常使用更复杂的数据库或二进制格式来管理 Cookies，但 Netscape 格式因其简单性，在某些场景下（例�?*自动化测试、数据导�?导入或调�?*）仍然被用作一种通用的交换格式�?

-----

## Netscape Cookies 格式的结�?

在这种格式中，每�?Cookie 都占据文件中�?*一�?*，并且行的不同字段之间使�?**制表�?(tab)** 分隔�?

典型的字段顺序和含义如下�?

1.  **�?(Domain)**: Cookie 有效的域名�?
      * 如果以点开头（例如 `.example.com`），表示�?Cookie 对主域及其所有子域都有效�?
      * 如果不是以点开头（例如 `www.example.com`），表示�?Cookie 只对该特定主机名有效�?
2.  **标志 (Flag)**: 一个布尔�?(`TRUE` �?`FALSE`)�?
      * `TRUE` 通常表示�?Cookie 是域级别的（即对主域和子域都有效）�?
      * `FALSE` 通常表示�?Cookie 是主机级别的（只对特定主机有效）�?
      * 这个字段与域字段的含义有重叠，但在旧�?Netscape 规范中是独立的�?
3.  **路径 (Path)**: Cookie 有效�?URL 路径（例�?`/` 表示对整个网站有效，`/blog` 表示只对 `/blog` 路径及其子路径有效）�?
4.  **安全 (Secure)**: 一个布尔�?(`TRUE` �?`FALSE`)�?
      * `TRUE` 表示�?Cookie 只能通过安全�?HTTPS 连接发送�?
      * `FALSE` 表示可以通过 HTTP �?HTTPS 连接发送�?
5.  **过期时间 (Expiration)**: Cookie 的过期时间，表示�?Unix 时间戳（�?1970 �?1 �?1 �?00:00:00 UTC 以来的秒数）。会�?Cookie（浏览器关闭即失效）可能没有此字段或�?0�?
6.  **名称 (Name)**: Cookie 的名称（例如 `session_id`、`user_preference`）�?
7.  **�?(Value)**: Cookie 存储的数据值�?

-----

### Netscape 格式示例

以下是一�?Netscape 格式�?Cookie 文件内容示例�?

```
.example.com	TRUE	/	FALSE	1735689600	session_id	abcde12345
www.google.com	FALSE	/	TRUE	1735689600	PREF	ID=a1b2c3d4e5f6
.github.com	TRUE	/api/	FALSE	1704067200	_gh_sess	eyJzZXNzaW9uX2lkIjoiMTIzNDUifQ==
```

-----

### 为什么它仍然相关�?

尽管现代浏览器已经不再直接使用这种文本文件来存储所�?Cookies，但在以下场景中�?Netscape 格式"�?Cookies 仍然会遇到或被使用：

  * **Selenium WebDriver 或其他自动化工具**: 在进�?Web 自动化测试时，你可能需要从文件中加�?Cookies 以模拟登录状态，或者将当前会话�?Cookies 导出保存。许多工具和脚本会支持或生成这种格式�?
  * **Cookie 编辑器或插件**: 某些浏览器扩展或工具提供了导�?导出 Cookies 的功能，其中就可能包�?Netscape 格式选项�?
  * **调试和分�?*: 对于开发者来说，能够以简单、可读的文本格式查看 Cookie 的详细信息有助于调试网络请求和会话管理问题�?
  * **遗留系统或工�?*: 某些较旧的系统或特定的网络爬虫可能仍然依赖这种格式来处理 Cookies�?

理解这种格式可以帮助你更好地与这些工具和场景交互，尤其是在需要手动管理或共享 Cookies 信息时�
