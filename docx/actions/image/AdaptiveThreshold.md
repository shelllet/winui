# 自适应阈值
自适应阈值是针对较小的区域计算阈值，因此对于不同的区域会有不同的阈值。

## 子流程
> 不支持


## 运行参数

* Image: 执行阈值操作的图像
* Value:  填充像素值，范围（0 -255）
* BlockSize: 确定邻域区域的大小,用来计算阈值
* Type：要应用的阈值类型[ThresholdTypes](../../enums/ThresholdTypes.md)

## 输出

> [`Image`](../../types/Image.md)。



## 脚本调用

```python
import simple;

```

## 示例