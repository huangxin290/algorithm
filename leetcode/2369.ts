/**
 * 给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。

如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：

子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，但是子数组 [1,3,5] 不符合要求。
如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。
 */

function validPartition(nums: number[]): boolean {
  const n = nums.length
  const f = new Array(n + 1).fill(false)
  f[0] = true
  f[1] = false
  for(let i=2;i<n + 1;i++){
    if(i >= 2){
      f[i] = f[i-2] && nums[i-2] === nums[i-1]
    }
    if(i>=3 && !f[i]){
      const diffNum = nums[i-1] - nums[i-2]
      f[i] = f[i-3] && (diffNum === 0 || diffNum === 1) && diffNum === nums[i-2] - nums[i-3]
    }
  }
  return f[n]
}

console.log(validPartition([4,4,4,5,6])); // true
console.log(validPartition([1,1,1,2])); // false
console.log(validPartition([993335,993336,993337,993338,993339,993340,993341])); // false
