/**
 * DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

例如，"ACGAATTCCG" 是一个 DNA序列 。
在研究 DNA 时，识别 DNA 中的重复序列非常有用。

给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const L=10
  let res = []
  if(s.length<=L){
    return res
  }
  const hashMap = new Map()
  const n = s.length
  for(let i=0;i<n-L+1;i++){
    const str = s.substring(i, i + 10)
    let num = hashMap.get(str)
    if(!num){
      hashMap.set(str, 1)
    }else{
      num ++
      hashMap.set(str, num)
      if(num === 2){
        res.push(str)
      }
    }
  }
  return res
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'))