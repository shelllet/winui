# 定时器 
定时器可以按照一定的时间间隔，重复执行一些动作。

![start process](./images/01.png ':size=90%')


## 子流程

>    支持

## 运行参数


* Duration： 间隔时间，单位秒。
* Repeating： 是否重复执行
* Immediate： 是否立即执行

如果选择了重复执行没有选择立即执行,定时器在第一次启动的时候,需要等待所设置的间隔时间。


## 输出

>    无


## 脚本调用

```python
import simple

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/system/timer.simple](https://github.com/shelllet/WinUi/blob/main/system/timer.simple)
