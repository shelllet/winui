# 枚举窗口 
枚举操作系统中的窗口，并按照指定的规则进行窗口排序�?

* *Win11* 系统中的计算器，记事本，多窗口仍属于同一进程�?

![EnumWindows](./images/10.png ':size=90%')

## 子流�?
> 支持, 枚举到的每个窗口都会传入子流程�?


## 运行参数

* [窗口](/types/Wnd.md)
  > 如果不为空，则枚举相应的子窗�?否则，枚举所有的顶层窗口�?
* 标题
> 根据窗口标题过滤，可为空，不执行过滤�?
* 类名
> 根据窗口类名过滤，可为空，不执行过滤�?

* 排序
> 参�?[WindowSortDirection](./enums/WindowSortDirection.md)

  
## 输出

> 窗口�?[`Wnds`](/types/Wnd.md)    

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/EnumWindows.simple



## 版本变化

* 0.41.1
> 移动异步处理参数�?

* 0.31
> 增加运行时参数（标题/ 类名过滤/ 排序）�
