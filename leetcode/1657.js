/**
 * 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

操作 1：交换任意两个 现有 字符。
例如，abcde -> aecdb
操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
你可以根据需要对任意一个字符串多次使用这两种操作。

给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if(word1.length !== word2.length){
    return false
  }
  const map1 = {}
  const map2 = {}
  const n = word1.length
  for(let i=0;i<n;i++){
    const char = word1[i]
    if(!map1[char]){
      map1[char] = 0
    }
    map1[char] ++
  }
  for(let i=0;i<n;i++){
    const char = word2[i]
    if(!map2[char]){
      map2[char] = 0
    }
    map2[char] ++
  }
  const char1 = Object.keys(map1)
  const char2 = Object.keys(map2)
  if(char1.length !== char2.length){
    return false
  }
  for(let i=0;i<char1.length;i++){
    if(!char2.includes(char1[i])){
      return false
    }
  }
  const length1 = Object.values(map1)
  const length2 = Object.values(map2)
  length1.sort((a,b)=>a-b)
  length2.sort((a,b)=>a-b)
  for(let i=0;i<length1.length;i++){
    if(length1[i] !== length2[i]){
      return false
    }
  }
  return true
};

console.log(closeStrings("abc", "bca")) // true
console.log(closeStrings("a", "aa")) // false
console.log(closeStrings("cabbba", "abbccc")) // true
console.log(closeStrings("cabbba", "aabbss")) // false