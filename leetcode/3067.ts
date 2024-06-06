/**
 * 给你一棵无根带权树，树中总共有 n 个节点，分别表示 n 个服务器，服务器从 0 到 n - 1 编号。同时给你一个数组 edges ，其中 edges[i] = [ai, bi, weighti] 表示节点 ai 和 bi 之间有一条双向边，边的权值为 weighti 。再给你一个整数 signalSpeed 。

如果两个服务器 a ，b 和 c 满足以下条件，那么我们称服务器 a 和 b 是通过服务器 c 可连接的 ：

a < b ，a != c 且 b != c 。
从 c 到 a 的距离是可以被 signalSpeed 整除的。
从 c 到 b 的距离是可以被 signalSpeed 整除的。
从 c 到 b 的路径与从 c 到 a 的路径没有任何公共边。
请你返回一个长度为 n 的整数数组 count ，其中 count[i] 表示通过服务器 i 可连接 的服务器对的 数目 。
 */

function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
  const obj: { [key: string]: { [key: string]: number } } = {}
  for (let i = 0, n = edges.length; i < n; i++) {
    const a = edges[i][0]
    const b = edges[i][1]
    const space = edges[i][2]
    if(!obj[a]){
      obj[a] = {}
    }
    if(!obj[b]){
      obj[b] = {}
    }
    obj[a][b] = space
    obj[b][a] = space
  }

  let ans: number[] = []
  for (let i = 0, n = edges.length; i <= n; i++) {
    ans.push(getConnectCount(i))
  }

  function getConnectCount(a: number): number {
    const keys = Object.keys(obj[a])
    if (keys.length <= 1) {
      return 0
    }
    const n = keys.length
    let leftCount = 0
    let res = 0
    for (let i = 0; i < n; i++) {
      const b = keys[i]
      const currCount = dfs('' + a, b, obj[a][b])
      res += currCount * leftCount
      leftCount += currCount
    }
    return res
  }

  function dfs(a: string, b: string, space: number): number {
    let sum = 0
    if (space % signalSpeed === 0) {
      sum++
    }
    for (let next in obj[b]) {
      if(next === a){
        continue
      }
      sum += dfs(b, next, space + obj[b][next])
    }
    return sum
  }

  return ans
};

console.log(countPairsOfConnectableServers([[0, 1, 1], [1, 2, 5], [2, 3, 13], [3, 4, 9], [4, 5, 2]], 1)) // [0,4,6,6,4,0]
console.log(countPairsOfConnectableServers([[0, 6, 3], [6, 5, 3], [0, 3, 1], [3, 2, 7], [3, 1, 6], [3, 4, 2]], 3)) // [2,0,0,0,0,0,2]

