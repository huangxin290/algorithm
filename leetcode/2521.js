/**
 * 给你一个正整数数组 nums ，对 nums 所有元素求积之后，找出并返回乘积中 不同质因数 的数目。

注意：

质数 是指大于 1 且仅能被 1 及自身整除的数字。
如果 val2 / val1 是一个整数，则整数 val1 是另一个整数 val2 的一个因数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/distinct-prime-factors-of-product-of-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
  var length = nums.length
  var resMap = {}
  for(let i=0;i<length;i++){
    var num = nums[i]
    while(num>1){
      var j=2
      while (num % j !== 0) {
        j++
      }
      num = num/j
      if(!resMap[j]){
        resMap[j] = true
      }
    }
  }
  return Object.keys(resMap).length
}

console.log(distinctPrimeFactors([2,4,3,7,10,6])) // 4
console.log(distinctPrimeFactors([2,4,8,16])) // 1