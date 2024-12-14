# 引用动作（名称） 
此动作通过 *名称* 引用流程当中，可以被使用的路过动作。

![NameAlias](./images/09.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 名称
>   动作名称，相当于变量名称，符合 *Python* 变量定义要求。

## 输出

> [`Object`](./types/Object.md)。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/control/ref.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/CQ9x0FHWAK4" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1GD4teoE8p&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 引用动作只是引用某个动作的执行结果，被引用的动作不会再次被执行。