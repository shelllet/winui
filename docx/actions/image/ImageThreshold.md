# 二值化 
该动作可以对图像进行二值化操作。可以理解为按照一定的阈值条件，把图像变成灰度图像。

![action](./images/03.png ':size=90%')


是否支持子流程：**否**

运行参数：
![param](./images/04.png ':size=90%')

* [Image]： 要执行二值化操作的图像。
* [Thresh]：阈值。范围（0 -255），如果`Type`选择`BINARY`。低于该值的。像素被置为黑色。高于该阈值的 则 填充 为`Value` 表示的颜色， 如果type选择`BINARY_INV`，反之。
* [Value] 填充色。范围（0 -255）
* [Type] BINARY 和 BINARY_INV

输出：二值化之后的图像。


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/image/threshold.simple](https://github.com/shelllet/WinUi/blob/main/image/threshold.simple)


{{% notice note %}}
版本: WinUi++ 0.14.0
{{% /notice %}}
