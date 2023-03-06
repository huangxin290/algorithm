/**
 * 输入一个字符串仅包含大小写字母和数字，求字符串中包含的最长的非严格递增连续数字序列的长度（比如12234属于非严格递增连续数字序列）。
输入描述:
输入一个字符串仅包含大小写字母和数字，输入的字符串最大不超过255个字符。
输出描述:
最长的非严格递增连续数字序列的长度

 */

/**
 * @param {string} str
 * @return {number} len
 */
function aaa(str){
  var maxLength = 0
  var currentLength = 0
  var currentNum = -1
  var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  for(let i=0;i<str.length;i++){
    var index = numArr.indexOf(str[i])
    if(index>-1){
      if(currentNum === -1 || index >= currentNum){
        currentNum = index
        currentLength ++
        continue
      }
    }
    // 长度存在但是走到了这一步，说明截断了，没有走 continue
    if(currentLength){
      currentNum = -1
      maxLength = Math.max(maxLength, currentLength)
      currentLength = 0
    }
  }
  return maxLength
}

console.assert(aaa('abc2234019A334bc') === 4, 'test1 failed')