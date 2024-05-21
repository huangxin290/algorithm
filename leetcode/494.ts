/**
 * 给你一个非负整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 */

function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length
  const cache = new Map()

  function dfs(i: number, c: number): number {
    const key = i + ',' + c
    if (i < 0) {
      return c === target ? 1 : 0
    }
    if (cache.has(key)) {
      return cache.get(key)
    }
    const res = dfs(i - 1, c - nums[i]) + dfs(i - 1, c + nums[i])
    cache.set(key, res)
    return res
  }
  return dfs(n - 1, 0)
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)) // 5
console.log(findTargetSumWays([1], 1)) // 1