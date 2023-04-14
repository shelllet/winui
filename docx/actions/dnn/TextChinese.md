# 中文识别 
识别图片中的中文文字。




## 运行参数

* Image： 待识别文字的图片。
* Score： 文字评分。
* Cls： 文字方向分类，使用于0°和180°的图片。
* Filter Text： 文本过滤。
    支持统配符匹配, `*` 表示多个字符，`?` 表示一个字符

## 输出 `list<DetectResult>`


## 脚本调用
    脚本可以支持通过窗口标题和窗口类来查找窗口

```python
import simple;


```

### 示例

[https://github.com/shelllet/WinUi/blob/main/dnn/textchinese.simple](https://github.com/shelllet/WinUi/blob/main/dnn/textchinese.simple)
