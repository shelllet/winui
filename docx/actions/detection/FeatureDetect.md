# 特征匹配 
特征是图像中信息特别丰富或有趣的独特区域。这些可能包括边缘、角落或斑点（基于颜色强度的区域）。该动作通过特征匹配，在一张图像当中查找模板图像。

![FeatureDetect](./images/06.png ':size=90%')


## 子流程

> 不支持


## 运行参数


* 图像
>   单通道图像，如果为非单通道图像，则会转换成灰度图像。
* 模板
>   要查找的图像，单通道图像，如果为非单通道图像，则会转换成灰度图像。
* 特征
> 获取的最大特征点数量。仅适用于 *ORB* 和 *SIFT* 算法，默认值：500
* 算法
> 参考 [FeatureAlgorithm](../enums/FeatureAlgorithm.md)
## 输出

> 检测到的位置区域，参考：[RotatedRects](../types/RotatedRect.md)


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/FeatureDetect.simple


!> 该动作会先将源图像和模板图像转换成灰度图像，再进行匹配。