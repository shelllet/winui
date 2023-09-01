# 定位窗口 
更改子窗口、弹出窗口或顶级窗口的位置。

![PositionWindow](./images/07.png ':size=90%')

## 权限
> 无要求, 但是对于*UWP* 应用程序来说，它不符合 *Win32* 应用程序的窗口规则（据微软官方消息：操作系统中没有任何 *API* 可以操作 *UWP*应用程序的窗口），因此该动作无效。例如：*Win11* 的记事本程序。
## 子流程
> 不支持

## 运行参数

* [窗口](./types/Wnd.md)
  > 要设置的窗口
* [定位方式](./enums/WindowHandle.md)
  > 位置，比如设置为最顶层窗口，


## 输出

>  [`Boolean`](./types/Boolean.md)


### 脚本调用

```python
import simple;

```

### 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/PositionWindow.simple



!> 对于 *UWP* 应用解决办法参考：https://github.com/microsoft/Xaml-Islands-Samples/blob/master/Samples/Win32/SampleCppApp/ReadMe.md