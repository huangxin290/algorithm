/**
 * 给你一个 rows x cols 的矩阵 grid 来表示一块樱桃地。 grid 中每个格子的数字表示你能获得的樱桃数目。

你有两个机器人帮你收集樱桃，机器人 1 从左上角格子 (0,0) 出发，机器人 2 从右上角格子 (0, cols-1) 出发。

请你按照如下规则，返回两个机器人能收集的最多樱桃数目：

从格子 (i,j) 出发，机器人可以移动到格子 (i+1, j-1)，(i+1, j) 或者 (i+1, j+1) 。
当一个机器人经过某个格子时，它会把该格子内所有的樱桃都摘走，然后这个位置会变成空格子，即没有樱桃的格子。
当两个机器人同时到达同一个格子时，它们中只有一个可以摘到樱桃。
两个机器人在任意时刻都不能移动到 grid 外面。
两个机器人最后都要到达 grid 最底下一行。
 */

function cherryPickup(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length
  const cache = new Array(rows).fill(0).map(() => new Array(cols).fill(0).map(() => new Array(cols).fill(-1)))

  // t是向下走了t步，i是左边的机器人的列数，j是右边的机器人的列数，i，j在0到cols-1之间
  function dfs(t:number, i:number, j:number):number {
    if (i < 0 || j < 0 || i >= cols || j >= cols) {
      return Number.MIN_SAFE_INTEGER
    }
    if (t === rows - 1) {
      return cache[t][i][j] = grid[t][i] + (i === j ? 0 : grid[t][j])
    }
    if (cache[t][i][j] !== -1) {
      return cache[t][i][j]
    }
    return cache[t][i][j] = Math.max(dfs(t + 1, i - 1, j - 1), dfs(t + 1, i - 1, j), dfs(t + 1, i - 1, j + 1), dfs(t + 1, i, j - 1), dfs(t + 1, i, j), dfs(t + 1, i, j + 1), dfs(t + 1, i + 1, j - 1), dfs(t + 1, i + 1, j), dfs(t + 1, i + 1, j + 1)) + grid[t][i] + (i === j ? 0 : grid[t][j])
  }

  return dfs(0, 0, cols - 1)
};

console.log(cherryPickup([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]])) // 24
console.log(cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]])) // 28
