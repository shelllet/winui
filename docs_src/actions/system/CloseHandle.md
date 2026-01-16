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
* [name](./types/String.md)：句柄名称。支持 [通配符匹配](./introduction/workflow/wildcard.md) 匹配

## 输出

>  `True` 表示成功，其它值表示失败


## 资源

* 流程：https://github.com/shelllet/WinUi/blob/main/system/CloseHandle.simple



