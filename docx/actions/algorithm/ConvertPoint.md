# 坐标转换 
*窗口坐标* 转 *屏幕坐标*，或者 *屏幕坐标* 转 *窗口坐标*。

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

* 包含标题栏高度
> 计算坐标时是否包含标题栏的高度（如果窗口含有标题栏）。通常情况，*Windows* 系统标准标题栏的高度为32px。
  
## 输出
> 转换后的坐标，类型为：[`Point`](./types/Point.md)。

### 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/ClientToScreen.simple
