/**
 * 给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。

请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。

请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  let rowLen = rowSum.length
  let colLen = colSum.length
  
  let res = new Array(rowLen).fill(0)
  for(let i=0;i<rowLen;i++){
    res[i] = new Array(colLen).fill(0)
  }
  
  for(let i=0;i<rowLen;i++){
    if(i===rowLen-1){
      res[i] = colSum
    }else{
      for(let j=0;j<colLen;j++){
        if(colSum[j] >= rowSum[i]){
          res[i][j] = rowSum[i]
          colSum[j] -= rowSum[i]
          rowSum[i] = 0
          break
        }else{
          res[i][j] = colSum[j]
          rowSum[i] -= colSum[j]
          colSum[j] = 0
        }
      }
    }
  }
  return res
}

// console.log(restoreMatrix([3,8], [4,7]))
console.log(restoreMatrix([14,9], [6,9,8]))
console.log(restoreMatrix([4,12,10,1,0], [1,0,3,16,7]))