# 窗口坐标

这个动作可以获取窗口当中几个特定位置的窗口坐标。比如：左上角， 左下角，右上角，右下角，中心。

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* [window](./types/Wnd.md)：窗口
* [relative](./enums/RelativePosition.md)：相对位置，即坐标原点位置。根据偏移坐标来计算最终坐标
* [offset](./types/Point.md)：偏移坐标，


## 输出
> 窗口坐标 [Point](./types/Point.md)
    


## 脚本调用

```python
import simple;

```

## 示例