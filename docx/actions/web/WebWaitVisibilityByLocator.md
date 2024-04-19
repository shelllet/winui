# 等待*可见（定位）
通过[定位策略](./introduction/webdriver/locators.md)，检查已知存在于页面 *DOM* 上的元素是否可见，可见性意味着元素不仅被显示而且高度和宽度都大于 `0`

![WebWaitVisibilityByElement](./images/11.png ':size=90%')

## 子流程
> 不支持


## 运行参数
* 对象
>   浏览器对象。
* 超时
>   超时时间，默认 `60` 秒。
* 元素
>   *Web*元素，根据 *By*的选择会有所不同。

* 策略
>  参考： [定位策略](./introduction/webdriver/locators.md)。

* 可见性
>  *显示* `Visible`，和 *隐藏* `Invisible`。

* 等待
>   参考：[WebLocated](./enums/WebLocated.md)。 当 *Visibility* 选择 `Invisible` 时，忽略此参数。
    * 等待 *一个* `One`元素。
    * 等待 *任意* `Any` 元素。
    * 等待 *所有* `All` 元素。


## 输出

> 返回其中一个等待的元素。在超时时间内，如果 *Web* 元素可见 或者不可见，则返回，否则一直等待，直到超时返回。


## 示例