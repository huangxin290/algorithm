/**
 * 给你两个字符串 s 和 t，每个字符串中的字符都不重复，且 t 是 s 的一个排列。

排列差 定义为 s 和 t 中每个字符在两个字符串中位置的绝对差值之和。

返回 s 和 t 之间的 排列差 。
 */

function findPermutationDifference(s: string, t: string): number {
  const charMap: { [key: string]: number } = {}
  s.split('').map((char, index) => {
    charMap[char] = index
  })

  return t.split('').reduce((preVal, char, index) => {
    return preVal + Math.abs(index - charMap[char])
  }, 0)
};

console.log(findPermutationDifference("abc", "bac")) // 2
console.log(findPermutationDifference("abcde", "edbac")) // 12
