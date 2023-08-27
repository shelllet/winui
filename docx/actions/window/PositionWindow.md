# 定位窗口 
更改子窗口、弹出窗口或顶级窗口的位置和 Z 顺序

![PositionWindow](./images/2022-11-27_143849.png ':size=90%')

## 权限
> 无要求, 但是对于*UWP* 应用程序来说，可能需要管理员方式运行 *WinUi++*。例如：*Win11* 的记事本程序。
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

示例：https://github.com/shelllet/WinUi/blob/main/window/SpecialWindow.simple
