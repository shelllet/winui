# 检测进程 
该动作可以检查系统当中的应用程序是否运行。

![ExistProcess](./images/11.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md)：进程路径，支持 [*Wildcard*](./introduction/workflow/wildcard.md) 匹配


## 输出

> 是否存在，[Boolean](./types/Boolean.md) 类型

## 脚本

```python
import simple;

r = simple.ExistProcessRunner("*\\Notepad.exe")

r.run()

```

## 资源
* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/ExistProcess.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/m4opS4PEvx8" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1LP411y7E1&page=1&autoplay=0” height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>