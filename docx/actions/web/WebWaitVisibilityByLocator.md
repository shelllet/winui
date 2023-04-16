# 等待*可见（定位器）
通过[定位策略](../../intro/webdriver/locators.md)，检查已知存在于页面 *DOM* 上的元素是否可见，可见性意味着元素不仅被显示而且高度和宽度都大于 `0`

## 子流程
> 不支持


## 运行参数
* Driver：浏览器对象
* Timeout：超时时间，默认 `60` 秒。
* Element：*Web*元素，根据 *By*的选择会有所不同。
* By: [定位策略](../../intro/webdriver/locators.md)
* Visibility：可见性：*显示* `Visible`，和 *隐藏* `Invisible`
* Mode：模式：*一个* `One`，*Any* : `任意` 和 *所有* `All`， 当 *Visibility* 选择 `Invisible` 时，忽略此参数


## 输出

> 无输出，在超时时间内，如果 *Web* 元素可见 或者不可见，则返回，否则一直等待，直到超时返回。


## 脚本调用

```python
import simple;

```

## 示例