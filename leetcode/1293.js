/**
 * 给你一个 m * n 的网格，其中每个单元格不是 0（空）就是 1（障碍物）。每一步，您都可以在空白单元格中上、下、左、右移动。

如果您 最多 可以消除 k 个障碍物，请找出从左上角 (0, 0) 到右下角 (m-1, n-1) 的最短路径，并返回通过该路径所需的步数。如果找不到这样的路径，则返回 -1 。
 */

// 递归+剪枝

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  let res = Number.MAX_SAFE_INTEGER
  const m = grid.length
  const n = grid[0].length
  const dirs = [[0,1],[1,0],[-1,0],[0,-1]]
  if(k>= m+n-3){
    return m+n-2
  }
  // dp[x][y][cnt] 表示 位置（x，y）处，有cnt个障碍物的最短路径
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0).map(()=> new Array(k+1).fill(Number.MAX_SAFE_INTEGER)))

  function dfs(x,y,cnt, q){
    // 遇到墙
    if(grid[x][y] === 1){
      q++
    }
    cnt++ // 路径增加
    if(q > k){
      // 墙太多了，挂掉
      return
    }
    if(cnt>res){
      // 比现有最短路径长，挂掉
      return
    }
    // 递归终点
    if(x === m-1 && y === n-1){
      res = cnt
      return
    }
    if(dp[x][y][q] <= cnt){
      // 已记录的比现有的短，挂掉
      return
    }
    dp[x][y][q] = cnt
    for(let i=0;i<4;i++){
      const x1 = x+dirs[i][0]
      const y1 = y+dirs[i][1]
      if(x1>=0 && x1<m && y1>=0&&y1<n){
        dfs(x1,y1,cnt,q)
      }
    }
    return
  }

  dfs(0,0,-1,0) // 第一个开始是没有路径的
  return res === Number.MAX_SAFE_INTEGER ? -1 : res
};

console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1)) // 6
console.log(shortestPath([[0,1,1],[1,1,1],[1,0,0]], 1)) // -1