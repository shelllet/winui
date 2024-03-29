# 标准差

在计算机视觉中，通常对数据集使用平均值和标准差对图像像素值进行归一化。这有助于在将模型应用于新图像时获得一致的结果，并且对于迁移学习也很有用。该动作计算图像中每个通道的标准差。


## 子流程
> 不支持


## 运行参数

* 图像
> 待处理的图像。
* 值
> 每个通道的标准差，默认（0.229, 0.224, 0.225），对应 *RGB* 格式的图像，并且图像像素已经缩放至 *（0~1）*。

## 输出

> 计算过后的的图像 [`Image`](./types/Image.md)。


## 脚本调用

```python
import simple;

```

## 资源


!> 如果将默认标准差应用到您自己的数据集中，您可能不会获得良好的性能，因为这些统计数据属于 *ImageNet*，而 *ImageNet* 具有不同的自定义数据集分布。因此，在您的自定义数据集中，您需要在训练之前手动计算统计数据。参考 [均值计算](./ImageMean.md)。