# 监听鼠标 
监听鼠标操作

![ListenMouse](./images/08.png ':size=90%')

## 子流�?
> 支持


## 运行参数

* 鼠标�?
  > 鼠标消息，参考：[MouseMessage](/enums/MouseMessage.md)�?


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






