/**
 * 给定一个 正整数 数组 beans ，其中每个整数表示一个袋子里装的魔法豆的数目。

请你从每个袋子中 拿出 一些豆子（也可以 不拿出），使得剩下的 非空 袋子中（即 至少还有一颗 魔法豆的袋子）魔法豆的数目 相等。一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。

请返回你需要拿出魔法豆的 最少数目。
 */

function minimumRemoval(beans: number[]): number {
  beans.sort((a, b) => b - a) // 从大到小

  let sum = beans.reduce((sum, val) => {
    return sum + val
  }, 0)
  const n = beans.length
  let ans = Number.MAX_SAFE_INTEGER

  let basic = Number.MAX_SAFE_INTEGER
  for(let i=0;i<n;i++){
    if(i<n-1 && beans[i] === beans[i+1]){
      continue
    }
    ans = Math.min(ans, sum - beans[i] * (i+1)) // 拿走的豆子 = 全部的豆子 - 剩下的豆子；而剩下的豆子 = 当前作为基准的数 * 大于等于此数的个数
  }
  return ans
};

console.log(minimumRemoval([4, 1, 6, 5])) // 4
console.log(minimumRemoval([2, 10, 3, 2])) // 7
