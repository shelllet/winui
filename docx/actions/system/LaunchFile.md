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

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/LaunchFile.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/DF6nbZ5LP_g" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1rM4y1E714&page=1&autoplay=0” height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
