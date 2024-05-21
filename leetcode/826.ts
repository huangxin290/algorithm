/**
 * 你有 n 个工作和 m 个工人。给定三个数组： difficulty, profit 和 worker ，其中:

difficulty[i] 表示第 i 个工作的难度，profit[i] 表示第 i 个工作的收益。
worker[i] 是第 i 个工人的能力，即该工人只能完成难度小于等于 worker[i] 的工作。
每个工人 最多 只能安排 一个 工作，但是一个工作可以 完成多次 。

举个例子，如果 3 个工人都尝试完成一份报酬为 $1 的同样工作，那么总收益为 $3 。如果一个工人不能完成任何工作，他的收益为 $0 。
返回 在把工人分配到工作岗位后，我们所能获得的最大利润 。
 */

function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  let ans = 0

  const works = difficulty.map((val, index) => {
    return [val, profit[index]]
  })

  works.sort((a, b) => a[0] - b[0])

  works.reduce((maxScore, curr) => {
    curr[1] = Math.max(maxScore, curr[1])
    return curr[1]
  }, 0)

  const diffs = works.map((item) => item[0])

  for (let i = 0, l = worker.length; i < l; i++) {
    const index = binarySearch(worker[i], diffs)
    ans += index >= 0 ? works[index][1] : 0
  }

  return ans
};

// 在 arr 中找到首个大于num的位置，返回次数 - 1
function binarySearch(num: number, arr: number[]): number {
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (arr[mid] <= num) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i - 1
}

console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])) // 100
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25])) // 0

/**
 * 如果把 worker\textit{worker}worker 按照从小到大的顺序排序，那么第 iii 个工人能做的工作，他右边的（worker\textit{worker}worker 值更大的）工人也能做。这意味着，如果我们遍历了所有 difficulty[j]≤worker[i]\textit{difficulty}[j]\le \textit{worker}[i]difficulty[j]≤worker[i] 的工作，那么从第 iii 个工人到第 i+1i+1i+1 个工人，只需要额外遍历 worker[i]<difficulty[j]≤worker[i+1]\textit{worker}[i] < \textit{difficulty}[j]\le \textit{worker}[i+1]worker[i]<difficulty[j]≤worker[i+1] 的工作。

把 difficulty\textit{difficulty}difficulty 和 profit\textit{profit}profit 绑在一起，按照 difficulty\textit{difficulty}difficulty 从小到大排序，我们可以在遍历 worker\textit{worker}worker 的同时，用双指针遍历并维护 difficulty[j]≤worker[i]\textit{difficulty}[j]\le \textit{worker}[i]difficulty[j]≤worker[i] 的最大的 profit[j]\textit{profit}[j]profit[j]，即为第 iii 个工人所能获得的最大利润。累加每名工人能获得的最大利润，即为答案。

作者：灵茶山艾府
链接：https://leetcode.cn/problems/most-profit-assigning-work/solutions/2780326/pai-xu-shuang-zhi-zhen-pythonjavacgojsru-gthg/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */