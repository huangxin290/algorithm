/**
 * 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 target ，请你返回满足 0 <= i < j < n 且 nums[i] + nums[j] < target 的下标对 (i, j) 的数目。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  nums.sort((a, b)=>a-b)
  let left = 0
  let right = nums.length - 1
  let res = 0
  while (left<right) {
    if(nums[left] + nums[right] < target){
      res += right - left
      left ++
    }else{
      right --
    }
  }
  return res
};

console.log(countPairs([-1,1,2,3,1], 2));  // 3
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2)); // 10