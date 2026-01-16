# 窗口置顶 
更改子窗口、弹出窗口或顶级窗口为顶层窗口或者非顶层窗口�?

![PositionWindow](./images/07.png ':size=90%')

## 权限
> 无要�? 但是对于*UWP* 应用程序来说，它不符�?*Win32* 应用程序的窗口规则（据微软官方消息：操作系统中没有任�?*API* 可以�?*UWP*应用程序的窗口置顶），因此该动作无效。例如：*Win11* 的记事本程序�?
## 子流�?
> 不支�?

## 运行参数

* [窗口](/types/Wnd.md)
  > 要设置的窗口
* [方式](/enums/WindowHandle.md)
  > 位置，比如设置为最顶层窗口�?


## 输出

>  [`Boolean`](/types/Boolean.md)


### 脚本调用

```python
import simple;

```

### 其它

示例：https://github.com/shelllet/WinUi/blob/main/window/PositionWindow.simple





!> 对于 *UWP* 应用解决办法参考：https://github.com/microsoft/Xaml-Islands-Samples/blob/master/Samples/Win32/SampleCppApp/ReadMe.md
