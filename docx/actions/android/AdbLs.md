# 文件列表 
获取模拟器或真机中的文件或者文件夹列表，类似文件或者文件夹遍历。

![AdbLs](./images/04.png ':size=90%')

## 子流程

> 支持，被遍历的文件或者文件夹会传入子流程当中。

## 运行参数

* 设备
> 设备号，如果当前连接的只有一个设备，该值可为空。

* 目录
> 根目录， 可为空，通常 `/mnt/sdcard` 或者 `/storage/emulated/0` 表示根目录。

* 异步迭代
> 遍历到的每个路径都会开启一个线程去执行子流程。

## 输出 

>  文件或者文件夹列表，参考： [`Paths`](./types/Path.md)。

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/android/ls.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/9cJf2MD-BVQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1ogadexEAF&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>