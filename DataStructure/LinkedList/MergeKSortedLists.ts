import { ListNode } from './DataStructureImplementation/SinglyLinkedListImpl';

/*
    You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
    Merge all the linked-lists into one sorted linked-list and return it.

    Example 1:
    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]
    Explanation: The linked-lists are:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    merging them into one sorted list:
    1->1->2->3->4->4->5->6

    Example 2:
    Input: lists = []
    Output: []

    Example 3:
    Input: lists = [[]]
    Output: []
*/

//lists = [[1,4,5],[1,3,4],[2,6]]
export function mergeKLists(lists:Array<ListNode|null>): ListNode | null {

    if (lists == null || lists.length == 0) return null;
    if (lists.length <= 1) return lists[0];

    let curr: ListNode = lists[0];
    let arr: number[] = [];
    let i = 0;

    // Put all elements into one array
    while(curr != null || i <= lists.length - 1){
        if(curr == null){
            i++;
            curr = lists[i];
            continue;
        }
        arr.push(curr.val);
        curr = curr.next;
    }
    if (arr.length === 0) return null;
    arr.sort((a,b) => a-b);

    // Created a ListNode based on the sorted array
    let head = new ListNode();
    let current = head;
    for (let i = 0; i < arr.length; i++) {
        current.val = arr[i];
        if (i < arr.length - 1) {
            current.next = new ListNode();
            current = current.next;
        }
    }
    return head;
};


//Solution #2 uses less space then Solution #1
function mergeLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1==null && list2==null) return null;
    if (list1!==null && list2==null) return list1;
    if (list1==null && list2!==null) return list2;
 
    var p1: ListNode = list1;
    var pr1: ListNode | null = null;
   
    while(p1!==null) {
       if (list2!==null && list2.val<=p1.val) {
          let nx2 = list2.next;
          if (pr1==null) {
             list1 = list2;
             pr1 = list1;
          } else {
             pr1.next = list2;
             pr1 = list2;
          }   
          list2.next = p1;
          list2 = nx2;
       } else {
          pr1 = p1;
          p1 = p1.next;
       }   
    } 
 
    pr1.next = list2;
    return list1;
 }
 
 function mergeKLists_solution2(lists: Array<ListNode | null>): ListNode | null {
    if (lists==null || lists.length==0) return null;
    if (lists.length<=1) return lists[0];
 
    var merged: ListNode = lists[0];
    for (let i = 1; i < lists.length; i++) {
       merged = mergeLists(merged, lists[i]);
    }
    return merged;
 };