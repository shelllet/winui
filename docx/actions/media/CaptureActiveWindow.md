# 活动窗口截图 
截取当前活动窗口图像


![CaptureActiveWindow](./images/07.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 坐标
> 要选择的 *ROI* 区域左上角位置，默认值 `（0， 0）`。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
* 尺寸
> 要选择的 *ROI* 区域的长宽。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
## 输出

> 图像，参考：[`Image`](./types/Image.md)，图像尺寸为整个窗口尺寸。


## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/CaptureActiveWindow.simple

<!-- 

 -->


## Changed

* 0.45
> 运行参数*中心坐标* 改为 *左上角坐标*。