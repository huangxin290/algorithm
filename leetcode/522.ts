/**
 * 给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。

特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

 s 的 子序列可以通过删去字符串 s 中的某些字符实现。

例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。
 */

function findLUSlength(strs: string[]): number {
  const n = strs.length
  let ans = -1
  next: for(let i=0;i<n;i++){
    let a = strs[i]
    if(a.length <= ans){
      continue
    }
    for(let j = 0;j<n;j++){
      if(i!==j && isSub(a, strs[j])){
        continue next;
      }
    }
    ans = a.length
  }

  function isSub(a:string, b:string):boolean{
    let i = 0
    for(const x of b){
      if(a[i] === x && ++i === a.length){
        return true
      }
    }
    return false
  }
  return ans
};

console.log(findLUSlength(["aba","cdc","eae"])); // 3
console.log(findLUSlength(["aaa","aaa","aa"])); // -1
