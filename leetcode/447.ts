/**
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的欧式距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。
 */

function numberOfBoomerangs(points: number[][]): number {
  const n = points.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    const cnt = new Map()
    for (let j = 0; j < n; j++) {
      const d2 = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
      const count = cnt.get(d2) || 0
      ans += count * 2
      cnt.set(d2, count + 1)
    }
  }

  return ans
};

console.log(numberOfBoomerangs([[3, 6], [7, 5], [3, 5], [6, 2], [9, 1], [2, 7], [0, 9], [0, 6], [2, 6]])) // 10
console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]])) // 2
console.log(numberOfBoomerangs([[1, 1], [2, 2], [3, 3]])) // 2
console.log(numberOfBoomerangs([[1, 1]])) // 0
