/**
 * 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。

请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
 */

function average(salary: number[]): number {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0
  for (let i = 0, n = salary.length; i < n; i++) {
    const val = salary[i]
    min = Math.min(min, val)
    max = Math.max(max, val)
    sum += val
  }
  sum -= min
  sum -= max
  return sum / (salary.length - 2)
};

console.log(average([4000, 3000, 1000, 2000])) // 2500
console.log(average([1000, 2000, 3000])) // 2000
console.log(average([6000, 5000, 4000, 3000, 2000, 1000])) // 3500
console.log(average([8000, 9000, 2000, 3000, 6000, 1000])) // 4750
