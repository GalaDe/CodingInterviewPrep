"use strict";
/*
    ref: https://github.com/vishalshar/Insert-and-delete-in-a-tri-nary-tree/blob/master/Tri_Nary_Tree
    ref: https://www.geeksforgeeks.org/ternary-search-tree/
    
    ----------------------------------------------------------------------------
    Ternary Search Tree or Tri-nary Tree: USES THE RULE OF BINARY SEARCH TREE
    ----------------------------------------------------------------------------

    A ternary search tree is a special trie data structure where the child nodes of a standard trie are ordered as a binary search tree.

    A tri-nary tree is much like a binary tree but with three child nodes for each parent instead of two -- with the left node being values
    less than the parent, the right node values greater than the parent, and the middle nodes values equal to the parent.

    ---------------------------
    USAGE:
    ---------------------------

    Tries are suitable when there is a proper distribution of words over the alphabets so that spaces are utilized most efficiently.
    Otherwise ternary search trees are better.
    Ternary search trees are efficient to use(in terms of space) when the strings to be stored share a common prefix.

    ---------------------------------------
    Applications of ternary search trees:
    ---------------------------------------
    
    1. Ternary search trees are efficient for queries like “Given a word, find the next word in dictionary(near-neighbor lookups)”
       or “Find all telephone numbers starting with 9342 or “typing few starting characters in a web browser displays all website
       names with this prefix”(Auto complete feature)”.
    2. Used in spell checks: Ternary search trees can be used as a dictionary to store all the words. Once the word is typed in an editor,
       the word can be parallelly searched in the ternary search tree to check for correct spelling.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrinaryTree = exports.TrinaryNode = void 0;
class TrinaryNode {
    constructor(val) {
        this.val = val;
    }
}
exports.TrinaryNode = TrinaryNode;
class TrinaryTree {
    insert(val) {
        this.root = this.insertNode(this.root, val);
        return this.root;
    }
    insertNode(tree, val) {
        if (tree == null) {
            tree = new TrinaryNode(val);
            return tree;
        }
        else if (val < tree.val)
            tree.left = this.insertNode(tree.left, val);
        else if (val > tree.val)
            tree.right = this.insertNode(tree.right, val);
        else
            tree.middle = this.insertNode(tree.middle, val);
        return tree;
    }
    delete(val) {
        if (this.root == null)
            return null;
        return this.deleteNode(this.root, null, val);
    }
    deleteNode(current, parentNode, valToDel) {
        let rootVal = current.val;
        // base case, if the tree is empty  
        if (current === null)
            return current;
        // when value is the same as current's value, this is the node to be deleted
        if (valToDel === current.val) {
            if (rootVal == valToDel && current.middle != null) {
                let temp = current.middle;
                current.middle = temp.middle;
                return current;
            }
            // for case 1 and 2, node without child or with one child
            else if (current.left == null && current.right == null) {
                if (parentNode.right.val == valToDel)
                    parentNode.right = null;
                else
                    parentNode.left = null;
                return;
            }
            else {
                //node with two children, get the inorder successor, smallest in the right subtree
                let min = this.findMinVal(this.root.right);
                current.val = min.val;
                return;
            }
            // traverse the tree
        }
        else if (current.val > valToDel) {
            this.deleteNode(current.left, current, valToDel);
        }
        else {
            this.deleteNode(current.right, current, valToDel);
        }
    }
    findMinVal(root) {
        let current = root;
        /* loop down to find the leftmost leaf */
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
    inorder() {
        return this.inorderPrint(this.root);
    }
    //Left-Root-Right
    inorderPrint(tree) {
        if (tree == null)
            return;
        this.inorderPrint(tree.left);
        console.log(tree.val);
        this.inorderPrint(tree.right);
    }
    preorder() {
        return this.preorderPrint(this.root);
    }
    //Root-Left-Right
    preorderPrint(tree) {
        if (tree == null)
            return;
        console.log(tree.val);
        this.preorderPrint(tree.left);
        this.preorderPrint(tree.right);
    }
    postorder() {
        return this.postorderPrint(this.root);
    }
    //Left-Right-Root
    postorderPrint(tree) {
        if (tree == null)
            return;
        this.postorderPrint(tree.left);
        this.postorderPrint(tree.right);
        console.log(tree.val);
    }
    BFS_PrintTree() {
        if (this.root == null)
            return 0;
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let currentNode = queue[0];
            queue.shift();
            console.log(currentNode.val);
            if (currentNode.left != null)
                queue.push(currentNode.left);
            if (currentNode.middle != null)
                queue.push(currentNode.middle);
            if (currentNode.right != null)
                queue.push(currentNode.right);
        }
    }
    DFS_PrintTree() {
        if (this.root == null)
            return 0;
        let stack = [];
        stack.push(this.root);
        while (stack.length > 0) {
            let currentNode = stack[stack.length - 1];
            stack.pop();
            console.log(currentNode.val);
            if (currentNode.left != null)
                stack.push(currentNode.left);
            if (currentNode.middle != null)
                stack.push(currentNode.middle);
            if (currentNode.right != null)
                stack.push(currentNode.right);
        }
    }
}
exports.TrinaryTree = TrinaryTree;
//# sourceMappingURL=TrinaryTreeImpl.js.map