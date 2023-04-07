# 裁切图片 
该动作可以在一张图片上选择一块区域，进行裁切。

![action](./images/01.png ':size=90%')


## 子流程：**否**

## 运行参数：
![param](./images/02.png ':size=90%')

* [Image]： 需要截取的原图像。
* [ROI]： 感兴趣的区域， 参见：[Rect]({{%relref "type/Rect.md" %}})

## 输出：裁切的子图像


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/image/crop.simple](https://github.com/shelllet/WinUi/blob/main/image/crop.simple)

