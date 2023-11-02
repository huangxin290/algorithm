/**
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。

请你设计并实现对数时间复杂度的算法解决此问题。
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const length = citations.length;
  let i = 0;
  let j = length + 1;
  let result = 0;
  while (i + 1 < j) {
    const middle = Math.floor((i + j) / 2);
    if (citations[length - middle] >= middle) {
      i = middle;
    } else {
      j = middle;
    }
  }
  return i;
};
