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

export class ListNode {
    val: any
    next: ListNode | null
    constructor(val?: any, next?: ListNode | null) {
         this.val = (val === undefined ? 0 : val)
         this.next = (next === undefined ? null : next)
    }
 }


 export function getSize(list: ListNode ){
     let curr: ListNode = list;
     let size = 0;
      while(curr != null){
           curr = curr.next;
           size++;
      }
      return size;
}

export function isEmpty(list: ListNode){
     if(getSize(list) == 0) return true;
     else false;
}

export function addNodeFront(value: any, list: ListNode){
      let head = new ListNode(value);
      head.next = list;
      return head;
}

export function addNodeLast(value: any, list: ListNode){
     let tail = new ListNode(value);
     let curr = list;
     while(curr != null){
          if(curr.next == null){
               curr.next = tail;
               break;
          }
          curr = curr.next;
     }
     return list;
}

// Add Node to a particular position of the list
export function addNodeAtPosition(value: any, list: ListNode, position: number){
     let newNode = new ListNode(value);
     let curr = list;
     let count = 0;

     if(position == 0){
          newNode.next = list;
     }
     else{
          while(count <= position){
               if(count == position){
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

export function remove(list: ListNode, val: any){
     let size = getSize(list);
     if(size == 0) throw new Error ('List is Empty!');
     if(size == 1){
         if(val == list.val){
             this.head = null;
             return this.head;
         }
         else throw new Error ('Value to delete doesn not exists in the list');             
     }
     
     let curr = list;
     let tempSize = size;
     while(curr != null){
         if(curr.val == val){
          list = list.next;
          size--;
          break;
         }
         else if(curr.next.val == val){
               curr.next = curr.next.next;
               size--;
               break;
         }
         curr = curr.next;
     }
     if(tempSize != size) console.log('Value does not exists in the list!');
     return list;
}

export function reverse(list: ListNode){
     if(list == null) return null;
     let curr = list;
     let prev = null;
     let next = null;
     while(curr != null){
          next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
     }
     return prev;
}

export function printList(list: ListNode){
     while(list != null){
          console.log(list.val);
          list = list.next;
     }
}

