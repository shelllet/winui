# 使用逻辑

这里介绍 `WinUi++` 基本的使用逻辑：

* 将动作添加到视图上。
  
* 设置每个动作的属性。
  
* 将动作用线连接起来形成流程。

* 每个动作有运行时参数和输出。
 
* 从属性面板中设置运行时参数。
  
* 其中*判断*等动作有两个分支，其它动作通常只有一个分支，左侧分支表示成功运行，右侧分支表示非成功执行。
  
* 有些动作支持子动作
  
* 动作可以隐藏，在流程执行的过程中会忽略
  
* 大多数动作都支持预览运行结果，可以打开预览窗口查看运行执行结果。
  
* 每个动作的运行时参数基本上都支持**Python**表达式或者选择已有的前置动作。

* 每个流程从**Head**动作开始执行。 

* 流程动作执行完毕，默认不退出，如果需要退出流程，需要添加*退出*动作。