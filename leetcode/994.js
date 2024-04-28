/**
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const max1 = grid.length
  const max2 = grid[0].length

  let failOranges = []
  let okOranges = 0
  for(let i=0;i<max1;i++){
    for(let j=0;j<max2;j++){
      const orange = grid[i][j]
      if(orange === 1){
        okOranges ++
      }else if(orange === 2){
        failOranges.push([i, j])
      }
    }
  }
  let minute = 0

  function dfs(item, newArr){
    const i = item[0]
    const j = item[1]
    if(i > 0 && grid[i-1][j] === 1){ // 上
      okOranges --
      grid[i-1][j] = 2
      newArr.push([i-1, j])
    }
    if(i < max1 - 1 && grid[i+1][j] === 1){ // 下
      okOranges --
      grid[i+1][j] = 2
      newArr.push([i+1,j])
    }
    if(j > 0 && grid[i][j-1] === 1){ // 左
      okOranges --
      grid[i][j-1] = 2
      newArr.push([i,j-1])
    }
    if(j < max2 - 1 && grid[i][j+1] === 1){ // 右
      okOranges --
      grid[i][j+1] = 2
      newArr.push([i,j+1])
    }
  }
  if(okOranges === 0){ // 全感染完了
    return minute
  }
  while(failOranges.length){
    if(okOranges === 0){ // 全感染完了
      return minute
    }
    const newArr = []
    failOranges.map(item=>{
      dfs(item, newArr)
    })
    failOranges = newArr
    minute ++
  }

  return -1
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // -1
console.log(orangesRotting([[0,2]])); // 0
console.log(orangesRotting([[2],[1]])); // 1


