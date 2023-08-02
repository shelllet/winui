# 保存图片 
把图片类型的数据保存到本地磁盘上。

![ImageSave](./images/04.png ':size=90%')
## 权限
> 无要求
## 子流程
> 不支持

## 运行参数

* [图像](../../types/Image.md)： 需要保存图像的动作，或者包含[图像](../../types/Image.md)的变量。
* [目录](../../types/Path.md)：文件保存的位置, 如果为空，使用当前路径，即工作流程所在的路径。
* [名称](../../types/String.md)：文件名称,可为空，默认值：**.png*, 生成以如： *2023-02-28_756046.png* 为名称的文件，其中 *.png* 为图像扩展名，可以更换其它有效文件名。


## 输出
> 保存的文件的完整路径。[`Path`](../../types/Image.md)


## 脚本调用

>   无导出，参考[Image](../../types/Image.md)
```python
import simple;

```

## 资源

https://github.com/shelllet/WinUi/blob/main/files/image_save.simple
