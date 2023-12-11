# GET 请求
用于向服务器请求指定的资源，HTTP GET 请求应该只接收数据而不改变服务器的状态。

## 子流程
> 不支持


## 运行参数

* 网址
> 可以在网址中直接包含查询字符串，如：`/test/demo.html?name1=value1&name2=value2`。
* 标头
> 在 HTTP GET 请求中传递 HTTP 标头，例如：`Accept: application/json`

* 参数
> 查询字符串（名称/值对），在 GET 请求的 URL 中发送：`/test/demo.html?name1=value1&name2=value2`，可选项。

## 输出

> GET 方法返回的内容，参考字符串类型：[String](../types/String.md)    


## 脚本调用

```python
import simple;

```

## 资源