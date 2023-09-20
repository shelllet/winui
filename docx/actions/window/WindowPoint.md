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

  ![xy](./images/xy.png ':size=40%')

* [offset](./types/Point.md)
  > 原点偏移量（坐标系参考上图）。坐标轴（x, y）方向参考上面草图。



## 输出
> 窗口坐标 [Point](./types/Point.md)
    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/WindowPoint.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/ChF4pLZEdXM" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1tV411A7WA&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>