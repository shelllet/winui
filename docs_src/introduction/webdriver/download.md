# 浏览�?WebDriver 驱动
使用 Selenium WebDriver 进行浏览器自动化测试时，你需要为不同的浏览器下载对应�?WebDriver 驱动。每个驱动都是一个独立的、可执行的程序，它充�?Selenium 脚本和实际浏览器之间的桥梁�?

**重要提示�?*

* **版本匹配是关键！** 你下载的 WebDriver 驱动版本必须与你本地安装的浏览器版本兼容。如果版本不匹配，你的自动化脚本很可能会报错�?
* **Selenium Manager�?* Selenium 4.6 及更高版本引入了 Selenium Manager，它通常可以自动检测你的浏览器版本并下载相应的 WebDriver。这意味着在很多情况下，你可能不再需要手动下载和管理这些驱动了。然而，了解手动下载的方法仍然很有用，尤其是在离线环境或遇到自动下载问题时�?

---

### 1. Google Chrome (ChromeDriver)

ChromeDriver �?Google Chrome 浏览器的 WebDriver 驱动�?

* **检�?Chrome 版本�?*
    1.  打开 Chrome 浏览器�?
    2.  在地址栏输�?`chrome://version` 并回车�?
    3.  记下你的 Chrome 版本号（例如�?26.0.6478.127）�?

* **下载 ChromeDriver�?*
    1.  访问 **Chrome for Testing availability dashboard**：`https://googlechromelabs.github.io/chrome-for-testing/`
        * **对于 Chrome 115 及更高版本：** Google 采用了新的发布机制，你需要在这个页面上找到与你的 Chrome 版本最接近�?**Stable (稳定�?**�?*Beta (测试�?**�?*Dev (开发版)** �?**Canary (金丝雀�?** �?ChromeDriver 下载链接。通常，你会选择稳定版。找到对应的版本后，点击其下方的 JSON 文件链接，或者直接复制下载链接�?
        * **对于 Chrome 114 及更低版本：** 你可以在旧的 ChromeDriver 下载页面找到它们：`https://chromedriver.chromium.org/downloads`�?
    2.  根据你的操作系统（Windows, macOS, Linux）和架构（x64, arm64, win32），下载对应�?`chromedriver.zip` 文件�?
    3.  解压下载�?`chromedriver.zip` 文件，你会得到一�?`chromedriver.exe` (Windows) �?`chromedriver` (macOS/Linux) 可执行文件�?

---

### 2. Mozilla Firefox (GeckoDriver)

GeckoDriver �?Mozilla Firefox 浏览器的 WebDriver 驱动�?

* **检�?Firefox 版本�?*
    1.  打开 Firefox 浏览器�?
    2.  在地址栏输�?`about:support` 并回车�?
    3.  查找 "应用程序基础" (Application Basics) 部分下的 "版本" (Version) 号�?

* **下载 GeckoDriver�?*
    1.  访问 **GeckoDriver GitHub 发布页面**：`https://github.com/mozilla/geckodriver/releases`
    2.  通常，你需要下载最新稳定版本的 GeckoDriver。向下滚动页面，找到最新发布的版本（例如：v0.34.0）�?
    3.  �?"Assets" (资产) 部分，根据你的操作系统（Windows, macOS, Linux）和架构（x64, x86）选择对应�?`geckodriver.zip` �?`geckodriver.tar.gz` 文件下载�?
    4.  解压下载的文件，你会得到一�?`geckodriver.exe` (Windows) �?`geckodriver` (macOS/Linux) 可执行文件�?

---

### 3. Microsoft Edge (MSEdgeDriver)

MSEdgeDriver �?Microsoft Edge (基于 Chromium 的新�?Edge) 浏览器的 WebDriver 驱动�?

* **检�?Edge 版本�?*
    1.  打开 Microsoft Edge 浏览器�?
    2.  在地址栏输�?`edge://version` 并回车�?
    3.  记下你的 Microsoft Edge 版本号�?

* **下载 MSEdgeDriver�?*
    1.  访问 **Microsoft Edge Developer WebDriver 页面**：`https://developer.microsoft.com/zh-cn/microsoft-edge/tools/webdriver/`
    2.  在这个页面，你会看到不同 Edge 通道（稳定版、测试版、开发版、Canary 版）对应�?WebDriver 版本�?*务必选择与你�?Edge 浏览器版本完全匹配的 WebDriver�?*
    3.  根据你的操作系统（Windows, macOS, Linux）和架构（x64, x86, ARM64），下载对应�?`msedgedriver.zip` 文件�?
    4.  解压下载的文件，你会得到一�?`msedgedriver.exe` (Windows) �?`msedgedriver` (macOS/Linux) 可执行文件�?

---

### 下载后的处理

下载并解�?WebDriver 驱动后，你需要将这些可执行文件放置在你的系统 **PATH 环境变量** 中包含的某个目录里，或者在你的自动化脚本中明确指定它们的路径。将它们放在 PATH 中是最方便的做法，这样 Selenium 就可以直接找到并使用它们�?

