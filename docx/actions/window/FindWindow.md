# 查找窗口 
查找Windows系统中的窗口，该动作通过*窗口标题*或者*窗口类*搜索窗口。

![find window](./images/2022-11-08_191853.png ':size=90%')


## 参数：
![param](./images/2022-11-08_192115.png ':size=90%')


* 参数[Title]： 窗口标题
* 参数[Class]： 窗口类

## 输出： 窗口类型：`Wnd`


### 脚本调用
    脚本可以支持通过窗口标题和窗口类来查找窗口

```python
import simple;

simple.Wnd.findWindow('notepad.exe', None) # 不使用窗口类
```

### 示例

[https://github.com/shelllet/WinUi/blob/main/window/findwindow.simple](https://github.com/shelllet/WinUi/blob/main/window/findwindow.simple)


{{% notice note %}}

{{% /notice %}}