# PowerState

* Auto
> 自动，线程或者定时器的状态自动切换 *运行* 或者 *停止*。不适用于 *TypeEvent* 类型动作的 `manualReset` 设置为`False`,即非手动的情况
* On
> 启动 *线程* 或者 *定时器*，如果 *事件*，则会触发 *WhenEvent* 动作，让 *WhenEvent* 处于执行状态。
* Off
> 停止*线程* 或者 *定时器*，如果 *事件*，则会让 *WhenEvent* 动作处于等待状态。