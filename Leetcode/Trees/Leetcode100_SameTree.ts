/*
    Leetcode 100: Easy
    
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.
    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

    Example 1:

    Input: p = [1,2,3], q = [1,2,3]
    Output: true


        1                  1
       / \                / \
      2   3              2   3

      Example 2:

      Input: p = [1,2], q = [1,null,2]
      Output: false

        1           1
       /             \
      2               2  

      Example 3:

      Input: p = [1,2,1], q = [1,1,2]
      Output: false

            1               1
           / \             / \
         2    1           1   2


    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------
    
    Time complextiy : O(N), where N is a number of nodes in the tree, since one visits each node exactly once.
    Space complexity : O(N), in the worst case of completely unbalanced tree, to keep a recursion stack.



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
 

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
    //Preorder Traversal
    return preorderTraversal(p, q);
};

function preorderTraversal(nodeP: TreeNode, nodeQ: TreeNode){
    
    if(nodeP == nodeQ) return true; // null == null yields true

    if(nodeP == null || nodeQ == null) return false
    
    return nodeP.val == nodeQ.val && preorderTraversal(nodeP.left, nodeQ.left) && preorderTraversal(nodeP.right, nodeQ.right);
}