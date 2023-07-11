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

## 示例