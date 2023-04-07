# 打开应用 
打开Windows系统当中的软件。该动作不会等待程序结束。

![action](./images/06.png ':size=50%')


## 子流程

> 不支持

## 运行参数

* [Application]： 程序路径
* [CommandLine]： 传递的命令行参数
* [Working Folder] 工作目录
* [Env] 环境变量
* [Account] 账户
* [Password] 密码

如果输入账户和密码，则使用相应的账号启动程序，否则，使用当前的账户打开程序。

## 输出

> 启动的程序路径。 [`Path`](../../types/Path.md) 类型


## 脚本调用

```python
import simple

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/system/OpenApplication.simple](https://github.com/shelllet/WinUi/blob/main/system/OpenApplication.simple)
