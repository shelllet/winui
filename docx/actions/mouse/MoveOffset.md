# 偏移移动 
以鼠标当前的位置为起始位置，按照偏移量来移动鼠标。在 *3D* 类型的游戏中，可以用来旋转视角。


![MoveOffset](./images/09.png ':size=90%')


## 子流程
> 不支持


## 运行参数

* 偏移量
> 偏移量，该动作是瞬移鼠标位置，通常移动的距离不会太大。
* 半径
  > 以第 *1* 个参数 *Point* 为圆心，该参数为半径，动态计算最终的目标位置。

## 输出
> 最终位置坐标

### 脚本调用
> 无导出，参考 `Mouse`
```python
import simple;

```

## 资源


* 流程：https://github.com/shelllet/WinUi/blob/main/mouse/MoveOffset.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/9EpRl5DP4CQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Sp4y1L7bj&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>