# 查找窗口 
查找 *Windows* 系统中的窗口，该动作通过*窗口标题*或者*窗口类*搜索窗口。

![find window](./images/2022-11-08_191853.png ':size=90%')

## 子流程
> 不支持

## 运行参数


* Parent： 父窗口
* Title： 窗口标题
* Class： 窗口类

## 输出

> 窗口类型：`Wnd`


### 脚本调用
    脚本可以支持通过窗口标题和窗口类来查找窗口

```python
import simple;

simple.Wnd.findWindow('notepad.exe', None) # 不使用窗口类
```

### 示例

[https://github.com/shelllet/WinUi/blob/main/window/findwindow.simple](https://github.com/shelllet/WinUi/blob/main/window/findwindow.simple)
