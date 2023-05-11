/**
 * 你有一台电脑，它可以 同时 运行无数个任务。给你一个二维整数数组 tasks ，其中 tasks[i] = [starti, endi, durationi] 表示第 i 个任务需要在 闭区间 时间段 [starti, endi] 内运行 durationi 个整数时间点（但不需要连续）。

当电脑需要运行任务时，你可以打开电脑，如果空闲时，你可以将电脑关闭。

请你返回完成所有任务的情况下，电脑最少需要运行多少秒。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/minimum-time-to-complete-all-tasks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
  tasks.sort((a,b)=>a[1]-b[1])
  var taskLen = tasks.length
  var res = []
  for(let i=0;i<taskLen;i++){
    var task = tasks[i]
    var duration = task[2] - res.filter(num=>num>=task[0] && num<=task[1]).length
    var right = task[1]
    while (duration>0) {
      if(res.indexOf(right)>-1){
        right --
      }else{
        res.push(right)
        right -- 
        duration --
      }
    }
  }
  return res.length
}

console.log(findMinimumTime([[2,3,1],[4,5,1],[1,5,2]])) // 2
console.log(findMinimumTime([[1,3,2],[2,5,3],[5,6,2]])) // 4