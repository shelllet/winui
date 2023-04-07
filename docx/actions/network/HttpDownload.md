# 下载 
此动作通过HTTP协议下载网络文件。

![action](./images/2022-11-27_144417.png ':size=90%')


## 运行参数：
![param](./images/2022-11-27_144504.png ':size=90%')



* [Url]： 要下载的URL，HTTP链接。
* [Folder]： 保存的目录。
* [Filename]： 保存的文件名,如果为空,表示使用当前时间作为文件名。

## 输出： 保存的文件的完整路径。：`Path`



## 脚本调用

```python
import simple;

```

### 示例

[https://github.com/shelllet/WinUi/blob/main/http/http_download.simple](https://github.com/shelllet/WinUi/blob/main/http/http_download.simple)


