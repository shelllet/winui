# 形状匹配 
该动作可以在一张图像上查找一个特定的形状。即使图像旋转，绽放也不会对该结果产生太大影响�?

* 为了获得更高的准确性，请使用二值图像，因此，在查找形状之前，请应用阈值或边缘检测进行预处理�?
* 要找到的形状应该是白色的，背景应该是黑色的�?

![MatchShapes](./images/05.png ':size=90%')

## 子流�?
> 不支�?


## 运行参数

* 图像
> 单通道图像，通常是二值化后的图像，从该图像上查找相应的目标形状。如果非单通道图像，则默认转换为灰度图像�?
* 目标
>  单通道图像，包含目标形状，通常是一张具有特定形状，二值化化后的图像。如果非单通道图像，则默认转换为灰度图像�?

* 方法
> 轮廓近似方法，可以参考：[ContourApproximationMode](/enums/ContourApproximationMode.md)�?

* 指标
> 根据相似性进行过滤。越低，表示匹配越好�?0*：表示完全匹配，低于该值的形状，会被认为是匹配的形状�?
## 输出

> 所有匹配到的形状的位置，可以参考[DetectionResults](/types/DetectionResult.md)


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/MatchShapes.simple





## 版本变化

* 0.31
> 图像参数支持使用*窗口*类型�
