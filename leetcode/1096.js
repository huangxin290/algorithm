const { isEqual, multiply } = require('lodash')

/**
 * 如果你熟悉 Shell 编程，那么一定了解过花括号展开，它可以用来生成任意字符串。

花括号展开的表达式可以看作一个由 花括号、逗号 和 小写英文字母 组成的字符串，定义下面几条语法规则：

如果只给出单一的元素 x，那么表达式表示的字符串就只有 "x"。R(x) = {x}
例如，表达式 "a" 表示字符串 "a"。
而表达式 "w" 就表示字符串 "w"。
当两个或多个表达式并列，以逗号分隔，我们取这些表达式中元素的并集。R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
例如，表达式 "{a,b,c}" 表示字符串 "a","b","c"。
而表达式 "{{a,b},{b,c}}" 也可以表示字符串 "a","b","c"。
要是两个或多个表达式相接，中间没有隔开时，我们从这些表达式中各取一个元素依次连接形成字符串。R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}
例如，表达式 "{a,b}{c,d}" 表示字符串 "ac","ad","bc","bd"。
表达式之间允许嵌套，单一元素与表达式的连接也是允许的。
例如，表达式 "a{b,c,d}" 表示字符串 "ab","ac","ad"​​​​​​。
例如，表达式 "a{b,c}{d,e}f{g,h}" 可以表示字符串 "abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"。
给出表示基于给定语法规则的表达式 expression，返回它所表示的所有字符串组成的有序列表。

假如你希望以「集合」的概念了解此题，也可以通过点击 “显示英文描述” 获取详情。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/brace-expansion-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  if (expression.startsWith('{') && findExpressionEndIndex(expression, 0) === expression.length - 1) {
    var res = []
    var braceIndex = 0
    var startIndex = 1
    for (let i = 1; i < expression.length - 1; i++) {
      var item = expression[i]
      if (item === '{') {
        braceIndex++
      } else if (item === '}') {
        braceIndex--
      } else if (item === ',' && braceIndex === 0) {
        var arr = braceExpansionII(expression.substring(startIndex, i))
        arr.map((item) => {
          if (res.indexOf(item) === -1) {
            res.push(item)
          }
        })
        startIndex = i + 1
      }
      if (i === expression.length - 2) {
        var arr = braceExpansionII(expression.substring(startIndex, i + 1))
        arr.map((item) => {
          if (res.indexOf(item) === -1) {
            res.push(item)
          }
        })
      }
    }
    return res.sort()
  } else if (expression.length === 1) {
    return [expression]
  } else {
    var res = []
    var braceIndex = 0
    var startIndex = 0
    for (let i = 0; i < expression.length; i++) {
      var item = expression[i]

      if (item === '{') {
        if (braceIndex === 0) {
          startIndex = i
        }
        braceIndex++
      } else if (item === '}') {
        braceIndex--
        if (braceIndex === 0) {
          var arr = braceExpansionII(expression.substring(startIndex, i + 1))
          res = getMultiplyTwoArray(res, arr)
        }
      } else if (item !== ',' && braceIndex === 0) {
        if (res.length) {
          res = res.map((resItem) => resItem + item)
        } else {
          res.push(item)
        }
      }
    }
    return res.sort()
  }
}

function findExpressionEndIndex(expression, startIndex) {
  var index = 0
  for (let i = startIndex; i < expression.length; i++) {
    if (expression[i] === '{') {
      index++
    }
    if (expression[i] === '}') {
      index--
      if (index === 0) {
        return i
      }
    }
  }
  return index
}

function getMultiplyTwoArray(res, arr) {
  if (res.length === 0) {
    return arr
  }
  if (arr.length === 0) {
    return res
  }
  var ans = []
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      ans.push(res[i] + arr[j])
    }
  }
  return ans
}

console.assert(isEqual(braceExpansionII('{a,b}{c,{d,e}}'), ['ac', 'ad', 'ae', 'bc', 'bd', 'be']), 'test1 failed')

console.assert(isEqual(braceExpansionII('{{a,z},a{b,c},{ab,z}}'), ['a', 'ab', 'ac', 'z']), 'test2 failed')

console.assert(isEqual(braceExpansionII('a'), ['a']), 'test3 failed')

console.assert(isEqual(braceExpansionII('a{b,c}{d,e}f{g,h}'), ['abdfg', 'abdfh', 'abefg', 'abefh', 'acdfg', 'acdfh', 'acefg', 'acefh']), 'test1 failed')
