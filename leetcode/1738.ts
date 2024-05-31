/**
 * 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。
 */

function kthLargestValue(matrix: number[][], k: number): number {
  const keys:number[] = []
  for(let i=0,m=matrix.length;i<m;i++){
    let beforeRes = 0
    for(let j=0,n=matrix[0].length;j<n;j++){
      beforeRes = beforeRes ^ matrix[i][j]
      matrix[i][j] = beforeRes
      if(i>0){
        matrix[i][j] = matrix[i-1][j] ^ beforeRes
      }
      keys.push(matrix[i][j])
    }
  }
  keys.sort((a, b)=>a-b)
  return keys[keys.length - k]
};

console.log(kthLargestValue([[5,2],[1,6]], 1)); // 7
console.log(kthLargestValue([[5,2],[1,6]], 2)); // 5
console.log(kthLargestValue([[5,2],[1,6]], 3)); // 4
console.log(kthLargestValue([[5,2],[1,6]], 4)); // 0
console.log(kthLargestValue([[10,9,5],[2,0,4],[1,0,9],[3,4,8]], 10)); // 1
console.log(kthLargestValue([[8,10,5,8,5,7,6,0,1,4,10,6,4,3,6,8,7,9,4,2]], 2)); // 14

