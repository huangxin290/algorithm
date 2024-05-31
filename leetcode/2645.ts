/**
 * 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。

如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。
 */

function addMinimum(word: string): number {
  const n = word.length
  let res = 0
  let curr = 'a'
  for (let i = 0; i < n; i++) {
    const char = word[i]
    if (char === curr) {
    } else {
      i--
      // 插入你想要的
      res++
    }
    curr = curr === 'a' ? 'b' : curr === 'b' ? 'c' : 'a'
  }
  res += curr === 'a' ? 0 : curr === 'b' ? 2 : 1
  return res
};

console.log(addMinimum('b')) // 2
console.log(addMinimum('aaa')) // 6
console.log(addMinimum('abc')) // 0
