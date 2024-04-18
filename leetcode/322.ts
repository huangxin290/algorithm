/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。
 * @param coins 
 * @param amount 
 */

function coinChange(coins: number[], amount: number): number {
  const length = coins.length
  const f = new Array(amount + 1).fill(Number.MAX_VALUE)
  f[0] = 0
  coins.map(x=>{
    for(let c = x;c<=amount;c++){
      f[c] = Math.min(f[c], f[c-x] + 1)
    }
  })
  if(f[amount] < Number.MAX_VALUE){
    return f[amount]
  }else{
    return -1
  }
};

console.log(coinChange([1,2,5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
