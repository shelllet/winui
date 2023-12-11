# 文本块检测
检测图像上的文本区域。

![TextDetection](./images/04.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 包含文字的图像

* 文本框评分
> 计算文本框的得分，分值太低，则不认为是有效的文本框。

## 输出

> 检测结果，参考：[DetectionResults](./types/DetectionResult.md)。
## 脚本调用

```python
import simple;

```

### 资源

示例 https://github.com/shelllet/WinUi/blob/main/dnn/TextDetection.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/4UfXmg0qnhk" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1Zj411L7Uq&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> 文字检测模型训练：https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/detection.md
