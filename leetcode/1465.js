/**
 * 矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中：

 horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离
verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离
请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果 对 109 + 7 取余 后返回。
 */

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let maxH = 1;
  let currentH = 0;
  horizontalCuts.push(h);
  for (let i = 0; i < horizontalCuts.length; i++) {
    const temp = horizontalCuts[i];
    if (temp - currentH > maxH) {
      maxH = temp - currentH;
    }
    currentH = temp;
  }
  let maxW = 1;
  let currentW = 0;
  verticalCuts.push(w);
  for (let i = 0; i < verticalCuts.length; i++) {
    const temp = verticalCuts[i];
    if (temp - currentW > maxW) {
      maxW = temp - currentW;
    }
    currentW = temp;
  }

  const maxNum = Math.pow(10, 9) + 7;

  maxH = BigInt(maxH);
  maxW = BigInt(maxW);

  return (maxH * maxW) % BigInt(maxNum);
};

console.log(maxArea(12, 44, [2, 1, 9, 6, 7], [35, 5, 21, 12, 4, 7, 18, 32, 36, 40, 10, 30, 24, 17, 8, 20, 9, 3, 34, 41, 26, 42, 28, 31, 38, 2, 14, 19, 37, 33, 23, 43, 29, 15, 16, 11]));
