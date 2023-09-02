# 文件复制
把文件从一个位置复制到另一个位置。

![CopyFile](./images/08.png ':size=90%')


## 权限
> 无要求
## 子流程
> 不支持


## 运行参数
* [from](./types/Path.md)
  > 源文件, 要复制的文件。
* [to](./types/Path.md)
  > 目标位置（文件夹）,如果为空，使用流程所在的位置
* [filename](./types/String.md)
  > 文件名,包含扩展名，可用于文件重命名。如果为空，和源文件的文件名称一致。



## 输出

> 目标位置的文件全路径。[Path](./types/Path.md), 文件路径。 


## 脚本调用

```python
import simple;
r = simple.CopyFileRunner()
r.from = 'C:\Users\\shell\\Desktop\\abc.txt'
r.to = 'C:\Users\\shell\\Download'
r.run()
```


## 资源
* 流程：https://github.com/shelllet/WinUi/blob/main/filesystem/CopyFile.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/04VDa9k2ako" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV16F411Z7oU&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 不可复制文件夹