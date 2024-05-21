/**
 * 给你一个下标从 0 开始的整数数组 tasks ，其中 tasks[i] 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 相同难度级别 的任务。

返回完成所有任务需要的 最少 轮数，如果无法完成所有任务，返回 -1 。
 */

function minimumRounds(tasks: number[]): number {
  const numMap:{[key:string]: number} = {}
  for(let i=0,l=tasks.length;i<l;i++){
    const num = tasks[i]
    if(!numMap[num]){
      numMap[num] = 1
    }else{
      numMap[num]++
    }
  }

  let ans = 0
  const values = Object.values(numMap)
  for(let i=0,l=values.length;i<l;i++){
    const val = values[i]
    if(val === 1){
      return -1
    }
    ans += Math.ceil(val/3)
  }

  return ans
};

console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4])); // 4
console.log(minimumRounds([2,3,3])); // -1

