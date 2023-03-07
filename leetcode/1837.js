/**
 * 给你一个整数 n（10 进制）和一个基数 k ，请你将 n 从 10 进制表示转换为 k 进制表示，计算并返回转换后各位数字的 总和 。

转换后，各位数字应当视作是 10 进制数字，且它们的总和也应当按 10 进制表示返回。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sum-of-digits-in-base-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  var res = 0
  var num = Number(n.toString(k))
  while (num>0) {
    res += num % 10
    num = Math.floor(num/10)
  }
  return res
};

console.assert(sumBase(34, 6) === 9, 'test1 failed')
console.assert(sumBase(10, 10) === 1, 'test2 failed')