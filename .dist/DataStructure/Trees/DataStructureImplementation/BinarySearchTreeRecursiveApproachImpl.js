"use strict";
/*
    ref: https://www.softwaretestinghelp.com/binary-search-tree-in-java/
    ref: https://www.techiedelight.com/deletion-from-bst/
    ref: https://condor.depaul.edu/glancast/301class/docs/lecApr15.html




    Binary Search Tree Data Structure

    Binary Search Tree is a node-based binary tree data structure which has the following properties:

    1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
    2. The right subtree of a node contains only nodes with keys greater than the node’s key.
    3. The left and right subtree each must also be a binary search tree.
    4. There must be no duplicate nodes.

    Time Complexity:

    OPERATION	WORST CASE	    AVERAGE CASE	    BEST CASE	    SPACE
    Search	        O(N)	        O(logN)	            O(1)	    O(N)
    Insert	        O(N)	        O(logN)	            O(1)	    O(N)
    Delete	        O(N)	        O(logN)	            O(N)	    O(N)


    IMPORTANT:
    The major difference between the iterative and recursive version of Binary Search is that the recursive version has a space complexity of O(log N)
    while the iterative version has a space complexity of O(1). Hence, even though recursive version may be easy to implement, the iterative version is efficient.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTreeRec = void 0;
class BSTNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTreeRec {
    constructor() {
        this.root = null;
        this.count = 0;
    }
    isEmpty() {
        if (this.count == 0)
            return true;
    }
    size() {
        return this.count;
    }
    //Recursive approach
    insertRecursive(val) {
        this.root = this.insert(this.root, val);
        return this.root;
    }
    insert(root, val) {
        if (root == null) {
            root = new BSTNode(val);
            this.count++;
            return root;
        }
        else if (val < root.val)
            root.left = this.insert(root.left, val);
        else
            root.right = this.insert(root.right, val);
        return root;
    }
    findRecursive(val) {
        if (this.root == null)
            throw new Error('The tree is empty!');
        return this.find(this.root, val);
    }
    find(root, val) {
        if (val == root.val || val == null)
            return root;
        else if (val < root.val)
            return this.find(root.left, val);
        else
            return this.find(root.right, val);
    }
    /*
             6
           /   \
          4     8
         / \   / \
        3   5  7  9
    */
    //In Order method to traverse the tree
    inOrderTraverse() {
        return this.inOrder(this.root);
    }
    // Left-Root-Right: Example: 3 4 5 6 7 8 9
    inOrder(root) {
        if (root == null)
            return root;
        this.inOrder(root.left);
        console.log(root.val);
        this.inOrder(root.right);
    }
    //Pre Order method to traverse the tree
    preOrderTraverse() {
        return this.preOrder(this.root);
    }
    // Root-Left-Right. Example: 6 4 3 5 8 7 9
    preOrder(root) {
        if (root == null)
            return root;
        console.log(root.val);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    //Post Order method to traverse the tree
    postOrderTraverse() {
        return this.postOrder(this.root);
    }
    // Left-Right-Root. Example: 3 5 4 7 9 8 6
    postOrder(root) {
        if (root == null)
            return root;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.val);
    }
    //Delete functionaly has special case in BT. See above explanation.
    deleteRecursive(val) {
        if (this.root == null)
            return null;
        return this.delete(this.root, val);
        //return this.removeNode(this.root, val);
    }
    delete(root, val) {
        if (root == null)
            return root;
        //Traverse the tree
        if (val < root.val)
            root.left = this.delete(root.left, val);
        else if (val > root.val)
            root.right = this.delete(root.right, val);
        //Node has been found. Delete it.
        else {
            if (root.left == null) //Case 1: only one child
                return root.right;
            else if (root.right == null) // Case 1: only one child
                return root.left;
            //Case 0: remove node without children
            else if (root.left == null || root.right == null) {
                return null;
            }
            //Case 2: Element to delete has two children. Find the min element on the right subtree OR max on the left subtree
            else {
                root.val = this.findMinValRecursive(root.right);
                root.right = this.delete(root.right, root.val);
                return root;
            }
        }
        return root;
    }
    removeNode(current, value) {
        // base case, if the tree is empty  
        if (current === null)
            return current;
        // when value is the same as current's value, this is the node to be deleted
        if (value === current.val) {
            this.count--;
            // for case 1 and 2, node without child or with one child
            if (current.left === null && current.right === null) {
                return null;
            }
            else if (current.left === null) {
                return current.right;
            }
            else if (current.right === null) {
                return current.left;
            }
            else {
                //node with two children, get the inorder successor, smallest in the right subtree
                let tempNode = this.findMinValRecursive(current.right);
                current.val = tempNode.val;
                //delete the inorder successor
                current.right = this.removeNode(current.right, tempNode.val);
                return current;
            }
            // traverse the tree
        }
        else if (value < current.val) {
            current.left = this.removeNode(current.left, value);
            return current;
        }
        else {
            current.right = this.removeNode(current.right, value);
            return current;
        }
    }
    //Case 2: Helper method for delete the node with two children
    findMinValRecursive(root) {
        if (root == null)
            return root;
        this.findMinValRecursive(root.left);
        return root;
    }
    //Case 2: Helper method for delete the node with two children
    findMaxValRecursive(root) {
        if (root == null)
            return;
        this.findMaxValRecursive(root.right);
        return root;
    }
    calculateHeightOfTree(root) {
        if (root == null)
            return -1;
        else {
            let left = this.calculateHeightOfTree(root.left);
            let right = this.calculateHeightOfTree(root.right);
            if (left > right)
                return left + 1;
            else
                right + 1;
        }
    }
    calculateSizeOfTree(root) {
        if (root == null)
            return 0;
        else
            return this.calculateSizeOfTree(root.left) + this.calculateSizeOfTree(root.right) + 1;
    }
}
exports.BinarySearchTreeRec = BinarySearchTreeRec;
//# sourceMappingURL=BinarySearchTreeRecursiveApproachImpl.js.map