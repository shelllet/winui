# 文本筛选
在数组或者列表中，筛选包含指定文本的元素。

![FilterText](./images/02.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* 数据 
>   含有文本的列表，例如 [*文字识别*](./actions/ai/TextChinese.md) 动作。
  
* 文本
> 文本，*字符串* 类型，参考：[String](./types/String.md)， 支持 [*通配符（WildCard）*](./introduction/process/wildcard.md) 匹配。

## 输出

> 包含指定文本的字符串列表。如果列表长度不为 `0`, 走左侧分支，否则走右侧分支。


## 其它

示例：https://github.com/shelllet/WinUi/blob/main/algorithm/FilterText.simple

