# Runas 
使用本地系统中的账号密码打开应用程序。该动作不会等待程序结束。

![Runas](./images/14.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持

## 运行参数

* 应用
>   可执行程序路径。
* 账号
>
* 密码
> 密码可空。
* 命令行
> 传递的命令行参数
* 工作目录
>
* 环境变量
>  使用 `Var=Value` 形式表示。 参考：https://learn.microsoft.com/zh-cn/windows/win32/procthread/environment-variables 。
  
## 输出

> 启动的程序路径。 [`Path`](./types/Path.md) 类型

## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/Runas.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/j_tC1t7zxGg" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Lk4y1N7QZ&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
