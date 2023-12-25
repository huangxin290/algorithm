/**
 * 这里有 n 个一样的骰子，每个骰子上都有 k 个面，分别标号为 1 到 k 。

给定三个整数 n ,  k 和 target ，返回可能的方式(从总共 kn 种方式中)滚动骰子的数量，使正面朝上的数字之和等于 target 。

答案可能很大，你需要对 109 + 7 取模 。
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  if(n > target || n*k<target){
    return 0
  }
  if(n === 1 && target <= k){
    return 1
  }
  const dp = new Array(n+1).fill(0).map(()=>new Array(target+1).fill(0))
  for(let i = 1;i<=k && i<target+1;i++){
    dp[1][i] = 1
  }
  return dfs(n, k, target, dp)
};

const MAX_NUM = Math.pow(10, 9) + 7

function dfs(n, k, target, dp){
  var res = 0
  const min = Math.max(target - (n-1)*k, 1)
  const max = Math.min(target - (n-1)*1, k)
  for(let i=min;i<=max;i++){
    if(dp[n-1][target - i]){
      res += dp[n-1][target - i]
    }else{
      const num = dfs(n-1, k, target - i, dp)
      dp[n-1][target - i] = num
      res += num
    }
  }
  return res % MAX_NUM
}

console.log(numRollsToTarget(1, 6, 3)) // 1
console.log(numRollsToTarget(2, 6, 7)) // 6
console.log(numRollsToTarget(30, 30, 500)) // 222616187