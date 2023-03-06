/**
 * 现有一字符串仅由 '('，')'，'{'，'}'，'['，']'六种括号组成。
若字符串满足以下条件之一，则为无效字符串：
  ①任一类型的左右括号数量不相等；
  ②存在未按正确顺序（先左后右）闭合的括号。
输出括号的最大嵌套深度，若字符串无效则输出0。
 */

/**
 * @param {string} str
 * @return {number}
 */
function aaa(str){
  var leftArr = []
  var maxLength = 0
  var currentLength = 0
  for(let i=0;i<str.length;i++){
    var item = str[i]
    if(item === '(' || item === '[' || item === '{'){
      leftArr.push(item)
      currentLength ++
      maxLength = Math.max(maxLength, currentLength)
    }
    if(item === ')' || item === ']' || item === '}'){
      var leftItem = leftArr.pop()
      if(leftItem === undefined){
        maxLength = 0
        break
      }
      var itemStr = leftItem + item
      if(itemStr === '()' || itemStr === '[]' || itemStr === '{}'){
        currentLength --
      }else{
        maxLength = 0
        break
      }
    }
  }
  if(leftArr.length){
    maxLength = 0
  }
  return maxLength
}

console.assert(aaa('[]') === 1, 'test1 failed')
console.assert(aaa('([]{()})') === 3, 'test1 failed')
console.assert(aaa('(]') === 0, 'test1 failed')
console.assert(aaa('([)]') === 0, 'test1 failed')
console.assert(aaa(')(') === 0, 'test1 failed')