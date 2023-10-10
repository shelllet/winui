# 形状查找
该动作可以查找图像上的基本形状，如：三角形、四边形、正方形。

* 为了获得更高的准确性，请使用二值图像。因此，在查找形状之前，请应用阈值或精明的边缘检测。
* 查找形状就像从黑色背景中查找白色物体。所以请记住，要找到的形状应该是白色的，背景应该是黑色的。

![ShapeDetection](./images/04.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 二值化后的单通道图像，如果为非单通道图像，则会转换成灰度图像。

* 逼近
> 指定近似精度的参数。这是原始形状与其近似形状之间的最大距离。


## 输出

> 检测到的形状位置，参考：[RotatedRects](./types/RotatedRect.md)


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/ShapeDetection.simple
