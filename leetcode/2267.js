/**
 * 一个括号字符串是一个 非空 且只包含 '(' 和 ')' 的字符串。如果下面 任意 条件为 真 ，那么这个括号字符串就是 合法的 。

字符串是 () 。
字符串可以表示为 AB（A 连接 B），A 和 B 都是合法括号序列。
字符串可以表示为 (A) ，其中 A 是合法括号序列。
给你一个 m x n 的括号网格图矩阵 grid 。网格图中一个 合法括号路径 是满足以下所有条件的一条路径：

路径开始于左上角格子 (0, 0) 。
路径结束于右下角格子 (m - 1, n - 1) 。
路径每次只会向 下 或者向 右 移动。
路径经过的格子组成的括号字符串是 合法 的。
如果网格图中存在一条 合法括号路径 ，请返回 true ，否则返回 false 。
 */

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const maxLen = (m+n+1)/2
  if ((m + n) % 2 === 0 || grid[0][0] === ')' || grid[m - 1][n - 1] === '(') return false;
  const vis = new Array(m).fill(0).map(()=>new Array(n).fill(0).map(()=>new Array(maxLen).fill(false)))
  /**
   *
   * @param {number} x 目前在的横坐标
   * @param {number} y 目前在的纵坐标
   * @param {*} c 平衡度，必须大于等于0，不能大于剩下的步数
   */
  function dfs(x, y, c) {
    if(vis[x][y][c]){
      return false
    }
    vis[x][y][c] = true // 已访问
    if (x === m-1 && y === n-1) {
      return c === 1;
    }
    c += grid[x][y] === '(' ? 1 : -1;
    if (c > m - x + n - y - 1 || c < 0) {
      // c 必须大于等于0
      
      return false; // 后面全是）也改不回来
    }
    return (x < m - 1 && dfs(x + 1, y, c)) || (y < n - 1 && dfs(x, y + 1, c));
  }
  return dfs(0, 0, 0);
};

console.log(
  hasValidPath([
    ['(', '(', ')', '(', ')', '(', '(', ')', '(', '(', ')', ')', ')', ')', ')', '(', ')', '(', '(', ')', '(', '(', ')', ')', ')', ')', ')', '(', '(', '(', '('],
    [')', '(', '(', '(', ')', '(', ')', '(', '(', ')', ')', ')', ')', '(', ')', ')', '(', '(', ')', ')', '(', ')', '(', ')', '(', '(', ')', '(', ')', '(', '('],
    [')', ')', '(', '(', ')', '(', '(', ')', ')', ')', ')', '(', '(', ')', ')', '(', ')', '(', ')', ')', '(', '(', '(', ')', ')', ')', '(', ')', ')', '(', ')'],
    ['(', '(', ')', '(', ')', '(', '(', ')', '(', '(', '(', ')', ')', '(', ')', '(', ')', ')', ')', ')', ')', ')', '(', '(', ')', '(', ')', '(', ')', '(', '('],
    [')', ')', '(', ')', ')', '(', '(', '(', ')', ')', '(', ')', '(', ')', ')', ')', '(', '(', '(', ')', ')', '(', ')', '(', ')', ')', '(', '(', '(', '(', ')'],
    [')', ')', '(', '(', ')', '(', ')', '(', ')', '(', ')', '(', ')', ')', '(', ')', '(', ')', ')', '(', ')', '(', '(', '(', ')', '(', ')', ')', ')', '(', '('],
    [')', '(', '(', '(', '(', '(', '(', ')', ')', '(', '(', ')', '(', ')', ')', '(', ')', ')', ')', '(', '(', '(', ')', '(', '(', ')', ')', '(', ')', '(', ')'],
    [')', ')', '(', '(', '(', '(', '(', '(', '(', ')', ')', '(', '(', '(', '(', '(', '(', '(', '(', '(', '(', '(', '(', ')', ')', '(', '(', ')', ')', '(', ')'],
    ['(', ')', ')', ')', '(', '(', ')', ')', ')', ')', '(', ')', ')', '(', ')', ')', '(', '(', '(', '(', '(', '(', '(', ')', ')', '(', '(', ')', ')', '(', '('],
    ['(', '(', ')', '(', ')', ')', ')', ')', '(', '(', '(', ')', ')', ')', '(', ')', '(', '(', ')', '(', '(', '(', ')', '(', '(', '(', '(', '(', ')', ')', ')'],
    ['(', ')', '(', '(', '(', '(', ')', '(', '(', ')', ')', '(', '(', ')', '(', '(', '(', ')', '(', '(', '(', ')', ')', '(', ')', ')', '(', ')', '(', '(', ')'],
    [')', ')', '(', '(', '(', '(', ')', '(', '(', ')', ')', '(', ')', ')', '(', ')', '(', '(', '(', '(', '(', '(', '(', ')', '(', '(', ')', ')', '(', '(', '('],
    ['(', ')', ')', ')', '(', ')', '(', '(', '(', ')', ')', ')', '(', ')', '(', ')', ')', '(', '(', '(', '(', ')', '(', ')', ')', ')', ')', ')', ')', '(', '('],
    ['(', '(', '(', '(', '(', '(', ')', ')', '(', ')', '(', '(', '(', ')', ')', '(', ')', '(', ')', '(', ')', '(', '(', '(', ')', ')', ')', '(', ')', '(', '('],
    ['(', ')', ')', ')', ')', '(', '(', ')', ')', ')', ')', ')', ')', '(', '(', ')', '(', ')', ')', '(', ')', '(', ')', ')', ')', '(', '(', ')', '(', '(', '('],
    ['(', ')', ')', '(', '(', ')', ')', '(', ')', ')', '(', '(', '(', ')', ')', ')', ')', '(', '(', '(', ')', ')', '(', ')', '(', '(', '(', '(', ')', ')', ')'],
    [')', '(', '(', ')', '(', '(', ')', ')', ')', '(', '(', '(', '(', ')', '(', ')', ')', ')', '(', ')', '(', ')', '(', '(', ')', '(', '(', '(', '(', '(', '('],
    ['(', ')', '(', ')', '(', '(', ')', ')', ')', ')', ')', '(', '(', ')', ')', '(', ')', '(', ')', ')', ')', ')', '(', '(', '(', ')', '(', ')', '(', ')', ')'],
    ['(', ')', '(', ')', ')', ')', '(', '(', '(', ')', '(', ')', '(', '(', ')', ')', '(', ')', '(', ')', '(', ')', '(', '(', '(', '(', '(', ')', '(', ')', '('],
    [')', ')', ')', ')', ')', '(', ')', ')', '(', '(', ')', '(', ')', ')', '(', ')', ')', '(', '(', '(', '(', ')', '(', '(', '(', '(', ')', ')', ')', ')', '('],
    [')', '(', '(', '(', '(', '(', ')', '(', ')', ')', ')', ')', '(', '(', '(', ')', ')', '(', ')', ')', '(', '(', '(', '(', '(', '(', ')', ')', '(', '(', '('],
    ['(', '(', '(', ')', ')', '(', ')', '(', ')', ')', ')', ')', '(', ')', ')', ')', ')', '(', ')', '(', '(', '(', '(', ')', '(', '(', '(', '(', '(', '(', ')']
  ])
);
