# Paddle2ONNX濡€崇€锋潪顒€瀵叉稉搴暕濞?

閺堫剛鐝烽懞鍌欑矙缂?PaddleOCR 濡€崇€锋俊鍌欑秿鏉烆剙瀵叉稉?ONNX 濡€崇€烽敍灞借嫙閸?*鐏忓繐寮?* 娑擃厺濞囬悽銊ｂ偓?

## 1. 閻滎垰顣ㄩ崙鍡楊槵

闂団偓鐟曚礁鍣径?Python閵嗕赋addle閵?PaddleOCR閵嗕赋addle2ONNX 濡€崇€锋潪顒€瀵查悳顖氼暔閿涘苯鎷?ONNXRuntime 妫板嫭绁撮悳顖氼暔閵?

### Python

1. 娑撳娴?Python 鐎瑰顥婇崠鍜冪礉閺堫剛鐝烽懞鍌欏▏閻?`3.12.9` 閻楀牊婀伴敍灞肩瑓鏉炰粙鎽奸幒?[https://www.python.org/ftp/python/3.12.9/python-3.12.9-amd64.exe](https://www.python.org/ftp/python/3.12.9/python-3.12.9-amd64.exe)閵?
- 閹垫挸绱?Python 鐎规ɑ鏌熸稉瀣祰妞ょ敻娼?[https://www.python.org/downloads/](https://www.python.org/downloads/)閵?
- 妞ょ敻娼版导姘壌閹诡喕缍橀惃鍕兇缂佺喕鍤滈崝銊﹀腹閼芥劕鎮庨柅鍌滄畱 Python 閻楀牊婀伴妴鍌炩偓姘埗瀵ら缚顔呴柅澶嬪閺堚偓閺傛壆娈戠粙鍐茬暰閻楀牊婀伴敍灞芥躬妞ょ敻娼版稉顓熷閸掓壋鈧窉ownload Python x.x.x閳ユ繐绱檟.x.x 娴狅綀銆冮崗铚傜秼閻楀牊婀伴崣鍑ょ礆閹稿鎸抽獮鍓佸仯閸戞眹鈧倽瀚㈡担鐘垫畱 Windows 缁崵绮洪弰?64 娴ｅ稄绱濇稉瀣祰 64 - bit 閻ㄥ嫬鐣ㄧ憗鍛瘶閿涙稖瀚㈡稉?32 娴ｅ秶閮寸紒鐕傜礉閸掓瑤绗呮潪?32 - bit 閻ㄥ嫬鐣ㄧ憗鍛瘶閵?

2. 鏉╂劘顢戠€瑰顥婄粙瀣碍
- 閹垫儳鍩屾稉瀣祰婵傜晫娈?`.exe` 閺嶇厧绱￠惃鍕暔鐟佸懏鏋冩禒璁圭礉閸欏苯鍤潻鎰攽閵?
- 閸︺劌鑴婇崙铏规畱鐎瑰顥婇悾宀勬桨娑擃叏绱濆▔銊﹀壈閸曢箖鈧鈧穾dd Python x.x to PATH閳ユ繈鈧銆嶉敍宀冪箹娑擃亝鎼锋担婊嗗厴閼奉亜濮╃亸?Python 閸欘垱澧界悰灞炬瀮娴犳儼鐭惧鍕潑閸旂姴鍩岀化鑽ょ埠閻ㄥ嫮骞嗘晶鍐ㄥ綁闁插繋鑵戦敍灞肩閸氬簼缍樼亸杈厴閸︺劌鎳℃禒銈嗗絹缁€铏诡儊闁插瞼娲块幒銉ゅ▏閻?Python 閸涙垝鎶ら妴?
- 娴ｇ姴褰叉禒銉┾偓澶嬪閳ユ窔nstall Now閳ユ繆绻樼悰宀勭帛鐠併倕鐣ㄧ憗鍜冪礉娑旂喕鍏橀悙鐟板毊閳ユ窅ustomize installation閳ユ繃娼甸懛顏勭暰娑斿鐣ㄧ憗鍛扮熅瀵板嫬鎷扮紒鍕閵嗗倽瀚㈡稉宥団€樼€规艾顩ф担鏇⑩偓澶嬪閿涘苯缂撶拋顔炬纯閹恒儳鍋ｉ崙鐑┾偓娣歯stall Now閳ユ縿鈧?
- 缁涘绶熺€瑰顥婃潻鍥┾柤鐎瑰本鍨氶敍宀冪箹閸欘垵鍏橀棁鈧憰浣风娴滄稒妞傞梻杈剧礉閸欐牕鍠呮禍搴濈稑閻ㄥ嫮閮寸紒鐔糕偓褑鍏橀妴?

3. 妤犲矁鐦?Python 鐎瑰顥?
- 閹稿绗?`Win + R` 缂佸嫬鎮庨柨顕嗙礉閹垫挸绱戦垾婊嗙箥鐞涘备鈧繂顕拠婵囶攱閿涘矁绶崗?`cmd` 楠炶泛娲栨潪锔肩礉娴犮儲顒濋幍鎾崇磻閸涙垝鎶ら幓鎰仛缁楋妇鐛ラ崣锝冣偓?
- 閸︺劌鎳℃禒銈嗗絹缁€铏诡儊娑擃叀绶崗?`python --version` 楠炶泛娲栨潪锔衡偓鍌濆鐎瑰顥婇幋鎰閿涘奔绱伴弰鍓с仛閹碘偓鐎瑰顥婇惃?Python 閻楀牊婀伴崣鍑ょ礉娓氬顩?`Python 3.11.5`閵?

4. 妤犲矁鐦?pip 鐎瑰顥?
`pip` 閺?Python 閻ㄥ嫬瀵樼粻锛勬倞瀹搞儱鍙块敍灞肩閼割兛绱伴梾?Python 娑撯偓鐠у嘲鐣ㄧ憗鍛偓鍌氭躬閸涙垝鎶ら幓鎰仛缁楋缚鑵戞潏鎾冲弳 `pip --version` 楠炶泛娲栨潪锔肩礉閼汇儱鐣ㄧ憗鍛灇閸旂噦绱濇导姘▔缁€?`pip` 閻ㄥ嫮澧楅張顑夸繆閹垯浜掗崣濠傤嚠鎼存梻娈?Python 閻楀牊婀伴敍灞肩伐婵?`pip 23.3.1 from C:\Python311\Lib\site-packages\pip (python 3.11)`閵?

5. 閺囧瓨鏌?pip閿涘牆褰查柅澶涚礆
娑撹桨绻氱拠浣藉厴娴ｈ法鏁?`pip` 閻ㄥ嫭娓堕弬鎵閹冩嫲娣囶喖顦插鑼叀闂傤噣顣介敍灞藉讲閸︺劌鎳℃禒銈嗗絹缁€铏诡儊娑擃叀绻嶇悰灞间簰娑撳鎳℃禒銈嗘降閺囧瓨鏌?`pip`閿?
```plaintext
python -m pip install --upgrade pip
```

### 閾忔碍瀚欓悳顖氼暔
閸?Python 瀵偓閸欐垳鑵戦敍宀冩珓閹风喓骞嗘晶鍐╂Ц娑撯偓娑擃亪娼敮鍛婃箒閻劎娈戝銉ュ徔閿涘苯鐣犻崣顖欎簰娑撶儤鐦℃稉顏堛€嶉惄顔煎灡瀵よ櫣瀚粩瀣畱 Python 鏉╂劘顢戦悳顖氼暔閿涘矂浼╅崗宥勭瑝閸氬矂銆嶉惄顔荤闂傚娈戞笟婵婄閸愯尙鐛婇妴?

### 娴ｈ法鏁?`venv` 濡€虫健閿涘湧ython 閺嶅洤鍣惔鎾瑰殰鐢讣绱?
`venv` 閺?Python 3.3 閸欏﹣浜掓稉濠勫閺堫剚鐖ｉ崙鍡楃氨娑擃叀鍤滅敮锔炬畱閾忔碍瀚欓悳顖氼暔閸掓稑缂撳銉ュ徔閿涘奔濞囬悽銊ㄦ崳閺夈儳鐣濋崡鏇熸煙娓氳￥鈧?

#### 濮濄儵顎?
1. **閹垫挸绱戦崨鎴掓姢鐞涘苯浼愰崗?*閿涙艾婀?Windows 缁崵绮烘稉顓炲讲娴犮儰濞囬悽銊ユ嚒娴犮倖褰佺粈铏诡儊閿涘湑MD閿涘鍨?PowerShell閵?
2. **閸掓稑缂撻搹姘珯閻滎垰顣?*閿涙艾婀崨鎴掓姢鐞涘奔鑵戞潻娑樺弳娴ｇ姵鍏傜憰浣稿灡瀵ら缚娅勯幏鐔哄箚婢у啰娈戦惄顔肩秿閿涘瞼鍔ч崥搴ょ箥鐞涘奔浜掓稉瀣嚒娴犮倧绱?

```PowerShell
cd d:\onnx

python -m venv myenv

# PowerShell
.\myenv\Scripts\Activate.ps1

# CMD
# .\myenv\Scripts\activate.bat
```
閸忔湹鑵?`myenv` 閺勵垯缍樼憰浣稿灡瀵よ櫣娈戦搹姘珯閻滎垰顣ㄩ惃鍕倳缁夊府绱濇担鐘插讲娴犮儲鐗撮幑顕€娓剁憰浣界箻鐞涘奔鎱ㄩ弨骞库偓?

3. **濠碘偓濞叉槒娅勯幏鐔哄箚婢?*閿?
    - **Windows閿涘湑MD閿?*閿?
```plaintext
myenv\Scripts\activate.bat
```
    - **Windows閿涘湧owerShell閿?*閿?
```plaintext
myenv\Scripts\Activate.ps1
```

濠碘偓濞叉槒娅勯幏鐔哄箚婢у啫鎮楅敍灞芥嚒娴犮倛顢戦幓鎰仛缁楋箑澧犻棃顫窗閺勫墽銇氶搹姘珯閻滎垰顣ㄩ惃鍕倳缁夊府绱濈悰銊︽娴ｇ姴鍑＄紒蹇斿灇閸旂喕绻橀崗銉嚉閾忔碍瀚欓悳顖氼暔閵?

4. **鐎瑰顥婃笟婵婄閸?*閿涙艾婀搹姘珯閻滎垰顣ㄦ稉顓ㄧ礉娴ｇ姴褰叉禒銉ゅ▏閻?`pip` 鐎瑰顥婃い鍦窗閹碘偓闂団偓閻ㄥ嫪绶风挧鏍у瘶閿涘奔绶ユ俊鍌︾窗
```plaintext
pip install requests
```

5. **闁偓閸戦缚娅勯幏鐔哄箚婢?*閿涙艾缍嬫担鐘茬暚閹存劕绱戦崣鎴濅紣娴ｆ粌鎮楅敍灞藉讲娴犮儱婀崨鎴掓姢鐞涘奔鑵戞潻鎰攽娴犮儰绗呴崨鎴掓姢闁偓閸戦缚娅勯幏鐔哄箚婢у喛绱?
```plaintext
deactivate
```

### Paddle
閸︺劋濞囬悽?`pip install paddlepaddle` 鐎瑰顥?PaddlePaddle閿涘牅浜掓稉瀣暆缁?Paddle閿涘妞傞敍灞炬箒娑撯偓娴滄稖顩﹂悙褰掓付鐟曚焦鏁為幇蹇ョ礉娑撳娼版稉杞扮稑鐠囷妇绮忔禒瀣矝娑撳秴鎮撻悳顖氼暔娑撳娈戠€瑰顥婂銉╊€冮崪灞炬暈閹板繋绨ㄦい骞库偓?


#### 1. 闁瀚ㄩ崥鍫モ偓鍌滄畱 Paddle 閻楀牊婀?
Paddle 閺?CPU 閻楀牊婀伴崪?GPU 閻楀牊婀伴敍灞肩稑闂団偓鐟曚焦鐗撮幑顔垮殰瀹歌京娈戠涵顑挎閹懎鍠岄柅澶嬪閸氬牓鈧倻娈戦悧鍫熸拱閵?
- **CPU 閻楀牊婀?*閿涙艾顩ч弸婊€缍橀惃鍕吀缁犳婧€濞屸剝婀?NVIDIA GPU 閹存牞鈧懍绗夐棁鈧憰浣峰▏閻?GPU 鏉╂稖顢戠拋锛勭暬閿涘矂鍋呮稊鍫モ偓澶嬪 CPU 閻楀牊婀伴崡鍐插讲閵?
- **GPU 閻楀牊婀?*閿涙艾顩ч弸婊€缍橀惃鍕吀缁犳婧€闁板秴顦禍?NVIDIA GPU閿涘苯鑻熸稉鏃€鍏傞崚鈺冩暏 GPU 閻ㄥ嫯顓哥粻妤勫厴閸旀稑濮為柅鐔活唲缂佸啫鎷伴幒銊ф倞閿涘矂鍋呮稊鍫ユ付鐟曚礁鐣ㄧ憗?GPU 閻楀牊婀伴妴鍌氭倱閺冭绱濇担鐘虹箷闂団偓鐟曚礁鐣ㄧ憗鍛嚠鎼存梻娈?CUDA 閸?cuDNN 鎼存挶鈧?

#### 2. 鐎瑰顥?Paddle
##### CPU 閻楀牊婀扮€瑰顥婇敍鍫熷腹閼芥劧绱?
閸︺劌鎳℃禒銈堫攽娑擃叀绻嶇悰灞间簰娑撳鎳℃禒銈呯暔鐟?CPU 閻楀牊婀伴惃?Paddle閿?
```bash
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
```
鏉╂瑩鍣?`-i https://mirror.baidu.com/pypi/simple` 閺勵垱瀵氱€规矮濞囬悽銊ф鎼达妇娈?PyPI 闂€婊冨剼濠ф劧绱濇潻娆愮壉閸欘垯浜掗崝鐘叉彥娑撳娴囬柅鐔峰閵?

##### GPU 閻楀牊婀扮€瑰顥?
婵″倹鐏夋担鐘侯洣鐎瑰顥?GPU 閻楀牊婀伴敍宀勬付鐟曚礁鍘涚涵顔款吇娴ｇ姷娈?CUDA 閸?cuDNN 閻楀牊婀伴敍宀勨偓姘崇箖閹笛嗩攽閸涙垝鎶?**nvidia-smi.exe** 閺屻儳婀?CUDA 閻楀牊婀伴敍?閺屻儳婀呮潏鎾冲毉閿?
````
nvidia-smi.exe

Mon Apr 21 14:18:12 2025
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 576.02                 Driver Version: 576.02         CUDA Version: 12.9     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4060 ...  WDDM  |   00000000:01:00.0 Off |                  N/A |
| N/A   48C    P0             13W /  140W |       0MiB /   8188MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+
````
CUDA 閸欏倽鈧?[Windows 缁崵绮烘稉濠傜暔鐟?CUDA](.\introduction\mixed\CUDA.md) 鐎瑰顥婇敍灞绢梾閺屻儳娴夋惔鏃傛畱`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8\bin` 鐠侯垰绶為弰顖氭儊閸旂姴鍙嗛崚鎵箚婢у啫褰夐柌寤疨ATH`娑擃厹鈧?

[鐎电懓绨查惃鍒DNN](.\introduction\mixed\cuDNN.md) 閻楀牊婀版稉瀣祰閿涙瓟https://developer.nvidia.com/cudnn-archive](https://developer.nvidia.com/cudnn-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local)閵嗗倽袙閸樺绠ｉ崥?閿涘苯鎮撻弽鐤啎缂冾喚骞嗘晶鍐ㄥ綁闁插化PATH`閵?

```
$env:PATH = "D:\onnx\cudnn-windows-x86_64-8.9.7.29_cuda12-archive\bin;$env:PATH;"
```

閻掕泛鎮楅弽瑙勫祦閻楀牊婀伴柅澶嬪閸氬牓鈧倻娈戠€瑰顥婇崨鎴掓姢閵嗗倷绶ユ俊鍌︾礉婵″倹鐏夋担鐘卞▏閻劎娈戦弰?CUDA 12.0 閸?cuDNN 9.8閿涘苯褰叉禒銉ㄧ箥鐞涘奔浜掓稉瀣嚒娴犮倧绱?
```bash
pip install paddlepaddle-gpu==3.1.0.post120 -f https://www.paddlepaddle.org.cn/whl/windows/mkl/avx/stable.html
```
閸忔湹鑵?`2.6.1.post120` 鐞涖劎銇?Paddle 閻ㄥ嫮澧楅張顒婄礉`120` 娴狅綀銆?CUDA 12.0閵嗗倷缍橀崣顖欎簰閺嶈宓侀懛顏勭箒閻ㄥ嫬鐤勯梽鍛剰閸愪絻鐨熼弫瀵稿閺堫剙褰块妴?

### 4. 妤犲矁鐦夌€瑰顥?
鐎瑰顥婄€瑰本鍨氶崥搴礉娴ｇ姴褰叉禒銉ユ躬 Python 閻滎垰顣ㄦ稉顓㈢崣鐠?Paddle 閺勵垰鎯佺€瑰顥婇幋鎰閵嗗倹澧﹀鈧?Python 鐟欙綁鍣撮崳顭掔礉鏉堟挸鍙嗘禒銉ょ瑓娴狅絿鐖滈敍?
```python
import paddle
paddle.utils.run_check()
```
婵″倹鐏夋潏鎾冲毉缁鎶€ `PaddlePaddle is installed successfully!` 閻ㄥ嫪淇婇幁顖ょ礉鐠囧瓨妲?Paddle 瀹歌尙绮￠幋鎰鐎瑰顥婇妴?

### 5. 闁挎瑨顕?
瑜版挷缍橀柆鍥у煂 No module named 'setuptools' 闁挎瑨顕ら敍灞惧壈閸涘磭娼?Python 閻滎垰顣ㄩ柌灞剧梾閺堝鐣ㄧ憗?setuptools 濡€虫健閵?
````
pip install setuptools
````

###  PaddleOCR

閸忓娈昉addleOCR閻ㄥ嫪绮ㄦ惔鎿勭礉娴ｈ法鏁?main 閸掑棙鏁敍灞借嫙鏉╂稖顢戠€瑰顥婇敍宀€鏁辨禍?PaddleOCR 娴犳挸绨卞В鏃囩窛婢堆嶇礉git clone 闁喎瀹冲В鏃囩窛閹鳖澁绱濋幋鏍﹀▏閻劌娴楅崘鍛存殔閸嶅繒鐝悙閫涚瑓鏉炲鈧?

娴ｈ法鏁ら搹姘珯閻滎垰顣ㄩ敍姝歚`(myenv) PS D:\onnx>```閵?

```
git clone  -b main https://github.com/PaddlePaddle/PaddleOCR.git
cd PaddleOCR
python -m pip install -e .
```

###  Paddle2ONNX

Paddle2ONNX 閺€顖涘瘮鐏?PaddlePaddle 濡€崇€烽弽鐓庣础鏉烆剙瀵查崚?ONNX 濡€崇€烽弽鐓庣础閿涘瞼鐣荤€涙劗娲伴崜宥嚽旂€规碍鏁幐浣割嚤閸?ONNX Opset 9~18閿涘矂鍎撮崚鍝朼ddle缁犳鐡欓弨顖涘瘮閺囩繝缍嗛惃鍑甆NX Opset鏉烆剚宕查妴?
閺囨潙顦跨紒鍡氬Ν閸欘垰寮懓?[Paddle2ONNX](https://github.com/PaddlePaddle/Paddle2ONNX/tree/develop)閵?
娴ｈ法鏁ら搹姘珯閻滎垰顣ㄩ敍姝歚`(myenv) PS D:\onnx>```閵?
- 鐎瑰顥?Paddle2ONNX
```
python -m pip install paddle2onnx==2.0.2rc3
```

- 鐎瑰顥?ONNXRuntime
```
python -m pip install onnxruntime
```

## 2. 濡€崇€锋潪顒佸床


- Paddle 濡€崇€锋稉瀣祰

閸?[濡€崇€烽崚妤勩€僝(https://www.paddleocr.ai/latest/version3.x/pipeline_usage/OCR.html) 娑擃厺绗呮潪绲嘺ddleOCR閹绘劒绶甸惃鍕暕濞村膩閸ㄥ鈧倻娲伴崜宥呭瘶閸?5 缁夊秵膩閸ㄥ绱?


<details>
<summary><b>閺傚洦銆傞崶鎯у剼閺傜懓鎮滈崚鍡欒濡€虫健閿涘牆褰查柅澶涚礆閿?/b></summary>
<table>
<thead>
<tr>
<th>濡€崇€?/th><th>濡€崇€锋稉瀣祰闁剧偓甯?/th>
<th>Top-1 Acc閿?閿?/th>
<th>GPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>CPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>濡€崇€风€涙ê鍋嶆径褍鐨敍鍦閿?/th>
<th>娴犲绮?/th>
</tr>
</thead>
<tbody>
<tr>
<td>PP-LCNet_x1_0_doc_ori</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/PP-LCNet_x1_0_doc_ori_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-LCNet_x1_0_doc_ori_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>99.06</td>
<td>2.62 / 0.59</td>
<td>3.24 / 1.19</td>
<td>7</td>
<td>閸╄桨绨琍P-LCNet_x1_0閻ㄥ嫭鏋冨锝呮禈閸嶅繐鍨庣猾缁樐侀崹瀣剁礉閸氼偅婀侀崶娑楅嚋缁鍩嗛敍灞藉祮0鎼达讣绱?0鎼达讣绱?80鎼达讣绱?70鎼?/td>
</tr>
</tbody>
</table>
</details>

<details>
<summary><b>閺傚洦婀伴崶鎯у剼閻偅顒滃Ο鈥虫健閿涘牆褰查柅澶涚礆閿?/b></summary>
<table>
<thead>
<tr>
<th>濡€崇€?/th><th>濡€崇€锋稉瀣祰闁剧偓甯?/th>
<th>CER </th>
<th>GPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>CPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>濡€崇€风€涙ê鍋嶆径褍鐨敍鍦閿?/th>
<th>娴犲绮?/th>
</tr>
</thead>
<tbody>
<tr>
<td>UVDoc</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/UVDoc_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/UVDoc_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>0.179</td>
<td>19.05 / 19.05</td>
<td>- / 869.82</td>
<td>30.3</td>
<td>妤傛绨挎惔锔芥瀮閺堫剙娴橀崓蹇曠叓濮濓絾膩閸?/td>
</tr>
</tbody>
</table>
</details>

<details>
<summary><b>閺傚洦婀扮悰灞炬煙閸氭垵鍨庣猾缁樐侀崸妤嬬礄閸欘垶鈧绱氶敍?/b></summary>
<table>
<thead>
<tr>
<th>濡€崇€?/th>
<th>濡€崇€锋稉瀣祰闁剧偓甯?/th>
<th>Top-1 Acc閿?閿?/th>
<th>GPU閹恒劎鎮婇懓妤佹閿涘潰s閿?/th>
<th>CPU閹恒劎鎮婇懓妤佹 (ms)</th>
<th>濡€崇€风€涙ê鍋嶆径褍鐨敍鍦閿?/th>
<th>娴犲绮?/th>
</tr>
</thead>
<tbody>
<tr>
<td>PP-LCNet_x0_25_textline_ori</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/PP-LCNet_x0_25_textline_ori_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-LCNet_x0_25_textline_ori_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>98.85</td>
<td>2.16 / 0.41</td>
<td>2.37 / 0.73</td>
<td>0.96</td>
<td>閸╄桨绨琍P-LCNet_x0_25閻ㄥ嫭鏋冮張顒冾攽閸掑棛琚Ο鈥崇€烽敍灞芥儓閺堝琚辨稉顏嗚閸掝偓绱濋崡?鎼达讣绱?80鎼?/td>
</tr>
<tr>
<td>PP-LCNet_x1_0_textline_ori</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/PP-LCNet_x1_0_textline_ori_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-LCNet_x1_0_textline_ori_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>99.42</td>
<td>- / -</td>
<td>2.98 / 2.98</td>
<td>6.5</td>
<td>閸╄桨绨琍P-LCNet_x1_0閻ㄥ嫭鏋冮張顒冾攽閸掑棛琚Ο鈥崇€烽敍灞芥儓閺堝琚辨稉顏嗚閸掝偓绱濋崡?鎼达讣绱?80鎼?/td>
</tr>
</tbody>
</table>
</details>

<details>
<summary><b>閺傚洦婀板Λ鈧ù瀣侀崸妤嬬窗</b></summary>
<table>
<thead>
<tr>
<th>濡€崇€?/th><th>濡€崇€锋稉瀣祰闁剧偓甯?/th>
<th>濡偓濞村┈mean閿?閿?/th>
<th>GPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>CPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>濡€崇€风€涙ê鍋嶆径褍鐨敍鍦閿?/th>
<th>娴犲绮?/th>
</tr>
</thead>
<tbody>
<tr>
<td>PP-OCRv5_server_det</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/PP-OCRv5_server_det_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-OCRv5_server_det_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>83.8</td>
<td>89.55 / 70.19</td>
<td>383.15 / 383.15</td>
<td>84.3</td>
<td>PP-OCRv5 閻ㄥ嫭婀囬崝锛勵伂閺傚洦婀板Λ鈧ù瀣侀崹瀣剁礉缁儳瀹抽弴鎾彯閿涘矂鈧倸鎮庨崷銊︹偓褑鍏樻潏鍐ㄣ偨閻ㄥ嫭婀囬崝鈥虫珤娑撳﹪鍎寸純?/td>
</tr>
<tr>
<td>PP-OCRv5_mobile_det</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/PP-OCRv5_mobile_det_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-OCRv5_mobile_det_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>79.0</td>
<td>10.67 / 6.36</td>
<td>57.77 / 28.15</td>
<td>4.7</td>
<td>PP-OCRv5 閻ㄥ嫮些閸斻劎顏弬鍥ㄦ拱濡偓濞村膩閸ㄥ绱濋弫鍫㈠芳閺囨挳鐝敍宀勨偓鍌氭値閸︺劎顏笟褑顔曟径鍥劥缂?/td>
</tr>
</tbody>
</table>
</details>

<details>
<summary><b>閺傚洦婀扮拠鍡楀焼濡€虫健閿?/b></summary>
<table>
<tr>
<th>濡€崇€?/th><th>濡€崇€锋稉瀣祰闁剧偓甯?/th>
<th>鐠囧棗鍩?Avg Accuracy(%)</th>
<th>GPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>CPU閹恒劎鎮婇懓妤佹閿涘潰s閿?br/>[鐢瓕顫夊Ο鈥崇础 / 妤傛ɑ鈧嗗厴濡€崇础]</th>
<th>濡€崇€风€涙ê鍋嶆径褍鐨敍鍦閿?/th>
<th>娴犲绮?/th>
</tr>
<tr>
<td>PP-OCRv5_server_rec</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/\
PP-OCRv5_server_rec_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-OCRv5_server_rec_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>86.38</td>
<td>8.46 / 2.36</td>
<td>31.21 / 31.21</td>
<td>81</td>
<td rowspan="2">PP-OCRv5_rec 閺勵垱鏌婃稉鈧禒锝嗘瀮閺堫剝鐦戦崚顐Ｄ侀崹瀣ㄢ偓鍌濐嚉濡€崇€烽懛鏉戝娴滃簼浜掗崡鏇氱濡€崇€锋妯绘櫏閵嗕胶绨块崙鍡楁勾閺€顖涘瘮缁犫偓娴ｆ挷鑵戦弬鍥モ偓浣虹畳娴ｆ挷鑵戦弬鍥モ偓浣藉閺傚洢鈧焦妫╅弬鍥ф磽缁夊秳瀵岀憰浣筋嚔鐟封偓閿涘奔浜掗崣濠冨閸愭瑣鈧胶鐝悧鍫涒偓浣瑰闂婄偨鈧胶鏁撻崓璇茬摟缁涘顦查弶鍌涙瀮閺堫剙婧€閺咁垳娈戠拠鍡楀焼閵嗗倸婀穱婵囧瘮鐠囧棗鍩嗛弫鍫熺亯閻ㄥ嫬鎮撻弮璁圭礉閸忓ジ銆愰幒銊ф倞闁喎瀹抽崪灞灸侀崹瀣灳濡帗鈧嶇礉娑撳搫鎮囩粔宥呮簚閺咁垯绗呴惃鍕瀮濡楋絿鎮婄憴锝嗗絹娓氭盯鐝弫鍫涒偓浣虹翱閸戝棛娈戦幎鈧張顖涙暜閹炬垯鈧?/td>
</tr>
<tr>
<td>PP-OCRv5_mobile_rec</td>
<td><a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_inference_model/paddle3.0.0/\
PP-OCRv5_mobile_rec_infer.tar">閹恒劎鎮婂Ο鈥崇€?/a>/<a href="https://paddle-model-ecology.bj.bcebos.com/paddlex/official_pretrained_model/PP-OCRv5_mobile_rec_pretrained.pdparams">鐠侇厾绮屽Ο鈥崇€?/a></td>
<td>81.29</td>
<td>5.43 / 1.46</td>
<td>21.20 / 5.32</td>
<td>16</td>
</tr>
</table>

</details>

**鐏忓繐寮?** 娑擃參娉﹂幋鎰啊 `v5` 閻楀牊婀伴惃?`Mobile` 濡€崇€烽敍灞筋洤閺嬫粍鍋嶉弴瀛樻暈闁插秵膩閸ㄥ娈戠划鎯у閿涘矁顕柅澶嬪缁儳瀹虫潏鍐彯閻ㄥ嫭膩閸ㄥ鈧?

* 閺傚洦銆傞崶鎯у剼閺傜懓鎮滈崚鍡欒濡€虫健( a.oonx)
* 閺傚洦婀伴崶鎯у剼閻偅顒滃Ο鈥虫健 b.onnx
* 閺傚洦婀扮悰灞炬煙閸氭垵鍨庣猾缁樐侀崸? c.onnx
* 閺傚洦婀板Λ鈧ù瀣侀崸? d.onxx
* 閺傚洦婀扮拠鍡楀焼濡€虫健> e.onnx

```

tar xf PP-LCNet_x1_0_doc_ori_infer.tar

tar xf UVDoc_infer.tar

tar xf PP-OCRv5_mobile_det_infer.tar

tar xf PP-LCNet_x1_0_textline_ori_infer.tar

tar xf PP-OCRv5_mobile_rec_infer


```

娴ｈ法鏁?Paddle2ONNX 鐏忓摉addle闂堟瑦鈧礁娴樺Ο鈥崇€锋潪顒佸床娑撶瘺NNX濡€崇€烽弽鐓庣础閿?

```PowerShell
cd PP-LCNet_x1_0_doc_ori_infer

paddle2onnx --model_dir . `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./model.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool polygraphy


cd UVDoc_infer

paddle2onnx --model_dir . `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./model.onnx `
--opset_version 18 `
--enable_auto_update_opset True `
--enable_onnx_checker True `
--optimize_tool polygraphy

cd PP-OCRv5_mobile_det_infer

paddle2onnx --model_dir . `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./model.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool polygraphy



cd PP-LCNet_x1_0_textline_ori_infer

paddle2onnx --model_dir . `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./model.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool onnxoptimizer


cd PP-OCRv5_mobile_rec_infer

paddle2onnx --model_dir . `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./model.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool onnxoptimizer
```

* 濞夈劍鍓伴敍姘嚠娴滃栋CR濡€崇€烽敍宀冩祮閸栨牞绻冪粙瀣╄厬韫囧懘銆忛柌鍥╂暏閸斻劍鈧够hape閻ㄥ嫬鑸板蹇ョ礉閸氾箑鍨０鍕ゴ缂佹挻鐏夐崣顖濆厴娑撳海娲块幒銉ゅ▏閻⑩墥addle妫板嫭绁撮張澶岀矎瀵邦喕绗夐崥灞烩偓?
  閸欙箑顦婚敍灞间簰娑撳鍤戞稉顏吥侀崹瀣畯娑撳秵鏁幐浣芥祮閹诡澀璐?ONNX 濡€崇€烽敍?
  NRTR閵嗕讣AR閵嗕阜ARE閵嗕讣RN

* 濞夈劍鍓伴敍姝旇ぐ鎾冲Paddle2ONNX閻楀牊婀?v1.2.3)](https://github.com/PaddlePaddle/Paddle2ONNX/releases/tag/v1.2.3)閻滄澘鍑℃妯款吇閺€顖涘瘮閸斻劍鈧够hape閿涘苯宓?`float32[p2o.DynamicDimension.0,3,p2o.DynamicDimension.1,p2o.DynamicDimension.2]`閿涘矂鈧銆?`--input_shape_dict` 瀹告彃绨惧鍐︹偓鍌氼洤閺嬫粍婀乻hape鐠嬪啯鏆ｉ棁鈧Ч鍌氬讲娴ｈ法鏁ゆ俊鍌欑瑓閸涙垝鎶ゆ潻娑滎攽Paddle濡€崇€锋潏鎾冲弳shape鐠嬪啯鏆ｉ妴?

  ```
  python3 -m paddle2onnx.optimize --input_model inference/det_onnx/model.onnx `
    --output_model inference/det_onnx/model.onnx `
    --input_shape_dict "{'x': [-1,3,-1,-1]}"
  ```

- 娴兼ê瀵睴NNX

婵″倷缍樼€电懓顕遍崙铏规畱 ONNX 濡€崇€烽張澶夌喘閸栨牜娈戦棁鈧Ч鍌︾礉閹恒劏宕樻担璺ㄦ暏 onnxslim 鐎佃膩閸ㄥ绻樼悰灞肩喘閸?

```
pip install onnxslim

onnxslim input.onnx model.onnx

```

## 3. 閹恒劎鎮婃０鍕ゴ

闂団偓鐟曚礁鍘涚€瑰顥?opencv閵嗕够hapely閵嗕垢yclipper缁涘绶风挧鏍у瘶, 娴犮儰鑵戦弬鍢淐R濡€崇€锋稉杞扮伐閿涘奔濞囬悽?ONNXRuntime 妫板嫭绁撮崣顖涘⒔鐞涘苯顩ф稉瀣嚒娴犮倧绱?

```
pip install opencv-python
pip install shapely
pip install pyclipper
pip install scikit-image
pip install albumentations
pip install lmdb
```
```
cd PaddleOCR
python ./tools/infer/predict_system.py --use_gpu=False --use_onnx=True `
--det_model_dir=../model/c.onnx  `
--rec_model_dir=../model/e.onnx  `
--cls_model_dir=../model/d.onnx  `
--image_dir=./deploy/lite/imgs/lite_demo.png
```

娴犮儰鑵戦弬鍢淐R濡€崇€锋稉杞扮伐閿涘奔濞囬悽?Paddle Inference 妫板嫭绁撮崣顖涘⒔鐞涘苯顩ф稉瀣嚒娴犮倧绱?

```
cd PaddleOCR
python ./tools/infer/predict_system.py --use_gpu=False `
--rec_image_shape=3,48,320 `
--cls_model_dir=../model/ch_ppocr_mobile_v2.0_cls_infer `
--rec_model_dir=../model/ch_PP-OCRv5_rec_infer `
--det_model_dir=../model/ch_PP-OCRv5_det_infer `
--image_dir=./deploy/lite/imgs/lite_demo.png
```


閹笛嗩攽閸涙垝鎶ら崥搴℃躬缂佸牏顏导姘ⅵ閸楁澘鍤０鍕ゴ閻ㄥ嫯鐦戦崚顐′繆閹垽绱濋獮璺烘躬 `./inference_results/` 娑撳绻氱€涙ê褰茬憴鍡楀缂佹挻鐏夐妴?

ONNXRuntime 閹笛嗩攽閺佸牊鐏夐敍?

<div align="center">
    <img src="/introduction/mixed/inference_results/lite_demo_onnx.png" />
</div>

Paddle Inference 閹笛嗩攽閺佸牊鐏夐敍?

<div align="center">
    <img src="/introduction/mixed/inference_results/lite_demo_paddle.png" width="800" />
</div>

### Q1: 鐏忓繐寮? ONXX 濡€崇€烽弨顖涘瘮閻?閺堚偓婢?IR VERSION 閿?
- IR VERSION = 9

### Q2: 鏉烆剚宕查崥搴ｆ畱濡€崇€烽敍瀛玁NX Runtime閸旂姾娴囬幓鎰仛`Unknown model file format version`?
- Paddle2ONNX娴ｈ法鏁ゆ禍鍡樻付閺傛壆娈慜NNX閸楀繗顔呴敍灞筋嚤閸戣櫣娈戝Ο鈥崇€烽崷銊ゅ▏閻劋缍嗛悧鍫熸拱ONNX Runtime閸旂姾娴囬弮璁圭礉娴兼艾鍤悳鐗堫劃闂傤噣顣介敍灞藉讲闁俺绻冩俊鍌欑瑓娴狅絿鐖滄穱顔芥暭濡€崇€稩R VERSION鐟欙絽鍠呴敍宀勫櫢閺傛澘濮炴潪鑺ユ煀娣囨繂鐡ㄩ惃鍒瀗ew_model.onnx`閸楀啿褰查妴?
```
import onnx
model = onnx.load("model.onnx")
model.ir_version = 9
onnx.save(model, "new_model.onnx")
```
