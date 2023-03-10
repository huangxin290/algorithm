/**
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。

在一步 操作 中：

选出一个满足 0 <= i < nums.length 的下标 i ，
将你的 分数 增加 nums[i] ，并且
将 nums[i] 替换为 ceil(nums[i] / 3) 。
返回在 恰好 执行 k 次操作后，你可能获得的最大分数。

向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximal-score-after-applying-k-operations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  var res = 0
  var maxBinaryHeap = new MaxBinaryHeap()
  for (let i = 0; i < nums.length; i++) {
    maxBinaryHeap.add(nums[i])
  }
  while (k > 0) {
    k--
    var maxValue = maxBinaryHeap.extractMax()
    res += maxValue
    maxBinaryHeap.add(Math.ceil(maxValue / 3))
  }
  return res
}

class MaxBinaryHeap {
  constructor() {
    this.data = []
  }

  getSize() {
    return this.data.length
  }

  isEmpty() {
    return this.data.length === 0
  }

  /**
   * 获取当前索引的节点的父节点的索引
   * @param {number} i
   * @return {number}
   */
  getParentIndex(i) {
    if (i === 0) {
      throw new Error('根节点没有父节点')
    }
    return Math.floor((i - 1) / 2)
  }

  /**
   * 获取其左子节点的索引
   * @param {number} i
   * @return {number}
   */
  getLeftChildIndex(i) {
    return i * 2 + 1
  }

  /**
   * 获取其右子节点的索引
   * @param {number} i
   * @return {number}
   */
  getRightChildIndex(i) {
    return i * 2 + 2
  }

  /**
   * 向堆中增加元素
   * @param {number} el
   */
  add(el) {
    this.data.push(el)
    this.siftUp(this.getSize() - 1)
  }

  /**
   * 获取堆中的最大的元素
   * @return {number}
   */
  findMax() {
    if (this.getSize() === 0) {
      throw new Error('堆内无元素，无法获取最大值')
    }
    return this.data[0]
  }

  /**
   * 取出堆中的最大值
   * @return {number}
   */
  extractMax() {
    const max = this.findMax()
    this.swap(0, this.getSize() - 1)
    this.data.pop()
    this.siftDown(0)
    return max
  }

  /**
   * 上升指定索引处的元素到合适的位置
   * @param {number} i
   */
  siftUp(i) {
    const { data, getParentIndex } = this
    while (i > 0 && data[i] > data[getParentIndex(i)]) {
      const parentIndex = getParentIndex(i)
      this.swap(i, parentIndex)
      i = parentIndex
    }
  }

  /**
   * 下沉元素
   * @param {number} i
   */
  siftDown(i) {
    const { data, getLeftChildIndex, getRightChildIndex } = this
    const size = this.getSize()
    // 如果当前节点不是叶子节点（检测其左节点是否越界就行）
    while (getLeftChildIndex(i) < size) {
      let j = getLeftChildIndex(i)
      // j+1是右子节点，如果右子节点比左节点大，则令 j = 右子节点的索引（目的是得到左右子节点的更大者）
      if (j + 1 < size && data[j + 1] > data[j]) {
        j = getRightChildIndex(i)
      }
      // 如果当前节点比左右子节点的更大者还大，就不必继续交换了
      if (data[i] >= data[j]) break
      // 更大者与当前节点互换位置
      this.swap(i, j)
      i = j
    }
  }

  /**
   * 交换两个位置上的元素
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    const size = this.getSize()
    if (i < 0 || j < 0 || i >= size || j >= size) {
      throw new Error('索引处无值')
    }
    const data = this.data
    const t = data[i]
    data[i] = data[j]
    data[j] = t
  }

  toString() {
    return '[' + this.data.toString() + ']'
  }
}

console.log(maxKelements([10, 10, 10, 10, 10], 5)) // 50
console.log(maxKelements([1, 10, 3, 3, 3], 3)) // 17
