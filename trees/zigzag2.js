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
 * @return {number}
 */
var longestZigZag = function(root) {
  let longest = 0
  const stack = [[root, 0, null]]

  while (stack.length) {
    const [
      node,
      current,
      right
    ] = stack.pop()

    if (node) {
      longest = Math.max(longest, current)
      let currentLeft = right !== null && right === false ? current + 1 : 1
      let currentRight = right !== null && right === true ? current + 1 : 1
      stack.push([node.left, currentLeft, false])
      stack.push([node.right, currentRight, true])
    }
  }

  return longest
};

const tree2 = arrayToBinaryTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1])

const blatree = new TreeNode(1, new TreeNode(1, new TreeNode(1, new TreeNode(1, new TreeNode(1)))))

console.log(JSON.stringify(blatree, undefined, 4))
console.log(longestZigZag(blatree))

// console.log(JSON.stringify(tree2, undefined, 4))
