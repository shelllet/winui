# 窗口截图 
根据指定的窗口截图，此图像包含标题栏。

![CaptureWindow](./images/01.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 窗口
> 需要截图的窗口。如果为 *空* ，选择当前激活的前置窗口。

* 坐标
> 要选择的 *ROI* 区域左上角位置，默认值 `（0， 0）`。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
* 尺寸
> 要选择的 *ROI* 区域的长宽。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。
## 输出

> 图像，参考：[`Image`](./types/Image.md)，图像尺寸为整个窗口尺寸。


## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/CaptureWindow.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/ETOELc3iYhs" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Xe411m741&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## Changed

* 0.45
> 运行参数*中心坐标* 改为 *左上角坐标*。
