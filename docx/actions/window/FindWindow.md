# 查找窗口 
查找操作系统中的窗口，该动作支持通过*窗口标题*或者*窗口类*搜索窗口。

![FindWindow](./images/2022-11-08_191853.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* [`parent`](./types/Wnd.md)
> 默认为空，如果不为空，查找相应的子窗口，可借助 *Spy++* 来辅助操作。
* [`caption`](./types/String.md)
> 窗口标题
* [`className`](./types/String.md)
  > 窗口类名

## 输出

> 窗口：[`Wnd`](./types/Wnd.md)


### 脚本调用

```python
import * from simple

r = FindWindowRunner() # null parent
r.caption = 'notepad.exe'
r.className = None # 不使用窗口类
w.run()
```

### 示例

示例：https://github.com/shelllet/WinUi/blob/main/window/FindWindow.simple


!> [Windows下的程序及热键监视神器——Spy++](https://zhuanlan.zhihu.com/p/355878952)