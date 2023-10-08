# 特征匹配 
该动作通过特征匹配，在一张图片当中查找模板图像。

![FeatureDetect](./images/2022-12-10_182315.png ':size=90%')


## 子流程

> 不支持


## 运行参数


* 图像

* 模板
>   要查找的图像 
* 精度
> 根据该精度进行特征过滤，低于该值的认为最佳匹配, 匹配越好，该值越小。默认值：0.75


## 输出

> 检测到的位置区域，参考：[RotatedRect](../types/RotatedRect.md)


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/detection/find_image.simple](https://github.com/shelllet/WinUi/blob/main/detection/find_image.simple)

