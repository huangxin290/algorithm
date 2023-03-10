/**
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-vowels-of-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var i=0
  var j=s.length-1
  while(i<j){
    if(['a','e','i','o','u','A','E','I','O','U'].indexOf(s[i]) === -1){
      i++
      continue
    }
    if(['a','e','i','o','u','A','E','I','O','U'].indexOf(s[j]) === -1){
      j--
      continue
    }
    s = s.substring(0,i) + s[j] + s.substring(i+1, j) + s[i] + s.substring(j+1)
    i++
    j--
  }
  return s
};

console.log(reverseVowels("hello")) // holle
console.log(reverseVowels("leetcode")) // leotcede