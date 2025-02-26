# 相机 
定义相机类型，当前系统必须连接相机设备，且不被占用(USB相机通常已经连接)。工业 *GIGE* 接口的相机需要手动安装相应的驱动程序。

![TypeCamera](./images/15.png ':size=90%')
* 该动作不能获取相机图像，需要配合动作 [相机图像](./actions/media/VideoFrame.md) 获取相机图像。
## 权限
> 无要求

## 子流程
> 支持。

## 运行参数

* 相机
> 相机索引，默认值：`0`，表示第 `1` 个相机设备。


## 输出

> 相机对象，参考：[VideoCapture](./types/VideoCapture.md)。


## 脚本调用

```python
import simple;


cap = VideoCapture(0)

```

## 示例

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/HJyM6Gmt-PA" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1PmKgeVEt8&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>