/**
 * n 座城市和一些连接这些城市的道路 roads 共同组成一个基础设施网络。每个 roads[i] = [ai, bi] 都表示在城市 ai 和 bi 之间有一条双向道路。

两座不同城市构成的 城市对 的 网络秩 定义为：与这两座城市 直接 相连的道路总数。如果存在一条道路直接连接这两座城市，则这条道路只计算 一次 。

整个基础设施网络的 最大网络秩 是所有不同城市对中的 最大网络秩 。

给你整数 n 和数组 roads，返回整个基础设施网络的 最大网络秩 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximal-network-rank
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  var obj = {}
  for(let i=0;i<n;i++){
    obj[i] = []
  }
  var len = roads.length
  for(let i=0;i<len;i++){
    obj[roads[i][0]].push(roads[i][1])
    obj[roads[i][1]].push(roads[i][0])
  }
  let res = Number.MIN_VALUE
  for(let key1 in obj){
    for(let key2 in obj){
      if(key1===key2){
        continue
      }
      let sum = obj[key1].length + obj[key2].length - (obj[key1].indexOf(Number(key2)) > -1?1:0)
      res = Math.max(res, sum)
    }
  }
  
  return res
}

console.log(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]])) // 4
console.log(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]])) // 5
console.log(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]])) // 5