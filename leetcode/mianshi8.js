/**
 * 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。
 */

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  const keyMap = {}
  // 回溯+剪枝（相同的枝就可以去掉）
  const selectChars = S.split('')
  function dfs(str, arr){
    if(arr.length === 0){
      keyMap[str] = true
      return
    }
    const selectedMap = {}
    for(let i=0,n=arr.length;i<n;i++){
      const char = arr[i]
      if(selectedMap[char]){
        continue // 剪枝
      }
      selectedMap[char] = true
      dfs(str + char, arr.filter((val, index)=>index!==i))
    }
  }
  dfs('', selectChars)
  return Object.keys(keyMap)
};

console.log(permutation('qqe')); // ["eqq","qeq","qqe"]
console.log(permutation('ab')); // ["ab", "ba"]