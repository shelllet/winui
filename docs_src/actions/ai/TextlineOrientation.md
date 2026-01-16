# 文字角度纠正 
角度分类器，默认识别：0°、90° 、270°。 如果使用，则可识别旋转180°的图片。如果文本没有旋转180°，为了性能，请不要使用该选项。其它文本旋转角度无法准确识别。

![TextlineOrientation](./images/10.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 图像 <sup>1</sup>
> 包含文字的图片，也可以是 [TextDetection](./actions/ai/TextDetection.md) 的结果 。

## 输出 

> 如果参数 `1` 是图像, 参考 [Image](./types/Image.md)；如果参数 `1` 是 [`DetectionResults`](./types/DetectionResult.md)， 参考 [DetectionResults](./types/DetectionResult.md)。

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/TextRecognition.simple



