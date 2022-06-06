/*
    Leetcode 104: Easy: https://leetcode.com/problems/maximum-depth-of-binary-tree/

    Description:

    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes along the longest path 
    from the root node down to the farthest leaf node.

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

            3
          /   \
         9    20
             /  \
            15   7  

    Example 2:
    Input: root = [1,null,2]
    Output: 2

    Time Complexity: O(n)
    Space Complexity: O(n), because uses recursion stack


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



export function maxDepth(root: TreeNode | null): number {
   if(root == null) return 0;
       else{
           let left = maxDepth(root.left);
           let right = maxDepth(root.right);
           if(left > right)
               return left + 1;
           else return right + 1;
       }
};