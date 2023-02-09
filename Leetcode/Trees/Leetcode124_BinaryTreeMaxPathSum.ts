/*
    Leetcode 124: Hard: https://leetcode.com/problems/binary-tree-maximum-path-sum/

    A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
    A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
    The path sum of a path is the sum of the node's values in the path.
    Given the root of a binary tree, return the maximum path sum of any non-empty path.

    Example 1: 
    Input: root = [1,2,3]
    Output: 6
    Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

    Example 2:
    Input: root = [-10,9,20,null,null,15,7]
    Output: 42
    Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    Algorithm:

    For the constraints:
        1. Each node can only happen at most once
        2. Path sum means the adjacency, so we can change the direction like node.left.right (zigzag route)
        3. We have the negative value in node

    Step by step:
        1. Get the left&right child single-side route best sum
        2. Update the return value by comparing max between ret & (left+right+node.val)
        
    Why & What's the side-path sum? 
        Since the node can only travel one time, so we only need the single-side path for both two child nodes.
        We only choose one route (like left or right?) Using Greedy!

    How to calculate the single-side route path sum?
        Choose left side or right side by maximum + node.val
        Notice, if this path is negative, return 0 (no-pick)


    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------

    Time complexity: O(N), where N is number of nodes, since we visit each node not more than 2 times.

    Space complexity: O(H), where H is a tree height, to keep the recursion stack. 
                      In the average case of balanced tree, the tree height H = logN, in the worst case of skewed tree, H = N


*/

import { TreeNode } from "./TreeNode";


//WORKING RECURSIVE SOLUTIONS
let maxSum = Number.MIN_SAFE_INTEGER;
export function maxPathSumRec1(root: TreeNode | null): number {
    helper(root);
    return maxSum;
};

function helper(root: TreeNode | null): number {
    if(root == null) return 0;

    let left = Math.max(0, helper(root.left));
    let right = Math.max(0, helper(root.right));
    let currSum = root.val + left + right;
    maxSum = Math.max(maxSum, currSum);
    return Math.max(left, right) + root.val;
}



export function maxPathSumRec2(root: TreeNode | null): number {
    dfs(root);
    return maxSum;
};

function dfs(node){
    if(node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    maxSum = Math.max(maxSum, left + right + node.val); // keep doing update the return value
    
    const pathSum = Math.max(left,right) + node.val // Greedy
    return pathSum < 0 ? 0 : pathSum;
}

//SOLUTION DOESN'T WORK
export function maxPathSum(root: TreeNode | null): number {

    if(root == null) return 0;

    let stack = [root];
    let maxSum = 0;
    let sum = 0;

    while(stack.length > 0){
        let curr = stack.pop();
        if(curr.val > 0)
            sum += curr.val;

        if(curr.left !== null)
            stack.push(curr.left);

        if(curr.right !== null)
            stack.push(curr.right);
        
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;

};





