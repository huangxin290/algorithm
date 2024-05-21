/**
 * 给你一个 n x n 的网格 grid ，代表一块樱桃地，每个格子由以下三种数字的一种来表示：

0 表示这个格子是空的，所以你可以穿过它。
1 表示这个格子里装着一个樱桃，你可以摘到樱桃然后穿过它。
-1 表示这个格子里有荆棘，挡着你的路。
请你统计并返回：在遵守下列规则的情况下，能摘到的最多樱桃数：

从位置 (0, 0) 出发，最后到达 (n - 1, n - 1) ，只能向下或向右走，并且只能穿越有效的格子（即只可以穿过值为 0 或者 1 的格子）；
当到达 (n - 1, n - 1) 后，你要继续走，直到返回到 (0, 0) ，只能向上或向左走，并且只能穿越有效的格子；
当你经过一个格子且这个格子包含一个樱桃时，你将摘到樱桃并且这个格子会变成空的（值变为 0 ）；
如果在 (0, 0) 和 (n - 1, n - 1) 之间不存在一条可经过的路径，则无法摘到任何一个樱桃。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid: number[][]): number {
  const n = grid.length
  const cache: number[][][] = new Array(2 * n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(-1)))

  // t是t步，j是第一个人走的向右次数，k是第二个人走的向右次数
  function dfs(t: number, j: number, k: number): number {
    if (j < 0 || k < 0 || t < j || t < k || grid[t - j][j] === -1 || grid[t - k][k] === -1) {
      return Number.MIN_SAFE_INTEGER
    }
    if (t === 0) {
      return grid[0][0]
    }
    if (cache[t][j][k] !== -1) {
      return cache[t][j][k]
    }

    return cache[t][j][k] = Math.max(dfs(t - 1, j, k), dfs(t - 1, j - 1, k), dfs(t - 1, j, k - 1), dfs(t - 1, j - 1, k - 1)) + grid[t - j][j] + (k !== j ? grid[t - k][k] : 0)
  }
  return Math.max(dfs(2 * n - 2, n - 1, n - 1), 0)
}

console.log(cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]])) // 5
console.log(cherryPickup([[1, 1, -1], [1, -1, 1], [-1, 1, 1]])) // 0
