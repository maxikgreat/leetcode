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
var deleteMiddle = function(head) {
  if (!head.next) {
    return  undefined
  }
  let length = 1
  let current = head

  while (current.next) {
    length++
    current = current.next
  }

  const middleNode = Number.isInteger(length / 2) ? (length / 2 )+ 1 : Math.ceil(length / 2)

  length = 1
  current = head

  while (current.next) {
    length++

    if (length === middleNode) {
      current.next = current.next?.next
      break
    }

    current = current.next
  }

  return head
};

console.log(printList(head))

console.log(deleteMiddle(head))

console.log(printList(head))

