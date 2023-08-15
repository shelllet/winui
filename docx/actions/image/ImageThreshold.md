# 阈值 
该动作可以对图像进行阈值化操作。在该阈值操作中，值大于指定阈值的像素被分配一个标准值。该阈值操作是全局的，即图像中的所有像素都使用相同的阈值。

![action](./images/03.png ':size=90%')


## 子流程
> 不支持

## 运行参数

* Image： 要执行二值化操作的图像。
* Threshold：阈值。范围（0 - 255），低于和高于阈值的像素值将相应改变。如果`Type`选择`BINARY`。低于该值的。像素被置为黑色。高于该阈值的， 则填充为`Value` 表示的颜色， 如果type选择`BINARY_INV`，则反之。
* Value：填充像素值。范围（0 -255）
* Type：要应用的阈值类型[ThresholdTypes](./enums/ThresholdTypes.md)

## 输出
> [`Image`](./types/Image.md)。


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/image/threshold.simple](https://github.com/shelllet/WinUi/blob/main/image/threshold.simple)


