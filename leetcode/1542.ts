/**
 * 给你一个字符串 s 。请返回 s 中最长的 超赞子字符串 的长度。

「超赞子字符串」需满足满足下述两个条件：

该字符串是 s 的一个非空子字符串
进行任意次数的字符交换后，该字符串可以变成一个回文字符串
 */

function longestAwesome(s: string): number {
  const D = 10 // s 中的字符种类数
  const n = s.length
  const pos = Array(1 << D).fill(n) // n 表示没有找到异或前缀和
  pos[0] = -1 // pre[-1] = 0
  let ans = 0
  let pre = 0
  for (let i = 0; i < n; i++) {
    pre ^= 1 << (s.charCodeAt(i) - '0'.charCodeAt(0))
    for (let d = 0; d < D; d++) {
      ans = Math.max(ans, i - pos[pre ^ (1 << d)]) // 奇数
    }
    ans = Math.max(ans, i - pos[pre]) // 偶数
    if (pos[pre] === n) { // 首次遇到值为 pre 的前缀异或和，记录其下标 i
      pos[pre] = i
    }
  }
  return ans
};

console.log(longestAwesome("3242415")) // 5
console.log(longestAwesome("12345678")) // 1
console.log(longestAwesome("213123")) // 6
console.log(longestAwesome("00")) // 2
