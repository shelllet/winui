# 按下按键 
模拟按下键盘的按键，需要调用 *ReleaseKey* 动作释放按键

![PressKey](./images/01.png ':size=90%')

## 权限
> 据 *UIC* 规则，不能向高权限的用户界面发送按键，例如：普通用户启动的 *WinUi++*, 无法向以管理员方式启动的应用界面发送按键。

## 子流程
> 不支持


## 运行参数

* [按键](./types/KeySequence.md)


## 输出

> [WinInput](./types/WinInput.md)
    


## 脚本调用
> 参考 [Keyboard](./types/Keyboard.md)

```python
import simple;

```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/keyboard/PressKey.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/aUhPME2G7HA" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV19N411q74p&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>