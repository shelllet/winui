# 发送 
此动作通过TCP或者UDP发送数据。

![action](./images/03.png ':size=90%')

## 子流程
> 不支持

## 运行参数



* Socket： 套接字， 可以通过`监听`动作的子动作获取, 或者由`连接`动作获取。
* Value： 发送的数据， 目前支持：`Image` 、`String`、 `DetectResults` 类型

## 输出 无


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/network/send.simple](https://github.com/shelllet/WinUi/blob/main/network/send.simple)

