/*
    Leetcode 322: Medium: https://leetcode.com/problems/coin-change/

    You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
    Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

    You may assume that you have an infinite number of each kind of coin.

    Example 1:

    Input: coins = [1,2,5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1
    Example 2:

    Input: coins = [2], amount = 3
    Output: -1
    Example 3:

    Input: coins = [1], amount = 0
    Output: 0

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    1. Dynamic Programming approach using Memoization (Top Down)
    2. Dynamic Programming approach using Tabulation (Bottom Up)


    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------
    Tabulation & Memoization:

    Time complexity : O(amount * # of coins)
    Space complexity : O(S). We use extra space for the memoization table.
*/

//Test with coins = [1,2,5], amount = 11
export function coinChangeTabulation(coins: number[], amount: number): number {
    
    if(coins.length == 0) return -1;

    let dp: number [] = new Array(amount + 1).fill(Infinity); // dp: [0, Inf, Inf, Inf, Inf, Inf, ...] 0 through 11
    dp[0] = 0;

   
    for(let i = 1; i < dp.length; i++){
        for(let coin of coins){
            if(coin <= i)
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);//we are adding 1, because we are using the coin
        }
    }

    //                0  1  2  3  4  5  6  7  8  9  10 11
    //final dp look: [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
    if(dp[amount] <= amount)
        return dp[amount];
    else return -1;

};
