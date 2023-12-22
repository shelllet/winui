# 阈值操作 
对图像进行阈值操作，可以将灰度图像转换为二值图像，是全局操作。该阈值操作是全局的，即图像中的所有像素都使用相同的阈值。

可用于多通道图像（如 *RGB*图像，操作后的图像仍然是 *RGB* 三通道图像），通常在使用该动作前，将图像转换成灰度图像（单通道图像）。

在该阈值操作中，值大于指定阈值的像素被分配一个标准值。

该动作主要用来进行噪声、干扰像素过滤。

![ImageThreshold](./images/06.png ':size=90%')


## 子流程
> 不支持

## 运行参数

* 图像： 
  > 要执行阈值操作的图像。
* 阈值
  > 范围（0 - 255），低于和高于阈值的像素值将相应改变。如果操作方式选择`BINARY`。低于该值的。像素被置为黑色。高于该阈值的， 则填充为所设置的颜色， 如果操作类型选择`BINARY_INV`，则反之。
* 值
  > 填充像素值。范围（0 -255）
* 类型
  > 参考[ThresholdTypes](./enums/ThresholdTypes.md)

## 输出
> 阈值操作后的图像。参考[`Image`](./types/Image.md)。


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ImageThreshold.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/qrGIKU69QGg" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Pk4y1F7eB&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


