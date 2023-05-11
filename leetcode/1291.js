/**
 * 我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。

请你返回由 [low, high] 范围内所有顺次数组成的 有序 列表（从小到大排序）。

示例 1：

输出：low = 100, high = 300
输出：[123,234]
示例 2：

输出：low = 1000, high = 13000
输出：[1234,2345,3456,4567,5678,6789,12345]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sequential-digits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  var temp = 0
  var res = []
  var allStartArr = [12,123,1234,12345,123456,1234567,12345678,123456789]
  var addArr = [11,111,1111,11111,111111,1111111,11111111,111111111]
  for(let i=0;i<8;i++){
    temp = allStartArr[i]
    if(temp>high){
      break
    }
    if(temp >=low && temp<=high){
      res.push(temp)
    }
    for(let j=0;j<7-i;j++){
      temp += addArr[i]
      if(temp >=low && temp<=high){
        res.push(temp)
      }
    }
  }
  return res
}

console.log(sequentialDigits(100, 300)) // [123,234]
console.log(sequentialDigits(1000, 13000)) // [1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(10, 1000000000)) // 