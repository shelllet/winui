# [0.28](https://github.com/shelllet/winui/compare/main...dev) (2023-09-xx)
### Changed：
1. 优化图像处理相关动作。
2. 更新相应的注册机制。

### 备注
1. 原购买注册版本的用户，需要更新至当前版本，重新注册。

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
