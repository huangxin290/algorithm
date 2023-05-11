/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null){
    return null
  }
  if(root.left !== undefined || root.right !== undefined){
    let temp = root.left
    root.left = root.right
    root.right = temp
  }
  if(root.left !== undefined){
    invertTree(root.left)
  }
  if(root.right !== undefined){
    invertTree(root.right)
  }
  return root
}
