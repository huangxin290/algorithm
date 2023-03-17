/**
 * 给你一个长度为 n 的整数数组 nums ，请你返回 nums 中最 接近 0 的数字。如果有多个答案，请你返回它们中的 最大值 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let len = nums.length
  var res = Number.MIN_VALUE
  var currentDis = Number.MAX_VALUE
  for(let i=0;i<len;i++){
    let number = nums[i]
    var absNumber = Math.abs(number)
    if(absNumber < currentDis){
      currentDis = absNumber
      res = number
    }else if(absNumber === currentDis){
      res = Math.max(number, res)
    }
  }
  return res
}

console.log(findClosestNumber([-4,-2,1,4,8])) // 1
console.log(findClosestNumber([2,-1,1])) // 1