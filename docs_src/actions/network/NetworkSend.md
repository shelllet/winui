# 数据发�?
通过网络，发送数据�?

![NetworkSend](./images/07.png ':size=90%')

## 子流�?
> 不支�?

## 运行参数

* 主机
>>   如果�?*TCP* 协议，该参数类型为：[TCPSocket](/types/TCPSocket.md)。如果是*UDP* 协议，该参数是主机地址，参考：[主机地址](/types/HostAddress.md)或�?[UDPSocket](/types/UDPSocket.md)

* 数据
> 发送的数据。该数据会被序列化成[字符串](/types/String.md)发送�?

## 输出

> 如果�?*TCP* 协议，该动作返回：[TCPSocket](/types/TCPSocket.md)。如果是*UDP* 协议，该动作返回�?[UDPSocket](/types/UDPSocket.md)

### 其它

*TCP*示例�?https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

*UDP* 示例�?https://github.com/shelllet/WinUi/blob/main/network/UdpListen.simple







