# 文档图像方向矫正 

将文档图像的方向区分出来，并使用后处理将其矫正。在诸如文档扫描、证照拍摄等过程中，有时为了拍摄更清晰，会将拍摄设备进行旋转，导致得到的图片也是不同方向的。此时，标准的OCR流程无法很好地应对这些数据。利用图像分类技术，可以预先判断含文字区域的文档或证件的方向，并将其进行方向调整，从而提高 OCR 处理的准确性。

![DocumentOrientation](./images/03.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 图像 <sup>1</sup>
> 包含文字的图片。


## 输出 

> 参考 [Image](./types/Image.md)；

### 其它

示例 https://github.com/shelllet/WinUi/blob/main/dnn/TextRecognition.simple



