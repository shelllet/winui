# 打开应用 
打开Windows系统当中的软�?该动作不会等待程序结束�?

![OpenApplication](./images/06.png ':size=90%')

## 权限
> 无要�?

## 子流�?

> 不支�?

## 运行参数

* [app](/types/Path.md) 程序路径
* [commandLine](/types/String.md) 传递的命令行参�?
* [workingDirectory](/types/Path.md)：工作目�?
* [env](/types/String.md)：环境变�?
  

## 输出

> 启动的程序路径�?[`Path`](/types/Path.md) 类型


## 脚本调用

```python
import simple

r = simple.OpenApplicationRunner("C:\\Program Files (x86)\\Steam\\Steam.exe")
# r.app = "C:\\Program Files (x86)\\Steam\\Steam.exe"
r.run()
```


## 资源

* 示例流程：https://github.com/shelllet/WinUi/blob/main/system/OpenApplication.simple





