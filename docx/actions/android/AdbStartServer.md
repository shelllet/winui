# 启动服务 
启动 *adb* 服务。

通常用在模拟器未列出的情况：

* 示例 1：在以下命令序列中，该adb devices命令启动adb服务器，但不显示设备列表。

```
$ adb devices

List of devices attached
* daemon not running. starting it now on port 5037 *
* daemon started successfully *

```

* 示例2：在以下命令序列中，adb devices显示设备列表，因为adb服务器首先启动。
```
$ adb kill-server
$ adb start-server
$ adb devices
 ⁣⁣ 
List of devices attached
emulator-5557 device
```

![AdbStartServer](./images/16.png ':size=90%')

## 子流程

> 不支持


## 运行参数


## 输出

> 设备日志，字符串[`String`](./types/String.md)。


## 资源