# 设备 
查询系统中已经连接的安卓模拟器或者真机。支持多模拟器同时操作。

![AdbDevices](./images/01.png ':size=90%')

## 子流程

> 支持，模拟器的设备号（通常是 *ip* + 端口号）会传入子动作当中。

## 运行参数

* 异步
> 可以并行执行与设备关联的子动作。

## 输出 

>  设备号列表 [`Strings`](./types/String.md)。

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/android/AdbDevices.simple

