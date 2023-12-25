/**
 * 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  arr.push(-1)
  let result = 0
  const MOD = Math.pow(10, 9) + 7
  const n = arr.length
  const stack = [-1]
  for(let r = 0;r<n;r++){
    while(stack.length > 1 && arr[stack[stack.length - 1]] >= arr[r]){
      let i = stack[stack.length - 1]
      stack.pop()
      result += arr[i] * (i - stack[stack.length - 1]) *(r-i)
      result %= MOD
    }
    stack.push(r)
  }
  return result
};

console.log(sumSubarrayMins([3,1,2,4])) // 17
console.log(sumSubarrayMins([11,81,94,43,3])) // 444