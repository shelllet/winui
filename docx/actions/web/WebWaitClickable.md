# 等待*可点击
用于检查元素是可见的并已启用，以便您可以点击它。

![WebWaitClickable](./images/15.png ':size=90%')


## 子流程
> 不支持


## 运行参数
* 对象
>   浏览器对象
* 超时
>   超时时间，默认 *60* 秒。
* 元素
>   由 *定位策略* 来确定。字符串类型 [`String`](./types/String.md)
* 定位
>   定位策略，参考：[web locators](./introduction/webdriver/locators.md)


## 输出

> 无输出，在超时时间内，如果元素可点击，则返回，否则一直等待，直到超时返回。

## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/waiit_clickable.simple
