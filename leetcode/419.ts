/**
 * 给你一个大小为 m x n 的矩阵 board 表示甲板，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在甲板 board 上放置的 战舰 的数量。

战舰 只能水平或者垂直放置在 board 上。换句话说，战舰只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状建造，其中 k 可以是任意大小。两艘战舰之间至少有一个水平或垂直的空位分隔 （即没有相邻的战舰）。
 */

function countBattleships(board: string[][]): number {
  const m = board.length
  const n = board[0].length

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'X') {
        ans++
        dfs(i, j)
      }
    }
  }

  function dfs(i: number, j: number) {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === '.') {
      return
    }
    board[i][j] = '.'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  return ans
};

console.log(countBattleships([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]])) // 2
console.log(countBattleships([["."]])) // 0
