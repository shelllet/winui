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

> 无输出，在超时时间内，框架可用，则返回，否则一直等待，直到超时返回。


## 示例