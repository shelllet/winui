# 坐标转换 
窗口坐标转屏幕坐标，或者屏幕坐标转窗口坐标。

![ConvertPoint](./images/10.png ':size=90%')


## 子流程

> 不支持

## 运行参数

* 窗口
> 执行坐标转换所关联的窗口。

* 坐标
> 待转换的坐标。 窗口坐标或者屏幕坐标, 类型为：[`Point`](./types/Point.md)。

* 方法
> 坐标转换方法，参考：[PointConvertMethod](./enums/PointConvertMethod.md)。

* 标题栏
> 计算出来坐标是否包含标题栏的高度（前提是窗口有标题栏）。
  
## 输出
> 转换后的坐标，类型为：[`Point`](./types/Point.md)。

### 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/ClientToScreen.simple
