# 当...成立 
该动作会开启一个异步线程不停的检测事件状态， ，直到状态变为：`Signaled` ,即为有信号时，则会去执行子流程。

![When](./images/2022-12-26_163232.png ':size=90%')

## 权限
> 无要求
## 子流程
> 支持


## 运行参数


* [value](../../types/WinEvent.md)： 事件, 用来判断有无信号。
* [interval](../../types/TimeSpan.md): 每次检测需要等待的时间间隔。

## 输出

> Timer    


## 脚本调用

```python
import simple;

```

## 示例

https://github.com/shelllet/WinUi/blob/main/control/When.simple
