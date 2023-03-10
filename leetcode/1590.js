/**
 * 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。

请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。

子数组 定义为原数组中连续的一组元素。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/make-sum-divisible-by-p
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  var len = nums.length
  var sum = 0
  for (let i = 0; i < len; i++) {
    nums[i] = nums[i] % p
    sum += nums[i]
  }
  sum = sum % p

  if (sum === 0) {
    return 0
  }

  var res = len
  let y = 0
  let prefixSumMap = {}
  for (let x = 0; x < len; x++) {
    prefixSumMap[y] = x
    y = (y + nums[x]) % p
    if (prefixSumMap[(y - sum + p) % p] !== undefined) {
      res = Math.min(res, x - prefixSumMap[(y - sum + p) % p] + 1)
    }
  }
  if (res < len) {
    return res
  }
  return -1
}

console.log(minSubarray([3, 1, 4, 2], 6)) // 1
console.log(minSubarray([6, 3, 5, 2], 9)) // 2
console.log(minSubarray([1, 2, 3], 3)) // 0
console.log(minSubarray([1, 2, 3], 7)) // -1
console.log(minSubarray([1000000000, 1000000000, 1000000000], 3)) // 0
