# 搜索文件 
搜索本地磁盘上的文件�?

![FileQuery](./images/06.png ':size=90%')

## 权限
> 无要�?
## 子流�?
> 不支�?


## 运行参数

* [path](/types/String.md)
  > 搜索路径。支�?*glob* 匹配。默认�?`*`，从当前目录查找所有文件�?参考：[Glob模式匹配](/introduction/workflow/glob.md)
* [options](/enums/GlobOptions.md)
  > 匹配行为


## 输出

> 返回匹配到的所有文件路径。[Paths](/types/Path.md)，即路径列表


## 脚本调用

```python
import * from simple;

r = FileQueryRunner('*')
r.option = GlobOptions.Caseless
r.run()
```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/filesystem/FileQuery.simple




