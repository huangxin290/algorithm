/**
 * 给你一个二维整数数组 intervals ，其中 intervals[i] = [lefti, righti] 表示第 i 个区间开始于 lefti 、结束于 righti（包含两侧取值，闭区间）。区间的 长度 定义为区间中包含的整数数目，更正式地表达是 righti - lefti + 1 。

再给你一个整数数组 queries 。第 j 个查询的答案是满足 lefti <= queries[j] <= righti 的 长度最小区间 i 的长度 。如果不存在这样的区间，那么答案是 -1 。

以数组形式返回对应查询的所有答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/minimum-interval-to-include-each-query
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
输出：[3,3,1,4]
解释：查询处理如下：
- Query = 2 ：区间 [2,4] 是包含 2 的最小区间，答案为 4 - 2 + 1 = 3 。
- Query = 3 ：区间 [2,4] 是包含 3 的最小区间，答案为 4 - 2 + 1 = 3 。
- Query = 4 ：区间 [4,4] 是包含 4 的最小区间，答案为 4 - 4 + 1 = 1 。
- Query = 5 ：区间 [3,6] 是包含 5 的最小区间，答案为 6 - 3 + 1 = 4 。
 */


/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  let intervalLen = intervals.length
  let queryLen = queries.length
  intervals.sort((a,b)=>(a[1] - a[0]) - (b[1] - b[0]))
  console.log('区间根据长度从小到大排序：', intervals)
  var qs = []
  for(let i=0;i<queryLen;i++){
    qs.push({
      index: i,
      value: queries[i]
    })
  }
  qs.sort((a,b)=>a.value - b.value)
  console.log('查询根据从小到大排序：', qs)


  var fa = []
  for(let i=0;i<queryLen+1;i++){
    fa[i] = i
  }

  console.log('并查集：', fa)

  var find = function(x){
    if(fa[x] != x){
      fa[x] = find(fa[x])
    }
    return fa[x]
  }

  var ans = new Array(queryLen).fill(-1)

  for(let i=0;i<intervalLen;i++){
    let l      = intervals[i][0]
    let r      = intervals[i][1]
    let length = r-l+1
    console.log(`目前是第${i+1}个区间,左边是${l}，右边是${r}，长度为${length}`)
    let j = binaryFind(l, qs)
    // console.log(`二分查找到最小的符合左端点的查询j （qs的索引）=${j}，其值等于{index:${qs[j].index},value:${qs[j].value}}，并且find(j)等于${find(j)}`)

    for(j = find(j);j<queryLen && qs[j].value <= r;j=find(j+1)){
      ans[qs[j].index] = length
      console.log(`将ans的索引为${qs[j].index}的长度置为${length}`)
      fa[j] = j+1
      console.log(`更新fa[${j}]的值为${j+1}, 以后都不用再查这个了`)
    }
  }
  return ans

}

function binaryFind(val, qs){
  let l = 0
  let r = qs.length - 1
  while (l<r) {
    let mid = Math.floor((r+l)/2)
    if(qs[mid].value < val){
      l = mid +1 
    }else{
      r = mid
    }
  }
  if(qs[l].value < val){
    return -1
  }
  return l
}

// console.log(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]))      // 3,3,1,4
// console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]))  // 2,-1,4,6
console.log(minInterval([[3,5],[7,9],[7,10],[5,10],[1,8],[5,9],[5,5],[3,9],[7,8],[7,7]],
   [1,1,3,6,1,5,4,1,6,5]))
// [8,8,3,5,8,1,3,8,5,1]