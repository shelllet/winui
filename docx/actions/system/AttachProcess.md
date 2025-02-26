# 附加进程

创建一个进程，在进程启动的时候附加一个动态链接库。这个动作可以把动态库加载到进程的运行空间，也可以称作`DLL`注入。

![AttachProcess](./images/19.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* 进程
> 进程的路径，`Windows` 系统同名进程可以有多个，可以用进程全路径区分。

* 动态库
> 要附加的动态链接库。注意适配`32`位或者`64`位可执行程序。

## 输出

>    无


## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/AttachProcess.simple

