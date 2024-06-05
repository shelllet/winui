# 等待*框架
检查给定的 *iframe* 框架是否可以切换到。如果相应的 *iframe* 可用，会切换置相应的 *iframe*。

![WebWaitFrameAvailable](./images/16.png ':size=90%')


## 子流程
> 不支持


## 运行参数
* 对象
>   浏览器对象。
* 超时
>   超时时间，默认 *60* 秒。
* 元素
>   相应的 *iframe*, 由 *定位* 值确定。字符串类型 [`String`](./types/String.md)
* 定位
>   定位策略，参考：[web locators](./introduction/webdriver/locators.md)


## 输出

> 返回第一个定位到的框架元素，在超时时间内，框架可用，则返回，否则一直等待，直到超时返回。


## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/waiit_iframe.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/Ed8y7s2qSK0" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1wb421q7bf&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>