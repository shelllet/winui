# 过滤 
该动作可以过滤包含字符串的数组

![action](./images/2022-11-17_184608.png 'size=90%')


运行参数：
![param](./images/2022-11-17_184756.png 'size=90%')


* [Source]： 含有字符串的数组，例如 *中文识别* 动作。
* [Text]： 文本，字符串类型， 支持 [**通配符（WildCard）**)]({{%relref "basics/logic/wildcard.md" %}})匹配。

* 输出： 屏幕坐标。类型为：`Point`


### 脚本调用

```python
import simple;


```

### 示例

[https://github.com/shelllet/WinUi/blob/main/algorithm/filter_text.simple](https://github.com/shelllet/WinUi/blob/main/algorithm/filter_text.simple)

![preview](./images/2022-11-17_185020.png 'size=90%')


{{% notice tip %}}
最低版本要求: WinUi++ 0.14-beta.6 
{{% /notice %}}