"use strict";
/*
        Time Complexity: Time complexity of both operations enqueue() and dequeue() is O(1) as we only change few pointers in both operations.
                         There is no loop in any of the operations.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueArr = void 0;
class QueueArr {
    constructor() {
        this.queue = [];
    }
    isEmpty() {
        if (this.queue.length == 0)
            return true;
    }
    //add an item to the queue.
    enqueue(val) {
        return this.queue.push(val);
    }
    //The shift() method removes the first element from an array and returns that removed element. 
    //This method changes the length of the array.
    dequeue() {
        if (this.isEmpty())
            return new Error('Queue is empty!');
        return this.queue.shift();
    }
    //Get the element at the front of the queue without removing it.
    peek() {
        return this.queue[0];
    }
}
exports.QueueArr = QueueArr;
//# sourceMappingURL=QueueArrayImpl.js.map