# 调用 
此动作可以调用同一项目中的其他流程（非子流程）。

![Invoke](./images/04.png ':size=90%')


## 子流程
> 不支持


## 运行参数


* 流程
> 所有流程都会在下拉列表当中列出。所以此参数只需要从下拉列表当中选择其他流程即可。注意：选择相同的流程，可能出现死循环。
  
* 数据
> 传至被调用流程的数据, 在被调用的流程中可以通过 [参数](./actions/control/Param.md)获取该值。

## 输出

>    无。

## 其它

示例：https://github.com/shelllet/WinUi/blob/main/control/invoke.simple


