/**
 * 输入一个由n个大小写字母组成的字符串，按照Ascii码值从小到大的排序规则，查找字符串中第k个最小ascii码值的字母（k>=1），输出该字母所在字符串的位置索引(字符串的第一个字符位置索引为0）。
k如果大于字符串长度，则输出最大ascii值的字母所在字符串的位置索引，如果有重复的字母，则输出字母的最小位置索引。
输入描述:
第一行输入一个由大小写字母组成的字符串
第二行输入k，k必须大于0，k可以大于输入字符串的长度
输出描述:
输出字符串中第k个最小ascii码值的字母所在字符串的位置索引。k如果大于字符串长度，则输出最大ascii值的字母所在字符串的位置索引，如果第k个最小ascii码值的字母存在重复，则输出该字母的最小位置索引。

 */

/**
 * @param {string} str
 * @param {number} k
 * @return {number} index
 */
function aaa(str, k){
  var strArr = str.split('').sort((a, b)=>a.charCodeAt(0) - b.charCodeAt(0))
  if(k>str.length){
    return str.indexOf(strArr[str.length-1])
  }
  return str.indexOf(strArr[k-1])
}

console.assert(aaa('AbCdeFG', 3) === 5, 'test1 failed')

console.assert(aaa('fAdDAkBbBq', 4) === 6, 'test2 failed')