# [0.37](https://github.com/shelllet/winui/compare/main...dev) (尚未发布)

### Changed：
1. 重命动作： [*退出流程*](./actions/control/Quit.md)。
2. 增加 [关闭窗口](./actions/window/CloseWindow.md)动作。
3. 系统分类增加两个动作： [创建对象]() 和 [方法调用]()。支持调用*dll* 或调用系统已注册的 *COM* 组件。

### Note

1. 下载：


## [0.36.1](https://github.com/shelllet/winui/compare/main...dev) (2024-07-07)

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
