# 斑点检测
*斑点* 是图像中与周围区域在属性（例如亮度、颜色）上不同的区域， 也可以称为 *Blob* ，该动作对图像中的 *斑点* ，按照指定的条件进行筛选过滤。

* 查找圆或者椭圆就是从黑色背景中查找白色圆或者椭圆边缘。所以请记住，要找到的圆或者椭圆应该是白色的，背景应该是黑色的。


![BlobDetect](./images/03.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
>  源图像。
* 阈值
>  通过使用从最小阈值开始对源图像进行阈值处理，将源图像转换为多个二值图像。这些阈值按 *步长* 递增， 直到最大阈值。
* 步长
>   相邻阈值之间的距离。

* 面积
>   范围，提取 *斑点* 的面积，按该设置的范围进行 *斑点*过滤。该参数默认不启用。
* 圆形度
> 范围，衡量 *斑点* 与圆的接近程度。比如：*圆形* 的圆度为 *1*，*正方形* 的圆度为 *0.785*。该参数默认不启用。
* 凸性比
> 范围，按凸性比进行过滤。凸性定义为（*斑点* 的面积/它的*凸包*面积，形状的凸包是完全包围该形状的最紧密的凸形。该参数默认不启用。
* 惯量比
>   范围，按惯量比（拉长比）进行过滤。对于*圆*，惯量比为 *1*，对于*椭圆*，惯量比为 *0* 到 *1*，对于*直线*，惯量比值为 *0*。该参数默认不启用。


## 输出

>   检测到 *斑点* 的矩形框，参考： [RotatedRects](./types/RotatedRect.md)。


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/BlobDetect.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/CKI7oQo0idA" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV16u4y1a76i&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>