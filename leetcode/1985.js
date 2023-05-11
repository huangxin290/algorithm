/**
 * 给你一个字符串数组 nums 和一个整数 k 。nums 中的每个字符串都表示一个不含前导零的整数。

返回 nums 中表示第 k 大整数的字符串。

注意：重复的数字在统计时会视为不同元素考虑。例如，如果 nums 是 ["1","2","2"]，那么 "2" 是最大的整数，"2" 是第二大的整数，"1" 是第三大的整数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/find-the-kth-largest-integer-in-the-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  nums.sort((a,b)=>{
    if(a.length !== b.length){
      return b.length - a.length
    }
    var len = a.length
    for(let i=0;i<len;i++){
      if(a[i] !== b[i]){
        return Number(b[i]) - Number(a[i])
      }
    }
    return 0
  })
  return nums[k-1]
}

console.log(kthLargestNumber(['3','6','7','10'], 4)) // '3'
console.log(kthLargestNumber(['2','21','12','1'], 3)) // '2'
console.log(kthLargestNumber(['0','0'], 2)) // '0'