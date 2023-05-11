/**
 * 设计一个算法：接收一个字符流，并检查这些字符的后缀是否是字符串数组 words 中的一个字符串。

例如，words = ["abc", "xyz"] 且字符流中逐个依次加入 4 个字符 'a'、'x'、'y' 和 'z' ，你所设计的算法应当可以检测到 "axyz" 的后缀 "xyz" 与 words 中的字符串 "xyz" 匹配。

按下述要求实现 StreamChecker 类：

StreamChecker(String[] words) ：构造函数，用字符串数组 words 初始化数据结构。
boolean query(char letter)：从字符流中接收一个新字符，如果字符流中的任一非空后缀能匹配 words 中的某一字符串，返回 true ；否则，返回 false。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/stream-of-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.letters = []
  this.wordMap = {}
  let len = words.length
  let currentMap = {}
  for(let i=0;i<len;i++){
    currentMap = this.wordMap
    let word = words[i]
    for(let j=word.length-1;j>=0;j--){
      let letter = word[j]
      if(!currentMap[letter]){
        currentMap[letter] = {}
      }
      currentMap = currentMap[letter]
      if(j === 0){
        currentMap.isEnd = true
      }
    }
  }
}

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.letters.push(letter)
  let i = this.letters.length - 1
  let currentMap = this.wordMap[this.letters[i]]
  while(currentMap){
    if(currentMap.isEnd){
      return true
    }
    i -= 1
    if(i<0){
      break
    }
    currentMap = currentMap[this.letters[i]]
  }
  return false
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

var streamChecker = new StreamChecker(['cd', 'f', 'kl'])
console.log(streamChecker.wordMap)
console.log(streamChecker.query('a')) // 返回 False
console.log(streamChecker.query('b')) // 返回 False
console.log(streamChecker.query('c')) // 返回n False
console.log(streamChecker.query('d')) // 返回 True ，因为 'cd' 在 words 中
console.log(streamChecker.query('e')) // 返回 False
console.log(streamChecker.query('f')) // 返回 True ，因为 'f' 在 words 中
console.log(streamChecker.query('g')) // 返回 False
console.log(streamChecker.query('h')) // 返回 False
console.log(streamChecker.query('i')) // 返回 False
console.log(streamChecker.query('j')) // 返回 False
console.log(streamChecker.query('k')) // 返回 False
console.log(streamChecker.query('l')) // 返回 True ，因为 'kl' 在 words 中
