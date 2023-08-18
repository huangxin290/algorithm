/**
 * 我们有一个非负整数数组 arr 。

对于每个（连续的）子数组 sub = [arr[i], arr[i + 1], ..., arr[j]] （ i <= j），我们对 sub 中的每个元素进行按位或操作，获得结果 arr[i] | arr[i + 1] | ... | arr[j] 。

返回可能结果的数量。 多次出现的结果在最终答案中仅计算一次。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/bitwise-ors-of-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 动态规划超时了，看到一个题解，考虑的是剪枝
 * 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  let len = arr.length
  let result = new Set()
  for(let i=0;i<len;i++){
    result.add(arr[i])
    for(let j=i-1;j>=0;j--){
      if((arr[i] | arr[j]) === arr[j]){
        break
      }
      arr[j] = arr[j] | arr[i]
      result.add(arr[j])
    }
  }
  return result.size
}

console.log(subarrayBitwiseORs([0]))
console.log(subarrayBitwiseORs([1,1,2]))
console.log(subarrayBitwiseORs([1,2,4]))
console.log(subarrayBitwiseORs([1,11,6,11]))