# 遍历文件 
遍历本地文件夹当中的所有文件。

![DirectoryIterator](./images/07.png ':size=90%')

## 权限
> 无要求
## 子流程
> 支持， 每个被被遍历到的文件或文件夹传入子流程


## 运行参数

* [path](./types/Path.md)
  > 要遍历的文件夹
* [recursive](./types/Boolean.md)
 > 是否递归遍历, 默认 `False`。

 * 扩展名 [`extensions`](./types/String.md)
> 根据文件扩展名过滤，多个扩展名使用 `,` 、`;` 或者 `|` 分隔。

* [async](./types/Boolean.md)
  > 是否异步处理子流程，也就是开启线程处理子流程。默认 `False`，不支持在脚本中使用。

## 输出

> 返回遍历到的所有文件路径。[Paths](./types/Path.md) ，路径列表。   


## 脚本调用

```python
import * from simple;

def cbk(path):
    simple.info(path)

r = DirectoryIteratorRunner('C:\Users\\shell\\Download')

r.run(cbk)
```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/filesystem/DirectoryIterator.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/wyNKOzko77Q" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1ym4y1p725&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>



## 版本变化

* 0.45
> 增加 *扩展名过滤* 参数。