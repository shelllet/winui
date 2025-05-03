# 文字识别 
识别图像中的中文/英文文字。

![PaddleOCR](./images/03.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 图像
> 包含文字的图片。

* 文本框评分
> 计算文本框的得分，分值太低，则不认为是有效的文本框。

* 置信度
> 正确识别文字的得分，分值太低，认为识别不准确，则会忽略该文字的识别。

* 角度分类器
>  指定是否使用角度分类器，默认识别：0°、90° 、270°。 如果使用，则可识别旋转180°的图片。如果文本没有旋转180°，为了性能，请不要使用该选项。其它文本旋转角度无法准确识别。

* 检测模型
> 检测模型文件，用于非内置语言检测。
* 分类器模型
> 角度分类模型文件，用于非内置语言检测。
* 识别模型
> 识别模型文件，用于非内置语言检测。
* 字典文件
> 字典文件，参考：[Paddle2ONNX模型转化与预测](./introduction/mixed/paddle2onnx.md)。
## 输出 

> 识别结果, 参考： [`RecognitionResults`](./types/RecognitionResult.md)。

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/PaddleOCR.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/-XdfKlw-vgQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV17N4y1S7xm&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>