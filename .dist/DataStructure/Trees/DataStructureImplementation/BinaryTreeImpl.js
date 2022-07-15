"use strict";
/*

    Delete functionality ref: https://tutorialspoint.dev/data-structure/binary-tree-data-structure/deletion-binary-tree


    Time Complexity:

    OPERATION	    WORST CASE	    AVERAGE CASE	    BEST CASE
    Insert	            O(N)	        O(N0.5)	         O(logN)
    Search	            O(N)	        O(N0.5)	         O(1)
    Delete	            O(N)	        O(N0.5)	         O(logN)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BTNode = void 0;
class BTNode {
    constructor(val) {
        this.val = val;
    }
}
exports.BTNode = BTNode;
class BinaryTree {
    //Can be used with already predefined tree and you just want to insert the node
    insert(btree, val) {
        if (btree == null) {
            btree = new BTNode(val);
            return btree;
        }
        let queue = [];
        queue.push(btree);
        while (queue.length > 0) {
            btree = queue[0];
            queue.shift();
            if (btree.left == null) {
                btree.left = new BTNode(val);
                break;
            }
            else
                queue.push(btree.left);
            if (btree.right == null) {
                btree.right = new BTNode(val);
                break;
            }
            else
                queue.push(btree.right);
        }
    }
    //Can be used to build the tree from scratch
    insert2(val) {
        if (this.btree == null) {
            this.btree = new BTNode(val);
            return this.btree;
        }
        let queue = [];
        let tmp = this.btree;
        queue.push(tmp);
        while (queue.length > 0) {
            tmp = queue[0];
            queue.shift();
            if (tmp.left == null) {
                tmp.left = new BTNode(val);
                break;
            }
            else
                queue.push(tmp.left);
            if (tmp.right == null) {
                tmp.right = new BTNode(val);
                break;
            }
            else
                queue.push(tmp.right);
        }
        return this.btree;
    }
    delete(root, key) {
        if (root == null)
            return;
        if (root.left == null && root.right == null) {
            if (root.val == key) {
                root = null;
                return;
            }
            else
                return;
        }
        let q = [];
        q.push(root);
        let temp = null;
        let keyNode = null;
        let last = null;
        // Do level order traversal until we find key and last node.
        while (q.length > 0) {
            temp = q[0];
            q.shift();
            if (temp.val == key)
                keyNode = temp;
            if (temp.left != null) {
                last = temp; //storing the parent node
                q.push(temp.left);
            }
            if (temp.right != null) {
                last = temp; //storing the parent node
                q.push(temp.right);
            }
        }
        if (keyNode != null) {
            keyNode.val = temp.val; //replacing key_node's data to deepest node's data
            if (last.right == temp)
                last.right = null;
            else
                last.left = null;
        }
    }
    inOrder() {
        return this.inOrderTraverse(this.btree);
    }
    //Left-Root-Right
    inOrderTraverse(btree) {
        if (btree == null)
            return null;
        this.inOrderTraverse(btree.left);
        console.log(btree.val);
        this.inOrderTraverse(btree.right);
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
    BFS_PrintTree() {
        if (this.btree == null)
            return 0;
        let queue = [];
        queue.push(this.btree);
        while (queue.length > 0) {
            let currentNode = queue[0];
            queue.shift();
            console.log(currentNode.val);
            if (currentNode.left != null)
                queue.push(currentNode.left);
            if (currentNode.right != null)
                queue.push(currentNode.right);
        }
    }
    DFS_PrintTree() {
        if (this.btree == null)
            return 0;
        let stack = [];
        stack.push(this.btree);
        while (stack.length > 0) {
            let currentNode = stack[stack.length - 1];
            stack.pop();
            console.log(currentNode.val);
            if (currentNode.left != null)
                stack.push(currentNode.left);
            if (currentNode.right != null)
                stack.push(currentNode.right);
        }
    }
}
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=BinaryTreeImpl.js.map