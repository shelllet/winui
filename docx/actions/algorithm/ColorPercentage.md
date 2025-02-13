# 颜色统计 
该动作可以统计某一颜色在整个图像当中所占的比例。

![ColorPercentage](./images/04.png ':size=90%')


## 子流程

> 不支持


## 运行参数

* 图像
> 要进行颜色统计的图像。
* 颜色
>  所要统计的颜色。 由于 *HSV* 颜色空间更符合人的主观视觉感知, 通常使用 *HSV* 颜色空间执行颜色统计。

* 色相差值
> 包含近似颜色的色相差值，取值范围：`0 ~ 359`。当前颜色的 *H* 值 减去 最小值，当前颜色的 *H* 值 加上 最大值，作为 *色相* 的取值范围。

* 饱和度差值
> 包含近似颜色的饱和度差值，取值范围：`0 ~ 100`。当前颜色的 *S* 值 减去 最小值，当前颜色的 *S* 值 加上 最大值，作为 *饱和度* 的取值范围。

* 亮度差值
> 包含近似颜色的亮度范围，取值范围：`0 ~ 100`。当前颜色的 *V* 值 减去 最小值，当前颜色的 *V* 值 加上 最大值，作为 *亮度* 的取值范围。

## 输出

>   所要统计的颜色在整个图像中所占的比例，`0 ~ 1` 之间的小数，参考：[Number](./types/Number.md)。

## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/ColorPercentage.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/AkFKsGoajfI" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1qBmxYfEs9&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>