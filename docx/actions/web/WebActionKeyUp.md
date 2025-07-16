# 动作链.释放修饰键

释放键盘修饰键，配合 [动作链.按下修饰键 ](./actions/WebActionKeyDown.md)动作使用。 用来释放 [动作链.按下修饰键 ](./actions/WebActionKeyDown.md)动作中按下的修饰键。

* 键盘修饰键包括：<kbd>Control </kbd>、<kbd>Alt</kbd> 和 <kbd>Shift</kbd> 等。
* 该动作需要加入到动作链当中。

![WebActionKeyUp](./images/31.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 元素
> *Web* 元素，可选。如果不提供，发送修饰键到当前有焦点的 *Web* 元素。 

* 修饰键
>   要发送的修饰键。如：<kbd>Control </kbd>、<kbd>Alt</kbd> 或 <kbd>Shift</kbd>等。

## 输出
> 无   

## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/action_sendkey.simple



