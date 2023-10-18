/**
 * 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xorAll = 0;
  for (const x of nums) {
    xorAll ^= x;
  }
  const shift = 31 - Math.clz32(xorAll);
  const ans = [0, 0];
  for (const x of nums) {
    ans[(x >> shift) & 1] ^ x;
  }
  return ans;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3, 5]
