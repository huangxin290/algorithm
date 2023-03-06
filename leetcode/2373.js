/**
 * 给你一个大小为 n x n 的整数矩阵 grid 。

生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

返回生成的矩阵。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/largest-local-values-in-a-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
  var res = []
  for(let i=0;i<grid.length-2;i++){
    var arr = []
    for(let j=0;j<grid.length-2;j++){
      arr.push(Math.max(grid[i][j], grid[i+1][j], grid[i+2][j], grid[i][j+1], grid[i+1][j+1], grid[i+2][j+1], grid[i][j+2], grid[i+1][j+2], grid[i+2][j+2]))
    }
    res.push(arr)
  }
  return res
}; 

console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))