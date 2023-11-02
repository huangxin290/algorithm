/**
 * 在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。

象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。
每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。

骑士继续移动，直到它走了 k 步或离开了棋盘。

返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  const dirs = [[-2,-1], [-2,1], [2,-1], [2,1], [-1,-2], [-1,2], [1,-2], [1,2]]
  const dp = new Array(k+1).fill(0).map(()=>new Array(n).fill(0).map(()=>new Array(n).fill(0)))
  for(let step = 0;step <= k;step++){
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(step === 0){
          dp[step][i][j] = 1
        }else{
          for(const dir of dirs){
            const x = i+dir[0]
            const y = j+dir[1]
            if(x>=0 && x<n && y>=0 && y<n){
              dp[step][i][j] += dp[step-1][x][y]/8
            }
          }
        }
      }
    }
  }
  return dp[k][row][column]
};