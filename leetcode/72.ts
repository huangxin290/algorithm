/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 */

function minDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length
  const cache = new Array(m).fill(0).map(() => new Array(n).fill(-1)) // -1 是初始值

  function dfs(i: number, j: number): number {
    if (i < 0) return j + 1 // 某一个字符串到底了，另外一个只能全部删除
    if (j < 0) return i + 1
    if (cache[i][j] !== -1) return cache[i][j]
    if (word1[i] === word2[j]) return cache[i][j] = dfs(i - 1, j - 1) // 当前相同就直接后移
    return cache[i][j] = Math.min(dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)) + 1
  }

  return dfs(m - 1, n - 1)
};

console.log(minDistance("horse", "ros")) // 3
console.log(minDistance("intention", "execution")) // 5
