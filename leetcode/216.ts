/**
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 */

function combinationSum3(k: number, n: number): number[][] {
  let res:number[][] = []
  let path:number[] = []

  // i是取值上限，t是目标值，深度是通过path长度计算的
  function dfs(i:number, t:number){
    const d = k - path.length // 还需选择d个数
    if(t<0 || d<0){
      return
    }
    if(d === 0 && t === 0){
      res.push([...path])
      return
    }
    for(let j=i;j>d-1;j--){
      path.push(j)
      dfs(j-1, t-j)
      path.pop()
    }
  }

  dfs(9, n)
  return res
};

console.log(combinationSum3(3,7)) // [ [ 4, 2, 1 ] ]
console.log(combinationSum3(3,9)) // [ [ 6, 2, 1 ], [ 5, 3, 1 ], [ 4, 3, 2 ] ]
console.log(combinationSum3(4,1)) // []