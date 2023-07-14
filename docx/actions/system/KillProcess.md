# 终止进程 
该动作可以结束操作系统中的进程

![KillProcess](./images/12.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md)：进程路径，支持 [*Wildcard*](./intro/workflow/wildcard.md) 匹配


## 输出

> 被结束进程的路径

## 脚本

```python
import simple;

r = simple.KillProcessRunner("*\\Notepad.exe")

r.run()
```

## 资源
* Y: [WinUi++动作介绍：终止进程](https://youtu.be/hlpfERxN5yQ)
* B: [WinUi++动作介绍：终止进程](https://www.bilibili.com/video/BV1LP411y7E1/)
* 流程：https://github.com/shelllet/WinUi/blob/main/system/KillProcess.simple