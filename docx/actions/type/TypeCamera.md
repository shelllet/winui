# 相机 
定义相机类型，当前系统必须连接相机设备。工业 *GIGE* 接口的相机需要手动安装相应的驱动。

![TypeCamera](./images/15.png ':size=90%')

## 权限
> 无要求

## 子流程
> 不支持

## 运行参数

* 相机
> 相机索引，默认值：`0`。


## 输出

> 相机对象，参考：[VideoCapture](./types/VideoCapture.md)。


## 脚本调用

```python
import simple;


cap = VideoCapture(0)

```

## 示例


!> 预览该动作执行， *6s* 之后停止。