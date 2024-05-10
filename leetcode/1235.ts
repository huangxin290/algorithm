/**
 * 你打算利用空闲时间来做兼职工作赚些零花钱。

这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

注意，时间上出现重叠的 2 份工作不能同时进行。

如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。
 */

function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const jobs: { start: number, end: number, profit: number }[] = startTime.map((start, index) => {
    return {
      start,
      end: endTime[index],
      profit: profit[index]
    }
  })
  const n = jobs.length
  jobs.sort((a, b) => a.end - b.end)
  const f = new Array(n + 1)
  f[0] = 0

  function search(jobs: { start: number, end: number, profit: number }[], right: number, upper: number): number {
    let left = -1
    while (left + 1 < right) {
      const mid = (left + right) >>> 1
      if (jobs[mid].end <= upper) {
        left = mid
      } else {
        right = mid
      }
    }
    return left
  }

  for (let i = 0; i < n; i++) {
    const j = search(jobs, i, jobs[i].start)
    f[i + 1] = Math.max(f[i], f[j + 1] + jobs[i].profit)
  }
  return f[n]
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])) // 120
console.log(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])) // 150
console.log(jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4])) // 6
