/*
    ref: https://www.geeksforgeeks.org/doubly-circular-linked-list-set-1-introduction-and-insertion/
    ref: https://www.softwaretestinghelp.com/doubly-linked-list-in-java/

    A circular doubly linked list is one of the complex structures. In this list, the last node of the doubly linked list 
    contains the address of the first node and the first node contains the address of the last node. Thus in a circular doubly linked list, 
    there is a cycle and none of the node pointers are set to null.

    Advantages of a Circular Double Linked List:

    The circular doubly linked list can be traversed from head to tail or tail to head.
    Going from head to tail or tail to head is efficient and takes only constant time O (1).
    It can be used for implementing advanced data structures including Fibonacci heap.

    Disadvantages:

    As each node needs to make space for the previous pointer, extra memory is required.
    We need to deal with lots of pointers while performing operations on a circular doubly linked list. If pointers are not handled properly, then the implementation may break.

*/


class CDoublyLinkedListNode{

    prev: CDoublyLinkedListNode | null;
    next: CDoublyLinkedListNode | null;
    val: any;

    constructor(val: any){
        this.val = val;
    }
}

export class CDoublyLinkedList{

    head: CDoublyLinkedListNode | null;
    tail: CDoublyLinkedListNode | null;
    size: number;

    constructor(){
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }

    length(){
        return this.size;
    }
    isEmpty(){
        if(this.size == 0) return true;
        else false;
    }
    insertAtFront(val: any){
        let newNode = new CDoublyLinkedListNode(val);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.size++;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.head.prev = this.tail;
            this.tail.next = newNode;
            this.head.next.prev = newNode;
            this.size++;
        }
    }
    insertAtEnd(val:any){
        let newNode = new CDoublyLinkedListNode(val);
        if(this.isEmpty()) return this.insertAtFront(val);
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.tail.next = this.head;
            this.size++;
        }
    }
    insertAtPosition(val: any, position: number){
        if(position < 1 || position > this.size) throw new Error('Position does not exists!');
        if(this.isEmpty()) return this.insertAtFront(val);
        if(this.size == 1) return this.insertAtEnd(val);
        let newNode = new CDoublyLinkedListNode(val);
        let curr = this.head;
        let index = 1;
        while(index <= position){
            if(index == position){
                newNode.next = curr
                newNode.prev = this.head;
                this.head.next = newNode;
                curr.prev = newNode;
                this.size++;
                break;
            }
            curr = curr.next;
            index++;
        }

    }
    removeFirst(){
        if(this.isEmpty()) return null;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
        }
        else{
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.size--;
        }
    }
    removeEnd(){
        if(this.isEmpty()) return null;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
        }
        else{
            this.tail = this.tail.prev;
            this.tail = this.head;
            this.size--;
        }
        return this.head;
    }
    removeAtPosition(val: any){
        if(this.isEmpty()) return null;
        if(this.head.val == val){
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.size--;
        }
        let curr = this.head;
        let index = 1;
        while(index < this.size){
            if(curr.next.val == val){
                curr.next = curr.next.next;
                curr.next.prev = curr.prev;
                this.size--;
                break;
            }
            curr = curr.next;
            index++;
        }
        return this.head;
    }
}