# 枚举窗口 
枚举操作系统中的窗口

![EnumWindows](./images/10.png ':size=90%')

## 子流程
> 支持, 枚举到的每个窗口都会传入子流程。


## 运行参数

* [窗口](./types/Wnd.md)
  > 如果不为空，则枚举相应的子窗口,否则，枚举所有的顶层窗口

* 异步处理子流程
  > 开启线程处理每个枚举到的窗口
## 输出

> 窗口： [`Wnds`](./types/Wnd.md)    


## 脚本调用

```python
import simple;

```

## 资源

示例：https://github.com/shelllet/WinUi/blob/main/window/EnumWindows.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/bnrfNystwcs" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1T8411v78a&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
