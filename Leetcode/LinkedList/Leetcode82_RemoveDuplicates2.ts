import { ListNode } from './ListNode';

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

/*
    Leetcode 82: Medium: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

    Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
    leaving only distinct numbers from the original list. Return the linked list sorted as well.

    Example: 1->2->3->3->4->4->5 ===> 1->2->5

    -------------------------------------------------------------------------------------------------------------------------------------

    Solution: 
    
    The best solution would be to create dummy node to handle the edge case of removing the head node.
    For example, let's use here pseudo-head with zero value to ensure that the situation "delete the list head" could never happen, 
    and all nodes to delete are "inside" the list.

    Since the list is sorted, we just need to compare the adjacent elements, then remove all duplicates.

    -------------------------------------------------------------------------------------------------------------------------------------

    Time complexity: O(N) since it's one pass along the input list.

    Space complexity: O(1) because we don't allocate any additional data structure.
*/

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let prev = dummy;
    let curr = head;
  
    while (curr.next !== null) {
      if (curr.val === curr.next.val) {
        const temp = curr.val;
        while (curr.val === temp) {
          curr = curr.next;
        }
        prev.next = curr;
      } 
      else {
        prev = curr;
        curr = curr.next;
      }
    }
  
    return dummy.next;
  }