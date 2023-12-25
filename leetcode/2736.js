/**
 * 给你两个长度为 n 、下标从 0 开始的整数数组 nums1 和 nums2 ，另给你一个下标从 1 开始的二维数组 queries ，其中 queries[i] = [xi, yi] 。

对于第 i 个查询，在所有满足 nums1[j] >= xi 且 nums2[j] >= yi 的下标 j (0 <= j < n) 中，找出 nums1[j] + nums2[j] 的 最大值 ，如果不存在满足条件的 j 则返回 -1 。

返回数组 answer ，其中 answer[i] 是第 i 个查询的答案。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSumQueries = function(nums1, nums2, queries) {
  const n=nums1.length;
  const sums = new Array(n).fill(0)
  for(let i=0;i<n;i++){
    sums[i] = [nums1[i], nums2[i], nums1[i] + nums2[i]]
  }
  sums.sort((a,b)=>b[0] + b[1] - a[0] - a[1])
  const m = queries.length
  const results = new Array(m).fill(-1)

  for(let i=0;i<m;i++){
    const querySum = queries[i][0] + queries[i][1]
    let index = 0
    while (index<n && sums[index][2]>=querySum) {
      if(sums[index][0]>=queries[i][0] && sums[index][1]>=queries[i][1]){
        results[i] = sums[index][2]
        break
      }
      index ++
    }
  }
  return results
};

console.log(maximumSumQueries([4,3,1,2], [2,4,9,5], [[4,1],[1,3],[2,5]])); // [6,10,7]
console.log(maximumSumQueries([3,2,5], [2,3,4], [[4,4],[3,2],[1,1]])); // [6,10,7]