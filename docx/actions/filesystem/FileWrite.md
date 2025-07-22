# 文件写入 
把文本信息写入本地文件,也就是保存到电脑磁盘上面。

![FileWrite](./images/02.png ':size=90%')

## 权限
> 无要求
## 子流程
> 不支持


## 运行参数
* [文本](./types/String.md)：写入的内容
* [目录](./types/Path.md)：文件保存的位置, 如果为空，使用当前路径，即工作流程所在的路径。
* [名称](./types/String.md)：文件名称,可为空，默认值：**.txt*, 生成以如： *2023-02-28_756046.txt* 为名称的文件，其中 *.txt* 为 扩展名，可以更换其它有效文件名。


## 输出

> 写入文件的全路径 [`Path`](./types/Path.md)    


## 脚本调用

> 无导出，参考[File](./types/File.md)
```python
import simple;

```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/filesystem/FileWrite.simple



