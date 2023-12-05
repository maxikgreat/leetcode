function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(
  1,
  new TreeNode(
    2
  ),
  new TreeNode(
    3,
    new TreeNode(
      4),
    new TreeNode(
      5)
  )
)
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  console.log(leftDepth, rightDepth)
  return Math.max(leftDepth, rightDepth) + 1
};


maxDepth(tree)
