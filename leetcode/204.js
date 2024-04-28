/**
 * 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let ans = 0
  const isPrime = new Array(n).fill(1)
  for(let i=2;i<n;i++){
    if(isPrime[i]){
      ans ++
    }
    for(let j = i*i;j<n;j+=i){
      isPrime[j] = 0
    }
  }
  return ans
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0