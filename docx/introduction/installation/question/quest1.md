## [Deprecated] 事件日志 

1. 按 <kbd>Windows</kbd> + <kbd>R</kbd> 打开运行框，输入 *eventvwr.msc* 打开事件日志。

    ![img](../images/06.png ':size=40%')

2. 双击 *Windows日志*，展开日志来源列表。

    ![img](../images/02.png ':size=70%')

3. 选择 *应用程序* 。

    ![img](../images/05.png ':size=70%')

4. 点击 *筛选当前日志...* ， 或者在 *应用程序* 右键点击选择 *清除日志*，不略过 步骤 [4 ~ 5]。
 
    ![img](../images/01.png ':size=70%')

5. 输入 筛选条件 *Simple simple event source*，点击 *确定*。

    ![img](../images/07.png ':size=60%')

7. 在桌面右键点击 *WinUi++*, 使用 *管理员方身份运行*。

    ![img](../images/08.png ':size=60%')

8. 在事件查看器中，右键点击 *应用程序*，选择 *刷新*，查看日志详情。

    ![img](../images/09.png ':size=60%')

## 日志文件

在资源管理器地址栏输入 `%LOCALAPPDATA%\Simple\Logs`，打开该目录,打开文件**-error.log*，查看日志文件。如果仍无法解决，加入群聊，联系开发人员。