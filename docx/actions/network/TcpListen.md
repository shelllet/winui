# 监听 
此动作用来创建TCP或者UDP服务端。

![action](./images/01.png 'size=90%')

支持子动作

运行参数：
![param](./images/02.png 'size=90%')


* [Host Address]： 监听的IP, 可忽略，默认`127.0.0.1`
* [Port Number]： 监听的端口
* [Type]： 类型，分为`TCP` 或者`UDP`

* 输出： 无


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/network/listen.simple](https://github.com/shelllet/WinUi/blob/main/network/listen.simple)


{{% notice note %}}
版本: WinUi++ 0.14-beta.12 
{{% /notice %}}