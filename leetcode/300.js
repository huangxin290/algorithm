/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   var len = nums.length
//   function dfs(i){
//     var res = 0
//     for(let j=0;j<i;j++){
//       if(nums[j]<nums[i]){
//         res = Math.max(res, dfs(j))
//       }
//     }
//     return res+1
//   }
//   var ans = 0
//   for(let i=0;i<len;i++){
//     ans = Math.max(ans,dfs(i))
//   }
//   return ans
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var len = nums.length
  var g = []
  for(let i=0;i<len;i++){
    var j = findBinaryIndex(g,nums[i])
    if(j<g.length){
      g[j] = nums[i]
    }else{
      g.push(nums[i])
    }
  }
  return g.length
}

// 开区间写法
function findBinaryIndex(g,num){
  var i=-1,j=g.length
  while (i+1<j) {
    let mod = i+((j-i)>>1)
    if(g[mod]<num){
      i = mod
    }else{
      j = mod
    }
  }
  return i + 1
}



console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) // 4
console.log(lengthOfLIS([0,1,0,3,2,3])) // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])) // 1