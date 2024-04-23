/**
 * 有一个书店老板，他的书店开了 n 分钟。每分钟都有一些顾客进入这家商店。给定一个长度为 n 的整数数组 customers ，其中 customers[i] 是在第 i 分钟开始时进入商店的顾客数量，所有这些顾客在第 i 分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。

当书店老板生气时，那一分钟的顾客就会不满意，若老板不生气则顾客是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 minutes 分钟不生气，但却只能使用一次。

请你返回 这一天营业下来，最多有多少客户能够感到满意 。
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  function Sum(arr){
    let ans = 0
    arr.map(val=>ans+=val)
    return ans
  }
  const cusgrumpy = grumpy.map((value, index)=>value * customers[index])
  let sum = Sum(cusgrumpy.filter((value, index)=>index < minutes))
  let maxVal = sum
  let useIndex = 0
  const length = grumpy.length
  for(let i=minutes;i<length;i++){
    sum += cusgrumpy[i]
    sum -= cusgrumpy[i-minutes]
    if(sum > maxVal){
      maxVal = sum
      useIndex = i - minutes + 1
    }
  }

  // 计算满意度
  customers = customers.map((value, index)=>{
    if(index >= useIndex && index < useIndex + minutes){
      return value
    }
    if(!grumpy[index]){
      return value
    }
    return 0
  })
  return Sum(customers)
}

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)) // 16
console.log(maxSatisfied([1], [0], 1)) // 1