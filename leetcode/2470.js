/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 nums 的 子数组 中满足 元素最小公倍数为 k 的子数组数目。

子数组 是数组中一个连续非空的元素序列。

数组的最小公倍数 是可被所有数组元素整除的最小正整数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function getGCD(a,b){
  if(b===0) return a
  return getGCD(b, a%b)
}
function getLCM(a,b){
  return a*b/getGCD(a,b)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
  var len = nums.length
  var res = 0
  for(let i=0;i<len;i++){
    let x = nums[i]
    if(k%nums[i] !== 0){
      continue
    }
    for(let j=i;j<len;j++){
      if(k%nums[j]){
        break
      }
      x = getLCM(x, nums[j])
      if(x === k){
        res ++
      }
    }
  }

  return res
}



console.log(subarrayLCM([3, 6, 2, 7, 1], 6)) // 4
console.log(subarrayLCM([3], 2)) // 0