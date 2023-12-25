/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let min = nums[0] <0 ?nums[0]:0
  let sum = nums[0]
  let result = nums[0] // 初始值

  const n = nums.length
  for(let i=1;i < n;i++){
    sum = sum += nums[i]
    if(sum - min >result){
      result = sum-min
    }
    if(sum < min){
      min = sum
    }
  }
  return result
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 18