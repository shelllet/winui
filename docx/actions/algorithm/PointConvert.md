# 坐标转换 
窗口坐标转屏幕坐标，或者屏幕坐标转窗口坐标

![PointConvert](./images/2022-11-17_184608.png ':size=90%')


## 子流程

> 不支持

## 运行参数

* Point： 窗口坐标或者屏幕坐标, 类型为：`Point`。
* Window： 窗口, 默认为窗口的标题，类型为：`String`。

* [Method](./enums/PointConvertMethod.md)：转换方式
* [withTitleBar](./types/Boolean.md)：窗口坐标或者计算出来的窗口坐标是否包含标题栏的高度
  
## 输出
> 类型为：`Point`


### 脚本调用

```python
import simple


```

### 示例

[https://github.com/shelllet/WinUi/blob/main/algorithm/ClientToScreen.simple](https://github.com/shelllet/WinUi/blob/main/algorithm/ClientToScreen.simple)
