# 启动进程 
启动进程

![start process](./images/2022-11-08_191220.png 'size=90%')


是否支持子流程：**否**

运行参数：
![param](./images/2022-11-08_191505.png 'size=90%')

* 参数[Application]： 启动的进程路径
* 参数[Param]： 传递的命令行参数
* 参数[No Window]： 无窗口运行
* [Working Folder] 工作目录
* [Env] 环境变量

输出：

    进程输出, `String` 类型


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple](https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple)


{{% notice note %}}
问题： 停止流程运行，目前无法结束启动的进程，需要等待启动的进程自行结束
{{% /notice %}}
