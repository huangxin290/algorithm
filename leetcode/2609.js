/**
 * 给你一个仅由 0 和 1 组成的二进制字符串 s 。  

如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。 

返回  s 中最长的平衡子字符串长度。

子字符串是字符串中的一个连续字符序列。
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
  let zero = 0
  let one = 0
  let max = 0
  const n = s.length
  let reading0 = true
  for(let i=0;i<n;i++){
    const char = s[i]
    if(char === '0'){
      if(reading0){
        zero ++
      }else{
        // 在数1呢，终止了
        max = Math.max(max, Math.min(zero, one)*2)
        reading0 = true
        zero = 1
        one = 0
      }
    }else{
      if(reading0){
        reading0 = false
      }
      one ++
    }
  }
  max = Math.max(max, Math.min(zero, one)*2)
  return max
};

console.log(findTheLongestBalancedSubstring('01000111')); // 6
console.log(findTheLongestBalancedSubstring('00111')); // 4
console.log(findTheLongestBalancedSubstring('111')); // 0

