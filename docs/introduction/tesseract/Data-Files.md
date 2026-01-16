## 训练数据文件

我们有三套由谷歌训练的官方 `.traineddata` 文件，适用于 `tesseract` 4.00 及更高版本。这些文件分别存放在三个不同的代码仓库中。

* [tessdata_fast](https://github.com/tesseract-ocr/tessdata_fast)（2017 年 9 月）在速度与准确性之间具有最佳的 “性价比”，采用 `Integer`（整数）模型。
* [tessdata_best](https://github.com/tesseract-ocr/tessdata_best)（2017 年 9 月）在谷歌的评估数据上能取得最佳结果，速度较慢，采用 `Float`（浮点数）模型。这些是唯一可以用作微调训练基础的模型。
* [tessdata](https://github.com/tesseract-ocr/tessdata)（2016 年 11 月和 2017 年 9 月）这些包含 2016 年的旧版 Tesseract 模型。长短期记忆（LSTM）模型已使用 `tessdata_best` 长短期记忆模型的整数版本进行了更新。（基于 Cube 的印地语、阿拉伯语等旧版 Tesseract 模型已被删除）。

当使用来自 **`tessdata_best`** 和 **`tessdata_fast`** 代码仓库的训练数据文件时，仅支持基于新的长短期记忆（LSTM）的光学字符识别（OCR）引擎（--oem 1）。这些文件不支持旧版 Tesseract 引擎（--oem 0），所以 Tesseract 的 `oem 模式` '0' 和 '2' 对它们不起作用。

## 特殊数据文件

| 语言代码 | 描述 | 4.x/3.0x 训练数据文件 |
| :-------- | :---------- | :------------------- |
| osd | 方向和文字脚本检测 | [osd.traineddata](https://github.com/tesseract-ocr/tessdata/raw/3.04.00/osd.traineddata) |
| equ | 数学 / 公式检测 | [equ.traineddata](https://github.com/tesseract-ocr/tessdata/raw/3.04.00/equ.traineddata) |

**注意**：这两个数据文件与旧版本的 Tesseract 兼容。`osd` 与 3.01 及更高版本兼容，`equ` 与 3.02 及更高版本兼容。

## 更新后的数据文件（2017 年 9 月 15 日）

我们在 GitHub 上的三个不同代码仓库中有三套 `.traineddata` 文件。这些文件与 Tesseract 4.0x **+** 和 5.0.0.Alpha 兼容。

|  | 训练模型 | 速度 | 准确性 | 支持旧版识别器 | 可重新训练 |
| :--------------- | :---------------------------------------------------------- | :--------------------------- | :------------------------------------------ | :----------------- | :------------- |
| [tessdata](https://github.com/tesseract-ocr/tessdata) | 旧版 + 长短期记忆（LSTM）（整数化的 `tessdata_best` 模型） | 比 `tessdata_best` 快 | 准确性略低于 `tessdata_best` | 是 | 否 |
| [tessdata_best](https://github.com/tesseract-ocr/tessdata_best) | 仅长短期记忆（LSTM）（基于 [langdata](https://github.com/tesseract-ocr/langdata)） | 最慢 | 最准确 | 否 | 是 |
| [tessdata_fast](https://github.com/tesseract-ocr/tessdata_fast) | 比 `tessdata_best` 网络更小的整数化长短期记忆（LSTM）模型 | 最快 | 最不准确 | 否 | 否 |

大多数用户会需要 `tessdata_fast`，并且它将作为 Linux 发行版的一部分发布。

`tessdata_best` 适合那些愿意牺牲大量速度以换取稍高准确性的用户。对于高级用户，它也是唯一一套可用于某些重新训练场景的文件。

`tessdata` 中的第三套文件是唯一支持旧版识别器的。2016 年 11 月的 4.00 文件同时包含旧版和较旧的长短期记忆（LSTM）模型。`tessdata` 中的当前文件集包含旧版模型和较新的长短期记忆（LSTM）模型（`tessdata_best` 中 4.00.00 alpha 模型的整数版本）。

**注意**：当使用 `tessdata_best` 和 `tessdata_fast` 代码仓库中的新模型时，仅支持基于新的长短期记忆（LSTM）的光学字符识别（OCR）引擎。这些文件不支持旧版引擎，所以 Tesseract 的 oem 模式 '0' 和 '2' 对它们不起作用。

## 4.00 版本的数据文件（2016 年 11 月 29 日）

[tessdata 标记为 4.0.0](https://github.com/tesseract-ocr/tessdata/releases/tag/4.0.0) 包含 2017 年 9 月的模型，这些模型已使用 `tessdata_best` 长短期记忆（LSTM）模型的 `Integer`（整数）版本进行了更新。这套训练数据文件支持使用 --oem 0 的旧版识别器以及使用 --oem 1 的长短期记忆（LSTM）模型。

[tessdata 标记为 4.00](https://github.com/tesseract-ocr/tessdata/releases/tag/4.00) 包含 2016 年的模型。各个语言文件的链接列在下面的表格中。

**注意**：`kur` 数据文件自 3.04 版本后未更新。对于哥特体（Fraktur），请使用来自 `tessdata_fast` 或 `tessdata_best` 代码仓库的较新数据文件。

| 语言代码 | 语言 | 4.0 训练数据文件 |
| :--------- | :------- | :--------------- |
| afr | 南非荷兰语 | [afr.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/afr.traineddata) |
| amh | 阿姆哈拉语 | [amh.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/amh.traineddata) |
| ara | 阿拉伯语 | [ara.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ara.traineddata) |
| asm | 阿萨姆语 | [asm.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/asm.traineddata) |
| aze | 阿塞拜疆语 | [aze.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/aze.traineddata) |
| aze_cyrl | 阿塞拜疆语（西里尔字母） | [aze_cyrl.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/aze_cyrl.traineddata) |
| bel | 白俄罗斯语 | [bel.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/bel.traineddata) |
| ben | 孟加拉语 | [ben.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ben.traineddata) |
| bod | 藏语 | [bod.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/bod.traineddata) |
| bos | 波斯尼亚语 | [bos.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/bos.traineddata) |
| bul | 保加利亚语 | [bul.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/bul.traineddata) |
| cat | 加泰罗尼亚语；瓦伦西亚语 | [cat.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/cat.traineddata) |
| ceb | 宿务语 | [ceb.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ceb.traineddata) |
| ces | 捷克语 | [ces.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ces.traineddata) |
| chi_sim | 中文 - 简体 | [chi_sim.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/chi_sim.traineddata) |
| chi_tra | 中文 - 繁体 | [chi_tra.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/chi_tra.traineddata) |
| chr | 切罗基语 | [chr.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/chr.traineddata) |
| cym | 威尔士语 | [cym.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/cym.traineddata) |
| dan | 丹麦语 | [dan.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/dan.traineddata) |
| deu | 德语 | [deu.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/deu.traineddata) |
| dzo | 宗卡语 | [dzo.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/dzo.traineddata) |
| ell | 现代希腊语（1453 年 - 至今） | [ell.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ell.traineddata) |
| eng | 英语 | [eng.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/eng.traineddata) |
| enm | 中世纪英语（1100 - 1500 年） | [enm.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/enm.traineddata) |
| epo | 世界语 | [epo.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/epo.traineddata) |
| est | 爱沙尼亚语 | [est.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/est.traineddata) |
| eus | 巴斯克语 | [eus.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/eus.traineddata) |
| fas | 波斯语 | [fas.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/fas.traineddata) |
| fin | 芬兰语 | [fin.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/fin.traineddata) |
| fra | 法语 | [fra.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/fra.traineddata) |
| frk | 德语哥特体 | [frk.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/frk.traineddata) |
| frm | 中世纪法语（约 1400 - 1600 年） | [frm.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/frm.traineddata) |
| gle | 爱尔兰语 | [gle.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/gle.traineddata) |
| glg | 加利西亚语 | [glg.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/glg.traineddata) |
| grc | 古希腊语（-1453 年） | [grc.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/grc.traineddata) |
| guj | 古吉拉特语 | [guj.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/guj.traineddata) |
| hat | 海地语；海地克里奥尔语 | [hat.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/hat.traineddata) |
| heb | 希伯来语 | [heb.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/heb.traineddata) |
| hin | 印地语 | [hin.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/hin.traineddata) |
| hrv | 克罗地亚语 | [hrv.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/hrv.traineddata) |
| hun | 匈牙利语 | [hun.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/hun.traineddata) |
| iku | 因纽特语 | [iku.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/iku.traineddata) |
| ind | 印度尼西亚语 | [ind.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ind.traineddata) |
| isl | 冰岛语 | [isl.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/isl.traineddata) |
| ita | 意大利语 | [ita.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ita.traineddata) |
| ita_old | 古意大利语 | [ita_old.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/ita_old.traineddata) |
| jav | 爪哇语 | [jav.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/jav.traineddata) |
| jpn | 日语 | [jpn.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/jpn.traineddata) |
| kan | 卡纳达语 | [kan.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kan.traineddata) |
| kat | 格鲁吉亚语 | [kat.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kat.traineddata) |
| kat_old | 古格鲁吉亚语 | [kat_old.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kat_old.traineddata) |
| kaz | 哈萨克语 | [kaz.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kaz.traineddata) |
| khm | 高棉语 | [khm.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/khm.traineddata) |
| kir | 吉尔吉斯语 | [kir.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kir.traineddata) |
| kor | 韩语 | [kor.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kor.traineddata) |
| kur | 库尔德语 | [kur.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/kur.traineddata) |
| lao | 老挝语 | [lao.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/lao.traineddata) |
| lat | 拉丁语 | [lat.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/lat.traineddata) |
| lav | 拉脱维亚语 | [lav.traineddata](https://github.com/tesseract-ocr/tessdata/raw/4.00/lav