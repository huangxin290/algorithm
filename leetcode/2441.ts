/**
 * 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。

返回正整数 k ，如果不存在这样的整数，返回 -1 。
 */

function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] + nums[j] === 0) {
      return nums[j]
    }
    if (nums[i] + nums[j] > 0) {
      j--
    } else {
      i++
    }
  }
  return -1
};

console.log(findMaxK([-1, 2, -3, 3])) // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])) // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])) // -1
