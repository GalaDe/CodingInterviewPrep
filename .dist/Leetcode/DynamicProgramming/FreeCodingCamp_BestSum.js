"use strict";
/*
    Description:

    Write a function "bestSum(targetSum, numbers)" that takes in a targetSum and an array of numbers as arguments.

    The function should return an array containing the shortest combination of numbers that add up exactly the targetSum.
    If there is no combinations that adds up to the targetSum, then return null.

    If there is a tie for the shortest combination, you may return any of the shortes.

    Example:

    bestSum(7, [5, 3, 4, 7]) ==> Min ([3,4] or [7]) ==> therefore answer: [7]

    bestSum(7, [2, 4]) ==> null

    bestSum(0, [1, 2, 3]) ==> []

    Note:  Always start with the decision tree


    DP Approach:

    bestSum(8, [2, 3, 5]) -> [3,5]

     0    1     2      3     4     5     6     7     8
    []  null   null   null  null  null   null  null  null

    0    1     2      3     4     5    6     7     8
    []  null   2      3    null   5   null  null  null
    |__________|      ^           ^
    |_________________|           |
    |_____________________________|

    ---------------------------------------------------------------------------------------------------------------------------
    Time Complexity & Space Complexity:
    ---------------------------------------------------------------------------------------------------------------------------
        ** Recursive/Brute force:
        
            m = targetSum, n = numbers.length,
            and this line "array return [...remResult, num];' -- creates copy of an array, will take sort of liniar number of steps
            in worst case scenario will be called every time. Let say target is 50 and array filled with 1s

            Time Complexity: O(n^m * m), exponential TC, n to the power of m
            Space Complexity: O(m^2)

        ** Memoization:
        
            Time Complexity: O(n * m * m) ==> O(n*m^2)
            Space Complexity: O(m^2)
    
        ** DP:
        
            We know we will be iterate through the table at least m times, but for every itteration of that loop, we need also itterate through
            the numbers of input array ==> n*m, and also we need to copy over the array of current position into forward looking position, in the
            worst case m.length

            m = targetSum, n = numbers.length

            Time Complexity: O(m^2*n)  \  both in polynomial time
            Space Complexity: O(m^2)   /

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestSumDynamicP = exports.bestSumMemoization = exports.bestSumRec = void 0;
function bestSumRec(numbers, targetSum) {
    if (targetSum == 0)
        return [];
    if (targetSum < 0)
        return null;
    let shortesCombination = null;
    for (let num of numbers) {
        let rem = targetSum - num;
        let remCombination = bestSumRec(numbers, rem);
        if (remCombination !== null) {
            let combination = [...remCombination, num];
            if (shortesCombination === null || combination.length < shortesCombination.length)
                shortesCombination = combination;
        }
    }
    return shortesCombination;
}
exports.bestSumRec = bestSumRec;
function bestSumMemoization(numbers, targetSum, memo) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum == 0)
        return [];
    if (targetSum < 0)
        return null;
    let shortesCombination = null;
    for (let num of numbers) {
        let rem = targetSum - num;
        let remCombination = bestSumMemoization(numbers, rem, memo);
        if (remCombination !== null) {
            let combination = [...remCombination, num];
            if (shortesCombination === null || combination.length < shortesCombination.length)
                shortesCombination = combination;
        }
    }
    memo[targetSum] = shortesCombination;
    return shortesCombination;
}
exports.bestSumMemoization = bestSumMemoization;
function bestSumDynamicP(numbers, targetSum) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num]; //copy previous value, which adds on additional time
                //if the current combination is shorter that the value already stored
                if (!(table[i + num]) || table[i + num].length > combination.length)
                    table[i + num] = combination;
            }
        }
    }
    return table[targetSum];
}
exports.bestSumDynamicP = bestSumDynamicP;
//# sourceMappingURL=FreeCodingCamp_BestSum.js.map