"use strict";
/*
    A Doubly Linked List(DLL) is a linear data structure that contains an extra pointer, typically called the previous pointer,
    together with the next pointer and data

    ----------------------------------
    Advantages Of DLL:
    ----------------------------------

    1. Reversing the doubly linked list is very easy.
    2. It can allocate or reallocate memory easily during its execution.
    3. As with a singly linked list, it is the easiest data structure to implement.
    4. The traversal of this doubly linked list is bidirectional which is not possible in a singly linked list.
    5. Deletion of nodes is easy as compared to a Singly Linked List. A singly linked list deletion requires a pointer to the node
       and previous node to be deleted but in the doubly linked list, it only required the pointer which is to be deleted.
    
    ----------------------------------
    Disadvantages Of DLL:
    ----------------------------------

    1. It uses extra memory when compared to the array and singly linked list.
    2. Since elements in memory are stored randomly, therefore the elements are accessed sequentially no direct access is allowed.

    ----------------------------------
    Uses Of DLL:
    ----------------------------------

    1. It is used in the navigation systems where front and back navigation is required.
    2. It is used by the browser to implement backward and forward navigation of visited web pages that is a back and forward button.
    3. It is also used to represent a classic game deck of cards.
    4. It is also used by various applications to implement undo and redo functionality.
    5. Doubly Linked List is also used in constructing MRU/LRU (Most/least recently used) cache.
    6. Other data structures like stacks, Hash Tables, Binary trees can also be constructed or programmed using a doubly-linked list.
    7. Also in many operating systems, the thread scheduler(the thing that chooses what process needs to run at which time)
       maintains a doubly-linked list of all processes running at that time.

    ref: https://www.devmaking.com/learn/data-structures/doubly-linked-list/typescript/
         https://javascript.plainenglish.io/build-a-linked-list-in-typescript-78a4414d140e

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
class DoublyLinkedListNode {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    length() {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            false;
    }
    add(val) {
        if (this.isEmpty())
            return this.addNodeFront(val);
        else
            return this.addNodeLast(val);
    }
    addNodeFront(val) {
        let tmp = new DoublyLinkedListNode(val);
        if (this.isEmpty()) {
            this.head = tmp;
            this.tail = tmp;
            this.size++;
        }
        else {
            tmp.next = this.head;
            tmp.prev = null;
            this.head.prev = tmp;
            this.head = tmp;
            this.size++;
        }
    }
    addNodeLast(val) {
        if (this.isEmpty())
            return this.addNodeFront(val);
        let tmp = new DoublyLinkedListNode(val);
        this.tail.next = tmp;
        tmp.prev = this.tail;
        tmp.next = null;
        this.tail = tmp;
        this.size++;
    }
    addNodeAtPosition(val, position) {
        if (this.isEmpty())
            return this.addNodeFront(val);
        if (position > this.size || position < 1)
            throw new Error(`There is no such position. The liked list size is: ${this.size}`);
        if (position == this.size)
            return this.addNodeLast(val);
        let curr = this.head;
        let tmp = new DoublyLinkedListNode(val);
        let count = 1;
        while (curr != null) {
            if (count == position) {
                tmp.next = curr.next;
                tmp.prev = curr;
                curr.next = tmp;
                if (tmp.next.prev != null)
                    tmp.next.prev = tmp;
                this.size++;
                break;
            }
            count++;
            curr = curr.next;
        }
        return this.head;
    }
    removeNodeAtPosition(position) {
        if (this.isEmpty())
            return null;
        if (position > this.size || position < 1)
            throw new Error(`There is no such position. The liked list size is: ${this.size}`);
        //If deleted node is the head
        if (position == 1) {
            this.head = this.head.next;
            if (this.head != null)
                this.head.next.prev = null;
            else
                this.tail = null;
            this.size--;
            return this.head;
        }
        let curr = this.head;
        let count = 1;
        while (curr != null) {
            if (count == position) {
                //If deleted node is the last node
                if (curr.next == null) {
                    this.tail = curr.prev;
                }
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
                this.size--;
                return this.head;
            }
            count++;
            curr = curr.next;
        }
    }
    reverse() {
        if (this.isEmpty())
            return null;
        if (this.size == 1)
            return this.head;
        let temp = null;
        let curr = this.head;
        while (curr != null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        if (temp != null)
            this.head = temp.prev;
        return this.head;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoblyLinkedListImpl.js.map