/*

Leetcode 102: Medium: https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

        3
       / \ 
      9   20
         /  \
        15   7

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
-------------------------------------------------------------------------------------------------------------------------
COMPLEXITY:
-------------------------------------------------------------------------------------------------------------------------

Time complexity : O(N) since each node is processed exactly once.

Space complexity : O(N) to keep the output structure which contains N node values.

*/

import {TreeNode} from "./TreeNode";

export function levelOrder(root: TreeNode | null): number[][] {
    
    if(root == null) return [];
    
    let res: number[][] = [];
    let queue: TreeNode [] = [root];
    let level = queue.length;
    
    while(queue.length > 0){
        let tempArr = [];
        for(let i = 0; i < level; i++){
            if(queue.length == 0)
                break;

            let curr = queue.shift();
            if(curr.val !== null)
                tempArr.push(curr.val);
            
            if(curr.left !== null)
                queue.push(curr.left);

            if(curr.right !== null)
                queue.push(curr.right);
        }

        res.push(tempArr);
        level = queue.length;
    }
    
    return res;
};