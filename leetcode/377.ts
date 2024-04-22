/**
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。
 */

function combinationSum4(nums: number[], target: number): number {
  nums = nums.filter(num=>num <= target)
  const l = nums.length
  const memo = new Array(target + 1).fill(-1)
  function dfs(sum:number){
    if(sum === 0){
      return 1
    }
    if(memo[sum] !== -1){
      return memo[sum]
    }
    let res = 0;
    for(const x of nums){
      if(x<=sum){
        res += dfs(sum-x)
      }
    }
    memo[sum] = res
    return memo[sum]
  }
  return dfs(target)
};

console.log(combinationSum4([1,2,3], 4));
