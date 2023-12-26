# 窗口截图 
根据指定的窗口截图，此图像包含标题栏。

![CaptureWindow](./images/01.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 窗口
> 需要截图的窗口。如果为 *空* ，选择当前激活的前置窗口。

* 中心
> 要选择的 *ROI* 区域中心位置，*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
* 尺寸
> 要选择的 *ROI* 区域的长宽。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
## 输出

> 图像，参考：[`Image`](./types/Image.md)，图像尺寸为整个窗口尺寸。


## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/CaptureWindow.simple

