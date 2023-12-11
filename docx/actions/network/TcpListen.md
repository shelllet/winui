# 端口监听 
创建一个网络服务端。

* *UDP* 是无连接协议，因此 基于*UDP* 协议的网络，直接发送或者接收数据即可，无需监听端口。

![TcpListen](./images/01.png ':size=90%')

## 子动作
> 不支持，客户端连接的 *套接字*会传入子流程中。

## 运行参数


* 端口
> 监听的本地端口
* 类型
> 网络协议，支持 `TCP`协议。

## 输出

> 参考[IOContext](../types/IOContext.md)。

### 脚本调用

```python
import simple;

```

### 资源

示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

