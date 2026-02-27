# 窗口坐标

这个动作可以获取窗口当中几个特定位置的窗口坐标。比如：左上角、左下角、右上角、右下角、中心位置坐标。

![WindowPoint](./images/13.png ':size=90%')

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* 窗口
  > 参考：[Wnd](./types/Wnd.md)
* 相对位置
  > 相对位置，参考：[RelativePosition](./enums/RelativePosition.md)，坐标轴 (X,Y) 方向根据不同的位置方向有所不同，参考下图。

  ![xy](./images/xy.png ':size=40%')

* 偏移
  > 原点偏移量（坐标系参考上图）。坐标轴（x, y）方向参考上面草图。



## 输出
> 窗口坐标 [Point](./types/Point.md)
    

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/WindowPoint.simple



