# 搜索文件 
搜索文件
## 权限
> 无要求
## 子流程
> 不支持


## 运行参数

* [path](../../types/String.md)： 路径。支持 *glob* 匹配。默认值 `*`，从当前目录查找所有文件。 参考：[Glob模式匹配](../../intro/workflow/glob.md)
* [options](../../enums/GlobOptions.md)：匹配行为


## 输出

> 返回匹配到的所有文件路径。[Paths](../../types/Path.md)    


## 脚本调用

```python
import * from simple;

r = FileQueryRunner('*')
r.option = GlobOptions.Caseless
r.run()
```

## 资源