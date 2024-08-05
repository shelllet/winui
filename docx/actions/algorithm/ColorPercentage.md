# 颜色统计 
该动作可以统计某一颜色在图像当中所占的比例。

![ColorPercentage](./images/04.png ':size=90%')


## 子流程

> 不支持


## 运行参数

* 图像
> 要进行颜色统计的图像，通常可以选择一个区域进行统计。
* 颜色
>  所要统计的颜色。 由于 *HSV* 颜色空间更符合人的主观视觉感知, 通常使用 *HSV* 颜色空间。
* 误差
> 包含近似颜色的差值。

## 输出

>   所要统计的颜色所占的百分比，参考：[Number](./types/Number.md)。

## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/ColorPercentage.simple