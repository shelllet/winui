# 查找元素 
查找 *Web* 元素

![action](./images/02.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* Driver： 浏览器对象，即 *WebOpen* 动作的返回值。
* By： 查找元素的方法, 参考 [定位策略](./introduction/webdriver/locators.md)


## 输出

> 查找到的 *Web* 元素, 类型：[WebElement](./types/WebElement.md)   


## 脚本调用

```python
import simple;

```

## 示例

通过 *ID* 查找百度搜索输入框，输入文本`WinUi++`：https://github.com/shelllet/winui/blob/main/web/input.simple
