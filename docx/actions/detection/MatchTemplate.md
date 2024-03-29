# 模板匹配 
简单的图片查找，通常用于查找较小的图像,或者特征比较少的图像。

*   图像和模板分别改变光照亮度不影响计算结果。


![MatchTemplate](./images/07.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 源图像，待查找图像，可以是彩色图像。
* 模板
>   要查找的图像，可以是彩色图像，不能比源图像大。
* 精度
>   根据相似度进行过滤, 低于该值的认为不匹配。取值范围：(-1 ~ 1) ，**1** 表示完美匹配，**-1** 表示糟糕的匹配，**0** 表示没有任何相关性。

## 输出

> 匹配到的位置，参考：[DetectionResults](./types/DetectionResult.md)
    

## 脚本调用

```python
import simple;

```

## 资源

例子：https://github.com/shelllet/WinUi/blob/main/detection/MatchTemplate.simple



<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/yW83dUrNDoo" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Pu4y1772u&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 版本变化

* 0.31
> 图像参数支持使用*窗口*类型。