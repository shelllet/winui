# 椭圆筛选 
通过 *椭圆* 或者 *圆* 的特征筛选 *椭圆* 列表中的元素。

![action](./images/03.png ':size=90%')

## 子流程

> 不支持


## 运行参数


* 值
>   椭圆数组： [`Ellipses`](./types/Ellipse.md)

* 短轴
> 短轴的范围，只有该范围内的椭圆才会保留。 
* 长轴
> 长轴的范围，只有该范围内的椭圆才会保留。

* 角度 

>   椭圆角度范围, 圆的角度始终为： *0*

## 输出
> 椭圆数组：`Ellipses`


## 脚本调用

```python
import simple

```

## 资源

[https://github.com/shelllet/WinUi/blob/main/algorithm/filter_ellipse.simple](https://github.com/shelllet/WinUi/blob/main/algorithm/filter_ellipse.simple)


!> 如果短轴的最小值和长轴的最小值相同， 短轴的最大值和长轴的最大值相同，则可以筛选该半径范围内的的圆。
