/**
 * 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，以及整数 indexDifference 和整数 valueDifference 。

你的任务是从范围 [0, n - 1] 内找出  2 个满足下述所有条件的下标 i 和 j ：

abs(i - j) >= indexDifference 且
abs(nums[i] - nums[j]) >= valueDifference
返回整数数组 answer。如果存在满足题目要求的两个下标，则 answer = [i, j] ；否则，answer = [-1, -1] 。如果存在多组可供选择的下标对，只需要返回其中任意一组即可。

注意：i 和 j 可能 相等 。
 */

function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
  if(indexDifference === 0 && valueDifference === 0){
    return [0, 0]
  }
  const n = nums.length
  for(let i=0;i<n-indexDifference;i++){
    for(let j=i + indexDifference;j<n;j++){
      if(Math.abs(nums[i] - nums[j]) >= valueDifference){
        return [i, j]
      }
    }
  }
  return [-1, -1]
};

console.log(findIndices([5,1,4,1], 2, 4)); // [0, 3]
console.log(findIndices([2,1], 0, 0)); // [0, 0]
console.log(findIndices([1,2,3], 2, 4)); // [-1, -1]
