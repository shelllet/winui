# 打开应用 
打开Windows系统当中的软件。该动作不会等待程序结束。

![action](./images/2022-11-19_161054.png 'size=90%')


是否支持子流程：**否**

运行参数：
![param](./images/2022-11-19_170458.png 'size=90%')

* [Application]： 启动的进程路径
* [CommandLine]： 传递的命令行参数
* [Working Folder] 工作目录
* [Env] 环境变量

输出：启动的程序路径。 `Path` 类型


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/system/OpenApplication.simple](https://github.com/shelllet/WinUi/blob/main/system/OpenApplication.simple)


{{% notice note %}}
{{% /notice %}}
