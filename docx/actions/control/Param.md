# 参数
用于获取由父动作传入子动作的数据。例如，在迭代动作的子动作中添加该动作，便可获取被迭代的每个元素值。

![Param](./images/15.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 索引
> 当父动作传入类似元组（Tuple） 这样的包含多值元素时，可以通过该索引引用其中的值。

* 默认值
> 父动作传入的值为空时，会使用这个默认值。


## 输出

> 对应的参数值。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/control/param.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/FJ7zgSl38JU" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1WrsWe8EPp&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 版本变化 

* 0.33
> 增加 *索引* 参数。