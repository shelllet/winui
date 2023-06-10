# 启动应用程序

启动应用程序,并等待程序结束。

![StartProcess](./images/04.png ':size=90%')


## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](../../types/Path.md)： 启动的进程路径
* [commandLine](../../types/String.md)： 传递的命令行参数
* [noWindow](../../types/Boolean.md)： 无窗口运行
* [workingDirectory](../../types/Path.md)：工作目录
* [env](../../types/String.md)：环境变量

## 输出

>    启动应用程序输出的内容, [`String`](../../types/String.md) 类型。


## 脚本调用

```python
import simple

p = simple.StartProcessRunner("C:\\Program Files (x86)\\Steam\\Steam.exe")
# p.app = "C:\\Program Files (x86)\\Steam\\Steam.exe"
p.run()
```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple
* YouTube视频：https://youtu.be/GuonLCJ6AR4
* B站视频：https://www.bilibili.com/video/BV15s4y1T7ry/

!> 停止流程运行，目前版本无法自动结束启动的进程，需要等待启动的进程自行结束,或者通过*任务栏管理器*强制结束
