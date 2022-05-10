

export class MinHeap{

    items: any [];

    constructor(){
        this.items = [];
    }

    insert(item: any){
        this.items.push(item);
        if(this.items.length == 1) return;
        this.heapifyUp(this.items.length - 1);
    }

    //Only the root element can be deleted from heap
    delete(){
        if(this.items.length == 0) return null;
        if(this.items.length == 1) return this.items[0];

        let root = this.items[0];
        this.items[0] = this.items.pop();
        this.heapifyDown(0);
        return root;
    }
    

    //The function used for insertion. In order to place the new element at the proper location and keep the complete BT
    //we need compare the new element with its parent. If it greater move to parent location, if less stays as it is.
    heapifyUp(index: number){
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.items[parentIndex] > this.items[index]){
                this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    }

    //The function used for deletion. In order to remove the root element and keep the complete BT:
    //  1. Create var and place the root element
    //  2. Move last element of the array to the root location. 
    //  3. Rearrange the heap: If new root greater then right/left child, place new root to the proper location using swap algorithm
    heapifyDown(index: number){
        while(index < this.items.length){
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;

            if(leftChildIndex >= this.items.length || rightChildIndex >= this.items.length) return;

            if(this.items[index] > this.items[leftChildIndex]){
                this.swap(index, leftChildIndex);
                index = leftChildIndex;
            }
            else if(this.items[index] > this.items[rightChildIndex]){
                this.swap(index, rightChildIndex);
                index = rightChildIndex;
            }
        }
    }

    swap(index1, index2){
        let temp = this.items[index2];
        this.items[index2] = this.items[index1];
        this.items[index1] = temp;
    }

    count(){
        return this.items.length;
    }

    getParent(index: number){
        let parentIndex = Math.floor((index - 1)/2);
        return parentIndex;
    }

    geLeftChild(index: number){
        let leftChildIndex = index * 2 + 1;
        return leftChildIndex;
    }

    getRightChild(index: number){
        let rightChildIndex = index * 2 + 2;
        return rightChildIndex;
    }

}
