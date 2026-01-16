import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '5c2'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '95d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '73c'),
            routes: [
              {
                path: '/actions/',
                component: ComponentCreator('/actions/', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/BarcodeDetector',
                component: ComponentCreator('/actions/ai/BarcodeDetector', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/DocumentOrientation',
                component: ComponentCreator('/actions/ai/DocumentOrientation', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/ImageClassification',
                component: ComponentCreator('/actions/ai/ImageClassification', 'b13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/ObjectDetection',
                component: ComponentCreator('/actions/ai/ObjectDetection', '56c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/QRCode',
                component: ComponentCreator('/actions/ai/QRCode', '0ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextDetection',
                component: ComponentCreator('/actions/ai/TextDetection', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextExtract',
                component: ComponentCreator('/actions/ai/TextExtract', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextlineOrientation',
                component: ComponentCreator('/actions/ai/TextlineOrientation', '70d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextRecognition',
                component: ComponentCreator('/actions/ai/TextRecognition', '455'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextUnwarping',
                component: ComponentCreator('/actions/ai/TextUnwarping', 'd73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/AccessArray',
                component: ComponentCreator('/actions/algorithm/AccessArray', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/AccessKey',
                component: ComponentCreator('/actions/algorithm/AccessKey', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ArraySize',
                component: ComponentCreator('/actions/algorithm/ArraySize', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/CalculateCenter',
                component: ComponentCreator('/actions/algorithm/CalculateCenter', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ColorPercentage',
                component: ComponentCreator('/actions/algorithm/ColorPercentage', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ConvertPoint',
                component: ComponentCreator('/actions/algorithm/ConvertPoint', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterArea',
                component: ComponentCreator('/actions/algorithm/FilterArea', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterEllipse',
                component: ComponentCreator('/actions/algorithm/FilterEllipse', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterPerimeter',
                component: ComponentCreator('/actions/algorithm/FilterPerimeter', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterText',
                component: ComponentCreator('/actions/algorithm/FilterText', 'e70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterVertex',
                component: ComponentCreator('/actions/algorithm/FilterVertex', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ImageDifference',
                component: ComponentCreator('/actions/algorithm/ImageDifference', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/JoinString',
                component: ComponentCreator('/actions/algorithm/JoinString', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/PopBack',
                component: ComponentCreator('/actions/algorithm/PopBack', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/PushBack',
                component: ComponentCreator('/actions/algorithm/PushBack', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/RandomNumber',
                component: ComponentCreator('/actions/algorithm/RandomNumber', '980'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/RandomPoint',
                component: ComponentCreator('/actions/algorithm/RandomPoint', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/SplitString',
                component: ComponentCreator('/actions/algorithm/SplitString', '28d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/SubString',
                component: ComponentCreator('/actions/algorithm/SubString', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbClearText',
                component: ComponentCreator('/actions/android/AdbClearText', '28d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbConnect',
                component: ComponentCreator('/actions/android/AdbConnect', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbDevices',
                component: ComponentCreator('/actions/android/AdbDevices', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbForward',
                component: ComponentCreator('/actions/android/AdbForward', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbInput',
                component: ComponentCreator('/actions/android/AdbInput', '6a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbInstall',
                component: ComponentCreator('/actions/android/AdbInstall', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbIsInstalled',
                component: ComponentCreator('/actions/android/AdbIsInstalled', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbKey',
                component: ComponentCreator('/actions/android/AdbKey', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/Adbkeyboard',
                component: ComponentCreator('/actions/android/Adbkeyboard', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbLs',
                component: ComponentCreator('/actions/android/AdbLs', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbMove',
                component: ComponentCreator('/actions/android/AdbMove', 'c9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPackages',
                component: ComponentCreator('/actions/android/AdbPackages', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPull',
                component: ComponentCreator('/actions/android/AdbPull', 'a49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPush',
                component: ComponentCreator('/actions/android/AdbPush', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbScreenCap',
                component: ComponentCreator('/actions/android/AdbScreenCap', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbStartApp',
                component: ComponentCreator('/actions/android/AdbStartApp', 'e90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbStartServer',
                component: ComponentCreator('/actions/android/AdbStartServer', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbSwipe',
                component: ComponentCreator('/actions/android/AdbSwipe', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbTap',
                component: ComponentCreator('/actions/android/AdbTap', '9ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WhenEvent',
                component: ComponentCreator('/actions/asynchronous/WhenEvent', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkBegin',
                component: ComponentCreator('/actions/asynchronous/WorkBegin', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkExit',
                component: ComponentCreator('/actions/asynchronous/WorkExit', 'ff8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkReset',
                component: ComponentCreator('/actions/asynchronous/WorkReset', 'e68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkTask',
                component: ComponentCreator('/actions/asynchronous/WorkTask', 'd46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkThread',
                component: ComponentCreator('/actions/asynchronous/WorkThread', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkTimer',
                component: ComponentCreator('/actions/asynchronous/WorkTimer', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkWait',
                component: ComponentCreator('/actions/asynchronous/WorkWait', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/cloud/BaiduTranslate',
                component: ComponentCreator('/actions/cloud/BaiduTranslate', '644'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/ActionAlias',
                component: ComponentCreator('/actions/control/ActionAlias', 'b11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/ArithmeticCalculate',
                component: ComponentCreator('/actions/control/ArithmeticCalculate', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Break',
                component: ComponentCreator('/actions/control/Break', 'fce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Code',
                component: ComponentCreator('/actions/control/Code', 'e39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/CodeExpression',
                component: ComponentCreator('/actions/control/CodeExpression', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Exit',
                component: ComponentCreator('/actions/control/Exit', '223'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/For',
                component: ComponentCreator('/actions/control/For', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/GroupAction',
                component: ComponentCreator('/actions/control/GroupAction', '405'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/If',
                component: ComponentCreator('/actions/control/If', 'ea7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Invoke',
                component: ComponentCreator('/actions/control/Invoke', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/IsEmpty',
                component: ComponentCreator('/actions/control/IsEmpty', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/LoggingControl',
                component: ComponentCreator('/actions/control/LoggingControl', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/LogicalOperator',
                component: ComponentCreator('/actions/control/LogicalOperator', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/NameAlias',
                component: ComponentCreator('/actions/control/NameAlias', 'c04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Param',
                component: ComponentCreator('/actions/control/Param', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/RelationalOperator',
                component: ComponentCreator('/actions/control/RelationalOperator', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/SoftwareTrigger',
                component: ComponentCreator('/actions/control/SoftwareTrigger', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/BlobDetect',
                component: ComponentCreator('/actions/detection/BlobDetect', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/EllipseDetection',
                component: ComponentCreator('/actions/detection/EllipseDetection', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/FeatureDetect',
                component: ComponentCreator('/actions/detection/FeatureDetect', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/FindContours',
                component: ComponentCreator('/actions/detection/FindContours', 'ea8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/ImageColorDiscrimination',
                component: ComponentCreator('/actions/detection/ImageColorDiscrimination', '796'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/LineDetection',
                component: ComponentCreator('/actions/detection/LineDetection', 'b5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchImage',
                component: ComponentCreator('/actions/detection/MatchImage', 'f6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchShapes',
                component: ComponentCreator('/actions/detection/MatchShapes', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchTemplate',
                component: ComponentCreator('/actions/detection/MatchTemplate', 'e53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/ShapeDetection',
                component: ComponentCreator('/actions/detection/ShapeDetection', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/BarcodeCreate',
                component: ComponentCreator('/actions/draw/BarcodeCreate', '8a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawImage',
                component: ComponentCreator('/actions/draw/DrawImage', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawRect',
                component: ComponentCreator('/actions/draw/DrawRect', 'be4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawText',
                component: ComponentCreator('/actions/draw/DrawText', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/FillColor',
                component: ComponentCreator('/actions/draw/FillColor', '5e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/CopyFile',
                component: ComponentCreator('/actions/filesystem/CopyFile', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/DirectoryIterator',
                component: ComponentCreator('/actions/filesystem/DirectoryIterator', 'b5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileQuery',
                component: ComponentCreator('/actions/filesystem/FileQuery', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileRead',
                component: ComponentCreator('/actions/filesystem/FileRead', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileWrite',
                component: ComponentCreator('/actions/filesystem/FileWrite', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ImageLoad',
                component: ComponentCreator('/actions/filesystem/ImageLoad', '5f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ImageSave',
                component: ComponentCreator('/actions/filesystem/ImageSave', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ReadLines',
                component: ComponentCreator('/actions/filesystem/ReadLines', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/StandardPath',
                component: ComponentCreator('/actions/filesystem/StandardPath', '174'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/AdaptiveThreshold',
                component: ComponentCreator('/actions/image/AdaptiveThreshold', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CenterCropImage',
                component: ComponentCreator('/actions/image/CenterCropImage', '36e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ConnectedComponents',
                component: ComponentCreator('/actions/image/ConnectedComponents', '19e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CropImage',
                component: ComponentCreator('/actions/image/CropImage', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CvtColor',
                component: ComponentCreator('/actions/image/CvtColor', '49f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageBlur',
                component: ComponentCreator('/actions/image/ImageBlur', 'aab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageCanny',
                component: ComponentCreator('/actions/image/ImageCanny', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageInRange',
                component: ComponentCreator('/actions/image/ImageInRange', 'd91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMarkRelativeROI',
                component: ComponentCreator('/actions/image/ImageMarkRelativeROI', '99d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMarkROI',
                component: ComponentCreator('/actions/image/ImageMarkROI', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMean',
                component: ComponentCreator('/actions/image/ImageMean', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMorphological',
                component: ComponentCreator('/actions/image/ImageMorphological', '3a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageNormalize',
                component: ComponentCreator('/actions/image/ImageNormalize', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageRotate',
                component: ComponentCreator('/actions/image/ImageRotate', 'ac7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageScale',
                component: ComponentCreator('/actions/image/ImageScale', '905'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageStd',
                component: ComponentCreator('/actions/image/ImageStd', 'bee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageThreshold',
                component: ComponentCreator('/actions/image/ImageThreshold', '355'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ResizeImage',
                component: ComponentCreator('/actions/image/ResizeImage', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/ListenKeyboard',
                component: ComponentCreator('/actions/keyboard/ListenKeyboard', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/PressAndReleaseKey',
                component: ComponentCreator('/actions/keyboard/PressAndReleaseKey', '848'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/PressKey',
                component: ComponentCreator('/actions/keyboard/PressKey', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/ReleaseKey',
                component: ComponentCreator('/actions/keyboard/ReleaseKey', '67f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/SendKey',
                component: ComponentCreator('/actions/keyboard/SendKey', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/SendText',
                component: ComponentCreator('/actions/keyboard/SendText', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/WaitKey',
                component: ComponentCreator('/actions/keyboard/WaitKey', '893'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureActiveWindow',
                component: ComponentCreator('/actions/media/CaptureActiveWindow', 'f32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureScreen',
                component: ComponentCreator('/actions/media/CaptureScreen', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureWindow',
                component: ComponentCreator('/actions/media/CaptureWindow', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/MediaPlay',
                component: ComponentCreator('/actions/media/MediaPlay', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/PixelPoint',
                component: ComponentCreator('/actions/media/PixelPoint', '691'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/PlayRecord',
                component: ComponentCreator('/actions/media/PlayRecord', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/VideoFrame',
                component: ComponentCreator('/actions/media/VideoFrame', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/method/SubString',
                component: ComponentCreator('/actions/method/SubString', 'dcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/CellClick',
                component: ComponentCreator('/actions/mouse/CellClick', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/CellMove',
                component: ComponentCreator('/actions/mouse/CellMove', 'a21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/Click',
                component: ComponentCreator('/actions/mouse/Click', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/DoubleClick',
                component: ComponentCreator('/actions/mouse/DoubleClick', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/DragPointer',
                component: ComponentCreator('/actions/mouse/DragPointer', '3b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/ListenMouse',
                component: ComponentCreator('/actions/mouse/ListenMouse', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveClick',
                component: ComponentCreator('/actions/mouse/MoveClick', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveDoubleClick',
                component: ComponentCreator('/actions/mouse/MoveDoubleClick', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveOffset',
                component: ComponentCreator('/actions/mouse/MoveOffset', '7d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MovePointer',
                component: ComponentCreator('/actions/mouse/MovePointer', '712'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/RightClick',
                component: ComponentCreator('/actions/mouse/RightClick', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/WheelMouse',
                component: ComponentCreator('/actions/mouse/WheelMouse', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/DomainQuery',
                component: ComponentCreator('/actions/network/DomainQuery', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpDownload',
                component: ComponentCreator('/actions/network/HttpDownload', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpGet',
                component: ComponentCreator('/actions/network/HttpGet', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpHead',
                component: ComponentCreator('/actions/network/HttpHead', '654'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpPost',
                component: ComponentCreator('/actions/network/HttpPost', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkConnect',
                component: ComponentCreator('/actions/network/NetworkConnect', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkListen',
                component: ComponentCreator('/actions/network/NetworkListen', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkReceive',
                component: ComponentCreator('/actions/network/NetworkReceive', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkSend',
                component: ComponentCreator('/actions/network/NetworkSend', '200'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/ReceiveInput',
                component: ComponentCreator('/actions/network/ReceiveInput', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/SendInput',
                component: ComponentCreator('/actions/network/SendInput', '349'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/VideoDownload',
                component: ComponentCreator('/actions/network/VideoDownload', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/DataFrameQuery',
                component: ComponentCreator('/actions/pandas/DataFrameQuery', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/IndexLoc',
                component: ComponentCreator('/actions/pandas/IndexLoc', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/IterRow',
                component: ComponentCreator('/actions/pandas/IterRow', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/LoadDocument',
                component: ComponentCreator('/actions/pandas/LoadDocument', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/NameLoc',
                component: ComponentCreator('/actions/pandas/NameLoc', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/RowsCount',
                component: ComponentCreator('/actions/pandas/RowsCount', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/SaveDocument',
                component: ComponentCreator('/actions/pandas/SaveDocument', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/AttachProcess',
                component: ComponentCreator('/actions/system/AttachProcess', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CallMethod',
                component: ComponentCreator('/actions/system/CallMethod', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ClipboardValue',
                component: ComponentCreator('/actions/system/ClipboardValue', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CloseHandle',
                component: ComponentCreator('/actions/system/CloseHandle', 'cc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CreateObject',
                component: ComponentCreator('/actions/system/CreateObject', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ExistProcess',
                component: ComponentCreator('/actions/system/ExistProcess', '685'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/KillProcess',
                component: ComponentCreator('/actions/system/KillProcess', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/LaunchFile',
                component: ComponentCreator('/actions/system/LaunchFile', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/OpenApplication',
                component: ComponentCreator('/actions/system/OpenApplication', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/OpenUrl',
                component: ComponentCreator('/actions/system/OpenUrl', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/PrintMessage',
                component: ComponentCreator('/actions/system/PrintMessage', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ReadMemory',
                component: ComponentCreator('/actions/system/ReadMemory', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/Runas',
                component: ComponentCreator('/actions/system/Runas', 'aa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/StartProcess',
                component: ComponentCreator('/actions/system/StartProcess', 'bc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/SuspendSystem',
                component: ComponentCreator('/actions/system/SuspendSystem', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/UserAdd',
                component: ComponentCreator('/actions/system/UserAdd', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/Wait',
                component: ComponentCreator('/actions/system/Wait', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/WriteMemory',
                component: ComponentCreator('/actions/system/WriteMemory', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeBoolean',
                component: ComponentCreator('/actions/type/TypeBoolean', 'f1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeCamera',
                component: ComponentCreator('/actions/type/TypeCamera', '299'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeColor',
                component: ComponentCreator('/actions/type/TypeColor', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeDict',
                component: ComponentCreator('/actions/type/TypeDict', '106'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeEvent',
                component: ComponentCreator('/actions/type/TypeEvent', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeFile',
                component: ComponentCreator('/actions/type/TypeFile', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeHostAddress',
                component: ComponentCreator('/actions/type/TypeHostAddress', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeJson',
                component: ComponentCreator('/actions/type/TypeJson', '401'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeList',
                component: ComponentCreator('/actions/type/TypeList', '6ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeModel',
                component: ComponentCreator('/actions/type/TypeModel', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeNumber',
                component: ComponentCreator('/actions/type/TypeNumber', 'c98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePassword',
                component: ComponentCreator('/actions/type/TypePassword', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePath',
                component: ComponentCreator('/actions/type/TypePath', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePoint',
                component: ComponentCreator('/actions/type/TypePoint', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePtr',
                component: ComponentCreator('/actions/type/TypePtr', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeRect',
                component: ComponentCreator('/actions/type/TypeRect', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeResource',
                component: ComponentCreator('/actions/type/TypeResource', '509'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeScalar',
                component: ComponentCreator('/actions/type/TypeScalar', '890'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeShortcut',
                component: ComponentCreator('/actions/type/TypeShortcut', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeSlice',
                component: ComponentCreator('/actions/type/TypeSlice', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeString',
                component: ComponentCreator('/actions/type/TypeString', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeStrings',
                component: ComponentCreator('/actions/type/TypeStrings', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeTuple',
                component: ComponentCreator('/actions/type/TypeTuple', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeUrl',
                component: ComponentCreator('/actions/type/TypeUrl', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionChainsPerform',
                component: ComponentCreator('/actions/web/WebActionChainsPerform', 'c00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionClick',
                component: ComponentCreator('/actions/web/WebActionClick', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionClickHold',
                component: ComponentCreator('/actions/web/WebActionClickHold', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionDoubleClick',
                component: ComponentCreator('/actions/web/WebActionDoubleClick', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionDragDrop',
                component: ComponentCreator('/actions/web/WebActionDragDrop', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionKeyDown',
                component: ComponentCreator('/actions/web/WebActionKeyDown', '469'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionKeyUp',
                component: ComponentCreator('/actions/web/WebActionKeyUp', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionMoveTo',
                component: ComponentCreator('/actions/web/WebActionMoveTo', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionPause',
                component: ComponentCreator('/actions/web/WebActionPause', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionRelease',
                component: ComponentCreator('/actions/web/WebActionRelease', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionSendText',
                component: ComponentCreator('/actions/web/WebActionSendText', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebCookies',
                component: ComponentCreator('/actions/web/WebCookies', '019'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementAttribute',
                component: ComponentCreator('/actions/web/WebElementAttribute', 'a45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementClear',
                component: ComponentCreator('/actions/web/WebElementClear', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementClick',
                component: ComponentCreator('/actions/web/WebElementClick', 'bca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSelected',
                component: ComponentCreator('/actions/web/WebElementSelected', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSendKey',
                component: ComponentCreator('/actions/web/WebElementSendKey', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSendText',
                component: ComponentCreator('/actions/web/WebElementSendText', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSubmit',
                component: ComponentCreator('/actions/web/WebElementSubmit', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebExecute',
                component: ComponentCreator('/actions/web/WebExecute', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebFocusFrameDefault',
                component: ComponentCreator('/actions/web/WebFocusFrameDefault', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebGetElement',
                component: ComponentCreator('/actions/web/WebGetElement', '3b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebOpen',
                component: ComponentCreator('/actions/web/WebOpen', 'f50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebScreenshot',
                component: ComponentCreator('/actions/web/WebScreenshot', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebSwitchToFrame',
                component: ComponentCreator('/actions/web/WebSwitchToFrame', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitAlert',
                component: ComponentCreator('/actions/web/WebWaitAlert', '908'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitClickable',
                component: ComponentCreator('/actions/web/WebWaitClickable', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitFrameAvailable',
                component: ComponentCreator('/actions/web/WebWaitFrameAvailable', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitPresence',
                component: ComponentCreator('/actions/web/WebWaitPresence', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitTitle',
                component: ComponentCreator('/actions/web/WebWaitTitle', 'aa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitVisibilityByElement',
                component: ComponentCreator('/actions/web/WebWaitVisibilityByElement', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitVisibilityByLocator',
                component: ComponentCreator('/actions/web/WebWaitVisibilityByLocator', '952'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/ActiveWindow',
                component: ComponentCreator('/actions/window/ActiveWindow', '404'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/CloseWindow',
                component: ComponentCreator('/actions/window/CloseWindow', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/EnumWindows',
                component: ComponentCreator('/actions/window/EnumWindows', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/FindWindow',
                component: ComponentCreator('/actions/window/FindWindow', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/FlashWindow',
                component: ComponentCreator('/actions/window/FlashWindow', '310'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/MessageBox',
                component: ComponentCreator('/actions/window/MessageBox', 'fc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/PositionWindow',
                component: ComponentCreator('/actions/window/PositionWindow', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/SpecialWindow',
                component: ComponentCreator('/actions/window/SpecialWindow', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowAncestor',
                component: ComponentCreator('/actions/window/WindowAncestor', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowCaption',
                component: ComponentCreator('/actions/window/WindowCaption', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowPoint',
                component: ComponentCreator('/actions/window/WindowPoint', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowSize',
                component: ComponentCreator('/actions/window/WindowSize', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowVisible',
                component: ComponentCreator('/actions/window/WindowVisible', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowXy',
                component: ComponentCreator('/actions/window/WindowXy', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WinRun',
                component: ComponentCreator('/actions/window/WinRun', '9b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CHANGELOG',
                component: ComponentCreator('/CHANGELOG', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/AncestorWindow',
                component: ComponentCreator('/enums/AncestorWindow', 'ee7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/BARCODE_Encoding',
                component: ComponentCreator('/enums/BARCODE_Encoding', '627'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/BlurOperation',
                component: ComponentCreator('/enums/BlurOperation', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraTriggerActivation',
                component: ComponentCreator('/enums/CameraTriggerActivation', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraTriggerSource',
                component: ComponentCreator('/enums/CameraTriggerSource', 'a32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraType',
                component: ComponentCreator('/enums/CameraType', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ColorConversionCodes',
                component: ComponentCreator('/enums/ColorConversionCodes', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Colors',
                component: ComponentCreator('/enums/Colors', '6c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ContourApproximationMode',
                component: ComponentCreator('/enums/ContourApproximationMode', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ContourShape',
                component: ComponentCreator('/enums/ContourShape', '0ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CookiesFormat',
                component: ComponentCreator('/enums/CookiesFormat', '0a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Directions',
                component: ComponentCreator('/enums/Directions', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/FeatureAlgorithm',
                component: ComponentCreator('/enums/FeatureAlgorithm', 'a4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/FileExtension',
                component: ComponentCreator('/enums/FileExtension', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/GlobOptions',
                component: ComponentCreator('/enums/GlobOptions', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/HandleType',
                component: ComponentCreator('/enums/HandleType', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/KnownFolder',
                component: ComponentCreator('/enums/KnownFolder', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/KnownWindow',
                component: ComponentCreator('/enums/KnownWindow', '095'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/LogicalOperators',
                component: ComponentCreator('/enums/LogicalOperators', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/LogStatus',
                component: ComponentCreator('/enums/LogStatus', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MessageBoxFlags',
                component: ComponentCreator('/enums/MessageBoxFlags', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MessagePlaceMode',
                component: ComponentCreator('/enums/MessagePlaceMode', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ModuleOption',
                component: ComponentCreator('/enums/ModuleOption', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MorphologicalOperations',
                component: ComponentCreator('/enums/MorphologicalOperations', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MouseButtons',
                component: ComponentCreator('/enums/MouseButtons', '2cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MouseMessage',
                component: ComponentCreator('/enums/MouseMessage', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Operations',
                component: ComponentCreator('/enums/Operations', '3d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Orientation',
                component: ComponentCreator('/enums/Orientation', '420'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/PageSegMode',
                component: ComponentCreator('/enums/PageSegMode', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/PointConvertMethod',
                component: ComponentCreator('/enums/PointConvertMethod', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RelationalOperators',
                component: ComponentCreator('/enums/RelationalOperators', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RelativePosition',
                component: ComponentCreator('/enums/RelativePosition', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RetrievalModes',
                component: ComponentCreator('/enums/RetrievalModes', '4bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/SeverityLevel',
                component: ComponentCreator('/enums/SeverityLevel', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/SuspendStateOption',
                component: ComponentCreator('/enums/SuspendStateOption', 'dec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ThresholdTypes',
                component: ComponentCreator('/enums/ThresholdTypes', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Visibility',
                component: ComponentCreator('/enums/Visibility', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WebKey',
                component: ComponentCreator('/enums/WebKey', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WebLocated',
                component: ComponentCreator('/enums/WebLocated', 'c5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WindowHandle',
                component: ComponentCreator('/enums/WindowHandle', '39d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WindowSortDirection',
                component: ComponentCreator('/enums/WindowSortDirection', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WorkState',
                component: ComponentCreator('/enums/WorkState', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/',
                component: ComponentCreator('/introduction/', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/android/uiautomatorviewer',
                component: ComponentCreator('/introduction/android/uiautomatorviewer', '096'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/installed_by_exe',
                component: ComponentCreator('/introduction/installation/installed_by_exe', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/installed_by_msix',
                component: ComponentCreator('/introduction/installation/installed_by_msix', 'a5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/question/quest1',
                component: ComponentCreator('/introduction/installation/question/quest1', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/question/quest2',
                component: ComponentCreator('/introduction/installation/question/quest2', 'd17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/CUDA',
                component: ComponentCreator('/introduction/mixed/CUDA', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/cuDNN',
                component: ComponentCreator('/introduction/mixed/cuDNN', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/glob',
                component: ComponentCreator('/introduction/mixed/glob', 'ac2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/paddle2onnx',
                component: ComponentCreator('/introduction/mixed/paddle2onnx', '3cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/wildcard',
                component: ComponentCreator('/introduction/mixed/wildcard', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/setting/action_group_setting',
                component: ComponentCreator('/introduction/setting/action_group_setting', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/setting/workflow',
                component: ComponentCreator('/introduction/setting/workflow', 'c0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/Data-Files',
                component: ComponentCreator('/introduction/tesseract/Data-Files', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/Languages_Scripts',
                component: ComponentCreator('/introduction/tesseract/Languages_Scripts', 'cfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/tesstrain',
                component: ComponentCreator('/introduction/tesseract/tesstrain', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/browser_directory',
                component: ComponentCreator('/introduction/webdriver/browser_directory', '910'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/download',
                component: ComponentCreator('/introduction/webdriver/download', 'b3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/locators',
                component: ComponentCreator('/introduction/webdriver/locators', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/action',
                component: ComponentCreator('/introduction/workflow/action', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/features',
                component: ComponentCreator('/introduction/workflow/features', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/logic',
                component: ComponentCreator('/introduction/workflow/logic', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/property',
                component: ComponentCreator('/introduction/workflow/property', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/record',
                component: ComponentCreator('/introduction/workflow/record', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/resources',
                component: ComponentCreator('/introduction/workflow/resources', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/variable',
                component: ComponentCreator('/introduction/workflow/variable', 'fac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/network/openwrt_dns',
                component: ComponentCreator('/network/openwrt_dns', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ActionChains',
                component: ComponentCreator('/types/ActionChains', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Boolean',
                component: ComponentCreator('/types/Boolean', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Bytes',
                component: ComponentCreator('/types/Bytes', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ClassificationResult',
                component: ComponentCreator('/types/ClassificationResult', '8cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Color',
                component: ComponentCreator('/types/Color', '05e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Contour',
                component: ComponentCreator('/types/Contour', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/DateTime',
                component: ComponentCreator('/types/DateTime', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/DetectionResult',
                component: ComponentCreator('/types/DetectionResult', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Dict',
                component: ComponentCreator('/types/Dict', '852'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Ellipse',
                component: ComponentCreator('/types/Ellipse', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/File',
                component: ComponentCreator('/types/File', '48e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/HostAddress',
                component: ComponentCreator('/types/HostAddress', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Image',
                component: ComponentCreator('/types/Image', 'da9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/IOContext',
                component: ComponentCreator('/types/IOContext', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/JsonArray',
                component: ComponentCreator('/types/JsonArray', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/JsonValue',
                component: ComponentCreator('/types/JsonValue', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Keyboard',
                component: ComponentCreator('/types/Keyboard', '6d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/KeySequence',
                component: ComponentCreator('/types/KeySequence', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Line',
                component: ComponentCreator('/types/Line', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/List',
                component: ComponentCreator('/types/List', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ModelSession',
                component: ComponentCreator('/types/ModelSession', '315'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Number',
                component: ComponentCreator('/types/Number', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Object',
                component: ComponentCreator('/types/Object', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Path',
                component: ComponentCreator('/types/Path', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Point',
                component: ComponentCreator('/types/Point', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Ptr',
                component: ComponentCreator('/types/Ptr', '977'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Range',
                component: ComponentCreator('/types/Range', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/RecognitionResult',
                component: ComponentCreator('/types/RecognitionResult', '535'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Rect',
                component: ComponentCreator('/types/Rect', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/RotatedRect',
                component: ComponentCreator('/types/RotatedRect', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Scalar',
                component: ComponentCreator('/types/Scalar', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Size',
                component: ComponentCreator('/types/Size', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Slice',
                component: ComponentCreator('/types/Slice', '9d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/String',
                component: ComponentCreator('/types/String', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TCPServer',
                component: ComponentCreator('/types/TCPServer', 'ae4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TCPSocket',
                component: ComponentCreator('/types/TCPSocket', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Thread',
                component: ComponentCreator('/types/Thread', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Timer',
                component: ComponentCreator('/types/Timer', '401'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TimeSpan',
                component: ComponentCreator('/types/TimeSpan', 'c31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Tuple',
                component: ComponentCreator('/types/Tuple', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/UDPSocket',
                component: ComponentCreator('/types/UDPSocket', 'e9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Url',
                component: ComponentCreator('/types/Url', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/VideoCapture',
                component: ComponentCreator('/types/VideoCapture', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WebDriver',
                component: ComponentCreator('/types/WebDriver', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WebElement',
                component: ComponentCreator('/types/WebElement', '19e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WinEvent',
                component: ComponentCreator('/types/WinEvent', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WinInput',
                component: ComponentCreator('/types/WinInput', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Wnd',
                component: ComponentCreator('/types/Wnd', '19a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '72f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
