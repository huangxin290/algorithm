/**
 * 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/decrypt-string-from-alphabet-to-integer-mapping
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  var len = s.length
  var res = []
  var objMap = {}
  for(let i=1;i<=9;i++){
    objMap[''+i] = String.fromCharCode(96+i)
  }
  for(let i = 10;i<=26;i++){
    objMap[i+'#'] = String.fromCharCode(96+i)
  }
  for(let i=len-1;i>=0;i--){
    if(s[i] === '#'){
      res.push(objMap[s.substring(i-2,i+1)])
      i-=2
    }else{
      res.push(objMap[s[i]])
    }
  }
  return res.reverse().join('')
}

console.log(freqAlphabets('10#11#12')) // jkab
console.log(freqAlphabets('1326#')) // acz