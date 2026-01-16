# 打开关联文件 
该动作可以打开操作系统中的关联文件，即非可执行文件，比�?*.txt*, *.docx* *.pptx* 等类型的文件�?

![LaunchFile](./images/02.png ':size=90%')


## 权限
> 无要�?

## 子流�?

> 不支�?


## 运行参数

* [file](/types/Path.md)�?要打开的文�?

## 输出

> 打开的文件，和参�?`file` 相同�?

## 脚本

```python
import simple

r = simple.LaunchFileRunner("C:\\Users\\shell\\Desktop\\d2.txt")
# r.file = "C:\\Users\\shell\\Desktop\\d2.txt"
r.run()

```

## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/LaunchFile.simple





