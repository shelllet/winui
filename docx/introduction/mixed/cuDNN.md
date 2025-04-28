# cuDNN 和 CUDA 版本对应关系

cuDNN 和 CUDA 的版本对应关系需要根据具体的软件版本和硬件环境进行匹配，以下是基于证据的详细总结：

### 1. **官方兼容性说明（NVIDIA文档）**
   - **主版本对应**：  
cuDNN 的版本通常对应 CUDA 的主版本（如 `12.x` 或 `11.x`）。例如：
- **cuDNN 8.9.1** 分为两个分支：  
- `cuDNN 8.9.1 for CUDA 12.x`：支持 CUDA 12.0、12.1 等次版本 。  
![](https://metaso-static.oss-cn-beijing.aliyuncs.com/metaso/pdf2texts_reading_mode/figures/ab861921-be8e-48d8-bd1c-3a6951326975/2_0.jpg)
- `cuDNN 8.9.1 for CUDA 11.x`：支持 CUDA 11.7、11.8 等次版本 。  
- **cuDNN 8.9.4** 同样支持 CUDA 12.x 系列的所有次版本（如 12.0、12.1、12.2）。
   - **静态链接与硬件支持**：  
- CUDA 12.x 版本的 cuDNN 支持静态链接，而 CUDA 11.x 版本不支持 。  
- 不同 CUDA 主版本支持的 NVIDIA 硬件架构不同（如 CUDA 12.x 支持 Hopper 架构，CUDA 11.x 支持 Turing 架构）。

### 2. **第三方框架的兼容性（TensorFlow/PyTorch/ONNX Runtime）**
- **TensorFlow**：  
   - 不同 TensorFlow 版本对 CUDA 和 cuDNN 有明确要求。例如：
   - TensorFlow 1.11.0 需要 CUDA 9.0 和 cuDNN 7.1.2 。  
   - TensorFlow 2.1 需要 CUDA 10.1 和 cuDNN 7.6 。  
   - 需参考 [TensorFlow官方文档](https://www.tensorflow.org/install/source ) 获取最新对应关系 。
- **PyTorch**：  
- 需根据 PyTorch 版本选择兼容的 CUDA 和 cuDNN 组合。例如，PyTorch 2.0 通常需要 CUDA 11.7/11.8 和 cuDNN 8.x 。
- **ONNX Runtime**，具体参考:[CUDA Execution Provider](https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html)：
   - **ONNX Runtime 1.17.x**：对应 CUDA 12.2，cuDNN 8.9.2.26。
   - **ONNX Runtime 1.15.x - 1.16.x**：对应 CUDA 11.8，cuDNN 8.2.4（Linux）/8.5.0.96（Windows）。
   - **ONNX Runtime 1.13.x - 1.14.x**：对应 CUDA 11.6，cuDNN 8.2.4（Linux）/8.5.0.96（Windows）。
   - **ONNX Runtime 1.11.x - 1.12.x**：对应 CUDA 11.4，cuDNN 8.2.4（Linux）/8.2.2.26（Windows）。
   - **ONNX Runtime 1.9.x - 1.10.x**：对应 CUDA 11.4，cuDNN 8.2.4（Linux）/8.2.2.26（Windows）。
   - **ONNX Runtime 1.7.x - 1.8.x**：对应 CUDA 11.0.3，cuDNN 8.0.4（Linux）/8.0.2.39（Windows）。

cuDNN和CUDA有较为明确的版本对应关系，以下是一些常见的对应版本：
- **CUDA 10.0**：对应 cuDNN 7.4。
- **CUDA 10.1**：对应 cuDNN 7.6。
- **CUDA 10.2**：对应 cuDNN 7.6。
- **CUDA 11.0**：对应 cuDNN 8.0。
- **CUDA 11.1**：对应 cuDNN 8.0。
- **CUDA 11.2**：对应 cuDNN 8.1。



一般来说，cuDNN的版本可能会有向前兼容性，即较新版本的cuDNN也可以与较旧版本的CUDA一起使用，但不保证所有功能都能正常工作。在实际应用中，为了确保深度学习框架能够正常运行并获得最佳性能，建议按照官方文档的要求来选择匹配的CUDA和cuDNN版本。


### 3. **版本查询与验证方法**
   - **查看 CUDA 版本**：  
- 命令行输入 `nvcc --version` 或 `nvidia-smi`（显示驱动支持的最高 CUDA 版本）。  
   - **查看 cuDNN 版本**：  
- 检查 CUDA 安装目录下的 `cudnn.h` 文件（Windows/Linux均适用）。例如：  
```bash
       cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2  # Linux
```
或打开 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\vX.X\include\cudnn.h`（Windows）。

### 4. **关键注意事项**
   - **驱动版本要求**：  
- CUDA 和 cuDNN 的安装需满足 NVIDIA 驱动的最低版本。例如：  
- CUDA 12.x 要求 Linux 驱动 ≥525.60.13，Windows 驱动 ≥527.41 。  
- CUDA 11.x 要求 Linux 驱动 ≥450.80.02，Windows 驱动 ≥452.39 。  
   - **向下兼容性**：  
- CUDA 驱动向下兼容，但 cuDNN 必须与 CUDA 主版本严格匹配。例如，CUDA 12.1 需使用 `cuDNN for CUDA 12.x`，而非 `11.x` 。  
   - **历史版本对应**：  
- 旧版本对应关系（仅供参考，可能已过时）：  
- CUDA 10.0 → cuDNN 7.4 ；CUDA 9.0 → cuDNN 7.5 ；CUDA 8.0 → cuDNN 5.0 。  

### 5. **推荐操作流程**
   - **步骤 1**：根据深度学习框架（如 TensorFlow/PyTorch）的版本要求，确定所需的 CUDA 版本 。  
   - **步骤 2**：在 [NVIDIA cuDNN Support Matrix](https://docs.nvidia.com/deeplearning/cudnn/backend/latest/reference/support-matrix.html) 中查找对应 CUDA 主版本的 cuDNN 版本 。  
   - **步骤 3**：确保 NVIDIA 驱动版本满足 CUDA 的最低要求（通过 `nvidia-smi` 查看）。  

### 总结表格（部分示例）

| CUDA 主版本 | 兼容的 cuDNN 版本          | 备注                          |
|------------|---------------------------|-------------------------------|
| 12.x       | cuDNN 8.9.1、8.9.4        | 支持 Hopper 架构     |
| 11.x       | cuDNN 8.9.1（仅限 11.7+） | 支持 Turing 架构         |
| 10.x       | cuDNN 7.6.5               | 需参考旧版文档        |


建议始终参考 **NVIDIA 官方支持矩阵** 和框架文档以获取最新信息 。