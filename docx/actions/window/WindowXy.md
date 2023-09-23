# 窗口位置
获取或设置指定窗口的位置，该位置是相对于屏幕的左上角（屏幕坐标系）给出。

![WindowXy](./images/12.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* [window](./types/Wnd.md)
  > 窗口
* [Xy](./types/Point.md)
  > 坐标位置, 如果设置为空，可以获取窗口位置。如果设置为坐标，则可以设置窗口的位置。


## 输出

> 窗口的屏幕坐标位置：[`Point`](./types/Point.md)


### 脚本调用

```python
import simple;

```

### 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/WindowXy.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/NDaWo4KNx5s" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1rh4y1Y7Lb&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>