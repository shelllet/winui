# 随机数 
生成随机数


![action](./images/01.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* [Min] 最小值

* [Max] 最大值


## 输出

> 随机数，[`Number`](../../types/Number.md)类型


## 脚本调用

```python
import simple


```

## 示例

[https://github.com/shelllet/WinUi/blob/main/algorithm/random_num.simple](https://github.com/shelllet/WinUi/blob/main/algorithm/random_num.simple)


!> 该动作被执行之后就会生成确定的随机数。其他所有引用该动作的运行参数,都会是相同的值。如果想使用不同的随机数值，请创建多个*随机数*动作，或者使用*Python* 表达式：https://learnku.com/docs/pymotw/random-pseudorandom-number-generators/3387