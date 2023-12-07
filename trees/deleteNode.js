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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const findMin = (node) => {
    while(node.left){
      node = node.left
    }
    return node
  }

  const remove = (node, val) => {
    if(!node){
      return null
    }

    if(node.val === val){
      if(!node.left && !node.right){
        return null
      }

      else if(!node.left){
        return node.right
      }

      else if(!node.right){
        return node.left
      }

      else{
        const minNode = findMin(node.right)
        node.val = minNode.val
        node.right = remove(node.right, minNode.val)
      }

    } else if(val > node.val){
      node.right = remove(node.right, val)
    } else if(val < node.val){
      node.left = remove(node.left, val)
    }

    return node
  }

  return remove(root, key)
};

const tree = arrayToBinaryTree([4,2,7,1,3, 6, 11])

deleteNode(tree, 4)
console.log(tree)
