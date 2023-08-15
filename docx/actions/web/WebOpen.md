# 打开浏览器 
打开浏览器，支持，打开 *Chrome* 和 *Edge*浏览器。

![action](./images/01.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* Url 网址，以`http://` 或者`https://`开头。
* Browser 浏览器，可以选择 谷歌 *Chrome* 或者 微软 *Edge* 浏览器


## 输出

>    [WebDriver](./types/WebDriver.md)


## 脚本调用

```python
import simple;

```

## 示例

!> 该动作第一次运行，会检测缓存目录：`%LOCALAPPDATA%\Simple\WDM` 是否有相应的浏览器驱动，如果不存在，则会下载相应的浏览器驱动。可能需要代码才能成功下载以下浏览器驱动

## 驱动手动下载

|     Browser     | Maintained by | Download                                                                           |
| :-------------: | :-----------: | ---------------------------------------------------------------------------------- |
| Chromium/Chrome |    Google     | [Downloads](https://chromedriver.chromium.org/downloads)                           |
|      Edge       |   Microsoft   | [Downloads](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) |
