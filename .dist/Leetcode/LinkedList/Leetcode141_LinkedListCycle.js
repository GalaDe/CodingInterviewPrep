"use strict";
/*
    
    Leetcode 141: Easy: https://leetcode.com/problems/linked-list-cycle/

    Given head, the head of a linked list, determine if the linked list has a cycle in it.
    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
    Return true if there is a cycle in the linked list. Otherwise, return false.

    Example 1:

    Input: head = [3,2,0,-4], pos = 1
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

    Example 2:

    Input: head = [1,2], pos = 0
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCycle = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
function hasCycle(head) {
    if (head == null)
        return false;
    //use visited set to keep track of visited nodes to detect cycle
    let visited = new Set();
    let curr = head;
    while (curr !== null) {
        if (!visited.has(curr)) {
            visited.add(curr);
            curr = curr.next;
        }
        else
            return true;
    }
    return false;
}
exports.hasCycle = hasCycle;
;
//# sourceMappingURL=Leetcode141_LinkedListCycle.js.map