# 目标分类 
对象分类是计算机视觉中的一项基本任务，涉及训练模型以及将图像分类为预定义的类别。该动作基于深度学习框架用来处理目标分类应用场景。

![ImageClassification](./images/01.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 模型
> *ONNX* 分类模型。
* 图像
>   要分类的图像。通常是归一化后的图像数据，操作步骤：先进行 [*像素缩放*](./actions/image/ImageNormalize.md) 动作，将图像像素缩放至 （0 ~ 1），然后 [*均值*](./actions/image/ImageMean.md) 动作操作，最后再再执行 [*标准差*](./actions/image/ImageStd.md) 。
* 标签
> 预定义的分类标签。

* 归一化
> 将输出的置信度限制在 *0~1* 范围内。

## 输出

> 分类对象, 参考：[ClassificationResult](./types/ClassificationResult.md)。    


## 脚本调用

```python
import simple;

```

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/ImageClassification.simple







!> ONNX Model Zoo： https://github.com/onnx/models
