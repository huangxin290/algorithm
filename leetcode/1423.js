/**
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

你的点数就是你拿到手中的所有卡牌的点数之和。

给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const subs = [0]
  const n = cardPoints.length
  if(k === n){
    let sum = 0
    for(let i=0;i<n;i++){
      const currentNum = cardPoints[i]
      sum+=currentNum
    }
    return sum
  }
  const num = n - k // 中间不拿的几张的数量，他们的和应该竟可能小
  let min = Number.MAX_SAFE_INTEGER
  let subSum = 0
  for(let i=0;i<n;i++){
    const currentNum = cardPoints[i]
    subSum+=currentNum
    subs.push(subSum)
    if(n>=num-1){
      let sum = subSum - subs[i-num+1]
      if(sum < min){
        min = sum
      }
    }
  }

  return subSum - min
};

console.log(maxScore([1,2,3,4,5,6,1], 3)); // 12
console.log(maxScore([2,2,2], 2)); // 4
console.log(maxScore([9,7,7,9,7,7,9], 7)); // 55
console.log(maxScore([1,1000,1], 1)); // 1
console.log(maxScore([1,79,80,1,1,1,200,1], 3)); // 202