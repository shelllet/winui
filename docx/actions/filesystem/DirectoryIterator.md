# 遍历文件夹 
遍历文件夹
## 权限
> 无要求
## 子流程
> 支持， 每个被被遍历到的文件或文件夹传入子流程


## 运行参数

* [path](../../types/Path.md)：文件夹
* [recursive](../../types/Boolean.md)：是否递归遍历, 默认 `False`。
* [async](../../types/Boolean.md), 是否异步处理子流程。

## 输出

> 返回遍历到的所有文件路径。[Paths](../../types/Path.md)     


## 脚本调用

```python
import * from simple;

def callback(path):
    simple.info(path)

r = DirectoryIteratorRunner('C:\Users\\shell\\Download')

r.run(callback)
```

## 资源