
/*
    Good Explanation about DFS and BFS implementation:
        ref: https://blog.bitsrc.io/depth-first-search-of-a-binary-tree-in-javascript-874701d8210a

    IMPORTANT:
    The major difference between the iterative and recursive version of Binary Search is that the recursive version has a space complexity of O(log N) 
    while the iterative version has a space complexity of O(1). Hence, even though recursive version may be easy to implement, the iterative version is efficient.

*/


class BSTNode{

    right: BSTNode | null;
    left: BSTNode | null;
    val: any;

    constructor(val: any){
        this.val = val;
        this.right = null;
        this.left = null;
    }


}

export class BinarySearchTree{

    root: BSTNode | null;
    count:  number;

    constructor(){
        this.root = null;
        this.count = 0;
    }

    isEmpty(){
        if(this.count == 0) return true;
    }

    size(){
        return this.count;
    }

    //Iterative approach
    insertIterative(val: any){
        let newNode = new BSTNode(val);

        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            let curr = this.root;
            let prev;
            while(curr != null){
                prev = curr;
                if(val < curr.val){
                    curr = curr.left;
                    if(curr == null){
                        prev.left = newNode;
                        break;
                    }

                }
                else {
                    curr = curr.right;
                    if(curr == null) {
                        prev.right = newNode
                        break;
                    }
                }                  
            }
        }
        this.count++;
        return this.root;
    }

    findIterative(val: any){
        if(this.root == null) throw new Error('The tree is empty!')
        let curr = this.root;
        while(curr != null){
            if(curr.val = val)
                return curr;
            else if(val < curr.val)
                curr = curr.left;
            else curr = curr.right;
        }
        return null;
    }

    //In Order method to traverse the tree
    inOrderTraverse(){
        return this.inOrder(this.root); 
    }
    
    // Left-Root-Right: Example: 3 4 5 6 7 8 9
    inOrder(root: BSTNode){
        if(root == null) return root;
            
        this.inOrder(root.left);
        console.log(root.val);
        this.inOrder(root.right)
    }
    
    deleteIterative(val: any){
        if(this.root == null) return null;
        
        let curr = this.root;
        let parent = this.root;
        //Traverse the tree
        while(curr != null && curr.val != val){
            parent = curr;
            if(val < curr.val)
                curr = curr.left;
            else
                curr = curr.right;
        }
        // return if the key is not found in the tree
        if (curr == null) {
            return this.root;
        }

        // Case 0: node to be deleted has no children, i.e., it is a leaf node
        if (curr.left == null && curr.right == null)
        {
            // if the node to be deleted is not a root node, then set its parent left/right child to null
            if (curr != this.root)
            {
                if (parent.left == curr) 
                    parent.left = null;
                else 
                    parent.right = null;
            }
            // if the tree has only a root node, set it to null
            else this.root = null;
        }
        // Case 2: node to be deleted has two children
        else if (curr.left != null && curr.right != null)
        {
            let replacementNode = this.findMinValIterative(curr.right);
            //TO-DO: need to fix this part
            curr.val = replacementNode.val;
            curr.right = null;
            return this.root;
        }
        // Case 1: node to be deleted has only one child
        else {
            if(parent.left == null)
                return parent.right;
            else if(parent.right == null)
                return parent.left;
        }
        this.count--;
        return this.root;
    }


    findMinValIterative(root: BSTNode){
        while(root.left != null){
            root = root.left;
        }
        return root;
    }

    findMaxValIterative(root: BSTNode){
        while(root.right != null){
            root = root.right;
        }
        return root;
    }

    BFS_PrintTree(){
        if(this.root == null) return 0;

        let queue = [];
        queue.push(this.root);

        while(queue.length > 0){
            let currentNode = queue[0];
            queue.shift();
            console.log(currentNode.val);
            if(currentNode.left != null) 
                queue.push(currentNode.left);
            if (currentNode.right != null) 
                queue.push(currentNode.right);
        }
    }

    DFS_PrintTree(){
        if(this.root == null) return 0;

        let stack = [];
        stack.push(this.root);

        while(stack.length > 0){
            let currentNode = stack[stack.length - 1];
            stack.pop();
            console.log(currentNode.val);
            if(currentNode.left != null) 
                stack.push(currentNode.left);
            if (currentNode.right != null) 
                stack.push(currentNode.right);
        }
    }
}