# 视频下载 
通过提供想要下载视频的 *URL* ，下载相应的视频或者音频文件。

![VideoDownload](./images/02.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 网址
> 视频或音频链接。

* Cookies 文件
> 选择Cookies 文件，解决比如 Youtube 登录验证问题。参考插件：[Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)。

* 选项
> 默认下载MP4格式文件。 例如下载 128k 声音文件：`-f bestaudio -x --audio-format mp3 --audio-quality 128k`

* 目录

> 下载的视频保存的文件夹。

## 输出
> 保存到本地的视频路径，参考：[Path](./types/Path.md)
    

## 资源

* 示例： https://github.com/shelllet/WinUi/blob/main/network/YoutubeDownload.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/3GBJXTQsUKI" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV12e411a7ZM&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


## 版本变化 

* 0.42
> 新增加 *Cookies 文件* 参数。