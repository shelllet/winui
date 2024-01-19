# 图像差值 
这个动作可以比较两个图像，并返回一个显示相似性的度量。结果越低，匹配越好。即使图像旋转、缩放也不会对该比较产生太大影响。

* 为了获得更高的准确性，请使用二值图像
* 要找到的对象应该是白色的，背景应该是黑色的。

![ImageDifference](./images/03.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 源图像
> 源图像，二值化后的单通道图像，如果为非单通道图像，则会转换成灰度图像。
* 目标
> 目标图像，二值化后的单通道图像，如果为非单通道图像，则会转换成灰度图像。

## 输出

> 相似性的指标（小数）。越低，表示匹配越好。*0*：表示完全匹配，参考： [Number](./types/Number.md)


## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/algorithm/ImageDifference.simple
