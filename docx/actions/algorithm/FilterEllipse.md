# 椭圆过滤 
该动作可以过滤**椭圆检测**动作所检测到的椭圆

![action](./images/03.png 'size=90%')


运行参数：
![param](./images/04.png 'size=90%')


* [Source]： **椭圆检测** 输出结果，类型为**Ellipses**

* [Minor Axis]： 椭圆短轴范围，如果范围0-0， 则忽略该过滤值
* [Major Axis]： 椭圆长轴范围，如果范围0-0， 则忽略该过滤值
* [Angle]： 椭圆角度范围，如果范围0-0， 则忽略该过滤值

* 输出： 窗口类型：`Ellipses`


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/algorithm/filter_ellipse.simple](https://github.com/shelllet/WinUi/blob/main/algorithm/filter_ellipse.simple)


{{% notice note %}}
版本: WinUi++ 0.14-beta.13 
{{% /notice %}}