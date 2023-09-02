# 发送文本 
向当前活动的窗口发送文本，通常当前焦点处于文本框，可接受键盘输入。

![SendText](./images/05.png ':size=90%')

## 权限
> 据 *UIC* 规则，不能向高权限的用户界面发送按键，例如：普通用户启动的 *WinUi++*, 无法向以管理员方式启动的应用界面发送按键。

## 子流程
> 不支持


## 运行参数

* 文本
* 发送回车键
> 发送完文本信息后，是否发送回车按键？默认：不发送。


## 输出
> 无    


## 脚本调用
> 参考 [Keyboard](./types/Keyboard.md)
```python
import simple;

```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/keyboard/SendText.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/3XTiB_6Od5s" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1gN4y1d7eq&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>