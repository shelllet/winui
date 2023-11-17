# 键盘/鼠标宏重放 
用于重放录制的键盘/鼠标宏。录制方法参考：[鼠标/键盘宏录制](.\intro\workflow\macro_record.md)

![PlayRecord](./images/01.png ':size=90%')

## 子流程
> 不支持


## 运行参数

* 宏
  > 录制的键盘鼠标宏。

* 半径
> 修正半径， 为避免每次重放使用相同的坐标位置，可以设置一个半径，以原坐标为原点，生成一个随机位置移动鼠标。

## 输出

> 无

## 脚本调用

```python
import simple;

```


## 资源

示例：https://github.com/shelllet/WinUi/blob/main/media/PlayRecord.simple



!> 该动作是同步动作，声音文件播放完毕后返回。
