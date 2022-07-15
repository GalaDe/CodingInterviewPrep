"use strict";
/*
    ref: https://www.algotree.org/algorithms/tree_graph_traversal/depth_first_search/
    ref: https://kalkicode.com/n-ary-tree-node-insertion-in-ts
    ref: https://www.studytonight.com/advanced-data-structures/nary-tree
    ref: https://medium.com/@khushboo.taneja_61450/implementing-binary-search-tree-and-n-ary-tree-in-javascript-ba3e2081d345
    ref: https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/GenTreeImplement.html


    Generic trees and N-Array and K-Array trees are the same.

    The N-array tree is a tree that allows us to have n number of children of a particular node, hence the name N-ary,
    making it slightly complex than the very common binary trees that allow us to have at most 2 children of a particular node.


                   10
                  /   \
                 /     \
                /       \
               8         5
              /|\      /|\ \
             / | \    / | \ \
            2  1  6  7  8 3  4
              / \     \     /| \
             9  11     -1  2 1  3
            -----------------------
            Constructing N-Arr tree

    Preorder traversal is a type of depth-first search (DFS) approach, and DFS problems are generally best
    solved with a recursive function. In this case, we can even make the main function its own recursive function,
    rather than having to define a separate recursive helper.
    In order to accomplish this, we'll need to create a new default argument for the function
    to hold our answer array (ans), which should default to an empty array.

    In a preorder DFS traversal, a node is processed before moving on to its children,
    and then the children are processed from left to right. Our recursive function should then
    process the current node (root) by pushing its value to ans, and then we should iterate through
    root.children and call our recursive function on each.

    IMPORTANT:

        ** Pre-order and Post-order Traversals can be used for 𝑛-ary trees.
        ** In-order traversal is a special case. It probably only makes sense for binary trees.
           While there are several different possible ways that one could define in-order traversal for 𝑛-ary trees,
           each of those feels a bit odd and unnatural and probably not terribly useful in practice.
           So, it's probably best to think of in-order traversal as being specific to binary trees;
           if you want to do something akin in-order traversal for a 𝑛-ary tree, you'll need to decide exactly what you mean by that,
           as there's no standard meaning for that.


    Time Complexity of Level Order Traversal: O(n), where N is the number of nodes
    Space Complexity of Level Order Traversal: O(n), where N is the size of the tree.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.NArrayGenericTree = exports.GTNode = void 0;
class GTNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    addChild(val) {
        let treeNode = new GTNode(val);
        this.children.push(treeNode);
    }
}
exports.GTNode = GTNode;
class NArrayGenericTree {
    addNodeAtParticularLocation(tree, key, val) {
        if (tree == null)
            return;
        let currentNode = null;
        let queue = [];
        queue.push(tree);
        while (queue.length > 0) {
            currentNode = queue[0];
            if (currentNode.data == key) {
                currentNode.addChild(val);
                return;
            }
            else {
                for (let i = 0; i < currentNode.children.length; i++) {
                    queue.push(currentNode.children[i]);
                }
                queue.shift();
            }
        }
    }
    delete(tree, key) {
        if (tree == null)
            return;
        if (tree.data == key) {
            this.deleteDeepestNode(tree);
            return;
        }
        let currentNode = null;
        let queue = [];
        queue.push(tree);
        while (queue.length > 0) {
            currentNode = queue[0];
            for (let i = 0; i < currentNode.children.length; i++) {
                if (currentNode.children[i].data == key) {
                    if (currentNode.children[i].children.length > 0) {
                        this.deleteDeepestNode(currentNode.children[i]);
                        return;
                    }
                    else {
                        currentNode.children.splice(i, 1);
                        return;
                    }
                }
                else
                    queue.push(currentNode.children[i]);
            }
            queue.shift();
        }
    }
    deleteDeepestNode(tree) {
        let currentNode = null;
        let temp = tree;
        let queue = [];
        queue.push(tree);
        while (queue.length > 0) {
            currentNode = queue[0];
            for (let i = 0; i < currentNode.children.length; i++) {
                if (currentNode.children[i].children.length == 0) {
                    temp.data = currentNode.children[i].data;
                    currentNode.children.splice(i, 1);
                    return tree;
                }
                else
                    queue.push(currentNode.children[i]);
            }
            queue.shift();
        }
    }
    // Root - Left - Right --> is kid of DFS Traversal
    printPreOrder(tree) {
        if (tree == null)
            return null;
        var i = 0;
        var temp = null;
        console.log(tree.data);
        // iterating the child of given node
        while (i < tree.children.length) {
            temp = tree.children[i];
            this.printPreOrder(temp);
            i++;
        }
    }
    // Left - Right -root
    printPostOrder(tree) {
        if (tree == null)
            return null;
        var i = 0;
        var temp = null;
        // iterating the child of given node
        while (i < tree.children.length) {
            temp = tree.children[i];
            this.printPostOrder(temp);
            i++;
        }
        console.log(tree.data);
    }
    //Breadth first search level order traverse
    printBFS_LevelOrder(tree) {
        if (tree == null)
            return;
        let currentNode = null;
        let queue = [];
        queue.push(tree);
        while (queue.length > 0) {
            currentNode = queue[0];
            console.log(currentNode.data);
            for (let i = 0; i < currentNode.children.length; i++) {
                queue.push(currentNode.children[i]);
            }
            queue.shift();
        }
    }
    /*
        That is indeed a BFS algorithm for a generic tree. If you define 𝑛 as the 𝑛 in 𝑛-ary tree, then the time complexity is not related to that 𝑛.
        If however, 𝑛 represents the total number of nodes in the tree, then the time complexity is O(𝑛) because every node is enqueued exactly once,
        and dequeued exactly once. As queue operations are O(1), the time complexity is O(𝑛).
    */
    //Depth first search using stack 
    printDFS_Order(tree) {
        if (tree == null)
            return;
        let currentNode = null;
        let stack = [];
        stack.push(tree);
        while (stack.length > 0) {
            currentNode = stack[stack.length - 1];
            stack.pop();
            console.log(currentNode.data);
            for (let i = 0; i < currentNode.children.length; i++) {
                stack.push(currentNode.children[i]);
            }
        }
    }
    //We can use BFS and DFS traversal to find the height.
    calculateHeightOfTree_BFS(root) {
        if (root == null)
            return 0;
        if (root.children.length == 0)
            return 1;
        let depth = 0;
        let currentNode = null;
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            //We need that 2nd loop to run through the whole level
            for (let i = queue.length; i > 0; i--) {
                currentNode = queue[0];
                queue.shift();
                for (let child of currentNode.children) {
                    queue.push(child);
                }
            }
            depth++;
        }
        return depth;
    }
    //three dots in JavaScript is called the Spread Syntax or Spread Operator. 
    //This allows an iterable such as an array expression or string to be expanded or an object 
    //expression to be expanded wherever placed. This is not specific to React. It is a JavaScript operator.
    //ref: https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do#:~:text=(three%20dots%20in%20JavaScript)%20is,It%20is%20a%20JavaScript%20operator.
    calculateHeightOfTree_BFS_2(root) {
        if (root == null)
            return 0;
        if (root.children.length == 0)
            return 1;
        let depth = 0;
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            //We need that 2nd loop to run through the whole level
            for (let i = queue.length; i > 0; i--) {
                let currentNode = queue[0];
                queue.shift();
                if (currentNode.children)
                    queue.push(...currentNode.children); // 3 dots helps you to push all children at the same time
            }
            depth++;
        }
        return depth;
    }
    /*
        Notes to calculateHeightOfTree_BFS_2:

        queue.push(...currentNode.children)

        1st: 8 & 5
        2nd: 2, 1 & 6
        3rd: 7, 8, 3 & 4
        4th: 100
        5th: 9 & 11
        6th: -1
        7th: 2, 1 & 3

                    10
                  /   \
                 /     \
                /       \
               8         5
              /|\      /|\ \
             / | \    / | \ \
            2  1  6  7  8 3  4
           /  / \     \     /| \
        100  9  11     -1  2 1  3
            -----------------------
                  N-Arr tree

    */
    //Time Complexity is O(n)              
    calculateHeightOfTreeDFSRecursive(root) {
        if (root == null)
            return 0;
        if (root.children.length == 0)
            return 1;
        let maxDepth = 0;
        for (let i = 0; i < root.children.length; i++) {
            maxDepth = Math.max(maxDepth, this.calculateHeightOfTreeDFSRecursive(root.children[i]));
        }
        return maxDepth + 1;
    }
    /*
        Notes to calculateHeightOfTreeDFSRecursive:

        same as: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/discuss/1016403/Java-solutions-Level-order-traversal-and-DFS
        
        public int maxDepth(Node root) {
            if(root == null) return 0;

            if(root.children == null) return 1;

            int depth = 0;
            int curDepth = 0;
            for(int i = 0; i < root.children.size(); i++){
                // recursively get depth of each child
                Node node = root.children.get(i);
                curDepth = maxDepth(node);
                depth = Math.max(depth, curDepth);
            }
            return depth + 1; // add 1 for root
        }

        public int MaxDepth(Node root){
            if (root == null)
                return 0;

            int depth = 0;

            foreach (Node node in root.children){
                int currDepth = MaxDepth(node);
                depth = Math.Max(depth, currDepth); // // maximum depth of current root node's children layer
            }

            return depth + 1; // maximum depth of current layer
        }
    */
    /*
        1st: 8
        2nd: 2, then 100
        3rd: 1, then 9 & 11 and 6
        4th: 5
        5th: 7, then -1
        6th: 8 & 3
        7th: 4, then children 2, 1, 3

                    10
                  /   \
                 /     \
                /       \
               8         5
              /|\      /|\ \
             / | \    / | \ \
            2  1  6  7  8 3  4
           /  / \     \     /| \
        100  9  11     -1  2 1  3
            -----------------------
                  N-Arr tree
    */
    calculateSizeOfTree(tree) {
        if (tree == null)
            return 0;
        let currentNode = null;
        let queue = [];
        let size = 0;
        queue.push(tree);
        while (queue.length > 0) {
            currentNode = queue[0];
            for (let i = 0; i < currentNode.children.length; i++) {
                queue.push(currentNode.children[i]);
            }
            size++;
            queue.shift();
        }
        return size;
    }
}
exports.NArrayGenericTree = NArrayGenericTree;
//# sourceMappingURL=GenericTreeNArrayTreeImpl.js.map