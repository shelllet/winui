# 消息框 
弹出一个消息框，该动作会阻止流程继续执行，直到消息框关闭。

![MessageBox](./images/04.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* [caption](./types/String.md)
> 对话框标题。如果此参数为NULL，则默认标题为Error。
* [msg](./types/String.md)
>   要显示的消息。如果字符串包含多行，则可以在每行之间使用回车符和/或换行符分隔行。
* [flag](./enums/MessageBoxFlags.md)：
>  消息框中显示的按钮样式，
  
## 输出

> 无    


## 脚本调用

```python
import * from simple;

flags = MessageBoxFlags.MB_OK
Wnd.MessageBox('caption', 'msg', flags)
```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/MessageBox.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/4STpFY4bdFM" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Q8411i7fz&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 消息框关闭之后，才会继续执行后续动作。