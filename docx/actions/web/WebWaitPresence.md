# 等待*元素呈现
检查元素是否存在于页面的 *DOM* 中，这并不一定意味着该元素是可见的。

![WebWaitPresence](./images/14.png ':size=90%')


## 子流程
> 不支持


## 运行参数
* 对象
>   浏览器对象。
* 超时
>   超时时间，默认 *60* 秒。
* 元素
> 元素值，由 *By* 值确定。
* 定位策略
>   参考：[web locators](./introduction/webdriver/locators.md)。

* 等待
> 等待模式，唯一/所有，比如 *By* 根据 *ID* 定位， 这里的 *Mode* 就是 *One* ；比如 *By* 根据 *CLASS_NAME* 定位元素，就可以使用 *ALl*。参考：[WebLocated](./enums/WebLocated.md)。 
    * 等待 *一个* `One`元素。
    * 等待 *所有* `All` 元素。

## 输出

> 无，在超时时间内，元素呈现，则返回，否则一直等待，直到超时返回。


## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/presence.simple
