/**
 * 给你一个正整数 p 。你有一个下标从 1 开始的数组 nums ，这个数组包含范围 [1, 2p - 1] 内所有整数的二进制形式（两端都 包含）。你可以进行以下操作 任意 次：

从 nums 中选择两个元素 x 和 y  。
选择 x 中的一位与 y 对应位置的位交换。对应位置指的是两个整数 相同位置 的二进制位。
比方说，如果 x = 1101 且 y = 0011 ，交换右边数起第 2 位后，我们得到 x = 1111 和 y = 0001 。

请你算出进行以上操作 任意次 以后，nums 能得到的 最小非零 乘积。将乘积对 109 + 7 取余 后返回。

注意：答案应为取余 之前 的最小值。
 */

function minNonZeroProduct2(p: number): number {
  if (p === 1) {
    return 1
  } else if (p === 2) {
    return 6
  }
  const n2 = Math.pow(2, p)

  let res = BigInt(n2 - 1) // 111...1
  let count = (n2 - 2) / 2
  const maxNum = Math.pow(10, 9) + 7
  while (count) {
    count--
    res = (BigInt(res) * (BigInt(n2 - 2) % BigInt(maxNum))) % BigInt(maxNum) // * 111...1110
  }
  return Number(res)
};

// right 快速幂

function minNonZeroProduct(p: number): number {
  const MOD = 1_000_000_007n

  function pow(x: bigint, p: number): bigint {
    let res = 1n
    while (p--) {
      res = res * x % MOD
      x = x * x % MOD
    }
    return res
  }

  const k = (1n << BigInt(p)) - 1n
  return Number(k * pow(k - 1n, p - 1) % MOD)
};

console.log(minNonZeroProduct(1)) // 1
console.log(minNonZeroProduct(2)) // 6
console.log(minNonZeroProduct(3)) // 1512
console.log(minNonZeroProduct(25)) // 513022074
