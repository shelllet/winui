# 等待*标题
检查浏览器窗口标题是否包含区分大小写的字符串。

![WebWaitTitle](./images/12.png ':size=90%')


## 子流程
> 不支持


## 运行参数
* 对象
>   浏览器对象
* 超时
>   超时时间，默认 `60` 秒。
* 标题
>   浏览器窗口标题。
* 方式
>   标题匹配方式。   
    * 完全匹配 `EXACT_MATCH`，
    * 部分匹配 `PARTIAL_MATCH`


## 输出

> 无输出，在超时时间内，标题完全匹配或者部分匹配，则返回，否则一直等待，直到超时返回。


## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/wait_title.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/Q7OpUAKkdoo" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1dT421D7nE&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>