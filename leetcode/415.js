/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 最后一位数字相加，不通过转换数字，而是直接判断1-9的相加的可能
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let haveCarry = 0
  let i=len1-1
  let j = len2 - 1
  let result = []
  const sumArray = [
    [0,1,2,3,4,5,6,7,8,9], // i=0
    [1,2,3,4,5,6,7,8,9,0], // i=1
    [2,3,4,5,6,7,8,9,0,1], // i=2
    [3,4,5,6,7,8,9,0,1,2], // i=3
    [4,5,6,7,8,9,0,1,2,3], // i=4
    [5,6,7,8,9,0,1,2,3,4], // i=5
    [6,7,8,9,0,1,2,3,4,5], // i=6
    [7,8,9,0,1,2,3,4,5,6], // i=7
    [8,9,0,1,2,3,4,5,6,7], // i=8
    [9,0,1,2,3,4,5,6,7,8], // i=9
  ]
  const haveCarryArray = [
    [0,0,0,0,0,0,0,0,0,0], // i=0
    [0,0,0,0,0,0,0,0,0,1], // i=1
    [0,0,0,0,0,0,0,0,1,1], // i=2
    [0,0,0,0,0,0,0,1,1,1], // i=3
    [0,0,0,0,0,0,1,1,1,1], // i=4
    [0,0,0,0,0,1,1,1,1,1], // i=5
    [0,0,0,0,1,1,1,1,1,1], // i=6
    [0,0,0,1,1,1,1,1,1,1], // i=7
    [0,0,1,1,1,1,1,1,1,1], // i=8
    [0,1,1,1,1,1,1,1,1,1], // i=9
  ]
  while (i>=0 || j>=0 || haveCarry) {
    let char1 = i<0?0:num1[i]
    let char2 = j<0?0:num2[j]
    let sum = sumArray[char1][char2]
    sum += haveCarry
    if(sum === 10){
      sum = 0
      haveCarry = 1
    }else{
      haveCarry = haveCarryArray[char1][char2]
    }
    
    i--
    j--
    result.push(sum)
  }

  return result.reverse().join('')
}

console.log(addStrings('11', '123')) // 134
console.log(addStrings('456', '77')) // 533
console.log(addStrings('0', '0')) // 0