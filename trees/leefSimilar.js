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

const getRootVal = (root, elements) => {
  if (root.left) {
    getRootVal(root.left, elements)
  }

  if (root.right) {
    getRootVal(root.right, elements)
  }

  if (!root.left && !root.right) {
    elements.push(root.val)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leefSimilar = function(root) {
  if (!root) {
    return false
  }

  const elements = []

  getRootVal(root, elements)
  console.log(elements)
};


leefSimilar(tree)
