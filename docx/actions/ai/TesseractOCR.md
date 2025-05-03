# 文字识别（Tesseract）
基于 Tesseract OCR 的一款开源的光学字符识别引擎。能够识别多种语言的文字，包括但不限于英语、中文、法语、德语等。

* 支持多种语言：Tesseract 能够识别多种语言的文字，包括但不限于英语、中文、法语、德语等。通过训练数据的扩展，其语言识别能力还在不断增强。
* 高识别准确率：在经过大量数据训练和优化后，对于清晰的文档图像，Tesseract 可以达到较高的识别准确率。它能够处理多种字体、字号和排版格式的文字，对噪声和图像变形有一定的鲁棒性。
* 可定制性强：用户可以根据自己的需求对 Tesseract 进行定制，例如训练自己的字库模型，以提高对特定领域或特殊字体的识别效果。此外，还可以调*整各种参数来优化识别过程，适应不同的应用场景。

![TesseractOCR](./images/07.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 图像
> 包含文字的图片。

* 数据文件
> 默认值为 NULL，包含了 **英语**、**中文 - 简体** 和 **中文 - 繁体**。 它指定了 Tesseract 数据文件所在的路径。其它语言需要下载对应的数据文件，参考：[训练数据文件](./introduction/tesseract/Data-Files)。

* 识别语言
> 默认值为 "eng"。它指定了要识别的语言，可以使用 ISO 639-3 语言代码来指定语言，例如 "eng" 表示英语，"chi_sim" 表示简体中文。如果要同时识别多种语言，可以用 "+" 连接不同的语言代码，如 "eng+chi_sim"，参考： [Tesseract 支持的语言](./introduction/tesseract/Languages_Scripts)

* 页面分割模式
>  默认值为 `AUTO` 。它指的是页面分割模式（Page Segmentation Mode），决定了 Tesseract 如何对图像中的页面进行分割和识别，例如是按行识别、按单词识别还是按单个字符识别等。参考：[PageSegMode](./enums/PageSegMode.md)。

## 输出 

> 识别结果, 参考： [`RecognitionResults`](./types/RecognitionResult.md)。

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/PaddleOCR.simple
