/**
 * 假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。

然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。

给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/best-team-with-no-conflicts
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  var len = scores.length
  var ids = new Array(len).fill(0)
  for(let i=0;i<len;i++){
    ids[i] = i
  }
  ids.sort((a,b)=>scores[a]!==scores[b]?scores[a]-scores[b]:ages[a]-ages[b])

  var f=new Array(len+1).fill(0)
  var ans = 0
  for(let i=0;i<len;i++){
    for(let j=0;j<i;j++){
      if(ages[ids[j]]<= ages[ids[i]]){
        f[i] = Math.max(f[i],f[j])
      }
    }
    f[i] += scores[ids[i]]
    ans = Math.max(ans, f[i])
  }
  return ans
}

console.log(bestTeamScore([1,3,5,10,15], [1,2,3,4,5])) // 34
console.log(bestTeamScore([4,5,6,5], [2,1,2,1])) // 16
console.log(bestTeamScore([1,2,3,5], [8,9,10,1])) // 6