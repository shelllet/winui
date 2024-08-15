# 形状筛选
通过计算数组中元素的形状来筛选列表中的元素。


![FilterVertex](./images/12.png ':size=90%')

## 子流程

> 不支持

## 运行参数


* 数据
> 包含多个可以计算形状的元素列表，比如检测到的轮廓列表。
* 精度
> 值越小，就越接近所选择的形状。
* 形状
> 参考：[Shape](./enums/ContourShape.md)。

## 输出

> 包含指定形状的元素列表。如果列表长度不为 `0`, 走左侧分支，否则走右侧分支。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/FilterVertex.simple
