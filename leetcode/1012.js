/**
 * 给定正整数 n，返回在 [1, n] 范围内具有 至少 1 位 重复数字的正整数的个数。
 */

// 速算扣除数，第0位代表0长度的数字中不重复的数量
var quickDelete = [0,9,90,738,5274,32490,168570,712890,2345850,5611770]

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
  var str = (''+n).split('')
  var len = str.length
  if(len<=1){
    return 0
  }
  
  var res = n
  res-=quickDelete[len-1]

  // 与n同位数中计算不重复的数量
  var mask = []
  res-= getNumbers(0,mask,str)

  return res
}

/**
 * 计算不重复的数量
 * @param {*} i 当前位数
 * @param {*} mask 前面选择的数字
 * @param {*} str 最大的数的字符串数组
 * @return {number}
 */
function getNumbers(i, mask, str) {
  var sum = 0
  let num = Number(str[i])
  if(i === str.length - 1){
    for(let j=0;j<=num;j++){
      if(mask.indexOf(j) === -1){
        sum +=1
      }
    }
    return sum
  }

  if(mask.indexOf(num) === -1){
    let temp = [...mask, num]
    sum += getNumbers(i+1,temp,str)
  }

  for(let j=0;j<num;j++){
    if(j===0 && i===0) {
      continue
    }
    if(mask.indexOf(j) === -1){
      sum += chengfa(10-i-1, str.length-i-1)
    }
  }

  return sum
}

function chengfa(a,b){
  if(b===1){
    return a
  }
  return a*chengfa(a-1,b-1)
}

console.log(numDupDigitsAtMostN(20)) // 1
console.log(numDupDigitsAtMostN(100)) // 10
console.log(numDupDigitsAtMostN(1000)) // 262