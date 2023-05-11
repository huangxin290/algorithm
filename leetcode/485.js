/**
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var len = nums.length
  var current = 0
  var max = 0
  for(let i=0;i<len;i++){
    if(nums[i] === 1){
      current++
      max = Math.max(max,current)
    }else{
      current = 0
    }
  }
  return max
}