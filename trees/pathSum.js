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
      4,
      new TreeNode(
        2
      ),
      new TreeNode(
        1
      )
    ),
    new TreeNode(
      5)
  ),
  new TreeNode(
    3,
    new TreeNode(
      4
    ),
    new TreeNode(
      1
    )
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum, pathArray = [], pathCount = 0) {
  let output = 0;
  let map = {};

  const traverse = (root, pathSum) => {
    if (!root) return null;

    pathSum += root.val; // current path sum

    if (pathSum === targetSum) output++;
    if (map[pathSum - targetSum]) output += map[pathSum - targetSum];
    if (map[pathSum]) map[pathSum]++;
    else map[pathSum] = 1;

    if (root.left) traverse(root.left, pathSum);
    if (root.right) traverse(root.right, pathSum);

    map[pathSum]--;
  };

  traverse(root, 0);
  return output;
};

console.log(pathSum(tree, 7))
