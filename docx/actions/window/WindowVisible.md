# 窗口可视 
此动作用来设置窗口显示或者隐藏。

![action](./images/2023-01-20_203116.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* Window：窗口

* Action： 隐藏或者显示

## 输出

> 窗口显示或隐藏状态。如果选择 *Default*，对窗口不做任何操作，只是返回当前窗口状态。如果窗口当前显示，返回`True`, 否则 `False`。


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/window/visible.simple](https://github.com/shelllet/WinUi/blob/main/window/visible.simple)
