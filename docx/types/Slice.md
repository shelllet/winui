# Slice

Python 内置函数 slice() 返回一个切片对象，用于切取任何序列（字符串、元组、列表、range 或字节序列）等。


````python
text = 'Hello, 小友+!'

sliced = slice(3)

print(sliced)
# slice(None, 3, None)

print(type(sliced))
# slice

print(text[sliced])
# 'Hel'

````
* start -- 切片开始位置。如果未提供，则默认为 `None`。
* stop -- 结束位置，切片在索引 `stop - 1`（最后一个元素）处停止。
* step -- 步长，用于确定切片的每个索引之间的增量。如果未提供，则默认为 `None`。

因此，*slice* 对象有以上三个信息，没有指定的会为 `None`。如果 *start* 为 `None`，则从 `0` 开始。如果 *step* 为 `None` ，步长缺省为 `1`。

