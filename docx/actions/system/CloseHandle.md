# 关闭句柄 
关闭应用程度打开的句柄。

![CloseHandle](./images/10.png ':size=90%')

## 权限
> 无要求

## 子流程

> 不支持


## 运行参数

* [exeFile](./types/Path.md)：应用程序，为避免同名程序文件，这个值应为程序路径
* [type](./enums/HandleType.md)：句柄类型
* [name](./types/String.md)：句柄名称。支持 [通配符匹配](./intro/workflow/wildcard.md) 匹配

## 输出

>  `True` 表示成功，其它值表示失败

## 脚本

```python
import simple;

r = simple.CloseHandleRunner()
r.exeFile = 'C:\\Users\\shell\\Diablo II Resurrected\D2R.exe'
r.type = simple.HandleType.Event
r.name = '*\\DiabloII Check For Other Instances'
r.run()
```

## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/system/CloseHandle.simple

<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/Kj_zEqtAozU" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1w14y1o7Zx&page=1&autoplay=0" height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>