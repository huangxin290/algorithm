/**
 * 有一棵根节点为 0 的 家族树 ，总共包含 n 个节点，节点编号为 0 到 n - 1 。给你一个下标从 0 开始的整数数组 parents ，其中 parents[i] 是节点 i 的父节点。由于节点 0 是 根 ，所以 parents[0] == -1 。

总共有 105 个基因值，每个基因值都用 闭区间 [1, 105] 中的一个整数表示。给你一个下标从 0 开始的整数数组 nums ，其中 nums[i] 是节点 i 的基因值，且基因值 互不相同 。

请你返回一个数组 ans ，长度为 n ，其中 ans[i] 是以节点 i 为根的子树内 缺失 的 最小 基因值。

节点 x 为根的 子树 包含节点 x 和它所有的 后代 节点。
 */

/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function (parents, nums) {
  const n = parents.length;
  const ans = Array(n).fill(1);
  let node = nums.indexOf(1);
  if (node < 0) { // 不存在基因值为 1 的点
      return ans;
  }

  // 建树
  const g = Array(n).fill(null).map(() => []);
  for (let i = 1; i < n; i++) {
      g[parents[i]].push(i);
  }

  const vis = new Set();
  function dfs(x) {
      vis.add(nums[x]);
      for (const son of g[x]) {
          if (!vis.has(nums[son])) {
              dfs(son);
          }
      }
  }

  let mex = 2; // 缺失的最小基因值
  while (node >= 0) {
      dfs(node);
      while (vis.has(mex)) { // node 子树包含这个基因值
          mex++;
      }
      ans[node] = mex; // 缺失的最小基因值
      node = parents[node]; // 往上走
  }
  return ans;
};

console.log(smallestMissingValueSubtree([-1,0,0,2], [1,2,3,4])) // [5,1,1,1]
console.log(smallestMissingValueSubtree([-1,0,1,0,3,3], [5,4,6,2,1,3])) // [7,1,1,4,2,1]