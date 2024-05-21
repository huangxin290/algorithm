/**
 * 给你一个字符串 s，找到 s 中最长的 回文子串。
 */

// 动态规划
function longestPalindrome1(s: string): string {
  const len = s.length
  if (len < 2) {
    return s
  }

  let maxLength = 1
  let begin = 0
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))

  for (let i = 0; i < len; i++) { // 长度为1，必定是回文串
    dp[i][i] = true
  }

  const charArr = s.split('')

  for (let length = 2; length <= len; length++) { // 长度递增
    for (let i = 0; i < len; i++) {
      let j = length + i - 1 // 确定右边界
      if (j >= len) {
        break
      }

      if (charArr[i] === charArr[j]) {
        if (j - i < 3) { // 长度为 2 的且相等字符，必定是回文串
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLength) { // 更新记录的最大值
        maxLength = j - i + 1
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLength)
};


// 中心扩散法
function longestPalindrome2(s: string): string {
  const n = s.length
  if (n < 1) {
    return ''
  }

  let start = 0, end = 0
  for (let i = 0, n = s.length; i < n; i++) {
    let oddLength = expandAroundCenter(s, i, i)
    let evenLength = expandAroundCenter(s, i, i + 1)
    let len = Math.max(oddLength, evenLength)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.substring(start, end + 1)

  function expandAroundCenter(s: string, left: number, right: number) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }
}

// manacher
function longestPalindrome(s: string): string {
  const n = s.length
  const oriS = s
  if (n < 2) {
    return s
  }

  // 加 # 号
  s = '#' + s.split('').join('#') + '#'

  let maxRight = 0
  let center = 0

  let maxLen = 1
  let begin = 0
  const charArr = s.split('')
  const sLen = charArr.length
  const p = new Array(sLen).fill(0)

  for (let i = 0; i < sLen; i++) {
    if (i < maxRight) {
      let mirror = 2 * center - i
      p[i] = Math.min(maxRight - i, p[mirror])
    }

    let left = i - (p[i] + 1)
    let right = i + (1 + p[i])
    while (left >= 0 && right < sLen && charArr[left] === charArr[right]) {
      p[i]++
      left--
      right++
    }

    if (i + p[i] > maxRight) {
      maxRight = i + p[i]
      center = i
    }
    if (p[i] > maxLen) {
      maxLen = p[i]
      begin = Math.ceil((i - maxLen) / 2)
    }
  }

  return oriS.substring(begin, begin + maxLen)
}



console.log(longestPalindrome('babad')) // 'bab'
console.log(longestPalindrome('cbbd')) // 'bb'
