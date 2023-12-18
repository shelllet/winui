# 视频下载 
通过提供想要下载视频的 *URL* ，下载相应的视频文件。

## 子流程
> 不支持


## 运行参数

* 网址
> 视频链接。
* 音频
> 在预览环境时，只输出音频资源。

* 标签
> 下载的视频*itag*, 可以参考：[YouTube video stream format codes](https://gist.github.com/sidneys/7095afe4da4ae58694d128b1034e01e2)， 也可以通过动作预览，获取 *itag*。
* 输出

> 下载的视频保存的文件夹。

## 输出
> 保存到本地的视频路径，参考：[Path](../types/Path.md)
    


## 脚本调用

```python
import simple;

```

## 资源


!> 目前版本只支持 *Youtube*视频下载，中国用户需要能访问 *Youtube* 的代理网络。