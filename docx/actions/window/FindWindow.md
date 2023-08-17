# 查找窗口 
查找操作系统中的窗口，该动作支持通过*窗口标题*或者*窗口类*搜索窗口。

![FindWindow](./images/2022-11-08_191853.png ':size=90%')

## 子流程
> 不支持

## 运行参数


* 父窗口
* 窗口标题
* 窗口类名

## 输出

> 窗口类型：`Wnd`


### 脚本调用

```python
import * from simple;

Wnd.findWindow('notepad.exe', None) # 不使用窗口类
```

### 示例

示例：https://github.com/shelllet/WinUi/blob/main/window/FindWindow.simple
