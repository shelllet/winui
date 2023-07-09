# [0.24](https://github.com/shelllet/winui/compare/main...dev) (2023-07-XX)
### Features
1. 异步操作添加 *WorkSwitchStatus*（状态切换）动作
2. 预览图支持通过鼠标框选ROI区域

### Fixed

1. 修复一些BUG.
   
### Deprecated
   
### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本

## [0.23](https://github.com/shelllet/winui/compare/main...dev) (2023-07-08)
### Features
1. 优化一些操作界面，预览动作增加动画

### Fixed

1. 修复打开链接动作 *OpenUri* 参数无法保存问题
2. 修复虚拟中使用里无法执行动作
3. 修复安装在中文路径下面点击运行崩溃问题
4. 修复截图 ROI 设置问题
5. 修复运算符操作相关动作的错误
   
### Deprecated
   
### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本

   
## [0.22](https://github.com/shelllet/winui/compare/main...dev) (2023-06-22)
### Features
1. 增加 *获取颜色* 动作
2. *播放录制* 支持根据半径计算动态坐标，
3. 安卓 *设备列表* 支持异步处理

### Fixed

1. 修复资源界面，无法弹出右键问题
2. 修复模型推理崩溃问题
3. 修复判断动作 *If* 输出不正确问题
4. 修复读取文件动作 *FileRead* 返回的不是字符串问题
5. 修复剪切板动作 *ClipboardValue* 出错的问题

### Deprecated
   
### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本
2. 解除 *Vip* 限制，未来版本会加入31天试用期。

## [0.21](https://github.com/shelllet/winui/compare/main...dev) (2023-06-10)
### Features
1. *过滤字符串*动作支持字符串数组，解决 *或* 的问题
2. 添加 *WindowSize* 动作，用来调整或获取窗口大小
3. *WindowRect* 动作，支持调整窗口位置和尺寸
4. 添加 *RandomPoint* 随机坐标动作
5. *Wait* 动作等待时间随机化
6. 优化异步操作：线程，定时器等
7. 截图相关动作增加 ROI 参数

### Fixed

1. 修复 *矩形中心* 动作计算问题
2. 修复复制工作流崩溃问题
3. 修复变量添加崩溃问题
4. 修复带引号路径启动程序崩溃问题


### Deprecated
1. 删除 *ProcessID* 动作。
   
### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本


## [0.20](https://github.com/shelllet/winui/compare/main...dev) (2023-05-20)
### Features

1. 添加 *移动并双击* 动作
2. 添加 *窗口标题* 动作
3. 添加 *WindowRect* 动作，获取窗口矩形
4. 支持多语言切换
5. 使用 *Acrylic*（ 亚克力背景），提高视觉层次结构。

### Fixed

1. 修复一些崩溃问题。
2. 优化多个动作及动作参数，更容易使用
3. 修复重命名流程崩溃问题
4. 修复右键菜单透明问题


### Deprecated
   
   
### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本

## [0.19](https://github.com/shelllet/winui/compare/main...dev) (2023-04-16)
### Features

1. 添加 *随机数* 动作。
2. *打开程序* 动作添加用户名和密码参数。
3. 添加 [*引用动作*](./actions/control/NameAlias.md)，可以通过名称来引用动作。

### Fixed

1. 修复一些崩溃问题。
2. 优化*Web* 自动化测试相关动作


### Break

1. *RunAsUser* 动作删除，请使用*打开程序*动作。
2. 合并 *屏幕坐标转窗口坐标* 和 *窗口坐标转屏幕坐标* 为 *坐标转换* 动作。
3. *模型* 移动至 *类型* 分组中。 

### Deprecated

### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本
2. 如果无法启动，请卸载之前版本，重新安装


## [0.18](https://github.com/shelllet/winui/compare/main...dev) (2023-03-26)

### Features

1. 增加发布功能
2. 比较操作符动作增加 != 号判断。
3. 增加逻辑运算操作符
4. 增加*模板匹配*，用于查找确定简单的的图片
5. 增加图片*ROI标记*功能（比如找图，只会从标记的区域查找）
6. 增加定位动作功能，可以在左侧动作列表中显示当前的动作。
7. 添加'字符串' 类型动作。

8. 窗口标题随机化
9. *查找图片*和*模板匹配*动作支持**else**分支

### Fixed

1. 修复调整图片大小动作崩溃问题
2. 修复 *判断* 动作中 == 空 问题成立的问题
3. 修复高DPI取得全局坐标出现错的问题
4. 修复打开浏览器动作崩溃的问题
5. 修复单击变双击的问题

### Break

1. *判断* 动作不再支持比较运算符，直接对条件进行判断，如果需要进行比较，请使用比较运行符
2. *When* 动作，不再支持比较运算符，直接对条件进行判断 ，如果需要进行比较，请使用比较运行符
3. 删除*Tail*动作，如果需要退出流程，请使用*退出*动作

### Deprecated
1. *等待图片*动作即将移除

### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本
