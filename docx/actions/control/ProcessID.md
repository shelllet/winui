# 流程标志 
每个正在运行的流程都有一个唯一的数字标志，该标志从`0` 开始递增， 可以通过标志匹配执行相应的子流程

![pocessid](./images/2022-11-08_190242.png ':size=90%')


## 子流程：
> 支持


## 运行参数：

![param](./images/2022-11-08_190840.png ':size=90%')

* 参数[Extact Value]： 标志匹配, 如果标志值相等，则会执行子流程

## 输出：

    当前流程标志, `Number` 类型


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/control/processid.simple](https://github.com/shelllet/WinUi/blob/main/control/processid.simple)
