# 接收输入 
接收网络上的鼠标键盘事件。

![NetworkReceive](./images/12.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 主机

>    如果协议是 `TCP`, *IP* 必须为远程 *IP*, `UDP` 可以是远程 *IP*, 或者 `0.0.0.0` 接收广播数据, 端口必须为有效的端口，需要和发送端一致。

* 偏移坐标
> 如果置为窗口，接收端会自动把窗口坐标映射为全局坐标。如果输入坐标， 接收端接收坐标时加上该坐标的值。
* 协议
> 支持 `UDP` 和 `TCP` 协议，建议使用 `UDP` 协议，提高鼠标键盘的传输速度。注意：发送和接收端的协议必须相同。

## 输出 

> 无


## 资源


示例： https://github.com/shelllet/WinUi/blob/main/network/send_receive_input.simple





