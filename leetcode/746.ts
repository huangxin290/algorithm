/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。
 */

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length
  const cache = new Array(n+1).fill(-1)

  function dfs(i: number):number{
    if(i>=n){
      return 0
    }
    if(cache[i] !== -1){
      return cache[i]
    }
    return cache[i] = Math.min(dfs(i+1), dfs(i+2)) + cost[i]
  }

  return Math.min(dfs(0), dfs(1))
};

console.log(minCostClimbingStairs([10,15,20])); // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6
