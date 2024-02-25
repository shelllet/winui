# 文件目录 
获取文件或者文件夹列表。

![AdbLs](./images/04.png ':size=90%')

## 子流程

> 支持，模拟器的设备号会传入子动作当中。

## 运行参数

* 设备
> 设备号，如果当前连接的只有一个设备，该值可为空。

* 目录
> 根目录， 可为空，表示 *sd* 卡的根目录。

## 输出 

>  目录列表，参考： [`Paths`](./types/Path.md)。

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/android/ls.simple

