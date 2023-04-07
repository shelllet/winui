# 图像查找 
此动作可以在一张图片当中查找具有某些特征的图像

![action](./images/2022-12-10_182315.png ':size=90%')


## 子流程

> 否


## 运行参数：

![param](./images/2022-12-10_182424.png ':size=90%')

* [Source] 源图像 
* [Target] 要查找的图像 
* [Algorithm] 查找算法 


## 输出：如果找到图像输出`RotatedRect` 类型，包含中心坐标。参考：[RotatedRect]({{%relref "type/RotatedRect.md" %}})


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/detection/find_image.simple](https://github.com/shelllet/WinUi/blob/main/detection/find_image.simple)

