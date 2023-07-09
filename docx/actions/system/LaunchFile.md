# 打开关联文件 
该动作可以打开操作系统中的关联文件，即非可执行文件，比如 *.txt*, *.docx* *.pptx* 等类型的文件。

![LaunchFile](./images/02.png ':size=90%')


## 权限
> 无要求

## 子流程

> 不支持


## 运行参数

* [file](./types/Path.md)： 要打开的文件

## 输出

> 打开的文件，和参数 `file` 相同。

## 脚本

```python
import simple

r = simple.LaunchFileRunner("C:\\Users\\shell\\Desktop\\d2.txt")
# r.file = "C:\\Users\\shell\\Desktop\\d2.txt"
r.run()

```

## 资源

* Y：[【 winui++ 动作介绍： 打开关联文件】](https://youtu.be/DF6nbZ5LP_g)
* B：[【 winui++ 动作介绍： 打开关联文件】](https://www.bilibili.com/video/BV1rM4y1E714/?spm_id_from=333.788)
* 流程：https://github.com/shelllet/WinUi/blob/main/system/LaunchFile.simple