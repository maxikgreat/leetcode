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
var oddEvenList = function(head) {
  if (!head?.next || !head.next?.next) {
    return head
  }

  let odd = head
  let even = head.next
  let evenHead = even

  while (even?.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
};

oddEvenList(head)

// 1 2 3 4 5
// 1 3 2 4 5
//
