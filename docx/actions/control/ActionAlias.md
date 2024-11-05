# 引用动作 
此动作是用来引用流程当中，可以被使用的路过动作。

![ActionAlias](./images/10.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 流程
>   引用动作所在的流程。

* 动作
>   被引用的动作。

## 输出

> [`Object`](./types/Object.md)。

## 其它

示例：https://github.com/shelllet/WinUi/blob/main/control/ref.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/pGiGHC5h0FQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV15mtweoEHd&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 引用动作只是引用某个动作的执行结果，被引用的动作不会再次被执行。