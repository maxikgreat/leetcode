class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
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

  return root;
}

// Example usage:
const nullableArray = [1, 2, 3, null, 4, null, 5, null, null, 6, 7];
const binaryTree = arrayToBinaryTree(nullableArray);

console.log(JSON.stringify(binaryTree, undefined, 2))


//      1
//    2   3
//   n 4 n 5
// nn 67
//
