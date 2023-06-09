# 接收 
此动作通过TCP或者UDP接收数据。

![action](./images/05.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* Socket： 套接字， 可以通过`监听`动作的子动作获取, 或者由`连接`动作获取。

## 输出 

> 由`发送`动作所发送的数据。


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/network/receive.simple](https://github.com/shelllet/WinUi/blob/main/network/receive.simple)

