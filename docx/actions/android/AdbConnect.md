# 连接 
主要应用在模拟器不在本机，而在的另一台电脑上面。


![action](./images/01.png ':size=90%')

## 子流程

> 不支持

## 运行参数


* Host： 远程模拟器的IP地址和端口，例如网易：MuMu模拟器：127.0.0.1:7555

## 输出 

> [`String`](../../types/String.md)

```
    # : already connected to 192.168.31.170:5555
```

**MuMu 模拟器**虽然是本机，但也需要使用此动作进行连接。**雷电模**拟器虽然是本机，则不需要此动作。

雷电模拟器，开启ADB调试

![adb](./images/03.png ':size=90%')

网易MuMu 模拟器。请使用**连接**动作。


## 脚本调用

```python
import simple;


```

## 示例

[https://github.com/shelllet/WinUi/blob/main/android/connect.simple](https://github.com/shelllet/WinUi/blob/main/android/connect.simple)



