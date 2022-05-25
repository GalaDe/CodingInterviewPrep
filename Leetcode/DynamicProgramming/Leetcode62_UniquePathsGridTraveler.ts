
/*
    LEETCODE: 62: https://leetcode.com/problems/unique-paths/






    Time Complexity:

        ** Dynamic Programming:

           TC = O(n), SC = O(1), since addional array has been used

        ** Memoization

            TC = O(m * n), SC = O(m + n), since recursion uses built in stack

            For Example: 

            gridTraveler(4,3) ==> m = 4, n = 3
            
            m: {0, 1, 2, 3, 4} -- possible solution
            n: {0, 1, 2, 3}   -- possible solution

            Total possible solutions m * n 

        ** Recursive:

           TC = O(2^m+n), since it uses decision tree and it recomputes same values, also height of the tree
           SC = O(m+n), since recursion uses built in stacks

*/


export function uniquePathsRec(m: number, n: number): number {

    if(m == 0 || n == 0) return 0;
    if(m == 1 && n == 1) return 1;

    return uniquePathsRec(m - 1, n) + uniquePathsRec(m, n - 1);
};

export function uniquePathsMemoization(m: number, n: number, memo: {}): number {

    let key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m == 0 || n == 0) return 0;
    if(m == 1 && n == 1) return 1;

    memo[key] = uniquePathsMemoization(m - 1, n, memo) + uniquePathsMemoization(m, n - 1, memo);

    return memo[key];
};