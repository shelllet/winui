# 直线检测
检测图像中的直线。

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
