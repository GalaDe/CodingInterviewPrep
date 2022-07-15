"use strict";
/*
    LEETCODE: 62: https://leetcode.com/problems/unique-paths/

    Description:

    There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
    The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
    Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
    The test cases are generated so that the answer will be less than or equal to 2 * 109.

    Example 1:

    Input: m = 3, n = 7
    Output: 28

    Example 2:

    Input: m = 3, n = 2
    Output: 3
    
    Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down
    
    



    Time Complexity:

        ** Dynamic Programming:

           TC = O(mn), SC = O(mn)

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniquePathsDynamicP = exports.uniquePathsMemoization = exports.uniquePathsRec = void 0;
function uniquePathsRec(m, n) {
    if (m == 0 || n == 0)
        return 0;
    if (m == 1 && n == 1)
        return 1;
    return uniquePathsRec(m - 1, n) + uniquePathsRec(m, n - 1);
}
exports.uniquePathsRec = uniquePathsRec;
;
function uniquePathsMemoization(m, n, memo) {
    let key = m + ',' + n;
    if (key in memo)
        return memo[key];
    if (m == 0 || n == 0)
        return 0;
    if (m == 1 && n == 1)
        return 1;
    memo[key] = uniquePathsMemoization(m - 1, n, memo) + uniquePathsMemoization(m, n - 1, memo);
    return memo[key];
}
exports.uniquePathsMemoization = uniquePathsMemoization;
;
function uniquePathsDynamicP(m, n) {
    let table = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n)
                table[i][j + 1] += current;
            if (i + 1 <= m)
                table[i + 1][j] += current;
        }
    }
    return table[m][n];
}
exports.uniquePathsDynamicP = uniquePathsDynamicP;
;
//# sourceMappingURL=Leetcode62_UniquePathsGridTraveler.js.map