# 等待事件
该动作会开启一个异步线程不停的检测事件状态，直到状态变为：`On` ,即为有信号时，才会去执行子流程，否则会一起等待。

![WhenEvent](./images/07.png ':size=90%')

## 权限
> 无要求
## 子流程
> 支持


## 运行参数


* [state](../../enums/PowerState.md) 初始状态， 如果是 `Auto`, 则 默认为 `Off`，即无信号状态。此时，这个动作不会去执行子流程，会一直等待。如果设置为 `On` 的。这个动作一开始就会去执行子流程，而不会去等待。


## 输出

> [WinEvent](../../types/WinEvent.md)    


## 脚本调用

```python
import simple;

```

## 示例

https://github.com/shelllet/WinUi/blob/main/control/WhenEvent.simple
