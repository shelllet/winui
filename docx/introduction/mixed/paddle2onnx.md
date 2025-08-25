# Paddle2ONNX模型转化与预测

本章节介绍 PaddleOCR 模型如何转化为 ONNX 模型，并在 *小友+* 中使用。

## 1. 环境准备

需要准备 Python、Paddle、 PaddleOCR、Paddle2ONNX 模型转化环境，和 ONNXRuntime 预测环境。

### Python

1. 下载 Python 安装包，本章节使用 `3.12.9` 版本，下载链接:[https://www.python.org/ftp/python/3.12.9/python-3.12.9-amd64.exe](https://www.python.org/ftp/python/3.12.9/python-3.12.9-amd64.exe)。
- 打开 Python 官方下载页面 [https://www.python.org/downloads/](https://www.python.org/downloads/)。
- 页面会根据你的系统自动推荐合适的 Python 版本。通常建议选择最新的稳定版本，在页面中找到“Download Python x.x.x”（x.x.x 代表具体版本号）按钮并点击。若你的 Windows 系统是 64 位，下载 64 - bit 的安装包；若为 32 位系统，则下载 32 - bit 的安装包。

2. 运行安装程序
- 找到下载好的 `.exe` 格式的安装文件，双击运行。
- 在弹出的安装界面中，注意勾选“Add Python x.x to PATH”选项，这个操作能自动将 Python 可执行文件路径添加到系统的环境变量中，之后你就能在命令提示符里直接使用 Python 命令。
- 你可以选择“Install Now”进行默认安装，也能点击“Customize installation”来自定义安装路径和组件。若不确定如何选择，建议直接点击“Install Now”。
- 等待安装过程完成，这可能需要一些时间，取决于你的系统性能。

3. 验证 Python 安装
- 按下 `Win + R` 组合键，打开“运行”对话框，输入 `cmd` 并回车，以此打开命令提示符窗口。
- 在命令提示符中输入 `python --version` 并回车。若安装成功，会显示所安装的 Python 版本号，例如 `Python 3.11.5`。

4. 验证 pip 安装
`pip` 是 Python 的包管理工具，一般会随 Python 一起安装。在命令提示符中输入 `pip --version` 并回车，若安装成功，会显示 `pip` 的版本信息以及对应的 Python 版本，例如 `pip 23.3.1 from C:\Python311\Lib\site-packages\pip (python 3.11)`。

5. 更新 pip（可选）
为保证能使用 `pip` 的最新特性和修复已知问题，可在命令提示符中运行以下命令来更新 `pip`：
```plaintext
python -m pip install --upgrade pip
```

### 虚拟环境
在 Python 开发中，虚拟环境是一个非常有用的工具，它可以为每个项目创建独立的 Python 运行环境，避免不同项目之间的依赖冲突。

### 使用 `venv` 模块（Python 标准库自带）
`venv` 是 Python 3.3 及以上版本标准库中自带的虚拟环境创建工具，使用起来简单方便。

#### 步骤
1. **打开命令行工具**：在 Windows 系统中可以使用命令提示符（CMD）或 PowerShell。
2. **创建虚拟环境**：在命令行中进入你想要创建虚拟环境的目录，然后运行以下命令：

```PowerShell
cd d:\onnx

python -m venv myenv

# PowerShell
.\myenv\Scripts\Activate.ps1

# CMD
# .\myenv\Scripts\activate.bat
```
其中 `myenv` 是你要创建的虚拟环境的名称，你可以根据需要进行修改。

3. **激活虚拟环境**：
    - **Windows（CMD）**：
```plaintext
myenv\Scripts\activate.bat
```
    - **Windows（PowerShell）**：
```plaintext
myenv\Scripts\Activate.ps1
```

激活虚拟环境后，命令行提示符前面会显示虚拟环境的名称，表明你已经成功进入该虚拟环境。

4. **安装依赖包**：在虚拟环境中，你可以使用 `pip` 安装项目所需的依赖包，例如：
```plaintext
pip install requests
```

5. **退出虚拟环境**：当你完成开发工作后，可以在命令行中运行以下命令退出虚拟环境：
```plaintext
deactivate
```

### Paddle
在使用 `pip install paddlepaddle` 安装 PaddlePaddle（以下简称 Paddle）时，有一些要点需要注意，下面为你详细介绍不同环境下的安装步骤和注意事项。


#### 1. 选择合适的 Paddle 版本
Paddle 有 CPU 版本和 GPU 版本，你需要根据自己的硬件情况选择合适的版本。
- **CPU 版本**：如果你的计算机没有 NVIDIA GPU 或者不需要使用 GPU 进行计算，那么选择 CPU 版本即可。
- **GPU 版本**：如果你的计算机配备了 NVIDIA GPU，并且想利用 GPU 的计算能力加速训练和推理，那么需要安装 GPU 版本。同时，你还需要安装对应的 CUDA 和 cuDNN 库。

#### 2. 安装 Paddle
##### CPU 版本安装（推荐）
在命令行中运行以下命令安装 CPU 版本的 Paddle：
```bash
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
```
这里 `-i https://mirror.baidu.com/pypi/simple` 是指定使用百度的 PyPI 镜像源，这样可以加快下载速度。

##### GPU 版本安装
如果你要安装 GPU 版本，需要先确认你的 CUDA 和 cuDNN 版本，通过执行命令 **nvidia-smi.exe** 查看 CUDA 版本， 查看输出：
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
CUDA 参考 [Windows 系统上安装 CUDA](.\introduction\mixed\CUDA.md) 安装，检查相应的`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v12.8\bin` 路径是否加入到环境变量`PATH`中。

[对应的cuDNN](.\introduction\mixed\cuDNN.md) 版本下载：[https://developer.nvidia.com/cudnn-archive](https://developer.nvidia.com/cudnn-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local)。解压之后 ，同样设置环境变量`PATH`。

```
$env:PATH = "D:\onnx\cudnn-windows-x86_64-8.9.7.29_cuda12-archive\bin;$env:PATH;"
```

然后根据版本选择合适的安装命令。例如，如果你使用的是 CUDA 12.0 和 cuDNN 9.8，可以运行以下命令：
```bash
pip install paddlepaddle-gpu==3.1.0.post120 -f https://www.paddlepaddle.org.cn/whl/windows/mkl/avx/stable.html
```
其中 `2.6.1.post120` 表示 Paddle 的版本，`120` 代表 CUDA 12.0。你可以根据自己的实际情况调整版本号。

### 4. 验证安装
安装完成后，你可以在 Python 环境中验证 Paddle 是否安装成功。打开 Python 解释器，输入以下代码：
```python
import paddle
paddle.utils.run_check()
```
如果输出类似 `PaddlePaddle is installed successfully!` 的信息，说明 Paddle 已经成功安装。

### 5. 错误
当你遇到 No module named 'setuptools' 错误，意味着 Python 环境里没有安装 setuptools 模块。
````
pip install setuptools
````

###  PaddleOCR

克隆PaddleOCR的仓库，使用 main 分支，并进行安装，由于 PaddleOCR 仓库比较大，git clone 速度比较慢，或使用国内镜像站点下载。

使用虚拟环境：```(myenv) PS D:\onnx>```。

```
git clone  -b main https://github.com/PaddlePaddle/PaddleOCR.git
cd PaddleOCR
python -m pip install -e .
```

###  Paddle2ONNX

Paddle2ONNX 支持将 PaddlePaddle 模型格式转化到 ONNX 模型格式，算子目前稳定支持导出 ONNX Opset 9~18，部分Paddle算子支持更低的ONNX Opset转换。
更多细节可参考 [Paddle2ONNX](https://github.com/PaddlePaddle/Paddle2ONNX/tree/develop)。
使用虚拟环境：```(myenv) PS D:\onnx>```。
- 安装 Paddle2ONNX
```
python -m pip install paddle2onnx==2.0.2rc3
```

- 安装 ONNXRuntime
```
python -m pip install onnxruntime
```

## 2. 模型转换


- Paddle 模型下载

在 [模型列表](https://paddlepaddle.github.io/PaddleOCR/latest/model/index.html) 中下载PaddleOCR提供的预测模型。通常包含3种模型，其中 **方向分类器** 更新较慢，如果版本号琶可直接使用。


以 PP-OCRv4 中文检测、识别、分类模型为例：

```
# 检测模型
wget -O ./ch_PP-OCRv4_det_infer.tar https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_det_infer.tar

# 方向分类器
wget -O ./ch_ppocr_mobile_v2.0_cls_infer.tar https://paddleocr.bj.bcebos.com/dygraph_v2.0/ch/ch_ppocr_mobile_v2.0_cls_infer.tar

# 识别模型
wget -O ./ch_PP-OCRv4_rec_infer.tar https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_rec_infer.tar

tar xf ch_PP-OCRv4_det_infer.tar

tar xf ch_ppocr_mobile_v2.0_cls_infer.tar

tar xf ch_PP-OCRv4_rec_infer.tar


```

- 模型转换（包含 3 种基础模型）

使用 Paddle2ONNX 将Paddle静态图模型转换为ONNX模型格式：

```PowerShell
cd PP-OCRv5_server_det_infer

paddle2onnx --model_dir ./PP-OCRv5_server_det_infer `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./det_infer.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool polygraphy


cd PP-OCRv5_server_rec_infer

paddle2onnx --model_dir ./PP-OCRv5_server_rec_infer `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./rec_infer.onnx `
--opset_version 18 `
--enable_auto_update_opset True `
--enable_onnx_checker True `
--optimize_tool onnxoptimizer

cd PP-LCNet_x1_0_textline_ori_infer

paddle2onnx --model_dir ./PP-LCNet_x1_0_textline_ori_infer `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./textline_ori_infer.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool onnxoptimizer



cd PP-LCNet_x1_0_doc_ori_infer

paddle2onnx --model_dir ./PP-LCNet_x1_0_doc_ori_infer `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./doc_ori_infer.onnx `
--opset_version 18 `
--enable_onnx_checker True `
--optimize_tool onnxoptimizer


cd UVDoc_infer

paddle2onnx --model_dir ./UVDoc_infer `
--model_filename inference.json `
--params_filename inference.pdiparams `
--save_file ./UVDoc_infer.onnx `
--opset_version 18 `
--enable_onnx_checker True

```

执行完毕后，ONNX 模型会被分别保存为 `det_infer.onnx`，`./rec_infer.onnx`，`./textline_ori_infer.onnx` `./doc_ori_infer.onnx` `./UVDoc_infer.onnx` 

* 注意：对于OCR模型，转化过程中必须采用动态shape的形式，否则预测结果可能与直接使用Paddle预测有细微不同。
  另外，以下几个模型暂不支持转换为 ONNX 模型：
  NRTR、SAR、RARE、SRN

* 注意：[当前Paddle2ONNX版本(v1.2.3)](https://github.com/PaddlePaddle/Paddle2ONNX/releases/tag/v1.2.3)现已默认支持动态shape，即 `float32[p2o.DynamicDimension.0,3,p2o.DynamicDimension.1,p2o.DynamicDimension.2]`，选项 `--input_shape_dict` 已废弃。如果有shape调整需求可使用如下命令进行Paddle模型输入shape调整。

  ```
  python3 -m paddle2onnx.optimize --input_model inference/det_onnx/model.onnx `
    --output_model inference/det_onnx/model.onnx `
    --input_shape_dict "{'x': [-1,3,-1,-1]}"
  ```

- 优化ONNX

如你对导出的 ONNX 模型有优化的需求，推荐使用 onnxslim 对模型进行优化:

```
pip install onnxslim

onnxslim det_infer.onnx slim_det_infer.onnx


onnxslim rec_infer.onnx slim_rec_infer.onnx

onnxslim textline_ori_infer.onnx slim_textline_ori_infer.onnx


onnxslim doc_ori_infer.onnx slim_doc_ori_infer.onnx

onnxslim doc_infer.onnx slim_doc_infer.onnx

```

## 3. 推理预测

需要先安装 opencv、shapely、pyclipper等依赖包, 以中文OCR模型为例，使用 ONNXRuntime 预测可执行如下命令：

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
--det_model_dir=../model/det_model.onnx  `
--rec_model_dir=../model/rec_model.onnx  `
--cls_model_dir=../model/cls_model.onnx  `
--image_dir=./deploy/lite/imgs/lite_demo.png
```

以中文OCR模型为例，使用 Paddle Inference 预测可执行如下命令：

```
cd PaddleOCR
python ./tools/infer/predict_system.py --use_gpu=False `
--rec_image_shape=3,48,320 `
--cls_model_dir=../model/ch_ppocr_mobile_v2.0_cls_infer `
--rec_model_dir=../model/ch_PP-OCRv4_rec_infer `
--det_model_dir=../model/ch_PP-OCRv4_det_infer `
--image_dir=./deploy/lite/imgs/lite_demo.png
```


执行命令后在终端会打印出预测的识别信息，并在 `./inference_results/` 下保存可视化结果。

ONNXRuntime 执行效果：

<div align="center">
    <img src="./introduction/mixed/inference_results/lite_demo_onnx.png">
</div>

Paddle Inference 执行效果：

<div align="center">
    <img src="./introduction/mixed/inference_results/lite_demo_paddle.png" width=800">
</div>
