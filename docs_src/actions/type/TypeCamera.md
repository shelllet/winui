# 相机 
定义相机类型，当前系统必须连接相机设备，且不被占用(USB相机通常已经连接)。工业 *GIGE* 接口的相机需要手动安装相应的驱动程序。

![TypeCamera](./images/15.png ':size=90%')
* 该动作在非触发模式，需要配合动作 [相机图像](./actions/media/VideoFrame.md) 获取相机图像。

## 权限
> 无要求

## 子流程
> 支持。非触发模式相机对象传子流程。触发模式时，相机图像转入子流程。

## 运行参数

* 相机
> 相机索引，默认值：`0`，表示第 `1` 个相机设备。

- 类型
> 相机类型，参考：[CameraType](./enums/CameraType.md)。

* 触发模式
> 触发模式开关，只支持相机是 GIGE/USB3 工业相机。

* 触发源
> 只支持触发模式打开时设置。参考：[CameraTriggerSource](./enums/CameraTriggerSource.md)。


* 触发激活方式
> 只支持触发模式打开时设置。参考：[CameraTriggerActivation](./enums/CameraTriggerActivation.md)。


## 输出

> 相机对象，参考：[VideoCapture](./types/VideoCapture.md)。

## 示例



