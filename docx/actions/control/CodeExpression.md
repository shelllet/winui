# 表达式 
此动作可以执行`Python`的表达式。

![action](./images/2022-12-03_130327.png 'size=90%')


是否支持子流程：**否**


运行参数：

![param](./images/2022-12-03_130400.png 'size=90%')

* [Expression] `Python`的表达式。必须符合`Python`的语法。注意赋值语句，并非表达式。例如：
```python
a = 10 # 赋值语句。
```
表达式类似如下的写法：
```python
a + 10 # 表达式。
```

输出：表达式的计算结果，如果 `a` 是一个数字。则`a + 10`的结果是一个数字类型`Number`。


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/control/expression.simple](https://github.com/shelllet/WinUi/blob/main/control/expression.simple)


{{% notice note %}}
最低版本要求: WinUi++ 0.14-beta.6 
{{% /notice %}}
