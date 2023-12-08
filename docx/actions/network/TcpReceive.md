# 数据接收 
接收网络数据。

![action](./images/05.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 主机

>    如果是 *TCP* 协议， 参考 [`TcpListen`(监听)](../actions/network/TcpListen.md) 动作的子动作获取, 或者由[`TcpConnect`(连接)](../actions/network/TcpConnect.md)动作获取。如果是*UDP* 协议，该参数是主机地址，参考：[主机地址](../types/ScocketAddress.md)。


## 输出 

> 收到的数据，参考：[字符串](../types/String.md)。


## 脚本调用

```python
import simple;

```

## 示例

示例： https://github.com/shelllet/WinUi/blob/main/network/TcpListen.simple

