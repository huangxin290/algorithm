/**
 * 给你一个长度为 n 的数组 nums ，该数组由从 1 到 n 的 不同 整数组成。另给你一个正整数 k 。

统计并返回 nums 中的 中位数 等于 k 的非空子数组的数目。

注意：

数组的中位数是按 递增 顺序排列后位于 中间 的那个元素，如果数组长度为偶数，则中位数是位于中间靠 左 的那个元素。
例如，[2,3,1,4] 的中位数是 2 ，[8,4,3,5,1] 的中位数是 4 。
子数组是数组中的一个连续部分。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/count-subarrays-with-median-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  var res = 1 // 自己肯定是满足条件的
  var index = nums.indexOf(k)
  var len = nums.length
  var leftMap = {}
  var current = 0
  for(let i = index-1;i>=0;i--){
    if(nums[i] > k){
      current ++
    }else{
      current --
    }
    // 单边就能满足
    if(current === 0 || current === 1){
      res ++
    }
    if(leftMap[current]){
      leftMap[current].push(i)
    }else{
      leftMap[current] = [i]
    }
  }

  var rightMap = {}
  current = 0
  for(let i = index+1;i<len;i++){
    if(nums[i] > k){
      current ++
    }else{
      current --
    }
    // 单边就能满足
    if(current === 0 || current === 1){
      res ++
    }
    if(rightMap[current]){
      rightMap[current].push(i)
    }else{
      rightMap[current] = [i]
    }
  }

  for(let key in leftMap){
    var leftLen = leftMap[key].length
    var sumZeroRightKey = '' + (0 - Number(key))
    if(rightMap[sumZeroRightKey]){
      res += leftLen * rightMap[sumZeroRightKey].length
    }
    var sumOneRightKey = '' + (1 - Number(key))
    if(rightMap[sumOneRightKey]){
      res += leftLen * rightMap[sumOneRightKey].length
    }
  }
  
  return res
}

console.log(countSubarrays([3,2,1,4,5], 4)) // 3
console.log(countSubarrays([2,3,1], 3)) // 1