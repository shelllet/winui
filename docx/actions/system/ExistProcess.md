# 检测进程 
该动作可以检查系统当中的应用程序是否运行。

![ExistProcess](./images/11.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md)：进程路径，支持 [*Wildcard*](./intro/workflow/wildcard.md) 匹配


## 输出

> 是否存在，[Boolean](./types/Boolean.md) 类型

## 脚本

```python
import simple;

r = simple.ExistProcessRunner("*\\Notepad.exe")

r.run()

```

## 资源
* Y: [WinUi++动作介绍：检测进程是否运行](https://youtu.be/m4opS4PEvx8)
* B: [WinUi++动作介绍：检测进程是否运行](https://www.bilibili.com/video/BV1LP411y7E1/)
* [clipchamp](https://clipchamp.com/watch/gs40Tr7G6Ot)
* 流程：https://github.com/shelllet/WinUi/blob/main/system/ExistProcess.simple