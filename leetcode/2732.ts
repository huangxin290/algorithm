/**
 * 给你一个下标从 0 开始大小为 m x n 的二进制矩阵 grid 。

从原矩阵中选出若干行构成一个行的 非空 子集，如果子集中任何一列的和至多为子集大小的一半，那么我们称这个子集是 好子集。

更正式的，如果选出来的行子集大小（即行的数量）为 k，那么每一列的和至多为 floor(k / 2) 。

请你返回一个整数数组，它包含好子集的行下标，请你将子集中的元素 升序 返回。

如果有多个好子集，你可以返回任意一个。如果没有好子集，请你返回一个空数组。

一个矩阵 grid 的行 子集 ，是删除 grid 中某些（也可能不删除）行后，剩余行构成的元素集合。
 */

/**
 * 
 * 一行就必须全是0
 * 两行就是 & 操作等于0
 * 三行和两行是一样的，三行能行，两行就一定能行，毕竟三行的要求是和小于 floor(3/2) 还是 1，三行都能满足，没理由两行反而不行
 * 四行以上就需要证明了，证明没有四行以下的答案时，反而有四行及以上的答案成立
 * 
 * 遍历每行，生成二进制数，map去重（因为只要一个答案），遇到0直接返回，否则二次遍历，求 & 值，遇到0 就是答案
 */

function goodSubsetofBinaryMatrix(grid: number[][]): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < grid.length; i++) {
    let mask = 0
    for (let j = 0; j < grid[i].length; j++) {
      mask |= grid[i][j] << j
    }
    if (mask === 0) {
      return [i]
    }
    map.set(mask, i)
  }

  for (const x of map) {
    for (const y of map) {
      if ((x[0] & y[0]) === 0) {
        return x[1] < y[1] ? [x[1], y[1]] : [y[1], x[1]]
      }
    }
  }
  return []
};

console.log(goodSubsetofBinaryMatrix([[0, 1, 1, 0], [0, 0, 0, 1], [1, 1, 1, 1]])) // [0,1]
console.log(goodSubsetofBinaryMatrix([[0]])) // [0]
console.log(goodSubsetofBinaryMatrix([[1, 1, 1], [1, 1, 1]])) // []

