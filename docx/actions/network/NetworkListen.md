# 网络服务 
创建一个网络服务端。

* *UDP* 是无连接协议，因此 基于*UDP* 协议的网络，直接发送或者接收数据即可，无需监听端口。

![NetworkListen](./images/06.png ':size=90%')

## 子动作
> 不支持，客户端连接的 *套接字* 会传入子流程中。如果是 *UDP*, 传递参数：[UDPSocket](../types/UDPSocket.md)。如果是*TCP*, 传递参数： [TCPSocket](../types/TCPSocket.md)

## 运行参数


* 端口
> 监听的主机地址，通常包含 *IP* 地址和端口，*IP* 地址可空。参考：[HostAddress](../types/HostAddress.md)
* 类型
> 网络协议，支持 *TCP* 或者 *UDP* 协议。

## 输出

> 如果是 *TCP* 协议，返回[TcpServer](../types/TcpServer.md) ，如果是*UDP*协议，返回 [UDPSocket](../types/UDPSocket.md)。

### 资源

*TCP*示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

*UDP* 示例： https://github.com/shelllet/WinUi/blob/main/network/UdpListen.simple

