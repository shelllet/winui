# 转发 
把安卓系统的服务端口映射到本地端口，通过此种方式可以调用模拟器中的接口或者服务。

![AdbForward](./images/03.png ':size=90%')

## 子流程

> 不支持

## 运行参数


* 设备
> 设备号，如果当前连接的只有一个设备，该值可为空。

* 本地端口
>

* 远程端口
> 模拟器中的服务端口。

## 输出
> 设备日志，字符串[`String`](./types/String.md)。

## 其它

示例：https://github.com/shelllet/WinUi/blob/main/android/forward.simple





!> 该动作超出作用范围后会移除转发的端口。

!> WebServer (nanohttpd): https://apkpure.com/webserver-nanohttpd/com.akhiljalagam.androidwebserver/download