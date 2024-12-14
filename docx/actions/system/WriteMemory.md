# 写内存

在进程指定的内存地址处写入数据。

![WriteMemory](./images/17.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* 进程
> 进程的路径，`Windows` 系统同名进程可以有多个，可以用进程全路径区分。


* 地址
> 用户空间的内存地址。

* 数据
> 写入的数据。如果写入字节序列，请使用：[Bytes](./types/Bytes.md)，创建字节序列。

## 输出

>    无


## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/Wait.simple
