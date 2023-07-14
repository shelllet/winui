# 登录应用 
使用本地系统中的账号密码打开应用程序。该动作不会等待程序结束。

![LoginApplication](./images/14.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* [app](./types/Path.md) 程序路径
* [commandLine](./types/String.md) 传递的命令行参数
* [workingDirectory](./types/Path.md)：工作目录
* [env](./types/String.md)：环境变量，通过脚本设置
* [account](./types/String.md)：账号
* [password](./types/String.md)：密码, 可空。
  

## 输出

> 启动的程序路径。 [`Path`](./types/Path.md) 类型


## 脚本调用

```python
import simple

r = simple.LoginApplicationRunner("C:\\Program Files (x86)\\Steam\\Steam.exe")
# r.app = "C:\\Program Files (x86)\\Steam\\Steam.exe"
r.account = 'abc'
r.password = '123'
r.run()
```

## 资源

* Y: [WinUi++动作介绍：终止进程](https://youtu.be/hlpfERxN5yQ)
* B: [WinUi++动作介绍：终止进程](https://www.bilibili.com/video/BV1LP411y7E1/)
* ... [clipchamp](https://clipchamp.com/watch/gs40Tr7G6Ot)
* 流程：https://github.com/shelllet/WinUi/blob/main/system/LoginApplication.simple