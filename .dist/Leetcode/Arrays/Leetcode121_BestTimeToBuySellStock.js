"use strict";
/*
    Leetcode 121: Easy: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

    Description:

    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    Example 1:

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    Example 2:

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.

    Solution:

    The best solution would be to use sliding window technique

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProfit = void 0;
//TC = O(N), SC = O(1)
function maxProfit(prices) {
    let leftP_buy = 0, rightP_sell = 1;
    let maxProfit = 0;
    while (rightP_sell < prices.length) {
        //Check if profitable
        let profit;
        if (prices[leftP_buy] < prices[rightP_sell]) {
            profit = prices[rightP_sell] - prices[leftP_buy];
            maxProfit = Math.max(profit, maxProfit);
        }
        else
            leftP_buy = rightP_sell;
        rightP_sell++;
    }
    return maxProfit;
}
exports.maxProfit = maxProfit;
;
//# sourceMappingURL=Leetcode121_BestTimeToBuySellStock.js.map