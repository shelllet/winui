# 当...成立 
该动作会开启一个线程不停的检测条件，直到条件成立,当条件成立时，则会去执行子流程。

![action](./images/2022-12-26_163232.png ':size=90%')


## 子流程
> 支持


## 运行参数


* Value： 条件，可以进行 *Boolean* 判断的值。
* Time: 每次检测需要等待的时间间隔。

## 输出

> Thread    


## 脚本调用

```python
import simple;

```

## 示例

[https://github.com/shelllet/WinUi/blob/main/control/when.simple](https://github.com/shelllet/WinUi/blob/main/control/when.simple)
