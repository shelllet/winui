# 等待图像 
等待窗口当中，是否出现或者不出现某张选定的图像

![start process](./images/2022-12-10_124143.png 'size=90%')


是否支持子流程：**否**

运行参数：
![param](./images/2022-12-10_124440.png 'size=90%')

* [Window]： 窗口
* [Image]： 图像 
* [Algorithm]： 算法 
* [Method]： `Exist` 存在，`Missing` 不存在 


#### 输出：

如果存在，输出图像位置`RotatedRect`，如果不存在，输出 `Null`


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/system/wait_image.simple](https://github.com/shelllet/WinUi/blob/main/sSystem/wait_image.simple)


{{% notice tip %}}
版本: WinUi++ 0.14-beta.7 
{{% /notice %}}
