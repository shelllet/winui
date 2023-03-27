# 启动进程

启动进程

![start process](./images/04.png ':size=50%')


## 子流程

> 不支持

## 运行参数：

* [Application]： 启动的进程路径
* [Param]： 传递的命令行参数
* [No Window]： 无窗口运行
* [Working Folder] 工作目录
* [Env] 环境变量

## 输出：

>    启动的程序输出, [`String`](../../types/String.md) 类型


## 脚本调用

```python
import simple

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple](https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple)



!> 停止流程运行，目前版本无法自动结束启动的进程，需要等待启动的进程自行结束,或者通过*任务栏管理器*强制结束
