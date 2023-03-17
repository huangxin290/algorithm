/**
 * 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

输入为 非空 字符串且只包含数字 1 和 0。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var aLen = a.length
  var bLen = b.length
  var hasJinWei = 0
  var res = []
  for(let i = 0;i<aLen || i<bLen || hasJinWei;i++){
    var aNum = (i>(aLen-1)?0:Number(a[aLen-1-i]))
    var bNum = (i>(bLen-1)?0:Number(b[bLen-1-i]))
    var num = aNum+bNum+hasJinWei
    if(num === 1 || num === 3){
      res.push(1)
    }
    if(num === 0 || num === 2){
      res.push(0)
    }

    if(num>=2){
      hasJinWei = 1
    }else{
      hasJinWei = 0
    }
  }
  return res.reverse().join('')
}

console.log(addBinary(
  '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
  '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))
console.log(
  '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000')
  
// 111111110001001100010111111000000111010001010110010000110110001100011110110110011000000000