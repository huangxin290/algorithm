/**
 * 给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

返回 承载所有人所需的最小船数 。
 */

function numRescueBoats(people: number[], limit: number): number {
  let ans = 0
  people.sort((a, b) => a - b)
  let i = 0
  let j = people.length - 1
  while (i <= j) {
    if (i === j) {
      ans++
      j--
    } else {
      if (people[i] + people[j] <= limit) {
        ans++
        i++
        j--
      } else {
        ans++
        j--
      }
    }
  }
  return ans
};

console.log(numRescueBoats([1, 2], 3)) // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)) // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)) // 4
