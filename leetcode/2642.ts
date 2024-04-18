/**
 * 给你一个有 n 个节点的 有向带权 图，节点编号为 0 到 n - 1 。图中的初始边用数组 edges 表示，其中 edges[i] = [fromi, toi, edgeCosti] 表示从 fromi 到 toi 有一条代价为 edgeCosti 的边。

请你实现一个 Graph 类：

Graph(int n, int[][] edges) 初始化图有 n 个节点，并输入初始边。
addEdge(int[] edge) 向边集中添加一条边，其中 edge = [from, to, edgeCost] 。数据保证添加这条边之前对应的两个节点之间没有有向边。
int shortestPath(int node1, int node2) 返回从节点 node1 到 node2 的路径 最小 代价。如果路径不存在，返回 -1 。一条路径的代价是路径中所有边代价之和。
 */

interface Nodes{
  [key:number]:{
    [ket:number]: number
  }
}

class Graph {
  public nodes:Nodes;
  constructor(n: number, edges: number[][]) {
      const nodes = {}
      for(let i=0;i<n;i++){
        nodes[i] = {}
      }
      for(let i=0;i<edges.length;i++){
        const edge = edges[i]
        nodes[edge[0]][edge[1]] = edge[2]
      }
      this.nodes = nodes
  }

  addEdge(edge: number[]): void {
    this.nodes[edge[0]][edge[1]] = edge[2]
  }

  shortestPath(node1: number, node2: number): number {
      // 从node1出发，算到node2的最短路径
      dfs
  }

  // 计算
  dfs(node1:number, node2:number, usedNode: number[]){

  }
}

/**
* Your Graph object will be instantiated and called as such:
* var obj = new Graph(n, edges)
* obj.addEdge(edge)
* var param_2 = obj.shortestPath(node1,node2)
*/

var g = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]])

console.log(g.shortestPath(3, 2)); // 返回 6 。从 3 到 2 的最短路径如第一幅图所示：3 -> 0 -> 1 -> 2 ，总代价为 3 + 2 + 1 = 6 。
console.log(g.shortestPath(0, 3)); // 返回 -1 。没有从 0 到 3 的路径。
console.log(g.addEdge([1, 3, 4])); // 添加一条节点 1 到节点 3 的边，得到第二幅图。
console.log(g.shortestPath(0, 3)); // 返回 6 。从 0 到 3 的最短路径为 0 -> 1 -> 3 ，总代价为 2 + 4 = 6 。