/**
 * 给你一棵二叉树的根 root ，请你将每个节点的值替换成该节点的所有 堂兄弟节点值的和 。

如果两个节点在树中有相同的深度且它们的父节点不同，那么它们互为 堂兄弟 。

请你返回修改值之后，树的根 root 。

注意，一个节点的深度指的是从树根节点到这个节点经过的边数。
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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if(root === null){
    return root
  }
  root.val = 0
  let nodes = [root]
  while (nodes.length) {
    // 每次向下一层
    // 先遍历一遍，获取子节点的和
    let sum = 0
    const subs:number[] = []
    const newNodes: TreeNode[] = []
    // 收集和统计和
    for(let i=0,n=nodes.length;i<n;i++){
      let leftAndRight = 0
      const leftNode = nodes[i].left
      if(leftNode){
        leftAndRight += leftNode.val
        newNodes.push(leftNode)
      }
      const rightNode = nodes[i].right
      if(rightNode){
        leftAndRight += rightNode.val
        newNodes.push(rightNode)
      }
      sum += leftAndRight
      subs.push(leftAndRight)
    }

    // 分发和赋值
    for(let i=0,n=nodes.length;i<n;i++){
      const leftNode = nodes[i].left
      if(leftNode){
        leftNode.val = sum - subs[i]
      }
      const rightNode = nodes[i].right
      if(rightNode){
        rightNode.val = sum - subs[i]
      }
    }
    nodes = newNodes
  }
  return root
};

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

const ex1 = new TreeNode(5, new TreeNode(4, new TreeNode(1), new TreeNode(10)), new TreeNode(9, null, new TreeNode(7)))
console.log(replaceValueInTree(ex1));

const ex2 = new TreeNode(3, new TreeNode(1), new TreeNode(2))
console.log(replaceValueInTree(ex2));
