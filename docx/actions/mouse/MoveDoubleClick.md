# 移动并双击 
移动鼠标，到达位置后双击鼠标相应的键

![MoveDoubleClick](./images/04.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 坐标
  > 鼠标移动到的位置
* 动画
  > 是否为鼠标移动设置动画，如果为不勾选, 则为瞬移，没有移动轨迹。有很多应该会检测鼠标的移动轨迹来判断是否开挂。
* 半径
  > 以第 *1* 个参数 *Point* 为圆心，该参数为半径，动态计算最终的目标位置。
* 键
  > 鼠标键


## 输出

> 鼠标最终位置坐标


## 脚本调用
> 无导出，参考 `Mouse`

```python
import simple;

```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/mouse/MoveDoubleClick.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/BhqTxNQF8io" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV18w411D71T&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>