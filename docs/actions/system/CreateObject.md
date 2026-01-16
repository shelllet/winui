# 创建对象 
创建 *COM* 对象，或者调用创建有 *c（__cdec）* 接口函数的 *DLL* 模块. 同样也支持创建具有 *__stdcall* 调用约定的 *DLL* 模块。

![CreateObject](./images/15.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 选项
> 参考：[ModuleOption](./enums/ModuleOption.md)。

* 值

> 当选择 *CDLL* 或者 *WINDLL*， 该参数用来指定动态链接的文件地址。当选择 *COM* 时，该参数用来指定创建的 *COM* 对象，比如：`Word.Application` 。其它选项该参数无效。

## 输出

> 对象。 


## 其它

`Beep` 调用：https://github.com/shelllet/WinUi/blob/main/system/beep.simple

`FindWindowW` 调用：https://github.com/shelllet/WinUi/blob/main/system/findwindow.simple

DLL 调用：https://github.com/shelllet/WinUi/blob/main/system/dll.simple

COM 调用：https://github.com/shelllet/WinUi/blob/main/system/com.simple



