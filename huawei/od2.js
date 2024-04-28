/**
 * 求能获得的最大积分
 * @param {*number} n 任务数量，[1, 100]
 * @param {*number} t 时间限制，[1, 100]
 * @param {*Array<array<number, number>>} arr 任务数组，第一项是最晚完成时间，第二项是积分值
 */
function getMaxScore(n, t, arr){
  // 选择前 i 个任务时，能获得的最大积分,time是当前时间，持续累加
  arr.sort((a,b)=>b[0] - a[0])
  const cache = new Array(n).fill(0).map(()=>new Array(t + 1).fill(-1))
  function dfs(i, time){
    if(i < 0 || time > t){
      return 0
    }
    if(arr[i][0] < time) {
      // 已超时,只能不选
      return dfs(i-1, time)
    }
    if(cache[i][time] !== -1){
      return cache[i][time]
    }
    // 开始处理第 i 个任务，当前时间是 time
    return cache[i][time] = Math.max(dfs(i-1, time), dfs(i-1, time+1) + arr[i][1])
  }
  return dfs(n-1, 1)
}



console.log(getMaxScore(4, 3, [[1, 2], [1, 3], [1, 4], [1, 5]])); // 5
console.log(getMaxScore(4, 3, [[1, 2], [1, 3], [1, 4], [3, 5]])); // 9
