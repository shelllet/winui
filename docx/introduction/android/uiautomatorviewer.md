# 如何下载并安装 UIAutomatorViewer 
*UIAutomatorViewer* 是一个用来扫描和分析 *Android* 应用程序*UI* 组件的*GUI* 工具，使用*UIAutomatorViewer*，可以检查安卓应用程序的*UI*，找出层次结构，并查看不同的元素属性(id、文本)。

*UiautomatorViewer* 是 *Android SDK Manager* 的一部分，一旦您安装 *SDK Manager*，就可以使用。

## 1、安装 Java

在这里可以在官方下载 [Java](https://www.oracle.com/java/technologies/downloads/#java17),需要登录 *Oracle* 账号，比较麻烦。或者使用本站提供的[jdk-17_windows-x64_bin.msi](https://bitbucket.org/winui-release/version/downloads/jdk-17_windows-x64_bin.msi)，下载安装。

## 2、安装 Android SDK Tools

目前官网上已经没有单独的SDK下载安装包了，目前官网推荐的是下载包含有 *Android SDK* 的 *Android Studio*。而我们只需要用到 *SDK* 工具。点击这里下载：https://dl.google.com/android/repository/sdk-tools-windows-4333796.zip 。解压并找到名为`uiautomatorviewer.bat` 批处理文件运行。


## Android SDK Command-Line Tools
!> 在运行`\sdkmanager.bat`的时候可能会报以下错误，主要是安装的*JAVA*版本不对引起的。


```
Exception in thread "main" java.lang.UnsupportedClassVersionError: com/baeldung/MajorMinorApp 
has been compiled by a more recent version of the Java Runtime (class file version 55.0), 
this version of the Java Runtime only recognizes class file versions up to 52.0

```

![exe](../images/02.png ':size=90%')

### Java 版本对照表
* 45 = Java 1.1
* 46 = Java 1.2
* 47 = Java 1.3
* 48 = Java 1.4
* 49 = Java 5
* 50 = Java 6
* 51 = Java 7
* 52 = Java 8
* 53 = Java 9
* 54 = Java 10
* 55 = Java 11
* 56 = Java 12
* 57 = Java 13
* 58 = Java 14
* 59 = Java 15
* 60 = Java 16
* 61 = Java 17
* 62 = Java 18
* 63 = Java 19
* 64 = Java 20
* 65 = Java 21
* 66 = Java 22