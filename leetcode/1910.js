/**
 * 给你两个字符串 s 和 part ，请你对 s 反复执行以下操作直到 所有 子字符串 part 都被删除：

找到 s 中 最左边 的子字符串 part ，并将它从 s 中删除。
请你返回从 s 中删除所有 part 子字符串以后得到的剩余字符串。

一个 子字符串 是一个字符串中连续的字符序列。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-all-occurrences-of-a-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
// var removeOccurrences = function(s, part) {
//   while(s.indexOf(part) > -1){
//     s = s.substring(0, s.indexOf(part))  + s.substring(s.indexOf(part) + part.length)
//   }
//   return s
// }
var removeOccurrences = function(s, part) {
  var len = s.length
  var partIndex=0
  var partLen = part.length
  var res = []
  for(let i=0;i<len;i++){
    var item = s[i]
    if(item === part[partIndex]){
      res.push(partIndex)
      partIndex ++
      if(partIndex === partLen){
        for(let j=0;j<partLen;j++){
          res.pop()
        }
        var frontIndex = res[res.length-1]
        if(Object.prototype.toString.call(frontIndex) === '[object Number]'){
          partIndex = Number(frontIndex) + 1
        }
      }
    }else if(partIndex > 0){
      partIndex = 0
      i--
      continue
    }else{
      res.push(item)
    }
  }
  var ans = ''
  for(let i=0;i<res.length;i++){
    let item = res[i]
    if(Object.prototype.toString.call(item) === '[object Number]'){
      ans += part[item]
    }else{
      ans += item
    }
  }
  return ans
}

console.log(removeOccurrences('daabcbaabcbc', 'abc'))
console.log(removeOccurrences('kpygkivtlqoockpygkivtlqoocssnextkqzjpycbylkaondsskpygkpygkivtlqoocssnextkqzjpkpygkivtlqoocssnextkqzjpycbylkaondsycbylkaondskivtlqoocssnextkqzjpycbylkaondssnextkqzjpycbylkaondshijzgaovndkjiiuwjtcpdpbkrfsi',
'kpygkivtlqoocssnextkqzjpycbylkaonds'))