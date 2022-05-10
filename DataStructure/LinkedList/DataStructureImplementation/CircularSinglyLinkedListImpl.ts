/*
    ref: https://learnersbucket.com/tutorials/data-structures/circular-linked-list-implementation-in-javascript/
         https://www.programiz.com/dsa/circular-linked-list


    A circular linked list is a type of linked list in which the first and the last nodes are also connected to each other to form a circle.

    There are basically two types of circular linked list:
        1. Circular Singly Linked List: the address of the last node consists of the address of the first node.
        2. Circular Doubly Linked List: in addition to the last node storing the address of the first node, the first node will also store the address of the last node.

    ------------------------------------------------
    Time Complexity:
    ------------------------------------------------
    1. Insertion Operation	O(1) or O(n)

    The insertion operations that do not require traversal have the time complexity of O(1).
    And, an insertion that requires traversal has a time complexity of O(n).

    2. Deletion Operation	O(1)
    ------------------------------------------------

    Space Complexity: O(1)
    ------------------------------------------------

    Why Circular Linked List?

    1. The NULL assignment is not required because a node always points to another node.
    2. The starting point can be set to any node.
    3. Traversal from the first node to the last node is quick.

    Circular Linked List Applications:

    1. It is used in multiplayer games to give a chance to each player to play the game.
    2. Multiple running applications can be placed in a circular linked list on an operating system. The os keeps on iterating over these applications

    Disadvantages of circular linked list:

    1. Implementing a circular linked list is very complex compared to its other variants.
    2. Reversing it also is a complex task.
    3. If not traversed properly we can end up in an infinite loop.
    4. Like single and doubly linked list, it also does not support direct accessing of elements.
*/

class CNode{

    next: CNode|null;
    val: any;

    constructor(val?: any){
       this.val = val;
    }

}

export class CircularLinkedList{

    head: CNode | null;
    tail: CNode | null;
    size: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0; 
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        if(this.getSize() == 0) return true;
        else false;
    }

    insertAtStart(val: any){
        let newNode = new CNode(val);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
            this.size++;
            return this.head;
        }
        else{
            let temp = this.head;
            newNode.next = temp;
            this.head = newNode;
            this.tail.next = this.head;
            // newNode.next = this.head;
            // this.head = newNode;
            // this.tail.next = this.head;
        }
        this.size++;
        return this.head;
    }

    insertAtEnd(val: any){
        let newNode = new CNode(val);
        if(this.isEmpty()) return this.insertAtStart(val);
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
            this.size++;
        }
        return this.head;     
    }


    delete(val: any){
        if(this.isEmpty()) throw new Error ('List is Empty!');
        if(this.size == 1){
            if(val == this.head.val){
                this.head = null;
                return this.head;
            }
            else throw new Error ('Value to delete doesn not exists in the list');             
        }
        
        let curr = this.head;
        let index = 0;
        let tempSize = this.size;
        while(index < this.size){
            if(curr.next.val == val){
                //If deleted element is the head
                if(curr.next == this.head){
                    curr = this.head;
                    this.size--;
                    return this.head;
                }
                //If deleted element is the tail
                else if(curr.next == this.tail){
                    curr.next = this.head;
                    this.tail = curr;
                    this.tail.next = this.head;
                    this.size--;
                    break;
                }
                //If deleted element is the middle
                else{
                    curr.next = curr.next.next;
                    this.size--;
                    break;
                }
            }
            curr = curr.next;
            index++;
        }
        if(tempSize != this.size) console.log('Value does not exists in the list!');
        return this.head;
    }

}