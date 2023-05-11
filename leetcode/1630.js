/**
如果一个数列由至少两个元素组成，且每两个连续元素之间的差值都相同，那么这个序列就是 等差数列 。更正式地，数列 s 是等差数列，只需要满足：对于每个有效的 i ， s[i+1] - s[i] == s[1] - s[0] 都成立。

给你一个由 n 个整数组成的数组 nums，和两个由 m 个整数组成的数组 l 和 r，后两个数组表示 m 组范围查询，其中第 i 个查询对应范围 [l[i], r[i]] 。所有数组的下标都是 从 0 开始 的。

返回 boolean 元素构成的答案列表 answer 。如果子数组 nums[l[i]], nums[l[i]+1], ... , nums[r[i]] 可以 重新排列 形成 等差数列 ，answer[i] 的值就是 true；否则answer[i] 的值就是 false 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/arithmetic-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  var len = l.length
  var res = []
  for(let i=0;i<len;i++){
    var tempArr = nums.slice(l[i], r[i] + 1)
    tempArr.sort((a,b)=>a-b)
    let arrLen = tempArr.length
    if(arrLen < 2){
      res.push(true)
    }
    let dis = undefined
    for(let j=0;j<arrLen-1;j++){
      if(dis === undefined){
        dis = tempArr[j] - tempArr[j+1]
      }else if(dis !== tempArr[j] - tempArr[j+1]){
        res.push(false)
        break
      }
      if(j === arrLen - 2){
        res.push(true)
      }
    }
  }
  return res
}

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])) // [true,false,true]
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10])) // [false,true,false,false,true,true]