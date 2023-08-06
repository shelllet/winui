# 定时器 
可以按照一定的时间间隔，重复执行子流程。

![WorkTimer](./images/01.png ':size=90%')

## 权限
> 无要求

## 子流程

>    支持, 执行次数会传入子流程

## 运行参数


* [duration](./types/TimeSpan.md)： 间隔时间，单位秒。
* [immediate](./types/Boolean.md)： 是否立即触发，如果没有选择此项，定时器在第一次启动的时候,需要等待所设置的间隔时间，才会触发。


## 输出

>    [`Timer`](./types/Timer.md)


## 脚本调用

> 不支持，参考 [`Timer`](./types/Timer.md)


## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/async/WorkTimer.simple



<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/nRe-mmghxSU" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1QN411Y7na&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>