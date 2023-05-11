/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
  if(k%5===0 || k%2===0){
    return -1
  }
  var redius = 1%k
  var length = 1
  while(redius !== 0){
    redius = (redius*10 + 1)%k
    length++
  }
  return length

}

console.log(smallestRepunitDivByK(1)) // 1
console.log(smallestRepunitDivByK(2)) // -1
console.log(smallestRepunitDivByK(3)) // 3
