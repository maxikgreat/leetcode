function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function printList(head) {
  let current = head

  console.log(head.val)

  while (current.next) {
    current = current.next
    console.log(current.val)
  }
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
const head2 = new ListNode(1, new ListNode(2))
const head3 = new ListNode(1, new ListNode(2, new ListNode(3)))
const head4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head?.next) {
    return head
  }

  let currentNode = head
  let nextNode = currentNode.next
  let nextNextNode
  currentNode.next = null

  while (nextNode) {
    nextNextNode = nextNode?.next
    nextNode.next = currentNode

    currentNode = nextNode
    nextNode = nextNextNode
  }

  return currentNode
};

const newHead = reverseList(head4)
printList(newHead)

// 1 2 3 4 5
// 1 3 2 4 5
//
