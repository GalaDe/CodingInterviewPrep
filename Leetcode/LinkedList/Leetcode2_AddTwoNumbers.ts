
//Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//     }
//  }

/*

   Leetcode 2: Medium: https://leetcode.com/problems/add-two-numbers/
   
   You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
   Add the two numbers and return the sum as a linked list.
   You may assume the two numbers do not contain any leading zero, except the number 0 itself.

   Example: 

   Input: l1 = [2,4,3], l2 = [5,6,4]
   Output: [7,0,8]
   Explanation: 342 + 465 = 807.
*/

import { ListNode } from '../../DataStructure/LinkedList/DataStructureImplementation/SinglyLinkedListImpl';

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
        let currentHead1: ListNode | null = l1;
        let currentHead2: ListNode | null = l2;
        let currentHead3: ListNode | null = dummyHead;
        let carry: number = 0;

        // case: not reach both ends of lists & case: extra carry of '1' at the end
        while (currentHead1 || currentHead2 || carry) {
                let x: number = (currentHead1?.val) ?? 0;
                let y: number = (currentHead2?.val) ?? 0;
                let sum: number = x + y + carry;

                carry = (sum / 10) >> 0 // slightly faster than Math.floor(sum/10)
                currentHead3.next = new ListNode(sum % 10);

                // advance heads
                currentHead1 = currentHead1?.next!;
                currentHead2 = currentHead2?.next!;
                currentHead3 = currentHead3.next!;
        }

        return dummyHead.next;

};