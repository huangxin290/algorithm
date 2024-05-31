/**
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 */

function maximumSwap(num: number): number {
  const nums = ('' + num).split('').map(val=>parseInt(val))
  const numsArr = [...nums].sort((a, b)=>b-a) // 排序
  for(let i=0,l=nums.length;i<l;i++){
    if(nums[i] !== numsArr[i]){
      const temp = nums[i]
      const index = nums.reverse().findIndex(val=>val === numsArr[i])
      nums[index] = temp
      nums.reverse()
      nums[i] = numsArr[i]
      break
    }
  }
  return parseInt(nums.join(''))
};

console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(27736)); // 7236
console.log(maximumSwap(9973)); // 9973
