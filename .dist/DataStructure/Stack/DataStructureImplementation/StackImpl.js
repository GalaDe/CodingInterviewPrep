"use strict";
/*

    Stack:

    ref: https://iq.opengenus.org/time-complexity-of-stack/
    

    A Stack is a LIFO (Last In First Out) data structure. The last element that is placed in a stack is the first element that can be removed.
    Elements can be inserted and deleted only from one side of the list, called the top.
    The insertion of an element into stack is called pushing. Deletion of an element from the stack is called popping.
    In stacks, The last element in a list is tracked with a pointer called top.

    Usage:

    Stacks are commonly used when implementing Breadth-First-Search (BFS) or Depth-First-Search (DFS) for trees and graphs.

    Time Complexity: Note the performance of both Array and Linked List based implementation of Stack is same.

    ------------------------------------------------------------------------
    | OPERATION  |	BEST TC   |	WORST TC  | AVERAGE TC |  SPACE COMPLEXITY |
    ------------------------------------------------------------------------
    | Push	        O(1)	        O(N)	    O(1)	        O(1)       |
    | Pop	        O(1)	        O(1)	    O(1)	        O(1)       |
    | Peek	        O(1)	        O(1)	    O(1)	        O(1)       |
    ------------------------------------------------------------------------
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack2 = exports.Stack1 = void 0;
const SinglyLinkedListImpl_1 = require("../../LinkedList/DataStructureImplementation/SinglyLinkedListImpl");
class Stack1 {
    constructor() {
        this.stack = [];
    }
    constractor() {
        this.stack = [];
    }
    isEmpty() {
        if (this.stack.length == 0)
            return true;
    }
    size() {
        return this.stack.length;
    }
    top() {
        if (this.isEmpty())
            return null;
        return this.stack[this.stack.length - 1];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        if (this.size() == 0)
            throw new Error("Stack is empty!");
        return this.stack.pop();
    }
}
exports.Stack1 = Stack1;
class Stack2 {
    constructor() {
        this.stack = new SinglyLinkedListImpl_1.ListNode();
        this.countSize = 0;
    }
    size() {
        return this.countSize;
    }
    isEmpty() {
        if (this.size() == 0)
            return true;
        else
            false;
    }
    top() {
        if (this.isEmpty())
            return null;
        return this.stack.val;
    }
    push(item) {
        let node = new SinglyLinkedListImpl_1.ListNode(item);
        node.next = this.stack;
        this.stack = node;
        this.countSize++;
        return this.stack;
    }
    pop() {
        if (this.isEmpty())
            return null;
        let value = this.stack.val;
        this.stack = this.stack.next;
        this.countSize--;
        return value;
    }
}
exports.Stack2 = Stack2;
//# sourceMappingURL=StackImpl.js.map