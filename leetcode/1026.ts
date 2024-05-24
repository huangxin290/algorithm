/**
 * 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

（如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）
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

function maxAncestorDiff(root: TreeNode | null): number {
    if(root === null){
      return 0
    }

    function dfs(root: TreeNode): { diff: number, min: number,max: number }{
      let result = { min: root.val, max: root.val, diff: 0 }
      if(root.left){
        const leftRes = dfs(root.left)
        result.min = Math.min(result.min, leftRes.min)
        result.max = Math.max(result.max, leftRes.max)
        result.diff = Math.max(result.diff, leftRes.diff)
      }
      if(root.right){
        const rightRes = dfs(root.right)
        result.min = Math.min(result.min, rightRes.min)
        result.max = Math.max(result.max, rightRes.max)
        result.diff = Math.max(result.diff, rightRes.diff)
      }
      result.diff = Math.max(result.diff, Math.abs(result.min - root.val), Math.abs(result.max - root.val))
      return result
    }
    const res = dfs(root)
    return res.diff
};