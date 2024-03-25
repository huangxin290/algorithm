/** dfs(i, c)表示用前i种硬币组成金额c的方案数，可选两种方案
 * 1. 不再选第i种金币，dfs(i-1,c)
 * 2. 继续选第i种金币，dfs(i, c-coin[i])
 * 所以dfs(i,c) = dfs(i-1,c) + dfs(i,c-coin[i])
 * 边界值为：dfs(-1, 0) = 1,dfs(-1,>0) = 0
 * 此时可以声明 数组arr[i][c]来存储结果
 * 
 * 但是还可以对空间优化
 * 声明数组f[],索引最大是amount，f[0] = 1
 * 循环遍历硬币，当前遍历到的金额是x
 * 再声明c = x，c每次+1，直到等于amount
 * 而f[c] += f[c-x] // 这里和上面的思路是反着来的，可以理解成，从小面额的金币开始
 * 比如如果最小面额是1的话，会初始化f[1]到f[amount]全部是1（只用1也只能有1种组合方式）
 * 然后加入面额2的话，从f[2]开始，因为多加了一种只用2的方式，所以+=f[0]，变成了2
 *  */


function change(amount: number, coins: number[]): number {
  const f:number[] = new Array(amount + 1).fill(0)
  f[0] = 1
  coins.map(x=>{
    for(let c = x;c<=amount;c++){
      f[c] += f[c-x]
    }
  })

  return f[amount]
};

console.log(change(5, [1, 2, 5])) // 4
console.log(change(3, [2])) // 0
console.log(change(10, [10])) // 1
