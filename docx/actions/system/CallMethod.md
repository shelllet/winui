# 调用方法 
调用对象或者模块中的方法，包括 *COM* 对象。

![CallMethod](./images/16.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 对象
> 通过 [创建对象](./actions/CreateObject.md) 动作创建的对象。

* 方法
> 函数名称，字符串类型。注意 *Win32 API* 函数，分 *ANSI* 和 *UNICODE* 版本，请使用 带 *W* 后缀的 *UNICODE* 版本。
* 参数

> 可以通过 [*Tuple*](./types/Tuple.md) 类型，封装多个参数。

## 输出

> 方法的返回值。    

## 其它

`Beep` 调用：https://github.com/shelllet/WinUi/blob/main/system/beep.simple

`FindWindowW` 调用：https://github.com/shelllet/WinUi/blob/main/system/findwindow.simple

DLL 调用：https://github.com/shelllet/WinUi/blob/main/system/dll.simple

COM 调用：https://github.com/shelllet/WinUi/blob/main/system/com.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/N1ZA_en39rE" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV13o9WYhER7&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>