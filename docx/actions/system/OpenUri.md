# 打开链接 
该动作可以启动浏览器打开指定的网址

![OpenUri](./images/08.png ':size=90%')

## 权限
> 无要求


## 子流程

> 不支持

## 运行参数

* [url](../../types/Url.md)： 要打开的链接

## 输出

> 打开的链接，和 参数 `url` 相同。

## 脚本

```python
import simple

r = simple.OpenUriRunner("https://winui.net/#/")
# p.url = "https://winui.net/#/"
```


## 资源

* 视频介绍：
* 视频介绍：
* 流程：https://github.com/shelllet/WinUi/blob/main/system/OpenUri.simple