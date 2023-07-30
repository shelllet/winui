# 定时任务 
该动作在指定的时间触发，并且可以执行相应的子流程。

![WorkTask](./images/06.png ':size=90%')

## 权限
> 无要求

## 子流程

> 支持

## 运行参数

* [time](../../types/DateTime.md): 触发时间（本地系统时间）。

## 输出

> 该动作使用线程去执行子流程，因此该动作不会被阻塞。返回 [Thread](../../types/Thread.md)

## 脚本调用

> 不支持，参考[Thread](./types/Thread.md)

## 资源

示例流程: https://github.com/shelllet/WinUi/blob/main/async/WorkTask.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/Gl0atHAQZzM" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1114y1z71S&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
