# 读取文件 
读取文件，可以读取二进制文件或者文本文件。

![FileRead](./images/03.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* [file](../../types/Path.md)：文件所在的路径


## 输出

> 文件内容，[*字符串*](../../types/String.md)    


## 脚本调用

```python
import simple

r = simple.FileReadRunner("C:\\Users\\shell\\Desktop\\abc.txt")
# r.file = "C:\\Users\\shell\\Desktop\\abc.txt"
r.run()

```

## 资源