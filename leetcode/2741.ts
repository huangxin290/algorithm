/**
 * 给你一个下标从 0 开始的整数数组 nums ，它包含 n 个 互不相同 的正整数。如果 nums 的一个排列满足以下条件，我们称它是一个特别的排列：

对于 0 <= i < n - 1 的下标 i ，要么 nums[i] % nums[i+1] == 0 ，要么 nums[i+1] % nums[i] == 0 。
请你返回特别排列的总数目，由于答案可能很大，请将它对 109 + 7 取余 后返回。
 */

function specialPerm(nums: number[]): number {
  const n = nums.length
  const cache: number[][] = new Array(1 << n).fill(-1).map(() => new Array(n).fill(-1))
  const Max = Math.pow(10, 9) + 7

  function dfs(s: number, count: number, beforeIndex: number): number {
    if (count === n) {
      return 1
    }
    if (cache[s][beforeIndex] !== -1) {
      return cache[s][beforeIndex]
    }
    let res = 0
    for (let j = 0; j < n; j++) {
      if ((s >> j & 1) === 0 && (count === 0 || (nums[j] % nums[beforeIndex] === 0 || nums[beforeIndex] % nums[j] === 0))) {
        res += dfs(s | (1 << j), count + 1, j)
      }
    }
    cache[s][beforeIndex] = res % Max
    return cache[s][beforeIndex]
  }
  return dfs(0, 0, 0)
};

console.log(specialPerm([2, 3, 6])) // 2
console.log(specialPerm([1, 4, 3])) // 2

