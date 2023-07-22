# 定时任务 
该动作在指定的时间触发，并且可以执行相应的子流程。

![ScheduledTask](./images/06.png ':size=90%')

## 权限
> 无要求

## 子流程

> 支持

## 运行参数

* [time](../../types/DateTime.md): 触发时间

## 输出

> 该动作使用线程去执行子流程，因此该动作不会被阻塞。该动作返回 [Thread](../../types/Thread.md)

## 脚本调用

> 不支持，参考[Thread](./types/Thread.md)

## 示例
