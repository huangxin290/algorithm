/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let a = undefined, b = undefined
  let nodes = [root]
  // 必须同时找到，每次while里面是一层
  while (!a && !b) {
    let newNodes = []
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i]
      if (node.left) {
        newNodes.push(node.left)
        if (node.left.val === x) {
          a = node.val
        }
        if (node.left.val === y) {
          b = node.val
        }
      }
      if (node.right) {
        newNodes.push(node.right)
        if (node.right.val === x) {
          a = node.val
        }
        if (node.right.val === y) {
          b = node.val
        }
      }
    }
    nodes = newNodes
  }
  return !!(a && b && a !== b)
};

