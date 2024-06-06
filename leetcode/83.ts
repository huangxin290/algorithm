/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const numSet = new Set()
  const oriHead = head
  if(!head.val){
    return head
  }
  numSet.add(head.val)
  while (head && head.next) {
    const val = head.next.val
    if (!numSet.has(val)) {
      numSet.add(val)
      head = head.next
      continue
    } else {
      // 删除
      head.next = head.next.next
    }
  }
  return oriHead
}