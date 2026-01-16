# 按行读取 
读取文本文件，并根据换行符 `\r\n`，拆分成多行字符串，也就是字符串列表。

![ReadLines](./images/03.png ':size=90%')

## 权限
> 无要求

## 子流程
> 支持，每行字符串会传入子流程


## 运行参数

* [file](./types/Path.md)
>  文件路径
* 异步处理子流程
>   默认不开线程处理子流程，脚本中不支持此参数。

## 输出

> [Strings](./types/String.md)，字符串列表。   


## 脚本调用

```python
import * from simple;

def cbk(line):
    simple.info(line)

r = ReadLinesRunner("C:\\Users\\shell\\Desktop\\abc.txt")
# r.file = "C:\\Users\\shell\\Desktop\\abc.txt"
r.run(cbk)


```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/filesystem/ReadLines.simple



