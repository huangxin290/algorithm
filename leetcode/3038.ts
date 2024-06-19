/**
 * 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作：

选择 nums 中的前两个元素并将它们删除。
一次操作的 分数 是被删除元素的和。

在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。

请你返回按照上述要求 最多 可以进行的操作次数。
 */

function maxOperations(nums: number[]): number {
  let res = 0
  let sum = 0
  for(let i=0,n=nums.length;i<n-1;i+=2){
    if(sum === 0){
      sum = nums[i] + nums[i+1]
      res ++
    }else{
      if(sum === nums[i] + nums[i+1]){
        res ++
      }else{
        break
      }
    }
  }
  return res
};

console.log(maxOperations([3,2,1,4,5])); // 2
console.log(maxOperations([3,2,6,1,4])); // 1
console.log(maxOperations([2,2,3,2,4,2,3,3,1,3])); // 1
