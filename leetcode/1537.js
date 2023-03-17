/**
 * 你有两个 有序 且数组内元素互不相同的数组 nums1 和 nums2 。

一条 合法路径 定义如下：

选择数组 nums1 或者 nums2 开始遍历（从下标 0 处开始）。
从左到右遍历当前数组。
如果你遇到了 nums1 和 nums2 中都存在的值，那么你可以切换路径到另一个数组对应数字处继续遍历（但在合法路径中重复数字只会被统计一次）。
得分定义为合法路径中不同数字的和。

请你返回所有可能合法路径中的最大得分。

由于答案可能很大，请你将它对 10^9 + 7 取余后返回。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/get-the-maximum-score
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
  var NUM = 1000000000 + 7
  var len1 = nums1.length
  var len2 = nums2.length
  var i=0,j=0
  var sum1=0,sum2 = 0
  var res = 0
  while(i<len1 && j<len2){
    var num1 = nums1[i]
    var num2 = nums2[j]
    if(num1<num2){
      sum1 += num1
      i++
      continue
    }else if(num1>num2){
      sum2 += num2
      j++
      continue
    }else{
      // 相等时更新结果
      res+=Math.max(sum1,sum2)
      res = res % NUM
      res+=num1
      res = res % NUM
      i++
      j++
      sum1 = 0
      sum2 = 0
    }
  }
  while (i<len1) {
    sum1 += nums1[i]
    i++
  }
  while (j<len2) {
    sum2 += nums2[j]
    j++
  }
  res+=Math.max(sum1,sum2)
  res = res % NUM
  return res
}

console.log(maxSum([2,4,5,8,10], [4,6,8,9])) // 30
console.log(maxSum([1,3,5,7,9], [3,5,100])) // 109
console.log(maxSum([1,2,3,4,5], [6,7,8,9,10])) // 40
