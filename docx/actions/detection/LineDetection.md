# 直线检测
检测图像中的直线，直线的线宽通常是 *1* 像素。

* 为了获得更高的准确性，请使用二值图像。因此，在查找直线之前，请应用阈值或边缘检测进行预处理。
* 查找直线就是从黑色背景中查找白色直线。所以请记住，要找到的直线应该是白色的，背景应该是黑色的。


![LineDetection](./images/01.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 二值化后的单通道图像，如果为非单通道图像，则会转换成灰度图像。
* 长度
> 直线长度，低于该值的直线会被抛弃。默认值：*10* 像素。
* 算法
>  包括边缘绘制算法和快速检测算法，可以切换不同算法，通过预览，查看检测结果来确定该参数。

## 输出

> 检测到的直线， 参考：[Lines](./types/Line.md)    


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/LineDetection.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/GDqQxHO8NR0" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1xy4y1P7eE&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>