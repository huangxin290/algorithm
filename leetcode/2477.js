/**
 * 给你一棵 n 个节点的树（一个无向、连通、无环图），每个节点表示一个城市，编号从 0 到 n - 1 ，且恰好有 n - 1 条路。0 是首都。给你一个二维整数数组 roads ，其中 roads[i] = [ai, bi] ，表示城市 ai 和 bi 之间有一条 双向路 。

每个城市里有一个代表，他们都要去首都参加一个会议。

每座城市里有一辆车。给你一个整数 seats 表示每辆车里面座位的数目。

城市里的代表可以选择乘坐所在城市的车，或者乘坐其他城市的车。相邻城市之间一辆车的油耗是一升汽油。

请你返回到达首都最少需要多少升汽油。
 */

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
  const roadMap = {}
  const n = roads.length
  for(let i=0;i<=n;i++){
    roadMap[i] = []
  }
  for(let i=0;i<n;i++){
    const road = roads[i]
    roadMap[road[0]].push(road[1])
    roadMap[road[1]].push(road[0])
  }
  const result = {
    res: 0
  }
  const zeroLines = roadMap[0]
  for(let i=0;i<zeroLines.length;i++){
    const num = dfs(roadMap, zeroLines[i], seats, 0, result)
  }

  return result.res
};


// 深度优先
function dfs(roadMap, currentNum, seats, fatherNum, result){
  let res = 0
  if(roadMap[currentNum].length === 1){
    result.res += 1
    return 1
  }
  if(roadMap[currentNum].length){
    for(let i=0;i<roadMap[currentNum].length;i++){
      const nextStep = roadMap[currentNum][i]
      if(nextStep !== fatherNum){
        res += dfs(roadMap, nextStep, seats, currentNum, result)
      }
    }
  }
  res ++
  result.res += Math.ceil(res/seats)
  return res
}

console.log(minimumFuelCost([[0,1],[0,2],[0,3]], 5)); // 3
console.log(minimumFuelCost([[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], 2)); // 7
console.log(minimumFuelCost([], 1)); // 0