# 服务连接 
连接网络服务端。

* *UDP* 是无连接协议，因此 基于*UDP* 协议的网络，可以直接发送或者接收数据。

![NetworkConnect](./images/09.png ':size=90%')

## 子流程
> 不支持

## 运行参数


* 主机
>   服务器地址，通常包含 *IP* 和端口。参考：[HostAddress](./types/HostAddress.md)

* 类型
>   网络协议。

## 输出
> 套接字，可用于读取或者发送数据，*UDP*协议，参考：[UDPSocket](./types/UDPSocket.md)。*TCP*协议，参考：[TCPSocket](./types/TCPSocket.md)。

### 其它

*TCP*示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

*UDP* 示例： https://github.com/shelllet/WinUi/blob/main/network/UdpListen.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/_9wTz_BQXe4" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Nw411E7hy&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

