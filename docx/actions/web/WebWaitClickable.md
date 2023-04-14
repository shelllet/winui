# 等待*可点击
用于检查元素是可见的并已启用，以便您可以单击它。

## 子流程
> 不支持


## 运行参数
* Driver：浏览器对象
* Timeout：超时时间，默认 *60* 秒。
* Element：元素值, 由 *By* 值确定。字符串类型 [`String`](../../types/String.md)
* By：定位策略，参考：[web locators](../../intro/webdriver/locators.md)


## 输出

> 无输出，在超时时间内，如果元素可单击，则返回，否则一直等待，直到超时返回。


## 脚本调用

```python
import simple;

```

## 示例