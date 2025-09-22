# 文本提取 
识别图像中的中文/英文文字。

![TextRecognition](./images/08.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 图像 <sup>1</sup>
> 包含文字的图片。

* 置信度 <sup>2/sup>
> 文本检测完成后，对文本框内的文字进行文本识别，得分大于该阈值的文本结果将被保留。取值范围为 `0 ~ 1`。


## 输出 

> 参考 [`RecognitionResults`](./types/RecognitionResult.md)。

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/TextRecognition.simple



