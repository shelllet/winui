# 状态切换 
这个动作可用于切换异步动作的状态,比如切换 *线程* 和 *定时器* 停止/运行。或者设置*事件* 的状态。

![WorkReset](./images/05.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数
* 异步对象，比如 [*WorkThread*](../../actions/async/WorkThread.md) 动作, 或者 [*WhenEvent*](../../actions/type/TypeEvent.md) 事件动作
* 状态，参考[WorkState](../../enums/WorkState.md) 状态， 对于 [*WhenEvent*](../../actions/type/TypeEvent.md),  `Auto` == `On`。对于 [*WorkTimer*](../../actions/async/WorkTimer.md) / [*WorkThread*](../../actions/async/WorkThread.md), `Auto` 可以 在`On` 和 `Off` 之间切换。

## 输出

>   无


## 脚本调用

> 不支持，参考[Thread](./types/Thread.md) 或者 [WinEvent](./types/WinEvent.md)

## 资源

示例流程: https://github.com/shelllet/WinUi/blob/main/async/WorkReset.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/lAsyhNbaK50" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Yc411F7Uq&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
