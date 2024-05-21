/**
 * 给你一个下标从 0 开始的 环形 字符串数组 words 和一个字符串 target 。环形数组 意味着数组首尾相连。

形式上， words[i] 的下一个元素是 words[(i + 1) % n] ，而 words[i] 的前一个元素是 words[(i - 1 + n) % n] ，其中 n 是 words 的长度。
从 startIndex 开始，你一次可以用 1 步移动到下一个或者前一个单词。

返回到达目标字符串 target 所需的最短距离。如果 words 中不存在字符串 target ，返回 -1 。
 */

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
function closetTarget(words: string[], target: string, startIndex: number): number {
  if(words[startIndex] === target){
    return 0
  }
  const n = words.length
  let i = (startIndex - 1 + n) % n
  let j = (startIndex + 1) % n

  let ans = 1

  while (ans <= Math.floor(n/2)) {
    if(words[i] === target || words[j] === target){
      return ans
    }
    i = (i - 1 + n) % n
    j = (j + 1) % n
    ans ++
  }

  return -1
};

console.log(closetTarget(["hello","i","am","leetcode","hello"], "hello", 1)); // 1
console.log(closetTarget(["a","b","leetcode"], "leetcode", 0)); // 1
console.log(closetTarget(["i","eat","leetcode"], "ate", 0)); // -1
