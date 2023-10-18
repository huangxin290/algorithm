/**
 * 给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。

返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let a = 3;
  let result = 0;
  while (a <= n) {
    result += a;
    a += 3;
  }

  let b = 5;
  let b3 = 1; // 逢三跳过
  while (b <= n) {
    if (b3 === 3) {
      b3 = 1;
      b += 5;
      continue;
    }
    b3++;
    result += b;
    b += 5;
  }

  let c = 7;
  let c35 = 1; // 逢三，五跳过
  while (c <= n) {
    if (c35 === 15) {
      c35 = 1;
      c += 7;
      continue;
    } else if (c35 % 3 === 0 || c35 % 5 === 0) {
      c35 += 1;
      c += 7;
      continue;
    }
    c35++;
    result += c;
    c += 7;
  }
  return result;
};

console.log(sumOfMultiples(7)); // 21
console.log(sumOfMultiples(10)); // 40
console.log(sumOfMultiples(9)); // 30
