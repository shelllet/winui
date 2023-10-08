# 颜色筛选 
指定一个色彩范围，保留图像中符合色彩范围内的颜色，透过这个方式，就可以筛选出图像中的特定颜色物件。

![ImageInRange](./images/07.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 单通道图像，或者3通道 *RGB* 彩色图像，对于彩色图像通常将图像由 *RGB* 转换成 *HSV* 颜色空间,再进行颜色筛选。
* 最小值
  > 色彩范围最低数值，低于该值的颜色值会被置为 *0*, 即会被去除。

* 最大值
  > 色彩范围最高数值， 高于该值的颜色值会被置为 *0*，即会被去除。


## 输出

> 筛选后的图像    


## 脚本调用

```python
import simple;

```

## 资源


!> 对于 *RGB* 颜色空间的图像，最小值中的 (*R* *G* *B*) 必须分别小于最大值中的 (*R* *G* *B*)。

!> 对于 *HSV* 颜色空间的图像，最小值中的 (*H* *S* *V*) 必须分别小于最大值中的 (*H* *S* *V*)。


示例：https://github.com/shelllet/WinUi/blob/main/image/ImageInRange.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/6uNeK8ETSmk" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1yu411u7tK&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>