# 动作

动作是 *小友+* 中的执行单元.


## 基础属性
![basic](./images/01.png)

1. 动作介绍
   
   含简单的动作功能信息，可以点击链接打开帮助文档，查看更为详细的信息。
   
2. 动作标题
   
   标题是显示在流程中的动作名称
   
3. 动作名称
   
   每个动作唯一的名称，可以在其他动作或者及脚本中引用的名称，因此该名称要符合*python*变量的定义规则

4. 运行时参数
   
   每个动作都会有不同的运行时参数，每个参数都支持最基本的两种形式：*动作*和*表达式*, 
   * 动作可以选取相应的*前置动作*作为输入参数
   * 表达式可以使用正确的*python*表达式进行运行时的计算
   * 其他运行时参数，会根据参数的实际用途有所不同，比如 *字符串*、 *数字*等等  


