/**
 * Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。

医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。

给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的 最多 种类数。
 */

function distributeCandies(candyType: number[]): number {
  let n = candyType.length
  const kindSet = new Set()
  for (let i = 0; i < n; i++) {
    kindSet.add(candyType[i])
  }
  const allTypes = kindSet.size
  let res = 0
  const currAddMax = n / 2
  res += currAddMax
  if (res > allTypes) {
    res = allTypes
  }
  return res
};


console.log(distributeCandies([1, 1, 2, 2, 3, 3])) // 3
console.log(distributeCandies([1, 1, 2, 3])) // 2
console.log(distributeCandies([6, 6, 6, 6])) // 1
