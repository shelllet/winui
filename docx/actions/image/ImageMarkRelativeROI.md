# 标记相对区域

根据相对位置，标记图片感兴趣的区域，比如在找图时，只从该区域查找图片。

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* [image](./types/Image.md)：输入图像
* [relative](./enums/RelativePosition.md)：相对位置，即坐标原点位置。根据偏移坐标和尺寸来设置一个感兴趣的区域矩形
* [offset](./types/Point.md)：偏移坐标，
* [size](./types/Size.md)：尺寸


## 输出

    


## 脚本调用

```python
import simple;

```

## 示例