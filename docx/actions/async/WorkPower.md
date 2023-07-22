# 状态切换 
这个动作可用于切换异步动作的状态,比如切换 *线程* 和 *定时器* 停止/运行。或者设置*事件* 的状态，如果 `WinEvent` 类型动作的 `manualReset` 设置为`False`,即非手动，则不需要添加该动作来触发事件，此种情况调用该动作会则会抛出异常。

![WorkPower](./images/05.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数
* 异步对象，比如 [WorkThread](../../actions/async/WorkThread.md) （线程）动作, 或者 [TypeEvent](../../actions/type/TypeEvent.md) 事件动作
* [state](../../enums/PowerState.md) 状态

## 输出

>   无


## 脚本调用

> 不支持，参考[Thread](./types/Thread.md) 或者 [WinEvent](./types/WinEvent.md)

## 示例

https://github.com/shelllet/WinUi/blob/main/async/WorkPower.simple

