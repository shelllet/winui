# 平滑/模糊 
平滑和模糊是所有计算机视觉和图像处理中最重要的预处理步骤之一。通过在应用边缘检测或阈值处理等技术之前对图像进行平滑处理，我​​们能够减少高频内容的数量，例如噪声和边缘（即图像的“细节”）。

虽然这听起来可能违反直觉，但通过减少图像中的细节，我们可以更轻松地找到我们感兴趣的对象。

一般来说，建议从高斯模糊开始，并根据需要调整参数。虽然高斯模糊比简单的平均模糊稍慢（仅慢一小部分），但高斯模糊往往会给出更好的结果，尤其是在应用于自然图像时。

![ImageBlur](./images/12.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 内核
> 内核越大，图像看起来就越模糊。对于 *Bilateral*，忽略此参数。对于 *Gaussian*， 此值必须是大于 1 的奇数。

* 直径
> 此值定义像素邻域的直径。直径越大，模糊计算中包含的像素就越多。 该参数仅应用于 *Bilateral*。预设使用 5，数值越大运算的速度越慢。

* 颜色标准差
> 较大的值意味着在计算模糊时将考虑邻域中的更多颜色。 该参数仅应用于 *Bilateral*。

* 空间标准差
> 较大的值意味着距离中心像素直径较远的像素将影响模糊计算。 该参数仅应用于 *Bilateral*。
>
* 方法
> 参考 [BlurOperation](./enums/BlurOperation.md)

## 输出
> 过滤后的图像。

## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ImageBlur.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/PPJaE5l3aTs" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1dw411y7gC&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>