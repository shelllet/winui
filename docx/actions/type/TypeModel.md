# 模型 
定义 *ONNX* 模型文件。

![TypeModel](./images/14.png ':size=90%')

## 子流程

> 不支持


## 运行参数

* 模型
> 模型文件，后缀名为：`.onnx`。

* 类型
> 由于模型文件通常比较大，加载需要比较长的时间，为避免动作每次执行都加载模型文件，可以打开此开关，切换为静态。

## 输出

> 模型，参考：[`ModelSession`](./types/ModelSession.md)。


## 脚本调用

```python
import simple;

model = simple.ModelSession('simple.onnx')
```

## 示例



