# 打开浏览器

打开浏览器，支持 _Chrome_ 和 *Edge* 浏览器。由于使用浏览器用户数据的 *Default* 配置，执行该动作之前需要退出已经打开的浏览器。

* *Edge* 浏览器将无法以管理员模式启动。这是微软出于安全原因而做出的明确决定。

![WebOpen](./images/01.png ":size=90%")

## 子流程

> 不支持

## 运行参数

- 网址
  > 以`http://` 或者`https://`开头。若是本地文件，以`file:///` 开始， 后面跟上文件路径。
- 浏览器
  > 可以选择 谷歌 _Chrome_ 或者 微软 _Edge_ 浏览器。

- 用户目录

  > 参考[浏览器配置目录](./introduction/webdriver/browser_directory.md)。 由于浏览器的限制，如果该目录和浏览器的默认目录一致，需要在执行流程前退出当前已经打开的浏览器。
- 配置名称
  > 参考[浏览器配置目录](./introduction/webdriver/browser_directory.md)，配置目录名称。

## 输出
> 参考：[WebDriver](./types/WebDriver.md)

## 示例
* 流程：https://github.com/shelllet/WinUi/blob/main/web/openurl.simple



## 驱动

该动作如果首次运行，会检测驱动缓存目录：`%LOCALAPPDATA%\Simple\selenium` 是否有上表列出的相对应的浏览器驱动，如果不存在，则会下载相应的浏览器驱动。因此需要网络连接或者手动下载驱动放置在该目录。若需要手动下载，请参考：[浏览器 WebDriver 驱动](./introduction/webdriver/download.md)。



!> 由于浏览器的安全策略限制，使用管理员身份执行该动作，可能导致失败！


## 版本变化
- 0.46
> 新增加 `用户目录` 和 `配置名称` 运行时参数。