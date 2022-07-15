"use strict";
/*
     ---------------------------------------
     Uses of Linked List:
     ---------------------------------------

     Some of the real-life applications of the linked list are as follows:

     1. Used to store single or bivariable polynomials.
     2. Act as a base for certain data structures like Queue, Stack, Graph.
     3. Strategy for file allocation schemes by Operating System.
     4. Keep track of free space in the secondary disk. All the free spaces can be linked together.
     5. Turn-based games can use a circular linked list to decide which player is about to be played. Once the player finishes its turn we move to the next player.
     6. To keep records of items such as music, videos, images, web pages, etc which link to one another and allows to traverse between them sequentially.


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.printList = exports.reverse = exports.remove = exports.addNodeAtPosition = exports.addNodeLast = exports.addNodeFront = exports.isEmpty = exports.getSize = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
function getSize(list) {
    let curr = list;
    let size = 0;
    while (curr != null) {
        curr = curr.next;
        size++;
    }
    return size;
}
exports.getSize = getSize;
function isEmpty(list) {
    if (getSize(list) == 0)
        return true;
    else
        false;
}
exports.isEmpty = isEmpty;
function addNodeFront(value, list) {
    let head = new ListNode(value);
    head.next = list;
    return head;
}
exports.addNodeFront = addNodeFront;
function addNodeLast(value, list) {
    let tail = new ListNode(value);
    let curr = list;
    while (curr != null) {
        if (curr.next == null) {
            curr.next = tail;
            break;
        }
        curr = curr.next;
    }
    return list;
}
exports.addNodeLast = addNodeLast;
// Add Node to a particular position of the list
function addNodeAtPosition(value, list, position) {
    let newNode = new ListNode(value);
    let curr = list;
    let count = 0;
    if (position == 0) {
        newNode.next = list;
    }
    else {
        while (count <= position) {
            if (count == position) {
                list.next = newNode;
                newNode.next = curr;
                break;
            }
            curr = curr.next;
            count++;
        }
    }
    return list;
}
exports.addNodeAtPosition = addNodeAtPosition;
function remove(list, val) {
    let size = getSize(list);
    if (size == 0)
        throw new Error('List is Empty!');
    if (size == 1) {
        if (val == list.val) {
            this.head = null;
            return this.head;
        }
        else
            throw new Error('Value to delete doesn not exists in the list');
    }
    let curr = list;
    let tempSize = size;
    while (curr != null) {
        if (curr.val == val) {
            list = list.next;
            size--;
            break;
        }
        else if (curr.next.val == val) {
            curr.next = curr.next.next;
            size--;
            break;
        }
        curr = curr.next;
    }
    if (tempSize != size)
        console.log('Value does not exists in the list!');
    return list;
}
exports.remove = remove;
function reverse(list) {
    if (list == null)
        return null;
    let curr = list;
    let prev = null;
    let next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
exports.reverse = reverse;
function printList(list) {
    while (list != null) {
        console.log(list.val);
        list = list.next;
    }
}
exports.printList = printList;
//# sourceMappingURL=SinglyLinkedListImpl.js.map