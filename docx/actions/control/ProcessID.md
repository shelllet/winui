# 进程标志 
流程可以并发执行，并发执行的时候，会开启多个进程，每个正在运行的进程都有一个唯一的数字标志，该标志从`0` 开始递增。

![pocessid](./images/2022-11-08_190242.png ':size=90%')


## 子流程
> 支持


## 运行参数



* Extact Value： 标志匹配, 如果标志值相等，则会执行子流程

## 输出

    当前进程标志, [`Number`](../../types/Number.md) 类型


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/control/processid.simple](https://github.com/shelllet/WinUi/blob/main/control/processid.simple)
