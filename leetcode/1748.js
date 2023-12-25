/**
 * 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

请你返回 nums 中唯一元素的 和 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  var numMap = {}
  for(let i=0;i<nums.length;i++){
    const num = nums[i]
    if(!numMap[num]){
      numMap[num] = true
    }else{
      numMap[num] = 'noOnly'
    }
  }
  let res = 0
  for(let key in numMap){
    if(numMap[key] === true){
      res += +key
    }
  }
  return res
};

console.log(sumOfUnique([1,2,3,2])) // 4