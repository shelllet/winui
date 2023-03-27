# 调用 
此动作可以调用其他流程（非子流程）。

![action](./images/2022-11-26_192226.png ':size=90%')


是否支持子流程：**否**


运行参数：

![param](./images/2022-11-26_192523.png ':size=90%')


* [Process] 其他流程。所有独立的流程都会在下拉列表当中列出。所以此参数只需要从下拉列表当中选择其他流程即可。
  
 
输出：

    此动作没有输出。


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/control/invoke.simple](https://github.com/shelllet/WinUi/blob/main/control/invoke.simple)


{{% notice tip %}}

版本: WinUi++ 0.14-beta.5 

{{% /notice %}}
