/**
 * 给你一个由 不同 整数组成的整数数组 arr 和一个整数 k 。

每回合游戏都在数组的前两个元素（即 arr[0] 和 arr[1] ）之间进行。比较 arr[0] 与 arr[1] 的大小，较大的整数将会取得这一回合的胜利并保留在位置 0 ，较小的整数移至数组的末尾。当一个整数赢得 k 个连续回合时，游戏结束，该整数就是比赛的 赢家 。

返回赢得比赛的整数。

题目数据 保证 游戏存在赢家。
 */

function getWinner(arr: number[], k: number): number {
  const n = arr.length
  if (k > n) {
    return Math.max(...arr)
  }
  let winCount = 1
  let maxNum = Math.max(arr[0], arr[1])
  if (k === 1) {
    return maxNum
  }
  for (let i = 2 ; i < n; i++) {
    if (maxNum > arr[i]) {
      winCount++
    } else {
      winCount = 1
      maxNum = arr[i]
    }
    if (winCount === k) {
      return maxNum
    }
  }
  return maxNum
}

console.log(getWinner([2,1,3,5,4,6,7], 2)); // 5
console.log(getWinner([3,2,1], 10)); // 3
console.log(getWinner([1,9,8,2,3,7,6,4,5], 7)); // 9
console.log(getWinner([1,11,22,33,44,55,66,77,88,99], 1000000000)); // 99
