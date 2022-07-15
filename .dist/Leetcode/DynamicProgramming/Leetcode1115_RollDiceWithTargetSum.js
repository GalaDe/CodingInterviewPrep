"use strict";
/*
    You have n dice and each die has k faces numbered from 1 to k.

    Given three integers n, k, and target, return the number of possible ways (out of the k^n total ways) to roll the dice
    so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 10^9 + 7.

    Example 1:

    Input: n = 1, k = 6, target = 3
    Output: 1
    Explanation: You throw one die with 6 faces.
    There is only one way to get a sum of 3.

    Example 2:

    Input: n = 2, k = 6, target = 7
    Output: 6
    Explanation: You throw two dice, each with 6 faces.
    There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

    Example 3:

    Input: n = 30, k = 30, target = 500
    Output: 222616187
    Explanation: The answer must be returned modulo 10^9 + 7.

    Time Complexity: O(d * target * faces)
    Space Complexity: O(d * target)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numRollsToTarget_Memoization = exports.numRollsToTarget_DP = exports.numRollsToTarget = void 0;
//TO DO: solution doesn't provide the correct answer for some tests
function numRollsToTarget(n, k, target) {
    if (n * k < target)
        return 0;
    let dp = new Array(n + 1).fill(undefined).map(() => new Array(target + 1).fill(0));
    dp[1][1] = 1;
    dp[1][2] = 1;
    dp[1][3] = 1;
    dp[1][4] = 1;
    dp[1][5] = 1;
    dp[1][6] = 1;
    let exp = Math.pow(10, 9) + 7;
    // rows == n (# of dices)
    // col == target
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= target; j++) {
            let init = 0;
            let sum = 0;
            while (init < j) {
                sum += dp[i][init];
                init++;
            }
            sum %= exp;
            dp[i + 1][j] = sum;
        }
    }
    return dp[n][target];
}
exports.numRollsToTarget = numRollsToTarget;
;
//Solution from Leetcode
function numRollsToTarget_DP(d, f, target) {
    if (d * f < target)
        return 0;
    let exp = Math.pow(10, 9) + 7;
    let dp = new Array(d + 1).fill(undefined).map(() => new Array(target + 1).fill(0));
    for (let i = 1; i <= f; i++)
        dp[1][i] = 1;
    // rows == d (# of dices)
    // col == target
    for (let i = 2; i <= d; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= f; k++) {
                if (j - k > 0)
                    dp[i][j] += dp[i - 1][j - k];
                else
                    break;
            }
            dp[i][j] %= exp;
        }
    }
    return dp[d][target];
}
exports.numRollsToTarget_DP = numRollsToTarget_DP;
;
const MOD = Math.pow(10, 9) + 7;
function numRollsToTarget_Memoization(n, k, target) {
    const memo = new Map();
    return helper(n, target, k, memo) % MOD;
}
exports.numRollsToTarget_Memoization = numRollsToTarget_Memoization;
function helper(i, j, face, memo) {
    if (i === 0) {
        return j === 0 ? 1 : 0;
    }
    const key = `${i}-${j}`;
    if (!memo.has(key)) {
        let ans = 0;
        for (let l = 1; l <= face; l++) {
            if (l <= j) {
                ans += helper(i - 1, j - l, face, memo);
            }
        }
        memo.set(key, ans % MOD);
    }
    return memo.get(key);
}
//# sourceMappingURL=Leetcode1115_RollDiceWithTargetSum.js.map