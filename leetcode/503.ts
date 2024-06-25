/**
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。
 */

/**
 * 单调栈：先入先出，有序
 * 要么从后往前，要么从前往后，记录的是索引值
 */

function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length
  const st: number[] = []
  const ans = new Array(n).fill(-1)
  for (let i = 0; i < n * 2 - 1; i++) {
    const x = nums[i % n]
    while (st.length && x > nums[st[st.length - 1]]) {
      const j = st.pop() || 0
      ans[j] = x
    }
    if(i<n){
      st.push(i)
    }
  }
  return ans
}

console.log(nextGreaterElements([1,2,1])); // [2,-1,2]
console.log(nextGreaterElements([1,2,3,4,3])); // [2,3,4,-1,4]
