/**
 * 矩阵对角线 是一条从矩阵最上面行或者最左侧列中的某个元素开始的对角线，沿右下方向一直到矩阵末尾的元素。例如，矩阵 mat 有 6 行 3 列，从 mat[2][0] 开始的 矩阵对角线 将会经过 mat[2][0]、mat[3][1] 和 mat[4][2] 。

给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const m = mat.length
  const n = mat[0].length
  for(let i=m-2;i>=0;i--){ // 从左下角开始往上，j=0
    const arr = []
    for(let j=0;j<n&&j<m-i;j++){
      arr.push(mat[i+j][j])
    }
    arr.sort((a, b)=>a-b)
    for(let j=0;j<n&&j<m-i;j++){
      mat[i+j][j] = arr[j]
    }
  }
  for(let j=1;j<n;j++){ // 从1,0往右，i=0
    const arr = []
    for(let i=0;i<m&&i<n-j;i++){
      arr.push(mat[i][j+i])
    }
    arr.sort((a, b)=>a-b)
    for(let i=0;i<m&&i<n-j;i++){
      mat[i][j+i] = arr[i]
    }
  }
  return mat
}

console.log(diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]])) // [ [ 1, 1, 1, 1 ], [ 1, 2, 2, 2 ], [ 1, 2, 3, 3 ] ]
console.log(diagonalSort([[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]])) // [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]