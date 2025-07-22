# 形态学操作 
形态学操作是一组基于形状处理图像的操作。他们将结构化元素应用于输入图像并生成输出图像。 


最基本的形态学操作有两种：侵蚀和膨胀

1. 侵蚀作用： 

   * 侵蚀掉前景对象的边界
   * 用于减少图像的特征。

2. 膨胀的作用： 

   * 增加物体面积
   * 用于强调特征


![ImageMorphological](./images/08.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 待处理图像
* 内核
>   卷积核大小。 可以通过预览，调整此参数为合适的值。

* 操作
  > 腐蚀或者膨胀, 参考 [MorphologicalOperations](./enums/MorphologicalOperations.md)



## 输出

 
## 资源

示例：https://github.com/shelllet/WinUi/blob/main/image/ImageMorphological.simple




