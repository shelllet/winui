# 打开浏览器

打开浏览器，支持 _Chrome_ 和 *Edge* 浏览器。由于使用浏览器用户数据的 *Default* 配置，执行该动作之前需要退出已经打开的浏览器。

* 建议使用非管理方式运行该动作。

![WebOpen](./images/01.png ":size=90%")

## 子流程

> 不支持

## 运行参数

- 网址
  > 以`http://` 或者`https://`开头。若是本地文件，以`file:///` 开始， 后面跟上文件路径。
- 浏览器
  > 可以选择 谷歌 _Chrome_ 或者 微软 _Edge_ 浏览器。

## 输出
> 参考：[WebDriver](./types/WebDriver.md)

## 示例
* 流程：https://github.com/shelllet/WinUi/blob/main/web/openurl.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/48Rh_ObzGK0" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1aZ421J7FN&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 驱动手动下载

| <div style="width:200px">Browser</div> | <div style="width:200px">Maintained by</div> | <div style="width:200px">Download by</div>                                         |
| :------------------------------------: | :------------------------------------------: | ---------------------------------------------------------------------------------- |
|            Chromium/Chrome             |                    Google                    | [Downloads](https://chromedriver.chromium.org/downloads)                           |
|                  Edge                  |                  Microsoft                   | [Downloads](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) |

!> 该动作如果首次运行，会检测驱动缓存目录：`%LOCALAPPDATA%\Simple\selenium` 是否有上表列出的相对应的浏览器驱动，如果不存在，则会下载相应的浏览器驱动。因此需要网络连接或者手动下载驱动放置在该目录。


!> 由于浏览器的安全策略限制，除 *Firefox* 外其它浏览器无法使用管理员身份进行自动化！