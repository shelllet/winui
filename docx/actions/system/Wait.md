# 等待 

等待，又可以称为休眠。它可以让动作停止一段时间再继续运行。

![Wait](./images/03.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [duration](../../types/Range.md)：根据范围生成一个等待时间，单位：秒。

## 输出

>    无

## 脚本调用

```python
import simple

w = simple.WaitRunner(3) # sleep 3s
# w.duration = 3
w.run()
```

## 资源

* 视频介绍：https://youtu.be/n0JOUQOWMuo
* 视频介绍：https://www.bilibili.com/video/BV1mz4y1b7D1/?share_source=copy_web
* 流程：https://github.com/shelllet/WinUi/blob/main/system/Wait.simple