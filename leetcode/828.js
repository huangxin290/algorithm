/**
 * 我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。

本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。输入用例保证返回值为 32 位整数。

注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。
 */

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
  const charMap = {}
  const n=s.length
  let res = 0
  for(let i=0;i<n;i++){
    const char = s[i]
    if(!charMap[char]){
      charMap[char] = [-1] // 自带一个 -1
    }
    charMap[char].push(i)
  }
  for(let char in charMap){
    const arr = charMap[char]
    arr.push(n)
    for(let i=1;i<arr.length -1;i++){
      res += (arr[i] - arr[i-1]) * (arr[i+1] - arr[i])
    }
  }
  return res
};

console.log(uniqueLetterString('ABC')); // 10
console.log(uniqueLetterString('ABA')); // 8
console.log(uniqueLetterString('LEETCODE')); // 92