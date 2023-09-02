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

## 示例