/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。
示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const arr = []
  for(let i=0;i<n;i++){
    arr.push(i + 1)
  }
  let ans = []

  function dfs(path, numArr){
    if(path.length === k){
      ans.push(path)
      return
    }
    const maxI = numArr.length - (k - path.length) + 1
    for(let i=0;i<maxI;i++){
      const char = numArr[i]
      dfs([...path, char], numArr.slice(i + 1))
    }
  }
  dfs('', arr)
  return ans
};

console.log(combine(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(combine(1, 1)); // [ [ 1 ] ]
console.log(combine(10, 7)); // [ [ 1 ] ]