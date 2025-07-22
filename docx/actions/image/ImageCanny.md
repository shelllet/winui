# 边缘检测 
边缘检测是将图像中的边缘提取出来，作为后续图像处理和应用的的一个重要环节。通常，我们所看到的图像都不是完美无缺的，而是包含许多噪声、干扰等，因此需要将这些噪声去除，只保留图像中的边缘信息。边缘检测的主要目的是提高图像的清晰度和对比度，从而更好地理解图像中的内容。

![ImageCanny](./images/05.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像

* 阈值
  > 用來區分 *strong edge* 和 *weak edge*，范围是 0 ~ 255。


## 输出

> 边缘图像，8-bit，*size* 与输入图像一致    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ImageCanny.simple





