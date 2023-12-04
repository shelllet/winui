# Post 
将数据通过 POST 方法发送至服务器用以创建/更新资源，请求主体的类型由 Content-Type 标头指示。该动作使用 超文本传输协议（HTTP/1.1）。

例如：

* application/x-www-form-urlencoded
  > 这是默认的 Content-Type，键和值被编码在由 分隔的键值元组中 '&'，'='键和值之间有一个。非字母数字值使用百分比编码进行转义。
* multipart/form-data
  > 每个值都作为数据块（正文部分）发送，并用用户代理定义的分隔符（边界）分隔每个部分。

* text/plain
  > 消息体没有规定的格式，服务器需要进行相应的处理。

## 子流程
> 不支持


## 运行参数

* 网址
> 
* 数据类型
>  Content-Type 如：`application/json`,要将 JSON 数据发布到服务器。
* 数据
> 如果  Content-Type 设置为`application/json`， 请求正文中提供 JSON 数据


## 输出

> 请求返回的数据，字符串类型，参考：[String](../types/String.md)    


## 脚本调用

```python
import simple;

```

## 资源


!>  [Python 3 HTTP/1.1 Server](https://gist.github.com/andystanton/2ec0dca0bf6de90c2000025319f63e2d)