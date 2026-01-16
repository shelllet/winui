# 主机地址 
定义一个 *主机地址* 类型。主机地址通常包含*IP*地址和端口。

![TypeString](./images/18.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 主机
> *ip* 地址。默认：`localhost`，本地回环地址，和 `127.0.0.1`对应。

* 端口
> 端口号，端口号的范围从`0`到`65535`。

## 输出

> 主机地址，参考: [HostAddress](./types/HostAddress.md)。    


## 脚本调用

```python

addr = HostAddress('localhost', 8080)

```

## 示例



