/**
 * 假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 perm（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

- perm[i] 能够被 i 整除
- i 能够被 perm[i] 整除
给你一个整数 n ，返回可以构造的 优美排列 的 数量 。
 */

/**
 * 状压 DP，通过二进制数表示是否被使用，比如 1101 表示已经使用了{3,2,0}，记忆化搜索存储结果，然后开始遍历，每次加入一个数（如果没有使用并且可以整除索引值）
 */

function countArrangement(n: number): number {
  const cache = new Array(1 << n).fill(-1) // -1 表示没有结果，1<<n 构建了2的n次方个空间

  function dfs(s: number): number { // s是当前使用的值，必须每一位都使用，表示已经结束
    if (s === (1 << n) - 1) { // 2的n次方 - 1，就是 01111111，此时表示已经全部使用，比如 n=3，那么就是 s = 0111，此时最后3位已经全部使用了，满足了要求
      return 1
    }

    if (cache[s] !== -1) {
      return cache[s]
    }

    let res = 0
    const i = bitCount32(s) + 1 // 计算当前的索引位置，索引 0 是第一位
    for (let j = 1; j <= n; j++) { // 从1到n往里面尝试的填
      if ((s >> (j - 1) & 1) === 0 && (i % j === 0 || j % i === 0)) { // s >> (j - 1) 把右边那些全部干掉，然后看是不是 1，不是就是没使用过
        res += dfs(s | (1 << (j - 1))) // 选中了 j 这个数并填入，那么就把此数变成 1
      }
    }
    cache[s] = res
    return res
  }

  function bitCount32(n: number): number { // 计算1的个数
    let count = 0
    while (n) {
      n &= n - 1
      count++
    }
    return count
  }
  return dfs(0)
};

console.log(countArrangement(2)) // 2
console.log(countArrangement(1)) // 1
