
/*
    Time Complexity: 
    Push operation: O(1). 
    Pop operation: O(1) to O(N). In the worst case we have empty whole of stack 1 into stack 2.
    Auxiliary Space: O(N). 
    Use of stack for storing values.

    Important: In case of typescript implementation, we need to use 2 arrays. In Java/C# build in stack can be used insted.

*/


export class QueueStack{

    stack1: any [];
    stack2: any [];

    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    isEmpty(){
        if(this.stack1.length == 0) return true;
    }

    //add an item to the queue.
    enqueue(val: any){
        return this.stack1.push(val);
    }

    //remove (access) an item from the queue.
    dequeue(){
        if(this.isEmpty()) throw new Error ('Queue is empty!')
        let count = this.stack1.length;
        while(count > 0){
            this.stack2.push(this.stack1.pop());
            count--;
        }
        let removedVal = this.stack2.pop()

        count = this.stack2.length;
        while(count > 0){
            this.stack1.push(this.stack2.pop());
            count--;
        }

        return removedVal;
    }

    //Get the element at the front of the queue without removing it.
    peek(){
        return this.stack1[0];
    }

}