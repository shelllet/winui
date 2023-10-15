# 查找轮廓 
轮廓可以简单地理解为连接所有连续点（沿着边界）的曲线，具有相同的颜色或强度。轮廓是形状分析以及物体检测和识别的有用工具。

* 为了获得更高的准确性，请使用二值图像。因此，在查找轮廓之前，请应用阈值或边缘检测进行预处理。
* 查找轮廓就像从黑色背景中查找白色物体。所以请记住，要找到的对象应该是白色的，背景应该是黑色的。

![FindContours](./images/08.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 单通道图像，通常使用二值化之后的单通道图像，如果是非单通道图像，则默认会转换成灰度图像。
* 方法
>   轮廓检索模式，控制轮廓的输出层次结构，可以参考：[RetrievalModes](./enums/RetrievalModes.md)。
* 方法
> 轮廓近似方法，轮廓只是形成形状边界的点的列表。一种方法是存储表示边界的所有点，但是对于 *三角形* 或 *四边形* 等简单形状存储数百个点是浪费的。对于 *三角形*，3 个点就足够了，对于 *四边形*，4 个点就足够了。该标志帮助我们选择近似级别，可以参考：[ContourApproximationMode](./enums/ContourApproximationMode.md)。

## 输出

> 查找到的轮廓，参考：[Contours](./types/Contour.md)    


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/FindContours.simple
