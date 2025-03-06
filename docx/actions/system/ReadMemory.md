# 读取内存 

读取指定进程地址范围内的数据。

![ReadMemory](./images/18.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数
* 程序
> 程序的路径，`Windows` 系统同名程序可以有多个，可以用程序全路径来区分，支持 [*Glob*](./introduction/workflow/glob.md) 匹配。

* 地址
> 用户空间的内存地址。

* 长度
> 读取的数据长度。

## 输出

>   内存数据，参考：[字节序列](./types/Bytes.md)。

## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/ReadMemory.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/yeXkvJIScUk" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1ruRPYRESW&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
