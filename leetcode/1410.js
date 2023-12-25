/**
 * 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

HTML 里这些特殊字符和它们对应的字符实体包括：

双引号：字符实体为 &quot; ，对应的字符是 " 。
单引号：字符实体为 &apos; ，对应的字符是 ' 。
与符号：字符实体为 &amp; ，对应对的字符是 & 。
大于号：字符实体为 &gt; ，对应的字符是 > 。
小于号：字符实体为 &lt; ，对应的字符是 < 。
斜线号：字符实体为 &frasl; ，对应的字符是 / 。
给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。
 */

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  const n = text.length
  let result = ''
  for(let i=0;i<n;i++){
    const char = text[i]
    if(char === '&'){
      if(i+3<n){
        if(text.substring(i, i+4) === '&lt;'){
          i+=3
          result += '<'
          continue
        }else if(text.substring(i, i+4) === '&gt;'){
          i+=3
          result += '>'
          continue
        }
      }
      if(i+4<n){
        if(text.substring(i, i+5) === '&amp;'){
          i+=4
          result += '&'
          continue
        }
      }
      if(i+5<n){
        if(text.substring(i, i+6) === '&quot;'){
          i+=5
          result += '"'
          continue
        }else if(text.substring(i, i+6) === '&apos;'){
          i+=5
          result += "'"
          continue
        }
      }
      if(i+6<n){
        if(text.substring(i, i+7) === '&frasl;'){
          i+=6
          result += '/'
          continue
        }
      }
    }
    result += char
  }
  return result
};

console.log(entityParser('&amp; is an HTML entity but &ambassador; is not.'));