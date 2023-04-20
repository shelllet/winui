# 脚本 
该动作可以执行一些`Python`脚本。

![action](./images/2022-12-03_125827.png ':size=90%')


## 子流程

> 不支持


## 运行参数


* Code：`Python`脚本。如果在子流程中使用全局变量，可以在脚本里边加入`global`。例如：
* 
```python
global var
```
  

## 输出

>    无输出。


## 脚本调用

```python
import simple;

global var

var = 10

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/control/code.simple](https://github.com/shelllet/WinUi/blob/main/control/code.simple)

