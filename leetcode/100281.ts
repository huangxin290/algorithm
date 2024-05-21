/**
 * 给你一个由 正整数 组成、大小为 m x n 的矩阵 grid。你可以从矩阵中的任一单元格移动到另一个位于正下方或正右侧的任意单元格（不必相邻）。从值为 c1 的单元格移动到值为 c2 的单元格的得分为 c2 - c1 。

你可以从 任一 单元格开始，并且必须至少移动一次。

返回你能得到的 最大 总得分。
 */

function maxScore(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const cache = new Array(m).fill(0).map(() => new Array(n).fill(-1)) // cache[i][j] 记录了从[i][j] 到右下角的方阵中，最大的数
  cache[m - 1][n - 1] = grid[m - 1][n - 1]
  let ans = Number.MIN_SAFE_INTEGER

  function dfs(i: number, j: number): number {
    if (i >= m || j >= n) {
      return Number.MIN_SAFE_INTEGER
    }
    if (cache[i][j] !== -1) {
      return cache[i][j]
    }

    const res = Math.max(dfs(i + 1, j), dfs(i, j + 1))
    ans = Math.max(ans, res - grid[i][j])
    return cache[i][j] = Math.max(grid[i][j], res)
  }
  dfs(0, 0)
  return ans
};

console.log(maxScore([[9, 5, 7, 3], [8, 9, 6, 1], [6, 7, 14, 3], [2, 5, 3, 1]])) // 9
console.log(maxScore([[4, 3, 2], [3, 2, 1]])) // -1
