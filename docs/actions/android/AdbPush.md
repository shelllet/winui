# 推送文件 
将本地文件/目录复制到 *Android* 设备。

![AdbPush](./images/14.png ':size=90%')

## 子流程
> 不支持


## 运行参数
* 设备
> 设备号，如果当前连接的只有一个设备，该值可为空。

* 源
> 本地文件或目录

* 目标
> *Android* 设备中目录。通常 `/mnt/sdcard` 或者 `/storage/emulated/0` 表示根目录。 比如 *下载目录* ：`/mnt/sdcard/Download` 或 `/storage/emulated/0/Download`。


## 输出

> 设备日志，字符串[`String`](./types/String.md)。

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/android/push.simple




