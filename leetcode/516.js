/**
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  var len = s.length
  var dp = new Array(len).fill(0)
  for(let i=0;i<len;i++){
    dp[i] = new Array(len).fill(0)
    dp[i][i] = 1
  }
  // i是长度，由短及长
  for(let i=1;i<len;i++){
    for(let j=0;j<len-i;j++){
      if(s[j] == s[j+i]){
        dp[j][j+i] = dp[j+1][j+i-1] + 2
      }else{
        dp[j][j+i] = Math.max(dp[j+1][j+i], dp[j][j+i-1])
      }
    }
  }
  return dp[0][len-1]
}

console.log(longestPalindromeSubseq('bbbab')) // 4
console.log(longestPalindromeSubseq('cbbd')) // 2