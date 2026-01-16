# [0.49](https://github.com/shelllet/winui/compare/main...dev) (2026-xx-xx)

### Changed：
1. [ ] 界面重构。
2. [ ] 大模型模型在线下载，解决安装包过大问题。
3. [ ] 加入Ai 功能。


### Note

1. 下载（安装包）：Feature developing...


## [0.48.2](https://github.com/shelllet/winui/compare/main...dev) (2025-11-26)

### Changed：
1. 修复动作运行时参数，如果引用其他动作无法保存的问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`（未来版本中优化）。
3. 下载（安装包）：https://winui.net/_media/simple/小友+0.48.2-setup.x64.exe

## [0.48.1](https://github.com/shelllet/winui/compare/main...dev) (2025-11-26)

### Changed：
1. 鼠标键盘的模拟支持驱动模式，参考[工作流设置](./introduction/setting/workflow.md)。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`（未来版本中优化）。
3. 下载（安装包）：https://winui.net/_media/simple/小友+0.48.1-setup.x64.exe


## [0.48](https://github.com/shelllet/winui/compare/main...dev) (2025-11-11)

### Changed：
1. [查找窗口](./actions/window/FindWindow.md) 支持从多个相同标题或类名的窗口中选择需要处理的窗口。
2. [窗口截图](./actions/media/CaptureWindow.md), 添加参数支持仅截图窗口。
2. 修复搜索动作时，输入特殊字符崩溃问题。
3. 支持插件功能
4. 网络相关动作支持`QUIC`协议
5. 添加[发送输入](./actions/network/SendInput.md)，和[接收输入](./actions/network/ReceiveInput.md) 两个动作，可以同步多台电脑鼠标键盘操作。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`（未来版本中优化）。
3. 下载（安装包）：https://winui.net/_media/simple/小友+0.48.0-setup.x64.exe


## [0.47.2](https://github.com/shelllet/winui/compare/main...dev) (2025-10-13)

### Changed：
1. 修复管理员权限运行时，文件保存打开窗口无法弹出问题。
2. 优化快捷 *添加动作* 弹框功能。
3. 修复管理员权限运行时，无法拖放动作的问题。
4. 修复[键盘/鼠标宏重放](./actions/media/PlayRecord.md) 执行时无法退出流程问题。
5. 修复模拟鼠标点击在手游客户端有时无作用问题。
6. [窗口截图](./actions/media/CaptureWindow.md) 动作增加一个参数，方便仅保存窗口图像。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`。
3. 下载（安装包）：https://winui.net/_media/simple/小友+0.47.2-setup.x64.exe


## [0.47.1](https://github.com/shelllet/winui/compare/main...dev) (2025-10-09)

