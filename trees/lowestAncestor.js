function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function arrayToBinaryTree(arr) {
  if (!arr.length) {
    return null;
  }

  // Helper function to create a TreeNode from the array index
  function createNode(index) {
    if (index >= arr.length || arr[index] === null) {
      return null;
    }

    return new TreeNode(arr[index]);
  }

  // Create the root node
  const root = createNode(0);
  const queue = [root];
  let i = 1;

  // Use BFS to build the binary tree
  while (i < arr.length) {
    const currentNode = queue.shift();

    // Create left child
    currentNode.left = createNode(i++);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    // Create right child
    currentNode.right = createNode(i++);
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return root
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return null
  }

  if (root.val === p.val || root.val === q.val) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p , q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  }

  return left || right || null
};

const tree = arrayToBinaryTree([3,5,1,6,2,0,8,null,null,7,4])

const p = tree.left.right.right
const q = tree.right.right

console.log(lowestCommonAncestor(tree, p, q))
