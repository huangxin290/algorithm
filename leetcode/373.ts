/**
 * 给定两个以 非递减顺序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。
 */

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  let m = nums1.length, n = nums2.length
  // 记录每个位置的指针，索引从0开始
  let dp = new Array(Math.min(m, k)).fill(0)
  let result:number[][] = []

  while (result.length < k) {
    let minIndex = -1, minValue = Number.MAX_VALUE
    for (let i = 0; i < dp.length; i++) {
      // 兼容一下数量不够的情况
      if (dp[dp.length - 1] === n) return result

      // 走到尽头了，此路不通
      if (dp[i] === n) continue

      let cur = nums1[i] + nums2[dp[i]]
      if (cur < minValue) {
        minIndex = i
        minValue = cur
      }

      // 判断为空的时候不往后走
      if (dp[i] === 0) {
        break
      }
    }

    // 记录当前最小值，指针右移
    result.push([nums1[minIndex], nums2[dp[minIndex]]])
    dp[minIndex]++
  }

  return result
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)) // [1,2],[1,4],[1,6]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)) // [1,1],[1,1]
console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 3)) // [[1,3],[2,3],[1,5]]
