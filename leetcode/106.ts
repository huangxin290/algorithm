/**
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
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

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 1) {
    return new TreeNode(inorder[0])
  }
  const rootIndex = postorder.length - 1
  const inorderRootIndex = inorder.indexOf(postorder[rootIndex])

  return new TreeNode(postorder[rootIndex],
    inorderRootIndex > 0 ? buildTree(inorder.slice(0, inorderRootIndex), postorder.slice(0, inorderRootIndex)) : null,
    rootIndex - inorderRootIndex > 0 ? buildTree(inorder.slice(inorderRootIndex + 1), postorder.slice(inorderRootIndex, rootIndex)) : null)
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])) // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])) // [-1]
