# 等待呈现
检查元素是否存在于页面的 *DOM* 中，这并不一定意味着该元素是可见的。

## 子流程
> 不支持


## 运行参数
* [Driver] 浏览器对象
* [Timeout] 超时时间，默认 *60* 秒。
* [Element] 元素值, 由 *By* 值确定。
* [By] 定位策略，参考：[web locators](../../intro/webdriver/locators.md)
* [Mode] 模型，唯一/所有，比如 *By* 根据 *ID* 定位， 这里的 *Mode* 就是 *One* ；比如 *By* 根据 *CLASS_NAME* 定位元素，就可以使用 *ALl*。


## 输出

> 无，在超时时间内，元素呈现，则返回，否则一直等待，直到超时返回。


## 脚本调用

```python
import simple;

```

## 示例