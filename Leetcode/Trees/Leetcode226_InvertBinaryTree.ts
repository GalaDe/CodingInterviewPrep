/*
    Leetcode 226: Easy: https://leetcode.com/problems/invert-binary-tree/

    Given the root of a binary tree, invert the tree, and return its root.

    Example 1:

    Input: root = [4,2,7,1,3,6,9]
    Output: [4,7,2,9,6,3,1]


                4
             /     \
           2        7
         /  \      /  \     
        1    3    6    9


                4
             /     \
           7        2
         /  \      /  \     
        9    6    3    1

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    1. Recursive (Preorder)
    2. Iterative using queue

    The main idea is to swap nodes, not the values !!!!!!

        1st swap: nodes 7 & 2
        2nd swap: 6 & 9 and 1 & 3

    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------

    Time Complexity for Both: O(n), since each node in the tree is visited only once.
    Space Complexity for Both: O(n) ==> recursive: uses builin stack, iterative: queue
*/


//Definition for a binary tree node.
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
       this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
}

export function invertTreeRec(root: TreeNode | null): TreeNode | null {

    if(root == null) return null;

    let right = invertTreeRec(root.right);
    let left = invertTreeRec(root.left);
    root.left = right;
    root.right = left;

    return root;
};

export function invertTreeIterrative(root: TreeNode | null): TreeNode | null{
    if(root == null) return null;

    let queue = [root];

    while(queue.length > 0){
        let curr = queue.shift();

        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if(curr.left !== null)
            queue.push(curr.left);
        if(curr.right !== null)
            queue.push(curr.right);

    }

    return root;
}
