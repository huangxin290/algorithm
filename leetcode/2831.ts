/**
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

如果子数组中所有元素都相等，则认为子数组是一个 等值子数组 。注意，空数组是 等值子数组 。

从 nums 中删除最多 k 个元素后，返回可能的最长等值子数组的长度。

子数组 是数组中一个连续且可能为空的元素序列。
 */

function longestEqualSubarray(nums: number[], k: number): number {
  const postObj: { [key: number]: number[] } = {} // 记录数字key 的下标数组

  nums.map((val, index) => {
    if (!postObj[val]) {
      postObj[val] = [index]
    } else {
      postObj[val].push(index)
    }
  })
  let ans = 0
  Object.values(postObj).map(arr => {
    for (let left = 0, right = 0, l = arr.length; right < l; right++) {
      while (arr[right] - arr[left] + 1 - (right - left + 1) > k && left < right) {
        left++
      }
      ans = Math.max(ans, right - left + 1)
    }
  })
  return ans
};

console.log(longestEqualSubarray([1,3,2,3,1,3], 3)); // 3
console.log(longestEqualSubarray([1,1,2,2,1,1], 2)); // 4
console.log(longestEqualSubarray([3, 1, 5, 3, 1, 1], 0)) // 2
console.log(longestEqualSubarray([9,5,1,4,2,3,4,13,5,2,7,2,2,14], 4)) // 3
