# 移动 * 网格 
在桌面虚拟一个网格，依次移动鼠标至网格中的每个单元格，并调用自定义的子流程。需要配合 [移动鼠标](./actions/mouse/MovePointer.md)动作，移动鼠标至网格左上角第一个单格中心位置。

![CellMove](./images/12.png ':size=90%')

## 子流程
> 支持，当前鼠标位置传入子流程。


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


## 输出

>   无    

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/mouse/CellMove.simple

<!-- <iframe type="text/html" height="640px" src="https://www.youtube.com/embed/LBktoepioXw" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1NF411k7Un&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe> -->