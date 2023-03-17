# When 
该动作会开启一个线程不停的检测，直到条件成立。

![action](./images/2022-12-26_163232.png 'size=90%')


是否支持子流程：**支持**


运行参数：

![param](./images/2022-12-26_163309.png 'size=90%')

* [Source]： 用来比较的第一个参数
* [Operator]： 运算符， 目前支持 `>` 、`==` 、 `<` 三种运算符
  
* [Target]：用来比较的第二个参数

输出：

    打开的线程，*Thread*


### 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/control/when.simple](https://github.com/shelllet/WinUi/blob/main/control/when.simple)


{{% notice tip %}}
最低版本要求: WinUi++ 0.14-beta.10 
{{% /notice %}}
