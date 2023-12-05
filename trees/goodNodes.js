function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(
      4),
    new TreeNode(
      5)
  ),
  new TreeNode(
    3,
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
var goodNodes = function(root, maxInPath = root.val, gNodes = 0) {
  if (!root) {
    return gNodes
  }

  if (root.val >= maxInPath) {
    maxInPath = root.val
    gNodes++
  }

  let left = goodNodes(root.left, maxInPath, gNodes)
  let right = goodNodes(root.right, maxInPath, gNodes)

  // console.log(left)
  // console.log(right)

  return Math.max(left, right)
}

console.log(goodNodes(tree))
