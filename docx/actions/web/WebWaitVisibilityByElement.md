# 等待*可见
通过已知元素，检查该元素在页面 *DOM* 上是否可见，可见性意味着元素不仅被显示而且高度和宽度都大于 `0`。

## 子流程
> 不支持


## 运行参数
* Driver：浏览器对象
* Timeout：超时时间，默认 `60` 秒。
* Element：元素，可以通过 *查找元素* ：[`WebGetElement`](./WebGetElement.md)来获取 *Web* 元素。
* Visibility：可见性：*显示* `Visible`，和 *隐藏* `Invisible`


## 输出

> 无输出，在超时时间内，如果 *Web* 元素可见，则返回，否则一直等待，直到超时返回。


## 脚本调用

```python
import simple;

```

## 示例