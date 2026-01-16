# 屏幕取色 
这个动作检索指定坐标处的像素的红色，绿色，蓝色（RGB）颜色值。

![PixelPoint](./images/06.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 数据源
> 图像或者窗口，默认从当前屏幕位置获取颜色。

* 坐标
> 要获取颜色的位置，（如果是数据源是屏幕，则坐标为屏幕坐标；如果数据源为图像，坐标为图像坐标；如果数据源为窗口则为窗口坐标）。左上角为（0，0），*x* 方向向右，*y* 方向向下。

## 输出

> 颜色，参考：[Color](./types/Color.md) 

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/CaptureWindow.simple



