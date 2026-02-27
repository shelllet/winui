# 点击 * 网格 
在桌面虚拟一个网格，依次移动鼠标至网格中的每个单元格，并点击鼠标。需要配合 [移动鼠标](./actions/mouse/MovePointer.md)动作，移动鼠标至网格左上角第一个单格中心位置。

![CellClick](./images/10.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 单元格宽度
> 
* 单元格高度
>
* 行数
> 风格行数

* 列数
> 网格列数

* 半径
> 以单元格中心为圆心，该参数为半径，动态计算最终的目标位置。该参数不要超过单元格长宽中的最小值。

* 停顿
> 移动至下个单元格的停顿时间。

* 点击键
> 鼠标键，参考：[MouseButtons](./enums/MouseButtons.md)


## 输出

>   无    

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/mouse/CellClick.simple



