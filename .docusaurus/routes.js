import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'df5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '3c1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '2c5'),
            routes: [
              {
                path: '/actions/',
                component: ComponentCreator('/actions/', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/BarcodeDetector',
                component: ComponentCreator('/actions/ai/BarcodeDetector', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/DocumentOrientation',
                component: ComponentCreator('/actions/ai/DocumentOrientation', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/ImageClassification',
                component: ComponentCreator('/actions/ai/ImageClassification', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/ObjectDetection',
                component: ComponentCreator('/actions/ai/ObjectDetection', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/QRCode',
                component: ComponentCreator('/actions/ai/QRCode', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextDetection',
                component: ComponentCreator('/actions/ai/TextDetection', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextExtract',
                component: ComponentCreator('/actions/ai/TextExtract', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextlineOrientation',
                component: ComponentCreator('/actions/ai/TextlineOrientation', 'c38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextRecognition',
                component: ComponentCreator('/actions/ai/TextRecognition', '505'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/ai/TextUnwarping',
                component: ComponentCreator('/actions/ai/TextUnwarping', 'fbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/AccessArray',
                component: ComponentCreator('/actions/algorithm/AccessArray', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/AccessKey',
                component: ComponentCreator('/actions/algorithm/AccessKey', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ArraySize',
                component: ComponentCreator('/actions/algorithm/ArraySize', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/CalculateCenter',
                component: ComponentCreator('/actions/algorithm/CalculateCenter', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ColorPercentage',
                component: ComponentCreator('/actions/algorithm/ColorPercentage', 'f54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ConvertPoint',
                component: ComponentCreator('/actions/algorithm/ConvertPoint', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterArea',
                component: ComponentCreator('/actions/algorithm/FilterArea', '443'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterEllipse',
                component: ComponentCreator('/actions/algorithm/FilterEllipse', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterPerimeter',
                component: ComponentCreator('/actions/algorithm/FilterPerimeter', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterText',
                component: ComponentCreator('/actions/algorithm/FilterText', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/FilterVertex',
                component: ComponentCreator('/actions/algorithm/FilterVertex', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/ImageDifference',
                component: ComponentCreator('/actions/algorithm/ImageDifference', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/JoinString',
                component: ComponentCreator('/actions/algorithm/JoinString', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/PopBack',
                component: ComponentCreator('/actions/algorithm/PopBack', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/PushBack',
                component: ComponentCreator('/actions/algorithm/PushBack', 'b88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/RandomNumber',
                component: ComponentCreator('/actions/algorithm/RandomNumber', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/RandomPoint',
                component: ComponentCreator('/actions/algorithm/RandomPoint', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/SplitString',
                component: ComponentCreator('/actions/algorithm/SplitString', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/algorithm/SubString',
                component: ComponentCreator('/actions/algorithm/SubString', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbClearText',
                component: ComponentCreator('/actions/android/AdbClearText', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbConnect',
                component: ComponentCreator('/actions/android/AdbConnect', '390'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbDevices',
                component: ComponentCreator('/actions/android/AdbDevices', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbForward',
                component: ComponentCreator('/actions/android/AdbForward', '256'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbInput',
                component: ComponentCreator('/actions/android/AdbInput', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbInstall',
                component: ComponentCreator('/actions/android/AdbInstall', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbIsInstalled',
                component: ComponentCreator('/actions/android/AdbIsInstalled', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbKey',
                component: ComponentCreator('/actions/android/AdbKey', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/Adbkeyboard',
                component: ComponentCreator('/actions/android/Adbkeyboard', 'fef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbLs',
                component: ComponentCreator('/actions/android/AdbLs', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbMove',
                component: ComponentCreator('/actions/android/AdbMove', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPackages',
                component: ComponentCreator('/actions/android/AdbPackages', '99e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPull',
                component: ComponentCreator('/actions/android/AdbPull', '255'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbPush',
                component: ComponentCreator('/actions/android/AdbPush', 'e58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbScreenCap',
                component: ComponentCreator('/actions/android/AdbScreenCap', 'ed2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbStartApp',
                component: ComponentCreator('/actions/android/AdbStartApp', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbStartServer',
                component: ComponentCreator('/actions/android/AdbStartServer', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbSwipe',
                component: ComponentCreator('/actions/android/AdbSwipe', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/android/AdbTap',
                component: ComponentCreator('/actions/android/AdbTap', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WhenEvent',
                component: ComponentCreator('/actions/asynchronous/WhenEvent', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkBegin',
                component: ComponentCreator('/actions/asynchronous/WorkBegin', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkExit',
                component: ComponentCreator('/actions/asynchronous/WorkExit', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkReset',
                component: ComponentCreator('/actions/asynchronous/WorkReset', '982'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkTask',
                component: ComponentCreator('/actions/asynchronous/WorkTask', '832'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkThread',
                component: ComponentCreator('/actions/asynchronous/WorkThread', 'f28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkTimer',
                component: ComponentCreator('/actions/asynchronous/WorkTimer', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/asynchronous/WorkWait',
                component: ComponentCreator('/actions/asynchronous/WorkWait', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/cloud/BaiduTranslate',
                component: ComponentCreator('/actions/cloud/BaiduTranslate', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/ActionAlias',
                component: ComponentCreator('/actions/control/ActionAlias', '494'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/ArithmeticCalculate',
                component: ComponentCreator('/actions/control/ArithmeticCalculate', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Break',
                component: ComponentCreator('/actions/control/Break', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Code',
                component: ComponentCreator('/actions/control/Code', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/CodeExpression',
                component: ComponentCreator('/actions/control/CodeExpression', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Exit',
                component: ComponentCreator('/actions/control/Exit', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/For',
                component: ComponentCreator('/actions/control/For', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/GroupAction',
                component: ComponentCreator('/actions/control/GroupAction', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/If',
                component: ComponentCreator('/actions/control/If', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Invoke',
                component: ComponentCreator('/actions/control/Invoke', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/IsEmpty',
                component: ComponentCreator('/actions/control/IsEmpty', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/LoggingControl',
                component: ComponentCreator('/actions/control/LoggingControl', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/LogicalOperator',
                component: ComponentCreator('/actions/control/LogicalOperator', '880'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/NameAlias',
                component: ComponentCreator('/actions/control/NameAlias', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/Param',
                component: ComponentCreator('/actions/control/Param', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/RelationalOperator',
                component: ComponentCreator('/actions/control/RelationalOperator', '0c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/control/SoftwareTrigger',
                component: ComponentCreator('/actions/control/SoftwareTrigger', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/BlobDetect',
                component: ComponentCreator('/actions/detection/BlobDetect', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/EllipseDetection',
                component: ComponentCreator('/actions/detection/EllipseDetection', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/FeatureDetect',
                component: ComponentCreator('/actions/detection/FeatureDetect', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/FindContours',
                component: ComponentCreator('/actions/detection/FindContours', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/ImageColorDiscrimination',
                component: ComponentCreator('/actions/detection/ImageColorDiscrimination', 'a3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/LineDetection',
                component: ComponentCreator('/actions/detection/LineDetection', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchImage',
                component: ComponentCreator('/actions/detection/MatchImage', 'c69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchShapes',
                component: ComponentCreator('/actions/detection/MatchShapes', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/MatchTemplate',
                component: ComponentCreator('/actions/detection/MatchTemplate', '89b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/detection/ShapeDetection',
                component: ComponentCreator('/actions/detection/ShapeDetection', 'b52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/BarcodeCreate',
                component: ComponentCreator('/actions/draw/BarcodeCreate', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawImage',
                component: ComponentCreator('/actions/draw/DrawImage', '494'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawRect',
                component: ComponentCreator('/actions/draw/DrawRect', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/DrawText',
                component: ComponentCreator('/actions/draw/DrawText', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/draw/FillColor',
                component: ComponentCreator('/actions/draw/FillColor', 'e48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/CopyFile',
                component: ComponentCreator('/actions/filesystem/CopyFile', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/DirectoryIterator',
                component: ComponentCreator('/actions/filesystem/DirectoryIterator', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileQuery',
                component: ComponentCreator('/actions/filesystem/FileQuery', '4a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileRead',
                component: ComponentCreator('/actions/filesystem/FileRead', '94a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/FileWrite',
                component: ComponentCreator('/actions/filesystem/FileWrite', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ImageLoad',
                component: ComponentCreator('/actions/filesystem/ImageLoad', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ImageSave',
                component: ComponentCreator('/actions/filesystem/ImageSave', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/ReadLines',
                component: ComponentCreator('/actions/filesystem/ReadLines', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/filesystem/StandardPath',
                component: ComponentCreator('/actions/filesystem/StandardPath', '1aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/AdaptiveThreshold',
                component: ComponentCreator('/actions/image/AdaptiveThreshold', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CenterCropImage',
                component: ComponentCreator('/actions/image/CenterCropImage', 'a89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ConnectedComponents',
                component: ComponentCreator('/actions/image/ConnectedComponents', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CropImage',
                component: ComponentCreator('/actions/image/CropImage', 'edd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/CvtColor',
                component: ComponentCreator('/actions/image/CvtColor', 'b42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageBlur',
                component: ComponentCreator('/actions/image/ImageBlur', 'a1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageCanny',
                component: ComponentCreator('/actions/image/ImageCanny', 'aeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageInRange',
                component: ComponentCreator('/actions/image/ImageInRange', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMarkRelativeROI',
                component: ComponentCreator('/actions/image/ImageMarkRelativeROI', '799'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMarkROI',
                component: ComponentCreator('/actions/image/ImageMarkROI', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMean',
                component: ComponentCreator('/actions/image/ImageMean', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageMorphological',
                component: ComponentCreator('/actions/image/ImageMorphological', '921'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageNormalize',
                component: ComponentCreator('/actions/image/ImageNormalize', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageRotate',
                component: ComponentCreator('/actions/image/ImageRotate', 'b0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageScale',
                component: ComponentCreator('/actions/image/ImageScale', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageStd',
                component: ComponentCreator('/actions/image/ImageStd', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ImageThreshold',
                component: ComponentCreator('/actions/image/ImageThreshold', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/image/ResizeImage',
                component: ComponentCreator('/actions/image/ResizeImage', 'd07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/ListenKeyboard',
                component: ComponentCreator('/actions/keyboard/ListenKeyboard', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/PressAndReleaseKey',
                component: ComponentCreator('/actions/keyboard/PressAndReleaseKey', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/PressKey',
                component: ComponentCreator('/actions/keyboard/PressKey', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/ReleaseKey',
                component: ComponentCreator('/actions/keyboard/ReleaseKey', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/SendKey',
                component: ComponentCreator('/actions/keyboard/SendKey', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/SendText',
                component: ComponentCreator('/actions/keyboard/SendText', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/keyboard/WaitKey',
                component: ComponentCreator('/actions/keyboard/WaitKey', '450'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureActiveWindow',
                component: ComponentCreator('/actions/media/CaptureActiveWindow', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureScreen',
                component: ComponentCreator('/actions/media/CaptureScreen', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/CaptureWindow',
                component: ComponentCreator('/actions/media/CaptureWindow', 'f70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/MediaPlay',
                component: ComponentCreator('/actions/media/MediaPlay', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/PixelPoint',
                component: ComponentCreator('/actions/media/PixelPoint', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/PlayRecord',
                component: ComponentCreator('/actions/media/PlayRecord', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/media/VideoFrame',
                component: ComponentCreator('/actions/media/VideoFrame', 'ee2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/method/SubString',
                component: ComponentCreator('/actions/method/SubString', '803'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/CellClick',
                component: ComponentCreator('/actions/mouse/CellClick', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/CellMove',
                component: ComponentCreator('/actions/mouse/CellMove', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/Click',
                component: ComponentCreator('/actions/mouse/Click', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/DoubleClick',
                component: ComponentCreator('/actions/mouse/DoubleClick', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/DragPointer',
                component: ComponentCreator('/actions/mouse/DragPointer', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/ListenMouse',
                component: ComponentCreator('/actions/mouse/ListenMouse', '25e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveClick',
                component: ComponentCreator('/actions/mouse/MoveClick', 'a66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveDoubleClick',
                component: ComponentCreator('/actions/mouse/MoveDoubleClick', '8b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MoveOffset',
                component: ComponentCreator('/actions/mouse/MoveOffset', 'afa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/MovePointer',
                component: ComponentCreator('/actions/mouse/MovePointer', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/RightClick',
                component: ComponentCreator('/actions/mouse/RightClick', '9ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/mouse/WheelMouse',
                component: ComponentCreator('/actions/mouse/WheelMouse', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/DomainQuery',
                component: ComponentCreator('/actions/network/DomainQuery', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpDownload',
                component: ComponentCreator('/actions/network/HttpDownload', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpGet',
                component: ComponentCreator('/actions/network/HttpGet', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpHead',
                component: ComponentCreator('/actions/network/HttpHead', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/HttpPost',
                component: ComponentCreator('/actions/network/HttpPost', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkConnect',
                component: ComponentCreator('/actions/network/NetworkConnect', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkListen',
                component: ComponentCreator('/actions/network/NetworkListen', '1c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkReceive',
                component: ComponentCreator('/actions/network/NetworkReceive', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/NetworkSend',
                component: ComponentCreator('/actions/network/NetworkSend', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/ReceiveInput',
                component: ComponentCreator('/actions/network/ReceiveInput', '7ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/SendInput',
                component: ComponentCreator('/actions/network/SendInput', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/network/VideoDownload',
                component: ComponentCreator('/actions/network/VideoDownload', '19a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/DataFrameQuery',
                component: ComponentCreator('/actions/pandas/DataFrameQuery', 'f7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/IndexLoc',
                component: ComponentCreator('/actions/pandas/IndexLoc', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/IterRow',
                component: ComponentCreator('/actions/pandas/IterRow', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/LoadDocument',
                component: ComponentCreator('/actions/pandas/LoadDocument', '44b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/NameLoc',
                component: ComponentCreator('/actions/pandas/NameLoc', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/RowsCount',
                component: ComponentCreator('/actions/pandas/RowsCount', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/pandas/SaveDocument',
                component: ComponentCreator('/actions/pandas/SaveDocument', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/AttachProcess',
                component: ComponentCreator('/actions/system/AttachProcess', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CallMethod',
                component: ComponentCreator('/actions/system/CallMethod', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ClipboardValue',
                component: ComponentCreator('/actions/system/ClipboardValue', '1e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CloseHandle',
                component: ComponentCreator('/actions/system/CloseHandle', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/CreateObject',
                component: ComponentCreator('/actions/system/CreateObject', '423'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ExistProcess',
                component: ComponentCreator('/actions/system/ExistProcess', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/KillProcess',
                component: ComponentCreator('/actions/system/KillProcess', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/LaunchFile',
                component: ComponentCreator('/actions/system/LaunchFile', 'f1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/OpenApplication',
                component: ComponentCreator('/actions/system/OpenApplication', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/OpenUrl',
                component: ComponentCreator('/actions/system/OpenUrl', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/PrintMessage',
                component: ComponentCreator('/actions/system/PrintMessage', 'bdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/ReadMemory',
                component: ComponentCreator('/actions/system/ReadMemory', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/Runas',
                component: ComponentCreator('/actions/system/Runas', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/StartProcess',
                component: ComponentCreator('/actions/system/StartProcess', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/SuspendSystem',
                component: ComponentCreator('/actions/system/SuspendSystem', 'ecc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/UserAdd',
                component: ComponentCreator('/actions/system/UserAdd', 'bdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/Wait',
                component: ComponentCreator('/actions/system/Wait', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/system/WriteMemory',
                component: ComponentCreator('/actions/system/WriteMemory', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeBoolean',
                component: ComponentCreator('/actions/type/TypeBoolean', '8ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeCamera',
                component: ComponentCreator('/actions/type/TypeCamera', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeColor',
                component: ComponentCreator('/actions/type/TypeColor', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeDict',
                component: ComponentCreator('/actions/type/TypeDict', 'f70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeEvent',
                component: ComponentCreator('/actions/type/TypeEvent', 'ab2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeFile',
                component: ComponentCreator('/actions/type/TypeFile', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeHostAddress',
                component: ComponentCreator('/actions/type/TypeHostAddress', '70d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeJson',
                component: ComponentCreator('/actions/type/TypeJson', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeList',
                component: ComponentCreator('/actions/type/TypeList', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeModel',
                component: ComponentCreator('/actions/type/TypeModel', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeNumber',
                component: ComponentCreator('/actions/type/TypeNumber', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePassword',
                component: ComponentCreator('/actions/type/TypePassword', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePath',
                component: ComponentCreator('/actions/type/TypePath', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePoint',
                component: ComponentCreator('/actions/type/TypePoint', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypePtr',
                component: ComponentCreator('/actions/type/TypePtr', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeRect',
                component: ComponentCreator('/actions/type/TypeRect', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeResource',
                component: ComponentCreator('/actions/type/TypeResource', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeScalar',
                component: ComponentCreator('/actions/type/TypeScalar', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeShortcut',
                component: ComponentCreator('/actions/type/TypeShortcut', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeSlice',
                component: ComponentCreator('/actions/type/TypeSlice', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeString',
                component: ComponentCreator('/actions/type/TypeString', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeStrings',
                component: ComponentCreator('/actions/type/TypeStrings', '8b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeTuple',
                component: ComponentCreator('/actions/type/TypeTuple', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/type/TypeUrl',
                component: ComponentCreator('/actions/type/TypeUrl', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionChainsPerform',
                component: ComponentCreator('/actions/web/WebActionChainsPerform', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionClick',
                component: ComponentCreator('/actions/web/WebActionClick', '105'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionClickHold',
                component: ComponentCreator('/actions/web/WebActionClickHold', '10d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionDoubleClick',
                component: ComponentCreator('/actions/web/WebActionDoubleClick', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionDragDrop',
                component: ComponentCreator('/actions/web/WebActionDragDrop', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionKeyDown',
                component: ComponentCreator('/actions/web/WebActionKeyDown', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionKeyUp',
                component: ComponentCreator('/actions/web/WebActionKeyUp', '036'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionMoveTo',
                component: ComponentCreator('/actions/web/WebActionMoveTo', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionPause',
                component: ComponentCreator('/actions/web/WebActionPause', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionRelease',
                component: ComponentCreator('/actions/web/WebActionRelease', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebActionSendText',
                component: ComponentCreator('/actions/web/WebActionSendText', '35c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebCookies',
                component: ComponentCreator('/actions/web/WebCookies', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementAttribute',
                component: ComponentCreator('/actions/web/WebElementAttribute', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementClear',
                component: ComponentCreator('/actions/web/WebElementClear', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementClick',
                component: ComponentCreator('/actions/web/WebElementClick', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSelected',
                component: ComponentCreator('/actions/web/WebElementSelected', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSendKey',
                component: ComponentCreator('/actions/web/WebElementSendKey', '87d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSendText',
                component: ComponentCreator('/actions/web/WebElementSendText', '481'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebElementSubmit',
                component: ComponentCreator('/actions/web/WebElementSubmit', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebExecute',
                component: ComponentCreator('/actions/web/WebExecute', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebFocusFrameDefault',
                component: ComponentCreator('/actions/web/WebFocusFrameDefault', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebGetElement',
                component: ComponentCreator('/actions/web/WebGetElement', 'b0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebOpen',
                component: ComponentCreator('/actions/web/WebOpen', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebScreenshot',
                component: ComponentCreator('/actions/web/WebScreenshot', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebSwitchToFrame',
                component: ComponentCreator('/actions/web/WebSwitchToFrame', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitAlert',
                component: ComponentCreator('/actions/web/WebWaitAlert', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitClickable',
                component: ComponentCreator('/actions/web/WebWaitClickable', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitFrameAvailable',
                component: ComponentCreator('/actions/web/WebWaitFrameAvailable', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitPresence',
                component: ComponentCreator('/actions/web/WebWaitPresence', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitTitle',
                component: ComponentCreator('/actions/web/WebWaitTitle', 'ef1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitVisibilityByElement',
                component: ComponentCreator('/actions/web/WebWaitVisibilityByElement', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/web/WebWaitVisibilityByLocator',
                component: ComponentCreator('/actions/web/WebWaitVisibilityByLocator', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/ActiveWindow',
                component: ComponentCreator('/actions/window/ActiveWindow', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/CloseWindow',
                component: ComponentCreator('/actions/window/CloseWindow', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/EnumWindows',
                component: ComponentCreator('/actions/window/EnumWindows', '62a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/FindWindow',
                component: ComponentCreator('/actions/window/FindWindow', 'e49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/FlashWindow',
                component: ComponentCreator('/actions/window/FlashWindow', 'eee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/MessageBox',
                component: ComponentCreator('/actions/window/MessageBox', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/PositionWindow',
                component: ComponentCreator('/actions/window/PositionWindow', '576'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/SpecialWindow',
                component: ComponentCreator('/actions/window/SpecialWindow', '503'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowAncestor',
                component: ComponentCreator('/actions/window/WindowAncestor', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowCaption',
                component: ComponentCreator('/actions/window/WindowCaption', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowPoint',
                component: ComponentCreator('/actions/window/WindowPoint', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowSize',
                component: ComponentCreator('/actions/window/WindowSize', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowVisible',
                component: ComponentCreator('/actions/window/WindowVisible', 'ffb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WindowXy',
                component: ComponentCreator('/actions/window/WindowXy', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/actions/window/WinRun',
                component: ComponentCreator('/actions/window/WinRun', '600'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CHANGELOG',
                component: ComponentCreator('/CHANGELOG', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/AncestorWindow',
                component: ComponentCreator('/enums/AncestorWindow', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/BARCODE_Encoding',
                component: ComponentCreator('/enums/BARCODE_Encoding', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/BlurOperation',
                component: ComponentCreator('/enums/BlurOperation', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraTriggerActivation',
                component: ComponentCreator('/enums/CameraTriggerActivation', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraTriggerSource',
                component: ComponentCreator('/enums/CameraTriggerSource', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CameraType',
                component: ComponentCreator('/enums/CameraType', '5ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ColorConversionCodes',
                component: ComponentCreator('/enums/ColorConversionCodes', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Colors',
                component: ComponentCreator('/enums/Colors', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ContourApproximationMode',
                component: ComponentCreator('/enums/ContourApproximationMode', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ContourShape',
                component: ComponentCreator('/enums/ContourShape', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/CookiesFormat',
                component: ComponentCreator('/enums/CookiesFormat', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Directions',
                component: ComponentCreator('/enums/Directions', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/FeatureAlgorithm',
                component: ComponentCreator('/enums/FeatureAlgorithm', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/FileExtension',
                component: ComponentCreator('/enums/FileExtension', '083'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/GlobOptions',
                component: ComponentCreator('/enums/GlobOptions', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/HandleType',
                component: ComponentCreator('/enums/HandleType', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/KnownFolder',
                component: ComponentCreator('/enums/KnownFolder', '903'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/KnownWindow',
                component: ComponentCreator('/enums/KnownWindow', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/LogicalOperators',
                component: ComponentCreator('/enums/LogicalOperators', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/LogStatus',
                component: ComponentCreator('/enums/LogStatus', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MessageBoxFlags',
                component: ComponentCreator('/enums/MessageBoxFlags', '362'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MessagePlaceMode',
                component: ComponentCreator('/enums/MessagePlaceMode', 'd54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ModuleOption',
                component: ComponentCreator('/enums/ModuleOption', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MorphologicalOperations',
                component: ComponentCreator('/enums/MorphologicalOperations', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MouseButtons',
                component: ComponentCreator('/enums/MouseButtons', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/MouseMessage',
                component: ComponentCreator('/enums/MouseMessage', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Operations',
                component: ComponentCreator('/enums/Operations', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Orientation',
                component: ComponentCreator('/enums/Orientation', 'b6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/PageSegMode',
                component: ComponentCreator('/enums/PageSegMode', 'caf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/PointConvertMethod',
                component: ComponentCreator('/enums/PointConvertMethod', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RelationalOperators',
                component: ComponentCreator('/enums/RelationalOperators', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RelativePosition',
                component: ComponentCreator('/enums/RelativePosition', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/RetrievalModes',
                component: ComponentCreator('/enums/RetrievalModes', '772'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/SeverityLevel',
                component: ComponentCreator('/enums/SeverityLevel', '8e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/SuspendStateOption',
                component: ComponentCreator('/enums/SuspendStateOption', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/ThresholdTypes',
                component: ComponentCreator('/enums/ThresholdTypes', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/Visibility',
                component: ComponentCreator('/enums/Visibility', 'f57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WebKey',
                component: ComponentCreator('/enums/WebKey', '682'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WebLocated',
                component: ComponentCreator('/enums/WebLocated', '55d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WindowHandle',
                component: ComponentCreator('/enums/WindowHandle', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WindowSortDirection',
                component: ComponentCreator('/enums/WindowSortDirection', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/enums/WorkState',
                component: ComponentCreator('/enums/WorkState', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/',
                component: ComponentCreator('/introduction/', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/android/uiautomatorviewer',
                component: ComponentCreator('/introduction/android/uiautomatorviewer', 'e4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/installed_by_exe',
                component: ComponentCreator('/introduction/installation/installed_by_exe', '07a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/installed_by_msix',
                component: ComponentCreator('/introduction/installation/installed_by_msix', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/question/quest1',
                component: ComponentCreator('/introduction/installation/question/quest1', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/installation/question/quest2',
                component: ComponentCreator('/introduction/installation/question/quest2', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/CUDA',
                component: ComponentCreator('/introduction/mixed/CUDA', 'e3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/cuDNN',
                component: ComponentCreator('/introduction/mixed/cuDNN', '3a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/glob',
                component: ComponentCreator('/introduction/mixed/glob', '745'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/paddle2onnx',
                component: ComponentCreator('/introduction/mixed/paddle2onnx', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/mixed/wildcard',
                component: ComponentCreator('/introduction/mixed/wildcard', '68d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/setting/action_group_setting',
                component: ComponentCreator('/introduction/setting/action_group_setting', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/setting/workflow',
                component: ComponentCreator('/introduction/setting/workflow', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/Data-Files',
                component: ComponentCreator('/introduction/tesseract/Data-Files', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/Languages_Scripts',
                component: ComponentCreator('/introduction/tesseract/Languages_Scripts', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/tesseract/tesstrain',
                component: ComponentCreator('/introduction/tesseract/tesstrain', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/browser_directory',
                component: ComponentCreator('/introduction/webdriver/browser_directory', '8bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/download',
                component: ComponentCreator('/introduction/webdriver/download', 'de1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/webdriver/locators',
                component: ComponentCreator('/introduction/webdriver/locators', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/action',
                component: ComponentCreator('/introduction/workflow/action', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/features',
                component: ComponentCreator('/introduction/workflow/features', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/logic',
                component: ComponentCreator('/introduction/workflow/logic', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/property',
                component: ComponentCreator('/introduction/workflow/property', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/record',
                component: ComponentCreator('/introduction/workflow/record', '3ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/resources',
                component: ComponentCreator('/introduction/workflow/resources', 'd36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/workflow/variable',
                component: ComponentCreator('/introduction/workflow/variable', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/network/openwrt_dns',
                component: ComponentCreator('/network/openwrt_dns', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ActionChains',
                component: ComponentCreator('/types/ActionChains', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Boolean',
                component: ComponentCreator('/types/Boolean', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Bytes',
                component: ComponentCreator('/types/Bytes', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ClassificationResult',
                component: ComponentCreator('/types/ClassificationResult', 'be7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Color',
                component: ComponentCreator('/types/Color', '936'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Contour',
                component: ComponentCreator('/types/Contour', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/DateTime',
                component: ComponentCreator('/types/DateTime', 'a2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/DetectionResult',
                component: ComponentCreator('/types/DetectionResult', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Dict',
                component: ComponentCreator('/types/Dict', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Ellipse',
                component: ComponentCreator('/types/Ellipse', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/File',
                component: ComponentCreator('/types/File', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/HostAddress',
                component: ComponentCreator('/types/HostAddress', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Image',
                component: ComponentCreator('/types/Image', '712'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/IOContext',
                component: ComponentCreator('/types/IOContext', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/JsonArray',
                component: ComponentCreator('/types/JsonArray', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/JsonValue',
                component: ComponentCreator('/types/JsonValue', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Keyboard',
                component: ComponentCreator('/types/Keyboard', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/KeySequence',
                component: ComponentCreator('/types/KeySequence', 'fc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Line',
                component: ComponentCreator('/types/Line', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/List',
                component: ComponentCreator('/types/List', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/ModelSession',
                component: ComponentCreator('/types/ModelSession', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Number',
                component: ComponentCreator('/types/Number', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Object',
                component: ComponentCreator('/types/Object', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Path',
                component: ComponentCreator('/types/Path', '171'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Point',
                component: ComponentCreator('/types/Point', '6be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Ptr',
                component: ComponentCreator('/types/Ptr', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Range',
                component: ComponentCreator('/types/Range', '0af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/RecognitionResult',
                component: ComponentCreator('/types/RecognitionResult', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Rect',
                component: ComponentCreator('/types/Rect', '25a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/RotatedRect',
                component: ComponentCreator('/types/RotatedRect', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Scalar',
                component: ComponentCreator('/types/Scalar', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Size',
                component: ComponentCreator('/types/Size', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Slice',
                component: ComponentCreator('/types/Slice', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/String',
                component: ComponentCreator('/types/String', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TCPServer',
                component: ComponentCreator('/types/TCPServer', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TCPSocket',
                component: ComponentCreator('/types/TCPSocket', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Thread',
                component: ComponentCreator('/types/Thread', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Timer',
                component: ComponentCreator('/types/Timer', '440'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/TimeSpan',
                component: ComponentCreator('/types/TimeSpan', 'd1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Tuple',
                component: ComponentCreator('/types/Tuple', '70e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/UDPSocket',
                component: ComponentCreator('/types/UDPSocket', '7ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Url',
                component: ComponentCreator('/types/Url', 'b69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/VideoCapture',
                component: ComponentCreator('/types/VideoCapture', '980'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WebDriver',
                component: ComponentCreator('/types/WebDriver', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WebElement',
                component: ComponentCreator('/types/WebElement', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WinEvent',
                component: ComponentCreator('/types/WinEvent', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/WinInput',
                component: ComponentCreator('/types/WinInput', '47f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/Wnd',
                component: ComponentCreator('/types/Wnd', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'c95'),
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
