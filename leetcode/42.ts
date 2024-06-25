/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

/**
 * 单调栈，每次找到最大的时候，填坑
 */

function trap(height: number[]): number {
  const n = height.length
  const st: number[] = []
  let ans = 0
  for (let i = 0; i < n; i++) {
    const x = height[i]
    while (st.length && x > height[st[st.length - 1]]) { // 存在低洼的可能
      const bottom_h = height[st.pop() || 0]
      if (st.length === 0) { // 为0表示形不成水沟
        break
      }
      const left = st[st.length - 1]
      const dh = Math.min(height[left], x) - bottom_h
      const width = i - left - 1
      ans += width * dh
    }
    st.push(i)
  }

  return ans
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
console.log(trap([4, 2, 0, 3, 2, 5])) // 9
