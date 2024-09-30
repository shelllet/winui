# 随机坐标 
生成随机坐标位置。

![RandomPoint](./images/14.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 中心坐标
>   参考： [Point](./types/Point.md)：
* 半径
> 指定一个半径，可以生成一个以中心坐标为圆心，该半径范围内的一个随机位置。 参考： [Number](./types/Number.md)：

## 输出

> 随机坐标，[`Point`](./types/Point.md)类型


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/RandomPoint.simple


!> 该动作被执行之后就会生成确定的随机坐标。其他所有引用该动作的运行参数,都会使用相同的随机坐标。