- [小友+](/)
  - [使用需知](./introduction/README.md)
  - 软件安装
      - [直接安装](./introduction/installation/installed_by_exe.md)
      - [微软商店安装](./introduction/installation/installed_by_msix.md)
      - 安装问题
        - [新安装无法启动](./introduction/installation/question/quest1.md)
        - [覆盖安装无法启动](./introduction/installation/question/quest2.md)
      - 设置
        - [动作分组隐藏](./introduction/installation/setting/action_group_setting.md)
  - 流程介绍
    - [项目属性](./introduction/workflow/property.md)
    - [使用逻辑](./introduction/workflow/logic.md)
    - [鼠标/键盘宏录制](./introduction/workflow/record)
    - [变量](./introduction/workflow/variable.md)
    - [资源](./introduction/workflow/resources.md)
    - [动作](./introduction/workflow/action.md)
    - [流程操作技巧](./introduction/workflow/skill.md)
  - 浏览器
    - [Web 定位策略](./introduction/webdriver/locators.md)
    - [WebDriver 下载](./introduction/webdriver/download.md)
    - [浏览器配置目录](./introduction/webdriver/browser_directory.md)
    - [UIAutomatorViewer 工具](./introduction/android/uiautomatorviewer.md)

  - 字符匹配
    - [Glob模式](./introduction/mixed/glob.md)
    - [通配符](./introduction/mixed/wildcard.md)

  - AI
    - [Tesseract 支持的语言](./introduction/tesseract/Languages_Scripts.md)
    - [Tesseract 数据文件](./introduction/tesseract/Data-Files.md)
    - [Tesseract 5 的训练](./introduction/tesseract/tesstrain.md)
    - [安装 CUDA](./introduction/mixed/CUDA.md)
    - [cuDNN 和 CUDA 版本对应关系](./introduction/mixed/cuDNN.md)
    - [Paddle2ONNX模型转化](./introduction/mixed/paddle2onnx.md)
  - [动作](./actions/README.md)
    - 系统
      - [等待](./actions/system/Wait.md)
      - [启动应用](./actions/system/StartProcess.md)
      - [添加用户](./actions/system/UserAdd.md)
      - [打开应用](./actions/system/OpenApplication.md)
      - [打开文件](./actions/system/LaunchFile.md)
      - [打开链接](./actions/system/OpenUrl.md)
      - [退出系统](./actions/system/ExitWindows.md)
      - [关闭句柄](./actions/system/CloseHandle.md)
      - [检测进程](./actions/system/ExistProcess.md)
      - [终止进程](./actions/system/KillProcess.md)
      - [登录应用](./actions/system/Runas.md)
      - [剪切板](./actions/system/ClipboardValue.md)
      - [打印日志](./actions/system/PrintMessage.md)
      - [创建对象](./actions/system/CreateObject.md)
      - [调用方法](./actions/system/CallMethod.md)
      - [读内存](./actions/system/ReadMemory.md)
      - [写内存](./actions/system/WriteMemory.md)
      - [附加进程](./actions/system/AttachProcess.md)
    - 异步操作
      - [定时器](./actions/asynchronous/WorkTimer.md)
      - [定时任务](./actions/asynchronous/WorkTask.md)
      - [工作线程](./actions/asynchronous/WorkThread.md)
      - [异步结束](./actions/asynchronous/WorkExit.md)
      - [异步启动](./actions/asynchronous/WorkBegin.md)
      - [状态切换](./actions/asynchronous/WorkReset.md)
      - [等待事件](./actions/asynchronous/WhenEvent.md)
      - [异步等待](./actions/asynchronous/WorkWait.md)
    - 文件系统
      - [读取文件](./actions/filesystem/FileRead.md)
      - [文件写入](./actions/filesystem/FileWrite.md)
      - [按行读取](./actions/filesystem/ReadLines.md)
      - [保存图片](./actions/filesystem/ImageSave.md)
      - [加载图像](./actions/filesystem/ImageLoad.md)
      - [搜索文件](./actions/filesystem/FileQuery.md)
      - [遍历文件](./actions/filesystem/DirectoryIterator.md)
      - [文件复制](./actions/filesystem/CopyFile.md)
      - [标准路径](./actions/filesystem/StandardPath.md)
    - 键盘
      - [发送按键](./actions/keyboard/SendKey.md)
      - [发送文本](./actions/keyboard/SendText.md)
      - [按下按键](./actions/keyboard/PressKey.md)
      - [释放按键](./actions/keyboard/ReleaseKey.md)
      - [监听键盘](./actions/keyboard/ListenKeyboard.md)
      - [按下并释放](./actions/keyboard/PressAndReleaseKey.md)
      - [等待按键](./actions/keyboard/WaitKey.md)
    - 鼠标
      - [移动鼠标](./actions/mouse/MovePointer.md)
      - [点击](./actions/mouse/Click.md)
      - [移动并点击](./actions/mouse/MoveClick.md)
      - [移动并双击](./actions/mouse/MoveDoubleClick.md)
      - [双击](./actions/mouse/DoubleClick.md)
      - [右键点击](./actions/mouse/RightClick.md)
      - [拖拽](./actions/mouse/DragPointer.md)
      - [监听鼠标](./actions/mouse/ListenMouse.md)
      - [偏移移动](./actions/mouse/MoveOffset.md)
      - [点击*网格](./actions/mouse/CellClick.md)
      - [移动*网格](./actions/mouse/CellMove.md)
      - [滚动鼠标](./actions/mouse/WheelMouse.md)
    - 窗口
      - [查找窗口](./actions/window/FindWindow.md)
      - [特定窗口](./actions/window/SpecialWindow.md)
      - [消息框](./actions/window/MessageBox.md)
      - [激活窗口](./actions/window/ActiveWindow.md)
      - [祖先窗口](./actions/window/WindowAncestor.md)
      - [窗口置顶](./actions/window/PositionWindow.md)
      - [运行框](./actions/window/WinRun.md)
      - [窗口可视](./actions/window/WindowVisible.md)
      - [枚举窗口](./actions/window/EnumWindows.md)
      - [窗口标题](./actions/window/WindowCaption.md)
      - [窗口位置](./actions/window/WindowXy.md)
      - [窗口大小](./actions/window/WindowSize.md)
      - [窗口坐标](./actions/window/WindowPoint.md)
      - [闪烁窗口](./actions/window/FlashWindow.md)
      - [关闭窗口](./actions/window/CloseWindow.md)
    - 图像处理
      - [颜色转换](./actions/image/CvtColor.md)
      - [裁切图片](./actions/image/CropImage.md)
      - [调整尺寸](./actions/image/ResizeImage.md)
      - [图像旋转](./actions/image/ImageRotate.md)
      - [图像缩放](./actions/image/ImageScale.md)
      - [中心裁切](./actions/image/CenterCropImage.md)
      - [边缘检测](./actions/image/ImageCanny.md)
      - [阈值操作](./actions/image/ImageThreshold.md)
      - [颜色筛选](./actions/image/ImageInRange.md)
      - [形态学操作](./actions/image/ImageMorphological.md)
      - [自适应阈值](./actions/image/AdaptiveThreshold.md)
      - [平滑/模糊](./actions/image/ImageBlur.md)
      - [标记区域](./actions/image/ImageMarkROI.md)
      - [标记相对区域](./actions/image/ImageMarkRelativeROI.md)
      - [连通域分析](./actions/image/ConnectedComponents.md)
      - [均值](./actions/image/ImageMean.md)
      - [标准差](./actions/image/ImageStd.md)
      - [像素归一化](./actions/image/ImageNormalize.md)
    - 图像检测
      - [直线检测](./actions/detection/LineDetection.md)
      - [椭圆检测](./actions/detection/EllipseDetection.md)
      - [斑点检测](./actions/detection/BlobDetect.md)
      - [形状查找](./actions/detection/ShapeDetection.md)
      - [形状匹配](./actions/detection/MatchShapes.md)
      - [特征匹配](./actions/detection/FeatureDetect.md)
      - [模板匹配](./actions/detection/MatchTemplate.md)
      - [图像匹配](./actions/detection/MatchImage.md)
      - [查找轮廓](./actions/detection/FindContours.md)
      - [颜色辨识](./actions/detection/ImageColorDiscrimination.md)
    - 绘图
      - [绘制矩形](./actions/draw/DrawRect.md)
      - [填充颜色](./actions/draw/FillColor.md)
      - [条码生成](./actions/draw/BarcodeCreate.md)
      - [文字绘制](./actions/draw/DrawText.md)
      - [图像绘制](./actions/draw/DrawImage.md)
    - 深度学习
      - [目标分类](./actions/ai/ImageClassification.md)
      - [对象检测](./actions/ai/ObjectDetection.md)
      - [文字识别](./actions/ai/PaddleOCR.md)
      - [文本块检测](./actions/ai/TextDetection.md)
      - [二维码识别](./actions/ai/QRCode.md)
      - [条码识别](./actions/ai/BarcodeDetector.md)
      - [文字识别（Tesseract）](./actions/ai/TesseractOCR.md)
    - 媒体
      - [窗口截图](./actions/media/CaptureWindow.md)
      - [全屏截图](./actions/media/CaptureScreen.md)
      - [活动窗口截图](./actions/media/CaptureActiveWindow.md)
      - [声音播放](./actions/media/MediaPlay.md)
      - [键盘/鼠标宏重放](./actions/media/PlayRecord.md)
      - [相机图像](./actions/media/VideoFrame.md)
      - [屏幕取色](./actions/media/PixelPoint.md)
    - 网络
      - [文件下载](./actions/network/HttpDownload.md)
      - [视频下载](./actions/network/VideoDownload.md)
      - [HEAD 请求](./actions/network/HttpHead.md)
      - [GET 请求](./actions/network/HttpGet.md)
      - [POST 请求](./actions/network/HttpPost.md)
      - [网络服务](./actions/network/NetworkListen.md)
      - [数据发送](./actions/network/NetworkSend.md)
      - [数据接收](./actions/network/NetworkReceive.md)
      - [服务连接](./actions/network/NetworkConnect.md)
    - 统计分析
      - [加载文档](./actions/pandas/LoadDocument.md)
      - [查询](./actions/pandas/DataFrameQuery.md)
      - [统计行数](./actions/pandas/RowsCount.md)
      - [行列选择 * 标签](./actions/pandas/NameLoc.md)
      - [行列选择 * 索引](./actions/pandas/IndexLoc.md)
      - [迭代行](./actions/pandas/IterRow.md)
      - [保存文档](./actions/pandas/SaveDocument.md)   
    - 云
      - [百度翻译](./actions/cloud/BaiduTranslate.md)
    - Web
      - [打开浏览器](./actions/web/WebOpen.md)
      - [查找元素](./actions/web/WebGetElement.md)
      - [点击](./actions/web/WebElementClick.md)
      - [表单提交](./actions/web/WebElementSubmit.md)
      - [清除文本](./actions/web/WebElementClear.md)
      - [选中检查](./actions/web/WebElementSelected.md)
      - [发送按键](./actions/web/WebElementSendKey.md)
      - [设置文本](./actions/web/WebElementSendText.md)
      - [获取属性](./actions/web/WebElementAttribute.md)
      - [等待*警告框](./actions/web/WebWaitAlert.md)
      - [等待*元素呈现](./actions/web/WebWaitPresence.md)
      - [等待*框架](./actions/web/WebWaitFrameAvailable.md)
      - [等待*标题](./actions/web/WebWaitTitle.md)
      - [等待*可见](./actions/web/WebWaitVisibilityByElement.md)
      - [等待*可见（定位）](./actions/web/WebWaitVisibilityByLocator.md)
      - [等待*可点击](./actions/web/WebWaitClickable.md)
      - [切换框架](./actions/web/WebSwitchToFrame.md)
      - [重置框架](./actions/web/WebFocusFrameDefault.md)
      - [元素截图](./actions/web/WebScreenshot.md)
      - [获取 Cookies](./actions/web/WebCookies.md)
      - [执行脚本](./actions/web/WebExecute.md)
      - [动作链*执行](./actions/web/WebActionChainsPerform.md)
      - [动作链.点击](./actions/web/WebActionClick.md)
      - [动作链.点按](./actions/web/WebActionClickHold.md)
      - [动作链.双击](./actions/web/WebActionDoubleClick.md)
      - [动作链.拖放](./actions/web/WebActionDragDrop.md)
      - [动作链.移动](./actions/web/WebActionMoveTo.md)
      - [动作链.释放鼠标键](./actions/web/WebActionRelease.md)
      - [动作链.按下修饰键](./actions/web/WebActionKeyDown.md)
      - [动作链.释放修饰键](./actions/web/WebActionKeyUp.md)
      - [动作链.发送文本](./actions/web/WebActionSendText.md)
      - [动作链.暂停](./actions/web/WebActionPause.md)
    - 安卓
      - [启动服务](./actions/android/AdbStartServer.md)
      - [连接](./actions/android/AdbConnect.md)
      - [设备](./actions/android/AdbDevices.md)
      - [转发](./actions/android/AdbForward.md)
      - [滑动](./actions/android/AdbSwipe.md)
      - [输入](./actions/android/AdbInput.md)
      - [输入 * 中文](./actions/android/Adbkeyboard.md)
      - [清除文字](./actions/android/AdbClearText.md)
      - [按键](./actions/android/AdbKey.md)
      - [点击](./actions/android/AdbTap.md)
      - [移动](./actions/android/AdbMove.md)
      - [截图](./actions/android/AdbScreenCap.md)
      - [应用列表](./actions/android/AdbPackages.md)
      - [启动 App](./actions/android/AdbStartApp.md)
      - [应用检测](./actions/android/AdbIsInstalled.md)
      - [安装应用](./actions/android/AdbInstall.md)
      - [推送文件](./actions/android/AdbPush.md)
      - [拉取文件](./actions/android/AdbPull.md)
      - [文件列表](./actions/android/AdbLs.md)
    - 流程控制
      - [循环](./actions/control/For.md)
      - [判断](./actions/control/If.md)
      - [判空](./actions/control/IsEmpty.md)
      - [调用](./actions/control/Invoke.md)
      - [停止循环](./actions/control/Break.md)
      - [脚本](./actions/control/Code.md)
      - [退出流程](./actions/control/Quit.md)
      - [表达式](./actions/control/CodeExpression.md)
      - [引用动作](./actions/control/ActionAlias.md)
      - [引用动作（名称）](./actions/control/NameAlias.md)
      - [输出控制](./actions/control/LoggingControl.md)
      - [算术运行](./actions/control/ArithmeticCalculate.md)
      - [逻辑运算](./actions/control/LogicalOperator.md)
      - [关系运算](./actions/control/RelationalOperator.md)
      - [参数](./actions/control/Param.md)
      - [分组](./actions/control/GroupAction.md)
      - [软触发](./actions/control/SoftwareTrigger.md)
    - 算法
      - [分割字符串](./actions/algorithm/SplitString.md)
      - [合并字符串](./actions/algorithm/JoinString.md)
      - [提取子串](./actions/algorithm/SubString.md)
      - [访问数组](./actions/algorithm/AccessArray.md)
      - [访问对象](./actions/algorithm/AccessKey.md)
      - [数组长度](./actions/algorithm/ArraySize.md)
      - [中心坐标](./actions/algorithm/CalculateCenter.md)
      - [坐标转换](./actions/algorithm/ConvertPoint.md)
      - [文本筛选](./actions/algorithm/FilterText.md)
      - [面积筛选](./actions/algorithm/FilterArea.md)
      - [周长筛选](./actions/algorithm/FilterPerimeter.md)
      - [形状筛选](./actions/algorithm/FilterVertex.md)
      - [椭圆筛选](./actions/algorithm/FilterEllipse.md)
      - [随机数字](./actions/algorithm/RandomNumber.md)
      - [随机坐标](./actions/algorithm/RandomPoint.md)
      - [图像差值](./actions/algorithm/ImageDifference.md)
      - [颜色统计](./actions/algorithm/ColorPercentage.md)
      - [添加元素](./actions/algorithm/PushBack.md)
      - [删除元素](./actions/algorithm/PopBack.md)
    - 类型
      - [布尔](./actions/type/TypeBoolean.md)
      - [数字](./actions/type/TypeNumber.md)
      - [字符串](./actions/type/TypeString.md)
      - [网址](./actions/type/TypeUrl.md)
      - [坐标](./actions/type/TypePoint.md)
      - [文件](./actions/type/TypeFile.md)
      - [路径](./actions/type/TypePath.md)
      - [快捷键](./actions/type/TypeShortcut.md)
      - [矩形](./actions/type/TypeRect.md)
      - [资源](./actions/type/TypeResource.md)
      - [标量](./actions/type/TypeScalar.md)
      - [密码](./actions/type/TypePassword.md)
      - [颜色](./actions/type/TypeColor.md)
      - [模型](./actions/type/TypeModel.md)
      - [相机](./actions/type/TypeCamera.md)
      - [字典](./actions/type/TypeDict.md)
      - [元组](./actions/type/TypeTuple.md)
      - [切片](./actions/type/TypeSlice.md)
      - [列表](./actions/type/TypeList.md)
      - [指针](./actions/type/TypePtr.md)
      - [主机地址](./actions/type/TypeHostAddress.md)
      - [字符串列表](./actions/type/TypeStrings.md)
  - 内置类型
    - [Boolean](./types/Boolean.md)
    - [Number](./types/Number.md)
    - [String](./types/String.md)
    - [Path](./types/Path.md)
    - [Point](./types/Point.md)
    - [Rect](./types/Rect.md)
    - [Scalar](./types/Scalar.md)
    - [Color](./types/Color.md)
    - [Bytes](./types/Bytes.md)
    - [RotatedRect](./types/RotatedRect.md)
    - [DetectionResult](./types/DetectionResult.md)
    - [ClassificationResult](./types/ClassificationResult.md)
    - [RecognitionResult](./types/RecognitionResult.md)
    - [File](./types/File.md)
    - [Image](./types/Image.md)
    - [Size](./types/Size.md)
    - [Url](./types/Url.md)
    - [Wnd](./types/Wnd.md)
    - [ModelSession](./types/ModelSession.md)
    - [WebDriver](./types/WebDriver.md)
    - [Timer](./types/Timer.md)
    - [Thread](./types/Thread.md)
    - [Keyboard](./types/Keyboard.md)
    - [HostAddress](./types/HostAddress.md)
    - [Tuple](./types/Tuple.md)
    - [Slice](./types/Slice.md)
    - [Ptr](./types/Ptr.md)
  - 枚举类型
    - [Colors](./enums/Colors.md)
    - [Directions](./enums/Directions.md)
    - [ColorConversionCodes](./enums/ColorConversionCodes.md)
    - [ContourShape](./enums/ContourShape.md)
    - [GlobOptions](./enums/GlobOptions.md)
    - [HandleType](./enums/HandleType.md)
    - [KnownWindow](./enums/KnownWindow.md)
    - [KnownFolder](./enums/KnownFolder.md)
    - [LogicalOperators](./enums/LogicalOperators.md)
    - [MessageBoxFlags](./enums/MessageBoxFlags.md)
    - [MessagePlaceMode](./enums/MessagePlaceMode.md)
    - [MouseButtons](./enums/MouseButtons.md)
    - [Operations](./enums/Operations.md)
    - [PointConvertMethod](./enums/PointConvertMethod.md)
    - [RelationalOperators](./enums/RelationalOperators.md)
    - [RetrievalModes](./enums/RetrievalModes.md)
    - [ThresholdTypes](./enums/ThresholdTypes.md)
    - [Visibility](./enums/Visibility.md)
    - [WorkState](./enums/WorkState.md)
    - [LogStatus](./enums/LogStatus.md)
    - [RelativePosition](./enums/RelativePosition.md)
    - [MouseMessage](./enums/MouseMessage.md)
    - [MorphologicalOperations](./enums/MorphologicalOperations.md)
    - [ContourApproximationMode](./enums/ContourApproximationMode.md)
    - [FeatureAlgorithm](./enums/FeatureAlgorithm.md)
    - [WindowSortDirection](./enums/WindowSortDirection.md)
    - [FileExtension](./enums/FileExtension.md)
    - [ExitWindowsOption](./enums/ExitWindowsOption.md)
    - [WebKey](./enums/WebKey.md)
    - [WebLocated](./enums/WebLocated.md)
    - [ModuleOption](./enums/ModuleOption.md)
    - [BARCODE_Encoding](./enums/BARCODE_Encoding.md)
    - [PageSegMode](./enums/PageSegMode.md)
    - [CameraTriggerActivation](./enums/CameraTriggerActivation.md)
    - [CameraTriggerSource](./enums/CameraTriggerSource.md)
    - [CameraType](./enums/CameraType.md)
    - [CookiesFormat](./enums/CookiesFormat.md)
  - [Changelog](./CHANGELOG.md)