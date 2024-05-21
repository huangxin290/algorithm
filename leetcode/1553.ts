/**
 * 厨房里总共有 n 个橘子，你决定每一天选择如下方式之一吃这些橘子：

吃掉一个橘子。
如果剩余橘子数 n 能被 2 整除，那么你可以吃掉 n/2 个橘子。
如果剩余橘子数 n 能被 3 整除，那么你可以吃掉 2*(n/3) 个橘子。
每天你只能从以上 3 种方案中选择一种方案。

请你返回吃掉所有 n 个橘子的最少天数。
 */

function minDays(n: number): number {
  const cache = new Map<number, number>()
  cache.set(1, 1)

  function dfs(i: number): number {
    if(i<=1){
      return i
    }
    if (cache.has(i)) {
      return cache.get(i) || 1
    }
    const res = Math.min(dfs(Math.floor(i / 2)) + i % 2, dfs(Math.floor(i / 3)) + i % 3) + 1
    cache.set(i, res)
    return res
  }

  return dfs(n)
};

console.log(minDays(10)) // 4
console.log(minDays(6)) // 3
