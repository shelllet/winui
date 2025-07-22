# 视频下载 
通过提供想要下载视频的 *URL* ，下载相应的视频或者音频文件。

![VideoDownload](./images/02.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 网址 <sup>1</sup>
> 视频或音频链接。

* Cookies 文件 <sup>2</sup>
> 选择Cookies 文件，解决比如 Youtube 登录验证问题。参考插件：[Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)。

* (2)浏览器获取Cookies <sup>3</sup>
> 如果选中，则会从对应的浏览器获取 `Cookies`。

* 浏览器 <sup>4</sup>
> 默认 `chrome` 浏览器，仅在参数 `3` 选中时使用。

* 配置目录 <sup>5</sup>
  > 可以填写配置名称或者路径。 参考[浏览器配置目录](./introduction/webdriver/browser_directory.md)。仅在参数 `3` 选中时使用。

* 选项 <sup>6</sup>
> 默认下载MP4格式文件。 例如下载 128k 声音文件：`-f bestaudio -x --audio-format mp3 --audio-quality 128k`

* 保存位置 <sup>7</sup>

> 下载的视频保存的文件夹。

## 输出
> 保存到本地的视频路径，参考：[Path](./types/Path.md)
    

## 资源

* 示例： https://github.com/shelllet/WinUi/blob/main/network/YoutubeDownload.simple






## 版本变化 

* 0.42
> 新增加运行时参数 <sup> 3</sup> 、<sup> 4</sup>、 <sup> 5</sup>。