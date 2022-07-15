"use strict";
/*

    Time Complexity: Time complexity of both operations enqueue() and dequeue() is O(1) as we only change few pointers in both operations.
                     There is no loop in any of the operations.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueLL = void 0;
class ListNode {
    constructor(val) {
        this.val = val;
    }
}
class QueueLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            false;
    }
    length() {
        return this.size;
    }
    enqueue(val) {
        let newNode = new ListNode(val);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this.head;
    }
    dequeue() {
        if (this.isEmpty())
            throw new Error('Queue is empty!');
        let val = this.head.val;
        this.head = this.head.next;
        this.size--;
        return val;
    }
    peek() {
        return this.head.val;
    }
}
exports.QueueLL = QueueLL;
//# sourceMappingURL=QueueLinkedListImpl.js.map