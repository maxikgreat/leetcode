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
var maxLevelSum = function(root) {
  if (!root) {
    return 0
  }

  const queue = [root]
  let level = 1

  let maxSum
  let maxSumLevel

  while (queue.length) {
    let levelElements = queue.length
    let levelSum = 0

    while (levelElements > 0) {
      levelElements--
      const node = queue.shift()
      levelSum += node.val
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    if (levelSum > maxSum || typeof maxSum === 'undefined') {
      maxSum = levelSum
      maxSumLevel = level
    }

    level++
  }

  return maxSumLevel
};

const tree = arrayToBinaryTree([1,1,0,7,-8,-7,9])

console.log(maxLevelSum(tree))
