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