# ContourApproximationMode

轮廓近似方法

* CHAIN_APPROX_NONE
> 不使用近似值并返回所有点�?
* CHAIN_APPROX_SIMPLE
> 简单的近似算法，在形状为多边形时效果很好。对于四边形它将返回 4 个点，对于三角形将返�?3 个点，依此类推�?
* CHAIN_APPROX_TC89_L1
> 更精确的近似算法。当形状弯曲且不是简单的多边形时应使用此方法�?
* CHAIN_APPROX_TC89_KCOS
> �?*CHAIN_APPROX_TC89_L1* 算法相比，该算法的计算成本更高，并且稍微更准确。当形状是弯曲的并且不是简单的多边形时，应该使用此方法�
