/**
 * 给你一个整数数组 nums 。

如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

返回好数对的数目。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/number-of-good-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  var res = 0
  var numObj = {}
  for(let i=0;i<nums.length;i++){
    let num = nums[i]
    if(numObj[num]){
      numObj[num] ++
    }else{
      numObj[num] = 1
    }
  }
  for(let key in numObj){
    if(numObj[key]>1){
      res += (numObj[key] - 1) * (numObj[key]) / 2
    }
  }
  return res
};

console.log(numIdenticalPairs([1,2,3,1,1,3])) // 4
console.log(numIdenticalPairs([1,1,1,1])) // 6
console.log(numIdenticalPairs([1,2,3])) // 0