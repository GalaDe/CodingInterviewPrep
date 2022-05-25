/*
    LeetCode: 70: https://leetcode.com/problems/climbing-stairs/: Easy

    ref: https://www.youtube.com/watch?v=Y0lT9Fck7qI

    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


    Example 1:

    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

    Example 2:

    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step


    NOTES:

    The problem has 2 solutions: Dynamic Programming and Recursion.

        ** Recursion uses DFS approach and decision tree, where it recomputes same values. Therefore in terms of Time Complexity wouldn't be a good choice.
        ** DP is much better in terms of TC, also better to use 2 pointers instead of array.

       
    Time Complexity:

    Dynamic approach is much faster, then the recursive, because recursive compute the same values. It more like a Brute-Force approach.

        ** Dynamic Programming:

           TC = O(n), SC = O(1), since addional array has been used

        ** Memoization

            TC = O(n), SC = O(n), since recursion uses built in stack

        ** Recursive:

           TC = O(2^n), since it uses decision tree and it recomputes same values
           SC = O(n), since recursion uses built in stacks

        

    ------------------------------------------------------------------------------
    Example Recursion: N = 5 ==> Formula same as Fibonacci Fn = F(n - 1) + F(n - 2)
    ------------------------------------------------------------------------------

             0
         /       \   
        1          2   
      /  \       /  \
     2    3     3    4      
    / \  / \   / \  / \ 
   3  4 4   5 4  5 5   6*** out of bound
  /\  
 4  5 

    Continue until 5 for each node. You can see on the tree, that for example right subtree identical to left subtree.

    ------------------------------------------------------------------------------
    Dynamic Programming: N = 5
    ------------------------------------------------------------------------------

    0  1  2  3  4  5
    8  5  3  2  1  1

    Started from the index 4 and 5, recompute 2 previous values.

*/


export function climbStairs(n: number): number {

    if((n == 1) || (n == 0)) return n;

    let p1 = 1;
    let p2 = 1;

    for(let i = n - 2; i >= 0; i--){
        let temp = p1;
        p1 = p1 + p2;
        p2 = temp;
    }

    return p1;
};

export function climbStairsRec(n: number): number {

    if(n <= 1) return 1;

    return climbStairsRec(n - 1) + climbStairsRec(n - 2);
};

export function climbStairsMemoization(n: number, memo: {}): number {

    if(n in memo) return memo[n];
    if(n <= 1) return 1;

    memo[n] = climbStairsMemoization(n - 1, memo) + climbStairsMemoization(n - 2, memo);
    return memo[n];
};