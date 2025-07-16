# 数据接收 
接收网络数据。

![NetworkReceive](./images/08.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 主机

>    如果是 *TCP* 协议，该参数类型为：[TCPSocket](./types/TCPSocket.md)。如果是*UDP* 协议，该参数是主机地址，参考：[主机地址](./types/HostAddress.md)或者 [UDPSocket](./types/UDPSocket.md)


## 输出 

> 收到的数据，参考：[字符串](./types/String.md)。


## 资源

*TCP*示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

*UDP* 示例： https://github.com/shelllet/WinUi/blob/main/network/UdpListen.simple





