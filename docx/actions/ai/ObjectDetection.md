# 对象检测 
基于深度学习框架的目标检测,目前仅支持 *Yolo5*格式的 *ONNX* 模型，其它 *ONNX* 检测模型需要通过脚本自已解析输出。

![ObjectDetection](./images/02.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 模型
> *ONNX* 模型。
* 图像
> 包含检测目标的图像。通常是归一化后的图像数据，操作步骤：先进行 [*像素缩放*](../actions/image/ScalePixel.md) 动作，将图像像素缩放至 （0 - 1），然后 [*均值*](../actions/image/ImageMean.md) 动作操作，最后再再执行 [*标准差*](../actions/image/ImageStd.md) 。
* 置信度
> 低于该值的被认为不准确的检测结果。

* 标签
> 预定义的分类标签。

* 框架
> 目前仅支持 *Yolo5* 架构的模型

## 输出

>   检测到的图像位置，参考：[DetectionResults](./types/DetectionResult.md)


## 脚本调用

```python
import simple;

```

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/ObjectDetection.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/yV5wdgmEXrw" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Jc41167Dr&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>