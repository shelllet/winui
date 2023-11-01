# 目标检测 
目标检测,仅支持 *Yolo5*格式的 *ONNX* 模型，其它 *ONNX* 检测模型需要通过脚本自已解析输出

## 子流程
> 不支持


## 运行参数

* 模型
> *ONNX* 模型。
* 图像
> 包含检测目标的图像。通常是归一化后的图像数据，操作步骤：先进行 [*像素缩放*](../actions/image/ScalePixel.md) 动作，将图像像素缩放至 （0 - 1），然后 [*均值*](../actions/image/ImageMean.md) 动作操作，最后再再执行 [*标准差*](../actions/image/ImageStd.md) 。

## 输出

>   检测到的对你位置，参考：[DetectionResults](../types/DetectionResult.md)


## 脚本调用

```python
import simple;

```

## 示例