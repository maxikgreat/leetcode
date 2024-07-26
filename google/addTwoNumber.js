function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

const array1 = [1,0,9]
const array2 = [5,7,8]

const list1 = createLinkedList(array1);
const list2 = createLinkedList(array2);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let start = new ListNode()
  let res = start

  let carry = 0
  while (l1 && l2) {
    if (l1.val + l2.val + carry < 10) {
      res.val = l1.val + l2.val + carry
      carry = 0
    } else {
      res.val = (l1.val + l2.val + carry) % 10
      carry = 1
    }

    if (l1.next || l2.next) {
      res.next = new ListNode()
      res = res.next
    }

    l1 = l1.next
    l2 = l2.next
  }

  while (l1?.val) {
    if (l1.val + carry < 10) {
      res.val = l1.val + carry
      carry = 0
    } else {
      res.val = (l1.val + carry) % 10
      carry = 1
    }

    if (l1.next) {
      res.next = new ListNode()
      res = res.next
    }
    l1 = l1.next
  }

  while (l2?.val) {
    if (l2.val + carry < 10) {
      res.val = l2.val + carry
      carry = 0
    } else {
      res.val = (l2.val + carry) % 10
      carry = 1
    }
    if (l2.next) {
      res.next = new ListNode()
      res = res.next
    }
    l2 = l2.next
  }

  if (carry) {
    res.next = new ListNode(1)
  }

  return start
};

console.log(addTwoNumbers(
  list1, list2
))
