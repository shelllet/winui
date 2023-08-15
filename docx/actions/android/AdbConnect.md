# 连接 
连接模拟器，主要应用在模拟器在远程电脑上面。


![action](./images/01.png ':size=90%')

## 子流程

> 不支持

## 运行参数


* Host： 远程模拟器的IP地址和端口，例如网易 *MuMu* 模拟器：127.0.0.1:7555

## 输出 

> [`String`](./types/String.md)

```
    # : already connected to 192.168.31.170:5555
```

*MuMu* 模拟器， 虽然是本机，但也需要使用此动作进行连接。*雷电*模拟器如果在本机，则不需要此动作。


## 脚本调用

```python
import simple;


```

## 示例

[https://github.com/shelllet/WinUi/blob/main/android/connect.simple](https://github.com/shelllet/WinUi/blob/main/android/connect.simple)


!> 相应的模拟器需要开启 *ADB调试*

