/**
 * 给你一个下标从 0 开始的整数数组 arr 和一个 m x n 的整数 矩阵 mat 。arr 和 mat 都包含范围 [1，m * n] 内的 所有 整数。

从下标 0 开始遍历 arr 中的每个下标 i ，并将包含整数 arr[i] 的 mat 单元格涂色。

请你找出 arr 中在 mat 的某一行或某一列上都被涂色且下标最小的元素，并返回其下标 i 。
 */

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
  const m = mat.length
  const n = mat[0].length
  const numMap = {}
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      const num = mat[i][j]
      numMap[num] = [i, j]
    }
  }
  const xNum = new Array(m).fill(n)
  const yNum = new Array(n).fill(m)
  for(let i=0;i<m*n;i++){
    const num = arr[i]
    const x = numMap[num][0]
    const y = numMap[num][1]
    xNum[x] --
    if(xNum[x] === 0){
      return i
    }
    yNum[y] --
    if(yNum[y] === 0){
      return i
    }
  }
};

console.log(firstCompleteIndex([1,3,4,2], [[1,4],[2,3]])) // 2
console.log(firstCompleteIndex([2,8,7,4,1,3,5,6,9], [[3,2,5],[1,4,6],[8,7,9]])) // 3