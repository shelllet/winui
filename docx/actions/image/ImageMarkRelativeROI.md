# 标记相对区域

根据相对位置，标记图片感兴趣的区域，比如在找图时，只从该区域查找图片，可以加快查图速度。

![action](./images/10.png ':size=90%')

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* 图像
  > 输入图像
* 相对位置
>   坐标原点位置。根据偏移坐标和尺寸来设置一个感兴趣的区域矩形, 参考 [RelativePosition](./enums/RelativePosition.md)，不同的位置，坐标轴方向不一样。参考下图


![xy](../window/images/14.png ':size=40%')

* 偏移
>  偏移坐标, 参考 [Point](./types/Point.md)， 即原点偏移量。
* 尺寸
> 标记区域图像的大小， 参考[Size](./types/Size.md)。


## 输出

    


## 脚本调用

```python
import simple;

```

## 示例