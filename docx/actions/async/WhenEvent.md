# 等待事件
该动作会开启一个异步线程不停的检测事件状态，直到状态变为：`On` ,即为有信号时，才会去执行子流程，否则会一起等待。

![WhenEvent](./images/07.png ':size=90%')

## 权限
> 无要求
## 子流程
> 支持


## 运行参数


* [manualReset](../../types/Boolean.md): 是否手动重置状态，默认为 `False`, 即自动重置事件状态。如果设置为 `True`, 可能需要两次调用 *WorkReset* 动作才恢复成初始状态。
* [initialState](../../enums/PowerState.md) 初始化状态， 如果是 `Auto`, 则 默认为 `Off`，即无信号状态。


## 输出

> [Thread](../../types/Thread.md)    


## 脚本调用

```python
import simple;

```

## 示例

https://github.com/shelllet/WinUi/blob/main/control/WhenEvent.simple
