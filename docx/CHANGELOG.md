# [0.36.1](https://github.com/shelllet/winui/compare/main...dev) (2024-07-07)

### Changed：
1. 修复新建流程时，无默认流程。

### Note

1. 下载：https://winui.net/_media/winui++0.36.1-setup.x64.exe

# [0.36](https://github.com/shelllet/winui/compare/main...dev) (2024-07-06)

### Changed：
1. 添加图像旋转动作。
2. 修复 安卓中文文字输入时崩溃问题。
3. 优化 [视频下载](./actions/network/VideoDownload.md)动作。
4. 修复其它一些问题。

### Deprecated:

### Note

1. 下载：https://winui.net/_media/winui++0.36.0-setup.x64.exe

## [0.35](https://github.com/shelllet/winui/compare/main...dev) (2024-06-05)

### Changed：

1. 修复 [`Runas`](./actions/system/Runas.md)，使用当前账号启动程序问题。

2. 增加远程主机部署功能。

3. 修复一些其它错误。

### Deprecated:
1. 移除分享功能。

### Note

1. 下载：https://winui.net/_media/winui++0.35.0-setup.x64.exe

## [0.34](https://github.com/shelllet/winui/compare/main...dev) (2024-4-27)

### Changed：

1. 改进预览和调试功能。
2. 发送按键支持 <kbd>Alt</kbd> + <kbd>Tab</kbd>。
3. 关机动作优化，增加注销和重启功能。
4. 图像相对位置标记支持 左中，右中，上中，下中。
5. 变量支持备注。
6. `登录应用` 动作更名为 [`Runas`](./actions/system/Runas.md)，并修因提高权限导致的启动错误
7. [`查找元素`](./actions/web/WebGetElement.md) 动作支持查找元素的子节点。
8. 添加[`等待按键`](./actions/keyboard/WaitKey.md) 动作。

### Deprecated:

### Note

1. 下载：https://winui.net/_media/winui++0.34.0-setup.x64.exe

## [0.33.2](https://github.com/shelllet/winui/compare/main...dev) (2024-3-20)

### Changed：

1. 修复 [#60](https://github.com/shelllet/winui/issues/60) ： 管理员运行WinUI++，无法拖拽动作到视图上。
2. 修复动作日志保存问题。

### Deprecated:

### Note

1. 下载：https://winui.net/_media/winui++0.33.2-setup.x64.exe


## [0.33](https://github.com/shelllet/winui/compare/main...dev) (2024-2-24)

### Changed：

1. 添加 [点击 * 网格](./actions/mouse/CellClick.md)。
2. [参数](./actions/control/Param.md) 动作添加索引参数。
3. 安卓操作添加[*键盘输入*](./actions/android/Adbkeyboard.md)，支持中文输入。
4. 修复：删除有多个入口动作时崩溃问题。
5. 监听鼠标键盘动作忽略由动作本身发出的键盘鼠标模拟。
6. 修复[判空](./actions/control/IsEmpty.md) 动作逻辑错误。

### Deprecated:

### Note

1. 下载：https://winui.net/_media/winui++0.33.0-setup.x64.exe

## [0.32](https://github.com/shelllet/winui/compare/main...dev) (2024-1-19)

### Changed：

1. 移动鼠标动作支持多显示器。
2. 优化统计分析模块。
3. 优化浏览器操作
4. 恢复 *For*（循环）动作名称。
5. *访问数组* 中的索引参数，去掉数字类型，使用表达式，同时支持字典访问。
5. 恢复 *前置窗口截图*，重命名为：[CaptureActiveWindow(活动窗口截取)](./actions/media/CaptureActiveWindow.md)。

### Deprecated:

### Note

1. 下载：https://winui.net/_media/winui++0.32.0-setup.x64.exe


## [0.31](https://github.com/shelllet/winui/compare/main...dev) (2023-12-22)

### Changed：

1. *工作线程* 动作支持选择是否立即运行。
2. *监听鼠标* 动作支持鼠标侧键。
3. *For*（循环）动作名称变更为 *Iterate*（迭代）动作，功能不变。
4. *IterParam*（迭代参数）动作名称变更为 *Param*（参数）动作，并支持设置默认参数，功能不变。
5. 增加 *StandardPath*（标准路径）动作，用来表示系统常用路径。
5. 增加 *FlashWindow*（闪烁窗口）动作，用来闪烁窗口，定位多个相同名称/类名的窗口。
6. 优化网络相关动作

### Deprecated:

1. *前置窗口截图* 动作弃用，请使用 [*窗口截图*](./actions/media/CaptureWindow.md) 动作。 
1. *窗口筛选* 动作弃用，请使用 [*EnumWindows*](./actions/window/EnumWindows.md) 动作。 

### 备注

1. 下载：https://winui.net/_media/winui++0.31.1-setup.x64.exe

## [0.30](https://github.com/shelllet/winui/compare/main...dev) (2023-11-10)

### 变更：

1. 添加几个用于操作容器的函数动作。

2. 修复 *访问数组* 动作在索引字符串列表时的错误。
3. 修复动作 *二维码识别* 中的错误。
4. 修复 *中文识别*动作 无法识别问题。


### 备注

1. 下载：https://winui.net/_media/simple/WinUi0.30-setup.x64.exe


## [0.29.1](https://github.com/shelllet/winui/compare/main...dev) (2023-10-15)
### Changed：

1. *鼠标监听* 支持监听鼠标按下。
2. 图像查找（特征匹配）返回匹配的多个图像。
3. 增加 *颜色填充* 动作。
4. 增加 *形状查找* 动作，可以查找 *长方形*、 *正方形*、 *三角形*。
5. 修复打包错误


### 备注

1. 下载：https://winui.net/_media/simple/0.29.1/setup.exe

## [0.28](https://github.com/shelllet/winui/compare/main...dev) (2023-09-23)
### Changed：
1. 优化图像处理相关动作。
2. 更新相应的注册机制。

### 备注
1. 原购买注册版本的用户，需要更新至当前版本，重新注册。
2. 下载：https://winui.net/_media/simple/0.28/setup.exe

## [0.27](https://github.com/shelllet/winui/compare/main...dev) (2023-09-02)
### Changed：
1. 支持项目导入。
2. 修复动作 *DoubleClick*（双击） 添加问题
3. 修复动作 *DragPointer*（拖动） 问题
4. 修复添加空变量崩溃问题。
5. 修复鼠标键盘录制闪退问题。
6. 修复某些条件下，启动 *WinUi++* 界面无响应问题
7. 修复禁用动作不工作的问题


## [0.26](https://github.com/shelllet/winui/compare/main...dev) (2023-08-15)
### Changed：
1. 添加 *异步等待* 动作
2. 添加 *相机* 类型动作和 *相机图像* 动作用于采集相机图像
3. *鼠标/键盘重放* 动作更新为同步操作


## [0.25](https://github.com/shelllet/winui/compare/main...dev) (2023-07-26)
### Features
1. 添加动作 *ImageMarkRelativeROI*，方便对图像设置感兴趣的区域
2. 添加动作 *WindowPoint*，方便获取窗口中几个选定坐标位置

### Fixed

1. 修复动作中 `Boolean` 类型的运行时参数.无法保存设置。


### Deprecated

### 备注

1. 直接从https://winui.net/ 下载即可下载最新版本

## [0.24](https://github.com/shelllet/winui/compare/main...dev) (2023-07-15)
### Features
1. 异步操作添加 *WorkSwitchStatus*（状态切换）动作
2. 预览图支持通过鼠标框选ROI区域
3. *PointConvert* （坐标转换）动作添加：是否包含标题栏参数

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
