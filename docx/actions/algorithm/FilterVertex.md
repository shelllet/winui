# 形状筛选
通过计算 *数组/列表* 中元素的形状是否近似指定的形状来筛选 *数组/列表* 中的元素。


![FilterVertex](./images/12.png ':size=90%')

## 子流程

> 不支持

## 运行参数


* 数据
> 包含多个可以计算形状的元素列表，比如： [查找轮廓](./actions/detection/FindContours.md)，检测到的轮廓列表。
* 精度
> 值越小，就越接近所选择的形状，单位：像素。这是原始曲线与其近似值之间的最大距离。默认值 *3px*。
* 形状
> 参考：[Shape](./enums/ContourShape.md)。

## 输出

> 包含指定形状的元素列表。如果列表长度不为 `0`, 走左侧分支，否则走右侧分支。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/FilterVertex.simple
