# 监听鼠标 
监听鼠标操作

![ListenMouse](./images/08.png ':size=90%')

## 子流程
> 支持


## 运行参数

* [msg](./enums/MouseMessage.md)
  > 鼠标消息


## 输出
 > `Connection`   
    

## 脚本调用

```python
import * from simple;

def cbk(pt):
    simple.info(pt)

r = ListenMouseRunner()
r.msg = MouseMessage.MouseWheelForward
r.run(cbk)
```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/mouse/ListenMouse.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/TFQq4hpgYFs" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1nh4y1v7TG&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>