/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  var xLen = grid.length
  var yLen = grid[0].length
  var d = new Array(xLen).fill(0)
  for(let i=0;i<xLen;i++){
    d[i] = new Array(yLen).fill(0)
  }
  d[0][0] = grid[0][0]
  for(let i=0;i<xLen;i++){
    for(let j=0;j<yLen;j++){
      if(i===0 && j===0){
        continue
      }
      if(i===0){
        d[i][j] = d[i][j-1] + grid[i][j]
        continue
      }
      if(j===0){
        d[i][j] = d[i-1][j] + grid[i][j]
        continue
      }
      d[i][j] = Math.max(d[i][j-1], d[i-1][j])
      d[i][j]+=grid[i][j]
    }
  }
  return d[xLen-1][yLen-1]
};

console.log(maxValue([
  [1,3,1],
  [1,5,1],
  [4,2,1]
])) // 12

console.log(maxValue([
  [1,2,5],
  [3,2,1]])) // 9

  console.log(maxValue([
    [1,2,3],
    [4,5,6]])) // 16