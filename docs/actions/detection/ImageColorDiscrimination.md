# 颜色辨识

辨别图像的颜色是否为指定颜色。

![ImageColorDiscrimination](./images/09.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 图像
> 待辨识的图像，一般使用纯色图像辨识。

* 颜色
> 参考：[Colors](./enums/Colors.md)。注意：`RED`(红色) 和 `BLUE`(蓝色)使用 *BGR* 颜色模式。

## 输出

> 参考：[Boolean](./types/Boolean.md)， 图像符合指定的颜色走左边分支流程，否则走右边流程分支。



## 其它

示例： https://github.com/shelllet/WinUi/blob/main/algorithm/ImageIsColored.simple




