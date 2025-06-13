# 全屏截图 
全屏截图，支持多个显示器屏幕。

![CaptureScreen](./images/02.png ':size=90%')

## 子流程
> 不支持


## 运行参数
* 显示器
> 截取屏幕。

* 坐标
> 要选择的 *ROI* 区域左上角位置，默认值 `（0， 0）`。*ROI* 区域之外，图像将置为黑色，该参数不影响输出图像尺寸。

* 尺寸
> 要选择的 *ROI* 区域的长宽。*ROI* 区域之外，图像将置为黑色。该参数不影响输出图像尺寸。


## 输出

> 图像，参考：[`Image`](./types/Image.md)，图像尺寸为整个屏幕尺寸。


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/CaptureScreen.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/UacjErnsl08" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1WW4y1A7GU&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


## Changed

* 0.45
> 运行参数*中心坐标* 改为 *左上角坐标*。
> 添加屏幕选择参数。