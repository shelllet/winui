# 添加用户 
该动作可以在本地操作系统中增加账户。

![UserAdd](./images/05.png ':size=90%')

## 子流程

> 不支持

## 运行参数

* [account](../../types/String.md)： 账号名称
* [Password](../../types/String.md)： 密码

## 输出

>    类型：[`Boolean`](../../types/Boolean.md) , 添加成功`True`, 失败：`False`;


## 脚本调用

```python
import simple

p = simple.NetUserAddRunner('abc', '123')
# p.account = 'abc'
# p.password = '123'
p.run()

```

## 资源

[https://github.com/shelllet/WinUi/blob/main/system/startprocess.simple](https://github.com/shelllet/WinUi/blob/main/system/UserAdd.simple)


