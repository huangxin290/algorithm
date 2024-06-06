/**
 * 给你一个 非负 整数 num 。如果存在某个 非负 整数 k 满足 k + reverse(k) = num  ，则返回 true ；否则，返回 false 。

reverse(k) 表示 k 反转每个数位后得到的数字。
 */

function sumOfNumberAndReverse(num: number): boolean {
  for (let i = 0; i <= num; i++) {
    let rev = 0
    for (let x = i; x > 0; x = Math.floor(x/10)) {
      rev = rev * 10 + x % 10
    }
    if (rev + i === num) {
      return true
    }
  }
  return false
};

console.log(sumOfNumberAndReverse(0)) // true
console.log(sumOfNumberAndReverse(443)) // true
console.log(sumOfNumberAndReverse(63)) // false
console.log(sumOfNumberAndReverse(181)) // true
