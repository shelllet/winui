module.exports = {
  "sidebar": [
    {
      "type": "doc",
      "id": "README",
      "label": "小友+"
    },
    {
      "type": "doc",
      "id": "introduction/README",
      "label": "使用需知"
    },
    {
      "type": "category",
      "label": "软件安装",
      "items": [
        {
          "type": "doc",
          "id": "introduction/installation/installed_by_exe",
          "label": "直接安装"
        },
        {
          "type": "doc",
          "id": "introduction/installation/installed_by_msix",
          "label": "微软商店安装"
        },
        {
          "type": "category",
          "label": "安装问题",
          "items": [
            {
              "type": "doc",
              "id": "introduction/installation/question/quest1",
              "label": "新安装无法启动"
            },
            {
              "type": "doc",
              "id": "introduction/installation/question/quest2",
              "label": "覆盖安装无法启动"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "设置",
      "items": [
        {
          "type": "doc",
          "id": "introduction/setting/action_group_setting",
          "label": "动作分组隐藏"
        },
        {
          "type": "doc",
          "id": "introduction/setting/workflow",
          "label": "工作流设置"
        }
      ]
    },
    {
      "type": "category",
      "label": "流程介绍",
      "items": [
        {
          "type": "doc",
          "id": "introduction/workflow/property",
          "label": "项目属性"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/logic",
          "label": "使用逻辑"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/record",
          "label": "鼠标/键盘宏录制"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/variable",
          "label": "变量"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/resources",
          "label": "资源"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/action",
          "label": "动作"
        },
        {
          "type": "doc",
          "id": "introduction/workflow/features",
          "label": "内置功能"
        }
      ]
    },
    {
      "type": "category",
      "label": "浏览器",
      "items": [
        {
          "type": "doc",
          "id": "introduction/webdriver/locators",
          "label": "Web 定位策略"
        },
        {
          "type": "doc",
          "id": "introduction/webdriver/download",
          "label": "WebDriver 下载"
        },
        {
          "type": "doc",
          "id": "introduction/webdriver/browser_directory",
          "label": "浏览器配置目录"
        },
        {
          "type": "doc",
          "id": "introduction/android/uiautomatorviewer",
          "label": "UIAutomatorViewer 工具"
        }
      ]
    },
    {
      "type": "category",
      "label": "字符匹配",
      "items": [
        {
          "type": "doc",
          "id": "introduction/mixed/glob",
          "label": "Glob模式"
        },
        {
          "type": "doc",
          "id": "introduction/mixed/wildcard",
          "label": "通配符"
        }
      ]
    },
    {
      "type": "category",
      "label": "AI",
      "items": [
        {
          "type": "doc",
          "id": "introduction/tesseract/Languages_Scripts",
          "label": "Tesseract 支持的语言"
        },
        {
          "type": "doc",
          "id": "introduction/tesseract/Data-Files",
          "label": "Tesseract 数据文件"
        },
        {
          "type": "doc",
          "id": "introduction/tesseract/tesstrain",
          "label": "Tesseract 5 的训练"
        },
        {
          "type": "doc",
          "id": "introduction/mixed/CUDA",
          "label": "安装 CUDA"
        },
        {
          "type": "doc",
          "id": "introduction/mixed/cuDNN",
          "label": "cuDNN 和 CUDA 版本对应关系"
        },
        {
          "type": "doc",
          "id": "introduction/mixed/paddle2onnx",
          "label": "Paddle2ONNX模型转化"
        }
      ]
    },
    {
      "type": "doc",
      "id": "actions/README",
      "label": "动作"
    },
    {
      "type": "category",
      "label": "系统",
      "items": [
        {
          "type": "doc",
          "id": "actions/system/Wait",
          "label": "等待"
        },
        {
          "type": "doc",
          "id": "actions/system/StartProcess",
          "label": "启动应用"
        },
        {
          "type": "doc",
          "id": "actions/system/UserAdd",
          "label": "添加用户"
        },
        {
          "type": "doc",
          "id": "actions/system/OpenApplication",
          "label": "打开应用"
        },
        {
          "type": "doc",
          "id": "actions/system/LaunchFile",
          "label": "打开文件"
        },
        {
          "type": "doc",
          "id": "actions/system/OpenUrl",
          "label": "打开链接"
        },
        {
          "type": "doc",
          "id": "actions/system/SuspendSystem",
          "label": "退出系统"
        },
        {
          "type": "doc",
          "id": "actions/system/CloseHandle",
          "label": "关闭句柄"
        },
        {
          "type": "doc",
          "id": "actions/system/ExistProcess",
          "label": "检测进程"
        },
        {
          "type": "doc",
          "id": "actions/system/KillProcess",
          "label": "终止进程"
        },
        {
          "type": "doc",
          "id": "actions/system/Runas",
          "label": "登录应用"
        },
        {
          "type": "doc",
          "id": "actions/system/ClipboardValue",
          "label": "剪切板"
        },
        {
          "type": "doc",
          "id": "actions/system/PrintMessage",
          "label": "打印日志"
        },
        {
          "type": "doc",
          "id": "actions/system/CreateObject",
          "label": "创建对象"
        },
        {
          "type": "doc",
          "id": "actions/system/CallMethod",
          "label": "调用方法"
        },
        {
          "type": "doc",
          "id": "actions/system/ReadMemory",
          "label": "读内存"
        },
        {
          "type": "doc",
          "id": "actions/system/WriteMemory",
          "label": "写内存"
        },
        {
          "type": "doc",
          "id": "actions/system/AttachProcess",
          "label": "附加进程"
        }
      ]
    },
    {
      "type": "category",
      "label": "异步操作",
      "items": [
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkTimer",
          "label": "定时器"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkTask",
          "label": "定时任务"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkThread",
          "label": "工作线程"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkExit",
          "label": "异步结束"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkBegin",
          "label": "异步启动"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkReset",
          "label": "状态切换"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WhenEvent",
          "label": "等待事件"
        },
        {
          "type": "doc",
          "id": "actions/asynchronous/WorkWait",
          "label": "异步等待"
        }
      ]
    },
    {
      "type": "category",
      "label": "文件系统",
      "items": [
        {
          "type": "doc",
          "id": "actions/filesystem/FileRead",
          "label": "读取文件"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/FileWrite",
          "label": "文件写入"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/ReadLines",
          "label": "按行读取"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/ImageSave",
          "label": "保存图片"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/ImageLoad",
          "label": "加载图像"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/FileQuery",
          "label": "搜索文件"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/DirectoryIterator",
          "label": "遍历文件"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/CopyFile",
          "label": "文件复制"
        },
        {
          "type": "doc",
          "id": "actions/filesystem/StandardPath",
          "label": "标准路径"
        }
      ]
    },
    {
      "type": "category",
      "label": "键盘",
      "items": [
        {
          "type": "doc",
          "id": "actions/keyboard/SendKey",
          "label": "发送按键"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/SendText",
          "label": "发送文本"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/PressKey",
          "label": "按下按键"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/ReleaseKey",
          "label": "释放按键"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/ListenKeyboard",
          "label": "监听键盘"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/PressAndReleaseKey",
          "label": "按下并释放"
        },
        {
          "type": "doc",
          "id": "actions/keyboard/WaitKey",
          "label": "等待按键"
        }
      ]
    },
    {
      "type": "category",
      "label": "鼠标",
      "items": [
        {
          "type": "doc",
          "id": "actions/mouse/MovePointer",
          "label": "移动鼠标"
        },
        {
          "type": "doc",
          "id": "actions/mouse/Click",
          "label": "点击"
        },
        {
          "type": "doc",
          "id": "actions/mouse/MoveClick",
          "label": "移动并点击"
        },
        {
          "type": "doc",
          "id": "actions/mouse/MoveDoubleClick",
          "label": "移动并双击"
        },
        {
          "type": "doc",
          "id": "actions/mouse/DoubleClick",
          "label": "双击"
        },
        {
          "type": "doc",
          "id": "actions/mouse/RightClick",
          "label": "右键点击"
        },
        {
          "type": "doc",
          "id": "actions/mouse/DragPointer",
          "label": "拖拽"
        },
        {
          "type": "doc",
          "id": "actions/mouse/ListenMouse",
          "label": "监听鼠标"
        },
        {
          "type": "doc",
          "id": "actions/mouse/MoveOffset",
          "label": "偏移移动"
        },
        {
          "type": "doc",
          "id": "actions/mouse/CellClick",
          "label": "点击*网格"
        },
        {
          "type": "doc",
          "id": "actions/mouse/CellMove",
          "label": "移动*网格"
        },
        {
          "type": "doc",
          "id": "actions/mouse/WheelMouse",
          "label": "滚动鼠标"
        }
      ]
    },
    {
      "type": "category",
      "label": "窗口",
      "items": [
        {
          "type": "doc",
          "id": "actions/window/FindWindow",
          "label": "查找窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/SpecialWindow",
          "label": "特定窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/MessageBox",
          "label": "消息框"
        },
        {
          "type": "doc",
          "id": "actions/window/ActiveWindow",
          "label": "激活窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowAncestor",
          "label": "祖先窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/PositionWindow",
          "label": "窗口置顶"
        },
        {
          "type": "doc",
          "id": "actions/window/WinRun",
          "label": "运行框"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowVisible",
          "label": "窗口可视"
        },
        {
          "type": "doc",
          "id": "actions/window/EnumWindows",
          "label": "枚举窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowCaption",
          "label": "窗口标题"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowXy",
          "label": "窗口位置"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowSize",
          "label": "窗口大小"
        },
        {
          "type": "doc",
          "id": "actions/window/WindowPoint",
          "label": "窗口坐标"
        },
        {
          "type": "doc",
          "id": "actions/window/FlashWindow",
          "label": "闪烁窗口"
        },
        {
          "type": "doc",
          "id": "actions/window/CloseWindow",
          "label": "关闭窗口"
        }
      ]
    },
    {
      "type": "category",
      "label": "图像处理",
      "items": [
        {
          "type": "doc",
          "id": "actions/image/CvtColor",
          "label": "颜色转换"
        },
        {
          "type": "doc",
          "id": "actions/image/CropImage",
          "label": "裁切图片"
        },
        {
          "type": "doc",
          "id": "actions/image/ResizeImage",
          "label": "调整尺寸"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageRotate",
          "label": "图像旋转"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageScale",
          "label": "图像缩放"
        },
        {
          "type": "doc",
          "id": "actions/image/CenterCropImage",
          "label": "中心裁切"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageCanny",
          "label": "边缘检测"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageThreshold",
          "label": "阈值操作"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageInRange",
          "label": "颜色筛选"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageMorphological",
          "label": "形态学操作"
        },
        {
          "type": "doc",
          "id": "actions/image/AdaptiveThreshold",
          "label": "自适应阈值"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageBlur",
          "label": "平滑/模糊"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageMarkROI",
          "label": "标记区域"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageMarkRelativeROI",
          "label": "标记相对区域"
        },
        {
          "type": "doc",
          "id": "actions/image/ConnectedComponents",
          "label": "连通域分析"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageMean",
          "label": "均值"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageStd",
          "label": "标准差"
        },
        {
          "type": "doc",
          "id": "actions/image/ImageNormalize",
          "label": "像素归一化"
        }
      ]
    },
    {
      "type": "category",
      "label": "图像检测",
      "items": [
        {
          "type": "doc",
          "id": "actions/detection/LineDetection",
          "label": "直线检测"
        },
        {
          "type": "doc",
          "id": "actions/detection/EllipseDetection",
          "label": "椭圆检测"
        },
        {
          "type": "doc",
          "id": "actions/detection/BlobDetect",
          "label": "斑点检测"
        },
        {
          "type": "doc",
          "id": "actions/detection/ShapeDetection",
          "label": "形状查找"
        },
        {
          "type": "doc",
          "id": "actions/detection/MatchShapes",
          "label": "形状匹配"
        },
        {
          "type": "doc",
          "id": "actions/detection/FeatureDetect",
          "label": "特征匹配"
        },
        {
          "type": "doc",
          "id": "actions/detection/MatchTemplate",
          "label": "模板匹配"
        },
        {
          "type": "doc",
          "id": "actions/detection/MatchImage",
          "label": "图像匹配"
        },
        {
          "type": "doc",
          "id": "actions/detection/FindContours",
          "label": "查找轮廓"
        },
        {
          "type": "doc",
          "id": "actions/detection/ImageColorDiscrimination",
          "label": "颜色辨识"
        }
      ]
    },
    {
      "type": "category",
      "label": "绘图",
      "items": [
        {
          "type": "doc",
          "id": "actions/draw/DrawRect",
          "label": "绘制矩形"
        },
        {
          "type": "doc",
          "id": "actions/draw/FillColor",
          "label": "填充颜色"
        },
        {
          "type": "doc",
          "id": "actions/draw/BarcodeCreate",
          "label": "条码生成"
        },
        {
          "type": "doc",
          "id": "actions/draw/DrawText",
          "label": "文字绘制"
        },
        {
          "type": "doc",
          "id": "actions/draw/DrawImage",
          "label": "图像绘制"
        }
      ]
    },
    {
      "type": "category",
      "label": "深度学习",
      "items": [
        {
          "type": "doc",
          "id": "actions/ai/ImageClassification",
          "label": "目标分类"
        },
        {
          "type": "doc",
          "id": "actions/ai/ObjectDetection",
          "label": "对象检测"
        },
        {
          "type": "doc",
          "id": "actions/ai/DocumentOrientation",
          "label": "文字图像方向矫正"
        },
        {
          "type": "doc",
          "id": "actions/ai/TextUnwarping",
          "label": "文字图像矫正"
        },
        {
          "type": "doc",
          "id": "actions/ai/TextDetection",
          "label": "文字区域检测"
        },
        {
          "type": "doc",
          "id": "actions/ai/TextlineOrientation",
          "label": "文字角度纠正"
        },
        {
          "type": "doc",
          "id": "actions/ai/TextRecognition",
          "label": "文字识别"
        },
        {
          "type": "doc",
          "id": "actions/ai/QRCode",
          "label": "二维码识别"
        },
        {
          "type": "doc",
          "id": "actions/ai/BarcodeDetector",
          "label": "条码识别"
        },
        {
          "type": "doc",
          "id": "actions/ai/TextExtract",
          "label": "文本提取"
        }
      ]
    },
    {
      "type": "category",
      "label": "媒体",
      "items": [
        {
          "type": "doc",
          "id": "actions/media/CaptureWindow",
          "label": "窗口截图"
        },
        {
          "type": "doc",
          "id": "actions/media/CaptureScreen",
          "label": "全屏截图"
        },
        {
          "type": "doc",
          "id": "actions/media/CaptureActiveWindow",
          "label": "活动窗口截图"
        },
        {
          "type": "doc",
          "id": "actions/media/MediaPlay",
          "label": "声音播放"
        },
        {
          "type": "doc",
          "id": "actions/media/PlayRecord",
          "label": "键盘/鼠标宏重放"
        },
        {
          "type": "doc",
          "id": "actions/media/VideoFrame",
          "label": "相机图像"
        },
        {
          "type": "doc",
          "id": "actions/media/PixelPoint",
          "label": "屏幕取色"
        }
      ]
    },
    {
      "type": "category",
      "label": "网络",
      "items": [
        {
          "type": "doc",
          "id": "actions/network/HttpDownload",
          "label": "文件下载"
        },
        {
          "type": "doc",
          "id": "actions/network/VideoDownload",
          "label": "视频下载"
        },
        {
          "type": "doc",
          "id": "actions/network/HttpHead",
          "label": "HEAD 请求"
        },
        {
          "type": "doc",
          "id": "actions/network/HttpGet",
          "label": "GET 请求"
        },
        {
          "type": "doc",
          "id": "actions/network/HttpPost",
          "label": "POST 请求"
        },
        {
          "type": "doc",
          "id": "actions/network/NetworkListen",
          "label": "网络服务"
        },
        {
          "type": "doc",
          "id": "actions/network/NetworkSend",
          "label": "数据发送"
        },
        {
          "type": "doc",
          "id": "actions/network/NetworkReceive",
          "label": "数据接收"
        },
        {
          "type": "doc",
          "id": "actions/network/NetworkConnect",
          "label": "服务连接"
        },
        {
          "type": "doc",
          "id": "actions/network/DomainQuery",
          "label": "域名查询"
        },
        {
          "type": "doc",
          "id": "actions/network/SendInput",
          "label": "发送输入"
        },
        {
          "type": "doc",
          "id": "actions/network/ReceiveInput",
          "label": "接收输入"
        }
      ]
    },
    {
      "type": "category",
      "label": "统计分析",
      "items": [
        {
          "type": "doc",
          "id": "actions/pandas/LoadDocument",
          "label": "加载文档"
        },
        {
          "type": "doc",
          "id": "actions/pandas/DataFrameQuery",
          "label": "查询"
        },
        {
          "type": "doc",
          "id": "actions/pandas/RowsCount",
          "label": "统计行数"
        },
        {
          "type": "doc",
          "id": "actions/pandas/NameLoc",
          "label": "行列选择 * 标签"
        },
        {
          "type": "doc",
          "id": "actions/pandas/IndexLoc",
          "label": "行列选择 * 索引"
        },
        {
          "type": "doc",
          "id": "actions/pandas/IterRow",
          "label": "迭代行"
        },
        {
          "type": "doc",
          "id": "actions/pandas/SaveDocument",
          "label": "保存文档"
        }
      ]
    },
    {
      "type": "category",
      "label": "云",
      "items": [
        {
          "type": "doc",
          "id": "actions/cloud/BaiduTranslate",
          "label": "百度翻译"
        }
      ]
    },
    {
      "type": "category",
      "label": "Web",
      "items": [
        {
          "type": "doc",
          "id": "actions/web/WebOpen",
          "label": "打开浏览器"
        },
        {
          "type": "doc",
          "id": "actions/web/WebGetElement",
          "label": "查找元素"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementClick",
          "label": "点击"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementSubmit",
          "label": "表单提交"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementClear",
          "label": "清除文本"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementSelected",
          "label": "选中检查"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementSendKey",
          "label": "发送按键"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementSendText",
          "label": "设置文本"
        },
        {
          "type": "doc",
          "id": "actions/web/WebElementAttribute",
          "label": "获取属性"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitAlert",
          "label": "等待*警告框"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitPresence",
          "label": "等待*元素呈现"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitFrameAvailable",
          "label": "等待*框架"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitTitle",
          "label": "等待*标题"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitVisibilityByElement",
          "label": "等待*可见"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitVisibilityByLocator",
          "label": "等待*可见（定位）"
        },
        {
          "type": "doc",
          "id": "actions/web/WebWaitClickable",
          "label": "等待*可点击"
        },
        {
          "type": "doc",
          "id": "actions/web/WebSwitchToFrame",
          "label": "切换框架"
        },
        {
          "type": "doc",
          "id": "actions/web/WebFocusFrameDefault",
          "label": "重置框架"
        },
        {
          "type": "doc",
          "id": "actions/web/WebScreenshot",
          "label": "元素截图"
        },
        {
          "type": "doc",
          "id": "actions/web/WebCookies",
          "label": "获取 Cookies"
        },
        {
          "type": "doc",
          "id": "actions/web/WebExecute",
          "label": "执行脚本"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionChainsPerform",
          "label": "动作链*执行"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionClick",
          "label": "动作链.点击"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionClickHold",
          "label": "动作链.点按"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionDoubleClick",
          "label": "动作链.双击"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionDragDrop",
          "label": "动作链.拖放"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionMoveTo",
          "label": "动作链.移动"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionRelease",
          "label": "动作链.释放鼠标键"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionKeyDown",
          "label": "动作链.按下修饰键"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionKeyUp",
          "label": "动作链.释放修饰键"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionSendText",
          "label": "动作链.发送文本"
        },
        {
          "type": "doc",
          "id": "actions/web/WebActionPause",
          "label": "动作链.暂停"
        }
      ]
    },
    {
      "type": "category",
      "label": "安卓",
      "items": [
        {
          "type": "doc",
          "id": "actions/android/AdbStartServer",
          "label": "启动服务"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbConnect",
          "label": "连接"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbDevices",
          "label": "设备"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbForward",
          "label": "转发"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbSwipe",
          "label": "滑动"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbInput",
          "label": "输入"
        },
        {
          "type": "doc",
          "id": "actions/android/Adbkeyboard",
          "label": "输入 * 中文"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbClearText",
          "label": "清除文字"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbKey",
          "label": "按键"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbTap",
          "label": "点击"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbMove",
          "label": "移动"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbScreenCap",
          "label": "截图"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbPackages",
          "label": "应用列表"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbStartApp",
          "label": "启动 App"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbIsInstalled",
          "label": "应用检测"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbInstall",
          "label": "安装应用"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbPush",
          "label": "推送文件"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbPull",
          "label": "拉取文件"
        },
        {
          "type": "doc",
          "id": "actions/android/AdbLs",
          "label": "文件列表"
        }
      ]
    },
    {
      "type": "category",
      "label": "流程控制",
      "items": [
        {
          "type": "doc",
          "id": "actions/control/For",
          "label": "循环"
        },
        {
          "type": "doc",
          "id": "actions/control/If",
          "label": "判断"
        },
        {
          "type": "doc",
          "id": "actions/control/IsEmpty",
          "label": "判空"
        },
        {
          "type": "doc",
          "id": "actions/control/Invoke",
          "label": "调用"
        },
        {
          "type": "doc",
          "id": "actions/control/Break",
          "label": "停止循环"
        },
        {
          "type": "doc",
          "id": "actions/control/Code",
          "label": "脚本"
        },
        {
          "type": "doc",
          "id": "actions/control/Exit",
          "label": "退出流程"
        },
        {
          "type": "doc",
          "id": "actions/control/CodeExpression",
          "label": "表达式"
        },
        {
          "type": "doc",
          "id": "actions/control/ActionAlias",
          "label": "引用动作"
        },
        {
          "type": "doc",
          "id": "actions/control/NameAlias",
          "label": "引用动作（名称）"
        },
        {
          "type": "doc",
          "id": "actions/control/LoggingControl",
          "label": "输出控制"
        },
        {
          "type": "doc",
          "id": "actions/control/ArithmeticCalculate",
          "label": "算术运行"
        },
        {
          "type": "doc",
          "id": "actions/control/LogicalOperator",
          "label": "逻辑运算"
        },
        {
          "type": "doc",
          "id": "actions/control/RelationalOperator",
          "label": "关系运算"
        },
        {
          "type": "doc",
          "id": "actions/control/Param",
          "label": "参数"
        },
        {
          "type": "doc",
          "id": "actions/control/GroupAction",
          "label": "分组"
        },
        {
          "type": "doc",
          "id": "actions/control/SoftwareTrigger",
          "label": "软触发"
        }
      ]
    },
    {
      "type": "category",
      "label": "算法",
      "items": [
        {
          "type": "doc",
          "id": "actions/algorithm/SplitString",
          "label": "分割字符串"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/JoinString",
          "label": "合并字符串"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/SubString",
          "label": "提取子串"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/AccessArray",
          "label": "访问数组"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/AccessKey",
          "label": "访问对象"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/ArraySize",
          "label": "数组长度"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/CalculateCenter",
          "label": "中心坐标"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/ConvertPoint",
          "label": "坐标转换"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/FilterText",
          "label": "文本筛选"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/FilterArea",
          "label": "面积筛选"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/FilterPerimeter",
          "label": "周长筛选"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/FilterVertex",
          "label": "形状筛选"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/FilterEllipse",
          "label": "椭圆筛选"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/RandomNumber",
          "label": "随机数字"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/RandomPoint",
          "label": "随机坐标"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/ImageDifference",
          "label": "图像差值"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/ColorPercentage",
          "label": "颜色统计"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/PushBack",
          "label": "添加元素"
        },
        {
          "type": "doc",
          "id": "actions/algorithm/PopBack",
          "label": "删除元素"
        }
      ]
    },
    {
      "type": "category",
      "label": "类型",
      "items": [
        {
          "type": "doc",
          "id": "actions/type/TypeBoolean",
          "label": "布尔"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeNumber",
          "label": "数字"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeString",
          "label": "字符串"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeUrl",
          "label": "网址"
        },
        {
          "type": "doc",
          "id": "actions/type/TypePoint",
          "label": "坐标"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeFile",
          "label": "文件"
        },
        {
          "type": "doc",
          "id": "actions/type/TypePath",
          "label": "路径"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeShortcut",
          "label": "快捷键"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeRect",
          "label": "矩形"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeResource",
          "label": "资源"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeScalar",
          "label": "标量"
        },
        {
          "type": "doc",
          "id": "actions/type/TypePassword",
          "label": "密码"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeColor",
          "label": "颜色"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeModel",
          "label": "模型"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeCamera",
          "label": "相机"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeDict",
          "label": "字典"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeTuple",
          "label": "元组"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeSlice",
          "label": "切片"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeList",
          "label": "列表"
        },
        {
          "type": "doc",
          "id": "actions/type/TypePtr",
          "label": "指针"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeHostAddress",
          "label": "主机地址"
        },
        {
          "type": "doc",
          "id": "actions/type/TypeStrings",
          "label": "字符串列表"
        }
      ]
    },
    {
      "type": "category",
      "label": "内置类型",
      "items": [
        {
          "type": "doc",
          "id": "types/Boolean",
          "label": "Boolean"
        },
        {
          "type": "doc",
          "id": "types/Number",
          "label": "Number"
        },
        {
          "type": "doc",
          "id": "types/String",
          "label": "String"
        },
        {
          "type": "doc",
          "id": "types/Path",
          "label": "Path"
        },
        {
          "type": "doc",
          "id": "types/Point",
          "label": "Point"
        },
        {
          "type": "doc",
          "id": "types/Rect",
          "label": "Rect"
        },
        {
          "type": "doc",
          "id": "types/Scalar",
          "label": "Scalar"
        },
        {
          "type": "doc",
          "id": "types/Color",
          "label": "Color"
        },
        {
          "type": "doc",
          "id": "types/Bytes",
          "label": "Bytes"
        },
        {
          "type": "doc",
          "id": "types/RotatedRect",
          "label": "RotatedRect"
        },
        {
          "type": "doc",
          "id": "types/DetectionResult",
          "label": "DetectionResult"
        },
        {
          "type": "doc",
          "id": "types/ClassificationResult",
          "label": "ClassificationResult"
        },
        {
          "type": "doc",
          "id": "types/RecognitionResult",
          "label": "RecognitionResult"
        },
        {
          "type": "doc",
          "id": "types/File",
          "label": "File"
        },
        {
          "type": "doc",
          "id": "types/Image",
          "label": "Image"
        },
        {
          "type": "doc",
          "id": "types/Size",
          "label": "Size"
        },
        {
          "type": "doc",
          "id": "types/Url",
          "label": "Url"
        },
        {
          "type": "doc",
          "id": "types/Wnd",
          "label": "Wnd"
        },
        {
          "type": "doc",
          "id": "types/ModelSession",
          "label": "ModelSession"
        },
        {
          "type": "doc",
          "id": "types/WebDriver",
          "label": "WebDriver"
        },
        {
          "type": "doc",
          "id": "types/Timer",
          "label": "Timer"
        },
        {
          "type": "doc",
          "id": "types/Thread",
          "label": "Thread"
        },
        {
          "type": "doc",
          "id": "types/Keyboard",
          "label": "Keyboard"
        },
        {
          "type": "doc",
          "id": "types/HostAddress",
          "label": "HostAddress"
        },
        {
          "type": "doc",
          "id": "types/Tuple",
          "label": "Tuple"
        },
        {
          "type": "doc",
          "id": "types/Slice",
          "label": "Slice"
        },
        {
          "type": "doc",
          "id": "types/Ptr",
          "label": "Ptr"
        }
      ]
    },
    {
      "type": "category",
      "label": "枚举类型",
      "items": [
        {
          "type": "doc",
          "id": "enums/Colors",
          "label": "Colors"
        },
        {
          "type": "doc",
          "id": "enums/Directions",
          "label": "Directions"
        },
        {
          "type": "doc",
          "id": "enums/ColorConversionCodes",
          "label": "ColorConversionCodes"
        },
        {
          "type": "doc",
          "id": "enums/ContourShape",
          "label": "ContourShape"
        },
        {
          "type": "doc",
          "id": "enums/GlobOptions",
          "label": "GlobOptions"
        },
        {
          "type": "doc",
          "id": "enums/HandleType",
          "label": "HandleType"
        },
        {
          "type": "doc",
          "id": "enums/KnownWindow",
          "label": "KnownWindow"
        },
        {
          "type": "doc",
          "id": "enums/KnownFolder",
          "label": "KnownFolder"
        },
        {
          "type": "doc",
          "id": "enums/LogicalOperators",
          "label": "LogicalOperators"
        },
        {
          "type": "doc",
          "id": "enums/MessageBoxFlags",
          "label": "MessageBoxFlags"
        },
        {
          "type": "doc",
          "id": "enums/MessagePlaceMode",
          "label": "MessagePlaceMode"
        },
        {
          "type": "doc",
          "id": "enums/MouseButtons",
          "label": "MouseButtons"
        },
        {
          "type": "doc",
          "id": "enums/Operations",
          "label": "Operations"
        },
        {
          "type": "doc",
          "id": "enums/PointConvertMethod",
          "label": "PointConvertMethod"
        },
        {
          "type": "doc",
          "id": "enums/RelationalOperators",
          "label": "RelationalOperators"
        },
        {
          "type": "doc",
          "id": "enums/RetrievalModes",
          "label": "RetrievalModes"
        },
        {
          "type": "doc",
          "id": "enums/ThresholdTypes",
          "label": "ThresholdTypes"
        },
        {
          "type": "doc",
          "id": "enums/Visibility",
          "label": "Visibility"
        },
        {
          "type": "doc",
          "id": "enums/WorkState",
          "label": "WorkState"
        },
        {
          "type": "doc",
          "id": "enums/LogStatus",
          "label": "LogStatus"
        },
        {
          "type": "doc",
          "id": "enums/RelativePosition",
          "label": "RelativePosition"
        },
        {
          "type": "doc",
          "id": "enums/MouseMessage",
          "label": "MouseMessage"
        },
        {
          "type": "doc",
          "id": "enums/MorphologicalOperations",
          "label": "MorphologicalOperations"
        },
        {
          "type": "doc",
          "id": "enums/ContourApproximationMode",
          "label": "ContourApproximationMode"
        },
        {
          "type": "doc",
          "id": "enums/FeatureAlgorithm",
          "label": "FeatureAlgorithm"
        },
        {
          "type": "doc",
          "id": "enums/WindowSortDirection",
          "label": "WindowSortDirection"
        },
        {
          "type": "doc",
          "id": "enums/FileExtension",
          "label": "FileExtension"
        },
        {
          "type": "doc",
          "id": "enums/SuspendStateOption",
          "label": "SuspendStateOption"
        },
        {
          "type": "doc",
          "id": "enums/WebKey",
          "label": "WebKey"
        },
        {
          "type": "doc",
          "id": "enums/WebLocated",
          "label": "WebLocated"
        },
        {
          "type": "doc",
          "id": "enums/ModuleOption",
          "label": "ModuleOption"
        },
        {
          "type": "doc",
          "id": "enums/BARCODE_Encoding",
          "label": "BARCODE_Encoding"
        },
        {
          "type": "doc",
          "id": "enums/PageSegMode",
          "label": "PageSegMode"
        },
        {
          "type": "doc",
          "id": "enums/CameraTriggerActivation",
          "label": "CameraTriggerActivation"
        },
        {
          "type": "doc",
          "id": "enums/CameraTriggerSource",
          "label": "CameraTriggerSource"
        },
        {
          "type": "doc",
          "id": "enums/CameraType",
          "label": "CameraType"
        },
        {
          "type": "doc",
          "id": "enums/CookiesFormat",
          "label": "CookiesFormat"
        }
      ]
    },
    {
      "type": "doc",
      "id": "CHANGELOG",
      "label": "Changelog"
    }
  ]
};
