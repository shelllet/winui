# 窗口坐标

这个动作可以获取窗口当中几个特定位置的窗口坐标。比如：左上角、左下角、右上角、右下角、中心位置坐标。

![WindowPoint](./images/13.png ':size=90%')

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* [window](./types/Wnd.md)
  > 窗口
* [relative](./enums/RelativePosition.md)
  > 相对位置，坐标轴 (X,Y) 方向根据不同的位置方向有所不同，参考下图。

  ![xy](./images/14.png ':size=40%')

* [offset](./types/Point.md)
  > 偏移坐标，以相对位置为坐标原点（坐标系参考上图），根据偏移坐标来计算最终坐标。



## 输出
> 窗口坐标 [Point](./types/Point.md)
    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/WindowPoint.simple
