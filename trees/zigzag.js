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
  // use dfs = stack
  const stack = [root]
  const calculateZigzag = (node) => {
    let root = node
    let currentNode = node
    let flag = false
    let max = 0
    let current = 0
    let direction = flag ? 'left' : 'right'

    while (currentNode[direction]) {
      current++
      currentNode = currentNode[direction]
      flag = !flag
      direction = flag ? 'left' : 'right'
    }

    if (!flag) {
      flag = true
    }

    max = current
    current = 0
    currentNode = root

    direction = flag ? 'left' : 'right'
    while (currentNode[direction]) {
      current++
      currentNode = currentNode[direction]
      flag = !flag
      direction = flag ? 'left' : 'right'
    }

    return max > current ? max : current
  }

  while (stack.length) {
    const node = stack.pop()

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }

    let current = calculateZigzag(node)

    if (current >= longest) {
      longest = current
    }
  }

  return longest
};

const tree2 = arrayToBinaryTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1])
console.log(tree2)
console.log(longestZigZag(tree2))

// console.log(JSON.stringify(tree2, undefined, 4))
