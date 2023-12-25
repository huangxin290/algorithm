/**
 * 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。
 */

const zimuMap = {
  a: 0,
  b:1,
  c:2,
  d:3,
  e:4,
  f:5,
  g:6,
  h:7,
  i:8,
  j:9,
  k:10,
  l:11,
  m:12,
  n:13,
  o:14,
  p:15,
  q:16,
  r:17,
  s:18,
  t:19,
  u:20,
  v:21,
  w:22,
  x:23,
  y:24,
  z:25,
}

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  words.sort((a,b)=>b.length - a.length)
  const n = words.length

  // 转二进制的字符串
  const twoWords = words.map(word=>{
    let str = new Array(26).fill(false)
    for(let i=0;i<word.length;i++){
      str[zimuMap[word[i]]] = true
    }
    return str
  })
  let max = 0
  for(let i=0;i<n-1;i++){
    if(words[i].length*words[i+1].length < max){
      break
    }
    for(let j=i+1;j<n;j++){
      if(words[i]*words[j] <= max){
        break
      }
      if(find1noSame(twoWords[i], twoWords[j])){
        const tempMax = words[i].length * words[j].length
        if(tempMax > max){
          max = tempMax
        }
      }

    }
  }
  return max
};

function find1noSame(a, b){
  for(let i=0;i<26;i++){
    if(a[i] && b[i]){
      return false
    }
  }
  return true
}

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"])) // 16
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"])) // 4
console.log(maxProduct(["a","aa","aaa","aaaa"])) // 0