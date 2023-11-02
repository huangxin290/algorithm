/**
 * 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。

如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。
 */

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let result = 0;
  let currentNum = num;
  while (currentNum > 0) {
    const temp = currentNum % 10;
    if (num % temp === 0) {
      result++;
    }
    currentNum = (currentNum - temp) / 10;
  }
  return result;
};