### Changed：
1. 修复打开低版本创建的档案时，复制、粘贴动作出现的错误。
2. 修复 [打开浏览器](./actions/web/WebOpen.md) 动作的错误。
3. 开启用户相关界面功能（实验性）。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`。
3. 下载（安装包）：https://winui.net/_media/simple/小友+0.47.1-setup.x64.exe


## [0.47.0](https://github.com/shelllet/winui/compare/main...dev) (2025-09-22)

### Changed：
1. 优化文字识别动作，文字识别结果已经更改为从上至下的顺序。
2. 支持鼠标右键拖动动作视图。
3. 修复另存时，项目未进入快速启动列表中。
4. 关机动作更新为 [SuspendSystem](./actions/system/SuspendSystem.md)， 并且支持休眠。
5. 支持运行当前的工作流。
6. [退出流程] 动作更名，参考： [退出流程](./actions/control/Exit.md)。
7. 增加 [域名查询](./actions/network/DomainQuery.md) 动作。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 该版本由于内置了一些文字处理相关的模型，安装包大小已经超过 `300M`。
3. 下载（压缩包，解压覆盖本地文件）：https://winui.net/_media/simple/小友+0.47.0.zip
4. 下载（安装包）：https://winui.net/_media/simple/小友+0.47.0-setup.x64.exe

## [0.46.0](https://github.com/shelllet/winui/compare/main...dev) (2025-07-22)

### Changed：
1. [枚举窗口](./actions/window/EnumWindows.md) 动作不再支持异步处理。
2. 优化绘图动作运行时参数。
3. 优化 `Web` 测试 [打开浏览器](./actions/web/WebOpen.md)动作。
4. 优化 浏览器 [获取 Cookies](./actions/web/WebCookies.md) 动作。
5. 优化 [视频下载](./actions/network/VideoDownload.md) 动作。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.46.0-setup.x64.exe

## [0.45.0](https://github.com/shelllet/winui/compare/main...dev) (2025-06-13)

### Changed：
1. 添加最近打开窗口，方便打开流程。
2. 更新动作预览功能（现在会从流程入口开始执行到该动作执行完结束）。
3. 保存图像动作，支持把图像保存为*PDF*文件（文件名称以 `.pdf` 结尾）。
4. 截图动作中的*ROI* *中心位置* 更改为图像 *左上角*。
5. *窗口截图* 动作输出图像大小调整为窗口所在屏幕大小。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 此版本会清空缓存目录：`%LOCALAPPDATA%/Simple`。
3. 64位下载(x64)：https://winui.net/_media/simple/小友+0.45.0-setup.x64.exe

## [0.44.0](https://github.com/shelllet/winui/compare/main...dev) (2025-05-03)

### Changed：
1. [相机类型](./actions/type/TypeCamera.md) 动作支持工业 USB3/GIGE 接口相机，比如海康相机。
2. 更新 [文字识别](./actions/ai/TextRecognition.md) 动作，运行加载其它语言模型，用来识别中英文以外的文字。
3. 更新 [文字识别（Tesseract）](./actions/ai/TextExtract.md) 动作, 支持基于 *Tesseract* （常用来识别特殊字体）的文字识别。
4. 添加动作菜单*缓存对象*。 用来解决 某些动作反复执行时，由于内置对象的初始化比较耗，导致不必要的时间开销。
5. 动作支持借助脚本更新运行时参数，详情参考动作说明。 
6. 修复导入其它流程崩溃问题。
7. 修复 Web 自动化浏览器无正常退出问题。
8. 修复 [图像匹配](./actions/detection/MatchImage.md) 不显示另 `Else` 连接点。
9. 修复 打开流程后，按 *Enter* 键崩溃问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.44.0-setup.x64.exe


## [0.43.0](https://github.com/shelllet/winui/compare/main...dev) (2025-04-07)

### Changed：
1. 增加[图像匹配](./actions/detection/MatchImage.md) 动作。
2. 增加[条码识别](./actions/ai/BarcodeDetector.md) 动作。
3. [打印日志](./actions/system/PrintMessage.md) 支持输出图片。
4. 修复 [条码生成](./actions/draw/BarcodeCreate.md) 动作崩溃问题
5. 完善文档。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.43.0-setup.x64.exe


## [0.42.4](https://github.com/shelllet/winui/compare/main...dev) (2025-03-30)

### Changed：
1. 修复预览图片在小屏幕无法显示问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.42.4-setup.x64.exe


## [0.42.1](https://github.com/shelllet/winui/compare/main...dev) (2025-02-26)

### Changed：
1. 修复[剪切板](./actions/system/ClipboardValue.md)动作设置剪切板内容时崩溃问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.42.1-setup.x64.exe


## [0.42.0](https://github.com/shelllet/winui/compare/main...dev) (2025-01-20)

### Changed：
1. 修复一些异步动作执行问题。
2. [视频下载](./actions/network/VideoDownload.md) 添加 选择 Cookies 文件参数， 解决登录验证问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://winui.net/_media/simple/小友+0.42.0-setup.x64.exe

## [0.41.0](https://github.com/shelllet/winui/compare/main...dev) (2024-12-14)

### Changed：
1. 修复一些问题。
2. 添加内存读写动作：[ReadMemory](./actions/system/ReadMemory.md)、[WriteMemory](./actions/system/WriteMemory.md)、`DLL`注入：[AttachProcess](./actions/system/AttachProcess.md)。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.41.0-setup.x64.exe

## [0.40.1](https://github.com/shelllet/winui/compare/main...dev) (2024-11-06)

### Changed：
1. 修复动作参数数字无法输入问题。
2. 运行时，禁用流程打开按钮。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.40.1-setup.x64.exe

## [0.40](https://github.com/shelllet/winui/compare/main...dev) (2024-11-04)

### Changed：
1. 更新注册机制。
2. 修复一些其它崩溃问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.40.0-setup.x64.exe

## [0.39](https://github.com/shelllet/winui/compare/main...dev) (2024-09-30)

### Changed：
1. 修复动作分组隐藏问题。
2. 修复一些其它崩溃问题。
3. 调整部分 *UI* 界面。
4. [颜色统计](./actions/algorithm/ColorPercentage.md)，运行时参数 *差值* 变更为 *HSV* 三个分量的差值。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.39.0-setup.x64.exe

## [0.38](https://github.com/shelllet/winui/compare/main...dev) (2024-09-06)

### Changed：
1. 增加鼠标[滚动动作](./actions/mouse/WheelMouse.md)。
2. 动作分组可以在设置中设置隐藏或者显示。
3. 修复编辑器无法编辑问题。

### Note

1. 使用管理员权限运行 *小友+*, 无法显示 *动作* 的拖动效果（已知问题）。
2. 更换默认安装目录为 *ProgramData*，全新安装 *小友+* 时， 不再需要 *管理员* 权限。如果覆盖安装，目录不会做变更。

3. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.38.0-setup.x64.exe


## [0.37](https://github.com/shelllet/winui/compare/main...dev) (2024-08-16)

### Changed：
1. 重命动作： [*退出流程*](./actions/control/Quit.md)。
2. 增加 [关闭窗口](./actions/window/CloseWindow.md)动作。
3. 系统分类增加两个动作： [创建对象]() 和 [方法调用]()。支持调用*dll* 或调用系统已注册的 *COM* 组件。
4. 修复 [调用](./actions/control/Invoke.md) 动作执行崩溃问题。
5. 修复 *变量* 注册问题。
6. [点击 * 网格](./actions/mouse/CellClick.md) 支持设置 *停顿时间*。
7. 修复流程启动/停止时机率崩溃问题。

### Note

1. 64位下载(x64)：https://bitbucket.org/winui-release/version/downloads/winui0.37.0-setup.x64.exe


## [0.36.1](https://github.com/shelllet/winui/compare/main...dev) (2024-07-07)

### Changed：
1. 修复新建流程时，无默认流程。

### Note

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.36.1-setup.x64.exe

## [0.36](https://github.com/shelllet/winui/compare/main...dev) (2024-07-06)

### Changed：
1. 添加图像旋转动作。
2. 修复 安卓中文文字输入时崩溃问题。
3. 优化 [视频下载](./actions/network/VideoDownload.md)动作。
4. 修复其它一些问题。

### Deprecated:

### Note

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.36.0-setup.x64.exe

## [0.35](https://github.com/shelllet/winui/compare/main...dev) (2024-06-05)

### Changed：

1. 修复 [`Runas`](./actions/system/Runas.md)，使用当前账号启动程序问题。

2. 增加远程主机部署功能。

3. 修复一些其它错误。

### Deprecated:
1. 移除分享功能。

### Note

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.35.0-setup.x64.exe

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

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.34.0-setup.x64.exe

## [0.33.2](https://github.com/shelllet/winui/compare/main...dev) (2024-3-20)

### Changed：

1. 修复 [#60](https://github.com/shelllet/winui/issues/60) ： 管理员运行小友+，无法拖拽动作到视图上。
2. 修复动作日志保存问题。

### Deprecated:

### Note

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.33.2-setup.x64.exe


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

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.33.0-setup.x64.exe

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

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.32.0-setup.x64.exe


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

1. 下载：https://bitbucket.org/winui-release/version/downloads/winui0.31.1-setup.x64.exe

