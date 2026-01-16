# 椭圆检�?
检测图像中的圆或者椭圆，线宽通常�?*1*像素�?

* 为了获得更高的准确性，请使用二值图像。因此，在查找圆或者椭圆之前，请应用阈值或边缘检测进行预处理�?
* 查找圆或者椭圆就是从黑色背景中查找白色圆或者椭圆边缘。所以请记住，要找到的圆或者椭圆应该是白色的，背景应该是黑色的�?


![EllipseDetection](./images/02.png ':size=90%')

## 子流�?
> 不支�?


## 运行参数


* 图像
  > 二值化后的单通道图像，如果为非单通道图像，则会转换成灰度图像�?


## 输出 

> 检测到的所有圆或者椭圆，参考： [`Ellipses`](/types/Ellipse.md)


### 脚本调用

```python
import simple;


```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/EllipseDetection.simple





## 版本变化

* 0.31
> 图像参数支持使用*窗口*类型�
