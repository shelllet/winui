# 文件写入 
把文本信息写入本地文件

## 子流程
> 不支持


## 运行参数
* [value](../../types/String.md)：写入的内容
* [folder](../../types/Path.md)：文件保存的位置, 如果为空，使用当前路径，即工作流程所在的路径。
* [name](../../types/String.md)：文件名称,可为空，如果为空，自动生成 *本地时间* 格式的名称


## 输出

> 写入文件的全路径 [`Path`](../../types/Path.md)    


## 脚本调用

```python
import simple;

```

## 示例