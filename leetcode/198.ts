/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

function rob(nums: number[]): number {
  const n = nums.length
  const cache = new Array(n + 1).fill(-1)

  function dfs(i: number): number {
    if (i >= n) {
      return 0
    }
    if (cache[i] !== -1) {
      return cache[i]
    }
    return cache[i] = Math.max(dfs(i + 2) + nums[i], dfs(i + 1))
  }
  return dfs(0)
};

console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([2, 7, 9, 3, 1])) // 12
