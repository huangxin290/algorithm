/**
 * 峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 */

function findPeakElement(nums: number[]): number {
    
    let left = 0
    let right = nums.length
    nums.push(Number.MIN_SAFE_INTEGER)
    while (left < right) {
      let middle = left + Math.floor((right - left)/2)
      if(nums[middle - 1] > nums[middle]){
        right = middle - 1
        continue
      }
      if(nums[middle + 1] > nums[middle]){
        left = middle + 1
        continue
      }
      return middle
    }
    return left
};

console.log(findPeakElement([1,2,3,1])) // 2
console.log(findPeakElement([1,2,1,3,5,6,4])) // 1,5