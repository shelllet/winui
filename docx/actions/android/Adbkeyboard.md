# 键盘输入 
在安卓模拟器中模拟文本输入。此动作支持中文输入，输入中文字符之前，安装 *ADBKeyboard.apk*。关于*ADBKeyboard.apk*，请参考：https://github.com/senzhk/ADBKeyBoard 。


![Adbkeyboard](./images/06.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 设备
> 设备号，如果当前连接的只有一个设备，该值可为空。
* 文本
> 文本，支持中文字符。

## 输出 

> 设备日志，字符串[`String`](./types/String.md)。


### 资源

示例：https://github.com/shelllet/WinUi/blob/main/android/AdbInput.simple
