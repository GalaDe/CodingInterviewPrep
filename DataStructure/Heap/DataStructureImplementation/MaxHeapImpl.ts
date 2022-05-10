/*
    A Binary Heap data structure is a specialized structure used to save the information and has very specific use cases like sorting and priority queue.
    It is very similar to a binary tree with special rules around implementation. A binary heap will be as compact as possible which means that all the 
    children of each node are as full as they can be and left children are filled out first. We can implement Binary Heap in two forms: Max Binary Heap and Min Binary Heap.    

    Max binary heap has these special properties in its implementation:
        1) Every node will have at most two children.
        2) Each parent node’s value will be always greater than its children and there is no guarantee in its children’s order.
        3) Root node value is always greater than all the nodes.

    ----------------------------------------------------------------------------------------------------------
    Formulas to calculate Parent/Right/Left Child:

        At a given index i of an array: 
            PARENT: Index of parent node for an element at i: Math.floor((i - 1)/2)
            LEFT CHILD: Left Child index for an element at i : (2 * i + 1)
            RIGHT CHILD: Right Child index for an element at i : (2 * i + 2)
    ----------------------------------------------------------------------------------------------------------

    Following are the functionalists that a max binary heap has to support:

        INSERT: A method to add data into our max binary heap. Every time we insert a new node, we need to make sure all the properties of the max binary heap are satisfied.
        EXTRACT MAX: A method to return the maximum value (the root of the heap) from the heap and delete that node. Again, as we delete the node from the heap, 
                     we need to make sure all the properties of the max binary heap are satisfied.


*/
export class MaxHeap{

    items: any[];

    constructor(){
        this.items = [];
    }

    //The new element can only be inserted at the end of the array
    public insert(item: any){
        this.items.push(item);
        if(this.items.length == 1) return;
        this.heapifyUp(this.items.length - 1);
    }

    //Only the root element can be deleted from heap
    public delete(){
        if(this.items.length == 0) return null;
        if(this.items.length == 1) return this.items[0];

        let root = this.items[0];
        this.items[0] = this.items.pop();
        this.heapifyDown(0);
        return root;
    }

    //The function used for insertion. In order to place the new element at the proper location and keep the complete BT
    //we need compare the new element with its parent. If it greater move to parent location, if less stays as it is.
    private heapifyUp(index: number){
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.items[parentIndex] < this.items[index]){
                this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    }

    //The function used for deletion. In order to remove the root element and keep the complete BT:
    //  1. Create var and place the root element
    //  2. Move last element of the array to the root location. 
    //  3. Rearrange the heap: If new root less then right/left child, place new root to the proper location using swap algorithm
    private heapifyDown(index: number){
        while(index < this.items.length){
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;

            if(leftChildIndex >= this.items.length || rightChildIndex >= this.items.length) return;

            if(this.items[index] < this.items[leftChildIndex]){
                this.swap(index, leftChildIndex);
                index = leftChildIndex;
            }
            else if(this.items[index] < this.items[rightChildIndex]){
                this.swap(index, rightChildIndex);
                index = rightChildIndex;
            }
        }
    }

    private swap(index1, index2){
        let temp = this.items[index2];
        this.items[index2] = this.items[index1];
        this.items[index1] = temp;
    }

    public count(){
        return this.items.length;
    }

    public getParent(index: number){
        let parentIndex = Math.floor((index - 1)/2);
        return parentIndex;
    }

    public geLeftChild(index: number){
        let leftChildIndex = index * 2 + 1;
        return leftChildIndex;
    }

    public getRightChild(index: number){
        let rightChildIndex = index * 2 + 2;
        return rightChildIndex;
    }


}