/**
 * 给你一个下标从 0 开始的二维整数矩阵 grid，大小为 n * n ，其中的值在 [1, n2] 范围内。除了 a 出现 两次，b 缺失 之外，每个整数都 恰好出现一次 。

任务是找出重复的数字a 和缺失的数字 b 。

返回一个下标从 0 开始、长度为 2 的整数数组 ans ，其中 ans[0] 等于 a ，ans[1] 等于 b 。
 */

function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length
  const sum = n * n
  const newSet = new Set()
  const res: number[] = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j]
      if (newSet.has(num)) {
        res.push(num)
      }
      newSet.add(num)
    }
  }

  for (let i = 1; i <= sum; i++) {
    if (!newSet.has(i)) {
      res.push(i)
      return res
    }
  }
  return res
};

console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]])) // [2, 4]
console.log(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]])) // [9,5]
