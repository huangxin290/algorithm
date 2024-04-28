/**
 * Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌上的数值。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。
 */

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  const n =hand.length
  if(n % groupSize !== 0){
    return false
  }

  hand.sort((a,b)=>a-b)
  while(hand.length){
    const min = hand[0]
    for(let i = min;i<min + groupSize;i++){
      const index = hand.indexOf(i)
      if(index === -1){
        return false
      }
      hand.splice(index, 1)
    }
  }
  return true

};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)) // true
console.log(isNStraightHand([1,2,3,4,5], 4)) // false