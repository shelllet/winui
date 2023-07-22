# 添加用户 
该动作可以在本地操作系统中增加账户。

![UserAdd](./images/05.png ':size=90%')

## 权限
> 管理员

## 子流程

> 不支持

## 运行参数

* [account](./types/String.md)： 账号名称
* [password](./types/String.md)： 密码
* [homeDir](./types/Path.md)： 用户目录，通常在 *C:\Users* 路径下面会有操作系统中所有账号的用户目录

## 输出

>    类型：[`Boolean`](./types/Boolean.md) , 添加成功`True`, 失败：`False`;


## 脚本调用

```python
import simple

p = simple.NetUserAddRunner('abc', '123')
# p.account = 'abc'
# p.password = '123'
p.run()

```

## 资源

* 示例流程: https://github.com/shelllet/WinUi/blob/main/system/UserAdd.simple


<iframe type="text/html" height="640px" src="https://www.youtube.com/embed/28NohYUVZHY" frameborder="0"></iframe>

<iframe src="//player.bilibili.com/player.html?bvid=BV1i14y1S73Z&page=1&autoplay=0” height='640px' scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


