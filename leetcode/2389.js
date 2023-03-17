/**
 * 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。

返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。

子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-subsequence-with-limited-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
  var res = []
  nums.sort((a,b)=>a-b)
  var prefixSum = []
  var numsLen = nums.length
  var sum = 0
  for(let i=0;i<numsLen;i++){
    sum+=nums[i]
    prefixSum.push(sum)
  }

  var queriesLen = queries.length
  for(let i=0;i<queriesLen;i++){
    let index = prefixSum.findIndex(item=>item>queries[i])
    if(index>=0){
      res.push(index)
    }else{
      res.push(numsLen)
    }
  }
  return res
}

console.log(answerQueries([4,5,2,1], [3,10,21])) // [2,3,4]
console.log(answerQueries([2,3,4,5], [1])) // [0]