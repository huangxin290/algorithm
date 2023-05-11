/**
 * 给你一个正整数数组 grades ，表示大学中一些学生的成绩。你打算将 所有 学生分为一些 有序 的非空分组，其中分组间的顺序满足以下全部条件：

第 i 个分组中的学生总成绩 小于 第 (i + 1) 个分组中的学生总成绩，对所有组均成立（除了最后一组）。
第 i 个分组中的学生总数 小于 第 (i + 1) 个分组中的学生总数，对所有组均成立（除了最后一组）。
返回可以形成的 最大 组数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximum-number-of-groups-entering-a-competition
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
  var len = grades.length
  let currentNum = 1
  while(len>=currentNum*2+1){
    len -= currentNum
    currentNum ++
  }
  return currentNum
}

console.log(maximumGroups([10,6,12,7,3,5])) // 3
console.log(maximumGroups([8,8])) // 1
console.log(maximumGroups([2,31,41,31,36,46,33,45,47,8,31,6,12,12,15,35])) // 5