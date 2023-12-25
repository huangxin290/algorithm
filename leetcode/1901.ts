/**
 * 一个 2D 网格中的 峰值 是指那些 严格大于 其相邻格子(上、下、左、右)的元素。
给你一个 从 0 开始编号 的 m x n 矩阵 mat ，其中任意两个相邻格子的值都 不相同 。找出 任意一个 峰值 mat[i][j] 并 返回其位置 [i,j] 。
你可以假设整个矩阵周边环绕着一圈值为 -1 的格子。
要求必须写出时间复杂度为 O(m log(n)) 或 O(n log(m)) 的算法
*/
function findPeakGrid(mat: number[][]): number[] {
    const m = mat.length
    const n = mat[0].length
    // 二分查找，middle向上取，left取0，right取m-1
    let left = 0
    let right = m-1
    while(left < right){
      const middle = Math.floor((left + right)/2)
      const maxIndex = getMaxNumberIndexInArray(mat[middle])
      if(mat[middle][maxIndex] < mat[middle+1][maxIndex]){
        left = middle + 1
      }else{
        right = middle
      }
    }
    const maxIndex = getMaxNumberIndexInArray(mat[left])
    return [left, maxIndex]
};

function getMaxNumberIndexInArray(arr: number[]): number{
  let max = 0
  for(let i=0;i<arr.length;i++){
    if(arr[i] > arr[max]){
      max = i
    }
  }
  return max
}

console.log(findPeakGrid([[1,4],[3,2]])) // [0,1]
console.log(findPeakGrid([[10,20,15],[21,30,14],[7,16,32]])) // [1,1]