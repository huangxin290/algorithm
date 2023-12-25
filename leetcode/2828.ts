/**
 * 给你一个字符串数组 words 和一个字符串 s ，请你判断 s 是不是 words 的 首字母缩略词 。

如果可以按顺序串联 words 中每个字符串的第一个字符形成字符串 s ，则认为 s 是 words 的首字母缩略词。例如，"ab" 可以由 ["apple", "banana"] 形成，但是无法从 ["bear", "aardvark"] 形成。

如果 s 是 words 的首字母缩略词，返回 true ；否则，返回 false 。
 */

function isAcronym(words: string[], s: string): boolean {
  const n =words.length
  if(n !== s.length){
    return false
  }
  for(let i=0;i<n;i++){
    if(words[i][0] !== s[i]){
      return false
    }
  }
  return true
};