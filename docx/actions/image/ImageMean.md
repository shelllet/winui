# 均值

均值操作是图像预处理里非常关键的步骤，主要目的是消除图像数据中的偏差，让模型能够更稳定地学习。

### 原理

在深度学习中，模型训练时使用的图像数据往往会经过预处理，其中均值操作是重要的一环。具体做法是，从图像的每个像素值里减去预先计算好的均值。这样做可以把图像数据的中心调整到零附近，从而加快模型的收敛速度，还能提升模型的稳定性。

### 使用场景

* 模型训练：在训练深度学习模型时，通常会对训练数据计算均值，然后在训练和推理阶段都进行减去均值的操作，保证数据的一致性。
* 模型推理：在使用预训练模型进行推理时，需要按照模型训练时的预处理方式，对输入图像进行减去均值的操作，这样才能得到准确的结果。


![ImageMean](./images/17.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 图像
> 待处理的图像。
* 均值
> 每个通道的均值，默认（0.485, 0.456, 0.406），对应 *RGB* 格式的图像。前提是图像像素已缩放至 *0~1*。如果图像像素没有缩放（图像默认像素范围是 *0~255*），则使用类似：`(0.485, 0.456, 0.406）* 255 =（123.680，116.779, 103.939)` 值。



## 输出

> 均值后的的图像，参考 [`Image`](./types/Image.md)。


## 脚本调用

```python
import simple;

```

## 资源

!> 如果将默认均值应用到您自己的数据集中，可能不会获得良好的性能，因为这些统计数据属于 *ImageNet*， 您需要根据不同的预训练的深度学习模型，使用不同的均值。


### [how to calculate the mean and std in the DataLoader? Here I give two ways](https://xydida.com/2022/9/11/ComputerVision/Normalize-images-with-transform-in-pytorch-dataloader/):

1. Calculate mean and std of the three channels in each batch and average them at the end.

```

def mean_std_for_loader1(loader: DataLoader):
    mean = torch.zeros(3)
    std = torch.zeros(3)
    for X, _ in loader:
        for d in range(3):
            mean[d] += X[:, d, :, :].mean()
            std[d] += X[:, d, :, :].std()
    mean.div_(len(loader))
    std.div_(len(loader))
    return list(mean.numpy()), list(std.numpy())

means, stds = mean_std_for_loader1(train_dataloader)
print(means)
print(stds)

# Output
# [0.47921667, 0.44638008, 0.40927842]
# [0.26486507, 0.25691825, 0.2580299]
```

2. The std can be derivated from the mean of square of the data and square of the mean of the data, this is referenced from Jorrit Willaert [1]. Here is the formula:

```
def mean_std_for_loader(loader: DataLoader):
    # var[X] = E[X**2] - E[X]**2
    channels_sum, channels_sqrd_sum, num_batches = 0, 0, 0
    for data, _ in tqdm(loader):
        this_batch_size = data.size()[0]
        weight = this_batch_size / loader.batch_size
        channels_sum += weight*torch.mean(data, dim=[0, 2, 3])
        channels_sqrd_sum += weight*torch.mean(data ** 2, dim=[0, 2, 3])
        num_batches += weight

    mean = channels_sum / num_batches
    std = (channels_sqrd_sum / num_batches - mean ** 2) ** 0.5
    return mean, std

means, stds = mean_std_for_loader(train_dataloader)
print(means)
print(stds)

# Output
# tensor([0.4786, 0.4459, 0.4088])
# tensor([0.2656, 0.2577, 0.2589])
```