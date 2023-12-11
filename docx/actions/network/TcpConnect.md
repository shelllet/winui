# 服务连接 
连接网络服务端。

* *UDP* 是无连接协议，因此 基于*UDP* 协议的网络，直接发送或者接收数据即可，无需连接服务。

![action](./images/07.png ':size=90%')

## 子流程
> 不支持

## 运行参数


* 主机
>   服务器 IP 地址。

* 端口
> 远程端口

* 类型
>   网络协议，`TCP`。

## 输出
> 套接字，可用于读取或者发送数据，参考：[Socket](../types/Socket.md)。

## 脚本调用

```python
import simple;

```

### 示例

示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple


