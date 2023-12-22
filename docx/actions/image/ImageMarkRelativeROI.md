# 标记相对区域

根据相对位置，标记图片感兴趣的区域，比如在找图时，只从该区域查找图片，可以加快查图速度。

![ImageMarkRelativeROI](./images/11.png ':size=90%')

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* 图像
  > 输入图像
* 相对位置
>   坐标原点位置。参考 [RelativePosition](./enums/RelativePosition.md)，不同的位置，坐标轴方向不一样。参考下图


![xy](../window/images/xy.png ':size=40%')

* 偏移
> 原点偏移量（坐标系参考上图）。坐标轴（x, y）方向参考上面草图。如果选择 *Center*，原点对应图像的中心位置，*TopLeft* 对应图像的左上角，*TopRight* 对应图像的右上角，*BottomLeft* 对应图像的左下角，*BottomRight* 对应图像的右下角。

* 尺寸
> 标记区域图像的大小， 参考[Size](./types/Size.md)。如果相对位置选择 *中心位置*， 原点坐标为图像的中心坐标。其它情况，原点为图像的左上角坐标。


## 输出

> 标记后的图像,图像大小保持不变。
   

## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ImageMarkRelativeROI.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/AO_yd_S5ucE" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV12w411r7Xf&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>