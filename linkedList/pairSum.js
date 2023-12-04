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
const head6 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))

/**
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  if (!head) {
    return 0
  }

  let i = 1
  let current = head

  while (current.next) {
    i++
    current = current.next
  }

  const middle = i /= 2

  if (middle < 2) {
    return head.val + head.next.val
  }

  const values = []
  current = head
  i = 0
  let middleReached = false
  while (current) {
    if (i + 1 > middle) {
      middleReached = true
      i--
    }

    if (!middleReached) {
      values[i] = values[i] ? values[i] + current.val : current.val
      i++
    } else {
      values[i] = values[i] ? values[i] + current.val : current.val
      i--
    }
    current = current.next
  }
  console.log(values)

  return Math.max(...values)
};

console.log(pairSum(head6))

// 1 2 3 4 5 6
// 7
// 7
// 7
