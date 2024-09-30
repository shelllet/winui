# 查找窗口 
查找操作系统中的窗口，该动作支持通过*窗口标题*或者*窗口类*搜索窗口。

* 多个相同的窗口，该动作只会返回其中一个窗口，顺序不确定。

![FindWindow](./images/02.png ':size=90%')

## 子流程
> 不支持

## 运行参数

* 父窗口
> 默认为空，如果不为空，查找相应的子窗口，不为空，则查找当前系统所有的顶层窗口。可借助 *Spy++* 来辅助操作。

* 标题
> 窗口标题，支持 [通配符匹配](./introduction/workflow/wildcard.md)。

* 窗口类
  > 窗口类名，支持 [通配符匹配](./introduction/workflow/wildcard.md)。

## 输出

> 窗口：[`Wnd`](./types/Wnd.md)


### 其它

示例：https://github.com/shelllet/WinUi/blob/main/window/FindWindow.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/Atc4D8egT3s" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1hu411w7WV&page=1&autoplay=0" height='640px' scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

!> [Windows下的程序及热键监视神器——Spy++](https://zhuanlan.zhihu.com/p/355878952)

!> 附件: [spy++](https://gitlab.com/junwu/winui/-/raw/main/tools/spyxx.zip)