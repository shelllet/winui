# 终止进程 
该动作可以结束操作系统中的进程

![KillProcess](./images/12.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md)：进程路径，支持 [*Wildcard*](./introduction/workflow/wildcard.md) 匹配


## 输出

> 被结束进程的路径

## 脚本

```python
import simple;

r = simple.KillProcessRunner("*\\Notepad.exe")

r.run()
```

## 资源
* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/KillProcess.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/hlpfERxN5yQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV118411U7yu&page=1&autoplay=0” height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>