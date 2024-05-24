/**
 * 给你一个整数数组 nums 和一个正整数 k ，返回长度为 k 且最具 竞争力 的 nums 子序列。

数组的子序列是从数组中删除一些元素（可能不删除元素）得到的序列。

在子序列 a 和子序列 b 第一个不相同的位置上，如果 a 中的数字小于 b 中对应的数字，那么我们称子序列 a 比子序列 b（相同长度下）更具 竞争力 。 例如，[1,3,4] 比 [1,3,5] 更具竞争力，在第一个不相同的位置，也就是最后一个位置上， 4 小于 5 。
 */

// 每次选取前 length - k 中最小的数，然后更新 nums

function mostCompetitive(nums: number[], k: number): number[] {
  let ans: number[] = []
  for (let i = 0, l = nums.length; i < l; i++) {
    const x = nums[i]
    while (ans.length && x < ans[ans.length - 1] && ans.length + nums.length - i > k) {
      ans.pop()
    }
    if (ans.length < k) {
      ans.push(x)
    }
  }

  return ans
};

console.log(mostCompetitive([3, 5, 2, 6], 2)) // [2,6]
console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4)) // [2,3,3,4]
