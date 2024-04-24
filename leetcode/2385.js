/**
 * 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。

每分钟，如果节点满足以下全部条件，就会被感染：

节点此前还没有感染。
节点与一个已感染节点相邻。
返回感染整棵树需要的分钟数。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  // 遍历初始化父节点，并找到起始的被感染的点
  let startNode = undefined
  function dfs(node){
    if(node.val === start){
      startNode = node
    }
    if(node.left){
      node.left.parent = node
      dfs(node.left)
    }
    if(node.right){
      node.right.parent = node
      dfs(node.right)
    }
  }
  dfs(root)

  // 开始感染
  let maxDeep = 0
  startNode.isAmounted = true
  function dfs2(node, deep){
    deep ++
    maxDeep = Math.max(maxDeep, deep)
    if(node.parent && !node.parent.isAmounted){
      node.parent.isAmounted = true
      dfs2(node.parent, deep)
    }
    if(node.left && !node.left.isAmounted){
      node.left.isAmounted = true
      dfs2(node.left, deep)
    }
    if(node.right && !node.right.isAmounted){
      node.right.isAmounted = true
      dfs2(node.right, deep)
    }
  }
  dfs2(startNode, 0)
  return maxDeep - 1
}

console.log(amountOfTime())