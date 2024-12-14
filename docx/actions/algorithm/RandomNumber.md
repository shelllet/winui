# 随机数字
生成一个随机数字。


![RandomNumber](./images/01.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 范围
> 生成随机数的范围。

## 输出

> 随机数，[`Number`](./types/Number.md)类型。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/random_num.simple

## 脚本

````
import random

random.randint(1, 100)

````

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/NyjylgNUUfI" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV13mD9YMEck&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 该动作被执行之后就会生成确定的随机数。所有引用该动作的运行参数，都会使用相同的随机数。