# 启动应用程序

启动应用程序,并等待程序结束。

![StartProcess](./images/04.png ':size=90%')


## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md)： 启动的进程路径
* [commandLine](./types/String.md)： 传递的命令行参数
* [noWindow](./types/Boolean.md)： 无窗口运行
* [workingDirectory](./types/Path.md)：工作目录
* [env](./types/String.md)：环境变量

## 输出

>    该动作会等待应用程序结束，返回应用程序所输出的内容, [`String`](./types/String.md) 类型。


## 脚本调用

```python
import simple

p = simple.StartProcessRunner("C:\\Program Files (x86)\\Steam\\Steam.exe")
# p.app = "C:\\Program Files (x86)\\Steam\\Steam.exe"
p.run()
```

!> 停止流程运行，目前版本无法自动结束启动的进程，需要等待启动的进程自行结束,或者通过*任务栏管理器*强制结束

## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/StartProcess.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/GuonLCJ6AR4" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV15s4y1T7ry&page=1&autoplay=0” height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
