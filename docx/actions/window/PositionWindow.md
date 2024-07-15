# 窗口置顶 
更改子窗口、弹出窗口或顶级窗口为顶层窗口或者非顶层窗口。

![PositionWindow](./images/07.png ':size=90%')

## 权限
> 无要求, 但是对于*UWP* 应用程序来说，它不符合 *Win32* 应用程序的窗口规则（据微软官方消息：操作系统中没有任何 *API* 可以使 *UWP*应用程序的窗口置顶），因此该动作无效。例如：*Win11* 的记事本程序。
## 子流程
> 不支持

## 运行参数

* [窗口](./types/Wnd.md)
  > 要设置的窗口
* [方式](./enums/WindowHandle.md)
  > 位置，比如设置为最顶层窗口，


## 输出

>  [`Boolean`](./types/Boolean.md)


### 脚本调用

```python
import simple;

```

### 其它

示例：https://github.com/shelllet/WinUi/blob/main/window/PositionWindow.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/0i76rAExI5Y" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV13m4y1N7Q9&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 对于 *UWP* 应用解决办法参考：https://github.com/microsoft/Xaml-Islands-Samples/blob/master/Samples/Win32/SampleCppApp/ReadMe.md