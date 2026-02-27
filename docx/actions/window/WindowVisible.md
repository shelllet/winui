# 窗口可视 
此动作用来显示或者隐藏窗口。

![WindowVisible](./images/09.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* [window](./types/Wnd.md)
  > 窗口

* [action](./enums/Visibility.md)
  > 隐藏或者显示, 默认隐藏。如果选择`Default` 取回当前窗口的显示状态

## 输出

> 窗口显示或隐藏状态。如果选择 *Default*，对窗口不做任何操作，只是返回当前窗口状态。如果窗口当前显示，返回`True`, 否则 `False`。


### 脚本调用

```python
import simple;

```

### 其它

示例：https://github.com/shelllet/WinUi/blob/main/window/WindowVisible.simple




