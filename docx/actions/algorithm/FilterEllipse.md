# 椭圆筛选 
通过 *椭圆/圆* 的特征筛选 *椭圆/圆* *数组/列表* 中的符合条件元素。

![FilterEllipse](./images/13.png ':size=90%')

## 子流程

> 不支持


## 运行参数


* 数据
>  包含圆或者椭圆的数组，类型：[`Ellipses`](./types/Ellipse.md)。比如动作：[椭圆检测](./actions/detection/EllipseDetection.md)。

* 短轴
> 短轴的范围，只有该范围内的 *椭圆/圆* 才会保留。 

* 长轴
> 长轴的范围，只有该范围内的 *椭圆/圆* 才会保留。

* 角度 

>   椭圆旋转角度范围, 圆的角度始终为： *0*。

## 输出
> 筛选后的 *椭圆/圆* 列表，参考：[`Ellipses`](./types/Ellipse.md)。如果列表长度不为 `0`, 走左侧分支，否则走右侧分支。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/FilterEllipse.simple


!> 如果短轴的最小值和长轴的最小值相同， 短轴的最大值和长轴的最大值相同，则可以筛选该半径范围内的的圆。
