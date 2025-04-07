# 连通域分析
对图像中 *斑点* 状区域的连通性进行分析过滤，找到符合条件的连通区域。

![ConnectedComponents](./images/15.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 源图像
>   常是单通道的二值化图像。
* 宽度
>   指定斑点的宽度范围，默认值为空，不进行过滤。
* 高度
>   指定斑点的高度范围，默认值为空，不进行过滤。
* 面积
>   指定斑点的面积范围， 默认值为空，不进行过滤。


## 输出

> 过滤后的图像，图像大小保持不变。    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ConnectedComponents.simple



<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/R_JWj8OYPOQ" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1nKZRY6Ekw&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>