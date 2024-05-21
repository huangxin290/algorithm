/**
 * 给你两个下标从 0 开始的整数数组 nums 和 divisors 。

divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。
 */

function maxDivScore(nums: number[], divisors: number[]): number {
  nums.sort()
  divisors.sort()

  let resultNum = divisors[0]
  let maxScore = 0
  for(let i=0,l=divisors.length;i<l;i++){
    let score = 0
    if(i>0 && divisors[i] === divisors[i-1]){
      continue
    }
    for(let j=0,n=nums.length;j<n;j++){
      score += nums[j] % divisors[i] === 0 ? 1 : 0
    }
    if(score > maxScore || (score === maxScore && divisors[i] < resultNum)){
      resultNum = divisors[i]
      maxScore = score
    }
  }

  return resultNum
};

console.log(maxDivScore([4,7,9,3,9], [5,2,3])); // 3
console.log(maxDivScore([20,14,21,10], [5,7,5])); // 5
console.log(maxDivScore([12], [10,16])); // 10
console.log(maxDivScore([31,91,47,6,37,62,72,42,85], [95,10,8,43,21,63,26,45,23,69,16,99,92,5,97,69,33,44,8])); // 5
