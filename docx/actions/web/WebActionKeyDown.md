# 动作链.按下修饰键 
按下键盘修饰键，仅发送键盘修饰键，不释放键盘修饰键。

* 只能使用<kbd>Control </kbd>、<kbd>Alt</kbd> 和 <kbd>Shift</kbd>等修饰键。
* 该动作需要加入到动作链当中。

![WebActionKeyDown](./images/30.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 元素
> *Web*元素， 可选。如果不提供，发送修饰键到当前有焦点的 *Web* 元素。 

* 修饰键
>   要发送的修饰键,如：<kbd>Control </kbd>、<kbd>Alt</kbd> 或 <kbd>Shift</kbd>等。

## 输出
> 无   

## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/action_sendkey.simple
