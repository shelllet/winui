# 前置窗口 
将创建指定窗口的线程置于前台并激活该窗口。键盘输入被定向到窗口，并且为用户改变各种视觉提示。系统为创建前台窗口的线程分配比其他线程稍高的优先级。

![ForegroundWindow](./images/05.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* [window](./types/Wnd.md)
> 如果为空，返回当前的前置窗口。如果不为空，设置该窗口为前置窗口。

## 输出

> [`Wnd`](./types/Wnd.md)    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/ForegroundWindow.simple


!> 不无前置最小化的窗口