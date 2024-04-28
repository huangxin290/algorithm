/**
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let maxVal = 1
  let currentVal = 1
  const n = nums.length
  for(let i=1;i<n;i++){
    if(nums[i] > nums[i-1]){
      currentVal ++
      maxVal = Math.max(maxVal, currentVal)
    }else{
      currentVal = 1
    }
  }
  return maxVal
};

console.log(findLengthOfLCIS([1,3,5,4,7])); // 3
console.log(findLengthOfLCIS([2,2,2,2,2])); // 1