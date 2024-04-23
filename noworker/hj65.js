/**
 * 查找两个字符串a,b中的最长公共子串。若有多个，输出在较短串中最先出现的那个。
注：子串的定义：将一个字符串删去前缀和后缀（也可以不删）形成的字符串。请和“子序列”的概念分开！

输入描述：
输入两个字符串

输出描述：
返回重复出现的字符
 */

function hj65(s, t){
  if(s.length > t.length){
    let temp = s
    s = t
    t = temp
  }
  function Kmp(s, t){
    // 本次是返回是否有这个字符串s
    const m = s.length
    const n = t.length

    const next = new Array(m).fill(0)

    for(let i=1,j=0;i<m;i++){
      while(s[j] !== s[i] && j>0){
        j = next[j-1]
      }
      if(s[j] === s[i]){
        j++
      }
      next[i] = j
    }

    for(let i=0,j=0;i<n;i++){
      while(j>0 && s[j] !== t[i]){
        j = next[j-1]
      }
      
      if(s[j] === t[i]){
        j++
      }
      if(j === m){
        return true
      }
    }
    return false
  }

  const len = s.length
  for(let i=len;i>0;i--){
    for(let j=0;j< len - i + 1;j++){
      if(Kmp(s.substring(j, j+i), t)){
        return s.substring(j, j+i)
      }
    }
  }
  return ''
}

console.log(hj65('abcdefghijklmnop', 'abcsafjklmnopqrstuvw'))