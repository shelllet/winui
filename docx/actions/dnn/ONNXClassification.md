# 目标分类 
目标分类，建议使用 *Yolo5 *网络训练的 *ONNX* 的模型。其它网络模型，可能需要通过脚本自定义输出。

## 子流程
> 不支持


## 运行参数

* Model：模型， *ONNX* 分类模型。
* Image：要分类的图像
* Mean：每个通道的均值序列
* Std：每个通道的标准差序列
* SwapRB：参考模型说明


根据模型不同，*Std*，*Mean*，可能需要不同的数值。

例如：[MobileNet 模型](https://github.com/onnx/models/tree/main/vision/classification/mobilenet),必须将图像像素转换到 [0, 1] 范围内（动作自动完成），然后使用 `mean = [0.485, 0.456, 0.406]` 和 `std = [0.229, 0.224, 0.225]` 进行归一化


* [Yolov5分类模型参考](https://github.com/ultralytics/yolov5)，可能通过 `python export` 命令导出 *ONNX* 模型或者训练自己的模型

## 输出

> 分类    


## 脚本调用

```python
import simple;

```

## 示例