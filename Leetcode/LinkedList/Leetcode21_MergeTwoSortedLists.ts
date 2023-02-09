/*

    Leetcode 21: Easy: https://leetcode.com/problems/merge-two-sorted-lists/

    You are given the heads of two sorted linked lists list1 and list2.
    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
    Return the head of the merged linked list.

    Example:

    1 - 2 - 4
    1 - 3 - 4

    1 - 1 - 2 - 3 - 4 - 4

*/

import { ListNode } from "./ListNode";


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(list1 == null && list2 == null) return null;
    if(list1 == null && list2 !== null) return list2;
    if(list1 !== null && list2 == null) return list1;


    let mergedList = new ListNode(-1);
    let prev: ListNode = mergedList;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            prev.next = list1;
            list1 = list1.next;
        }
        else{
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if(list1 == null)
        prev.next = list2;
    else
        prev.next = list1;

    return mergedList.next;

};