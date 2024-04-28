# 动作链.移动 
此方法将鼠标移动到元素的视图中心点。这也称为 *悬停*。如果提供偏移量，首先将鼠标移动到指定的元素中心点，然后移动提供的偏移量中的像素数。

* 该动作需要加入到动作链当中。

![WebActionMoveTo](./images/26.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 元素
>   鼠标要移动到的 *Web* 元素。

* 偏移
> 位置偏移量，偏移量是相对于元素中心的。

## 输出

> 无   

## 示例

* 流程：https://github.com/shelllet/WinUi/blob/main/web/action_move.simple
* 流程(偏移)：https://github.com/shelllet/WinUi/blob/main/web/action_moveto_offset.simple
