# 目标检测 
目标检测,仅支持 *Yolo5*格式的 *ONNX* 模型，其它 *ONNX* 检测模型需要通过脚本自已解析输出

## 子流程
> 不支持


## 运行参数

* Model：模型， *ONNX* 分类模型。
* Image：要分类的图像


另外，模型不同，可能需要设置相应的 *Std*，*Mean*，数值。如果需要设置，需要在脚本中调用该动作。

例如：[SSD 模型](https://github.com/onnx/models/tree/main/vision/object_detection_segmentation/ssd),必须将图像像素转换到 [0, 1] 范围内（动作自动完成），然后使用 `mean = [0.485, 0.456, 0.406]` 和 `std = [0.229, 0.224, 0.225]` 进行归一化，需要息定义解析输出，

## 输出

    


## 脚本调用

```python
import simple;

```

## 示例