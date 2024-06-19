/**
 * 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

求所能获得硬币的最大数量。
 */

function maxCoins(nums: number[]): number {
  nums = nums.filter(val => val !== 0)
  nums.push(1)
  nums.unshift(1)
  const n = nums.length
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let len = 3; len <= n; len++) {
    for (let l = 0; l <= n - len; l++) {
      const r = l + len - 1
      for (let k = l + 1; k <= r - 1; k++) {
        f[l][r] = Math.max(f[l][r], f[l][k] + f[k][r] + nums[l] * nums[k] * nums[r])
      }
    }
  }
  return f[0][n - 1]
};


console.log(maxCoins([3, 1, 5, 8])) // 167
console.log(maxCoins([1, 5]))// 10
