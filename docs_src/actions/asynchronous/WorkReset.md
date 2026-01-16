# 状态切�?
这个动作可用于切换异步动作的状�?比如切换 *线程* �?*定时�? 停止/运行。或者设�?事件* 的状态�?

![WorkReset](./images/05.png ':size=90%')

## 权限
> 无要�?

## 子流�?

> 不支�?

## 运行参数
* 异步对象，比�?[*WorkThread*](/actions/async/WorkThread.md) 动作, 或�?[*WhenEvent*](/actions/type/TypeEvent.md) 事件动作
* 状态，参考[WorkState](/enums/WorkState.md) 状态， 对于 [*WhenEvent*](/actions/type/TypeEvent.md),  `Auto` == `On`。对�?[*WorkTimer*](/actions/async/WorkTimer.md) / [*WorkThread*](/actions/async/WorkThread.md), `Auto` 可以 在`On` �?`Off` 之间切换�?

## 输出

>   �?


## 脚本调用

> 不支持，参考[Thread](/types/Thread.md) 或�?[WinEvent](/types/WinEvent.md)

## 资源

示例流程: https://github.com/shelllet/WinUi/blob/main/async/WorkReset.simple






