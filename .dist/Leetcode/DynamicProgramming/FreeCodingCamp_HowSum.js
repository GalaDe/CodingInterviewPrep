"use strict";
/*
    Description:

    Write a function "howSum(target, numbers)" that takes in a targetSum and an array of numbers as argument.

    The function should return an array containing any combinations of elemnts that add up exactly the targetSum.
    If there is no combinations that adds up to the targetSum, then return null.

    If there are multiple combinations possible, you may return any single one.

    Example:

    howSum(8, [2, 3, 5]) ==> [2, 2, 2, 2] or [3, 5]

    howSum(7, [2, 4]) ==> null

    howSum(0, [1, 2, 3]) ==> []

    Note:  Always start with the decision tree

    ---------------------------------------------------------------------------------------------------------------------------
    Time Complexity & Space Complexity:
    ---------------------------------------------------------------------------------------------------------------------------
    
        ** Recursive/Brute force:
        
            m = targetSum, n = numbers.length,
            and this line "array return [...remResult, num];' -- creates copy of an array, will take sort of liniar number of steps
            in worst case scenario will be called every time. Let say target is 50 and array filled with 1s

            Time Complexity: O(n^m * m), exponential TC, n to the power of m
            Space Complexity:  O(m^2)

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
exports.howSumDynamicP = exports.howSumMemoization = exports.howSumRec = void 0;
function howSumRec(numbers, targetSum) {
    if (targetSum == 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of numbers) {
        let rem = targetSum - num;
        let remResult = howSumRec(numbers, rem);
        if (remResult !== null) {
            return [...remResult, num]; //... means spread operator, copy elements of the array
        }
    }
    return null;
}
exports.howSumRec = howSumRec;
function howSumMemoization(numbers, targetSum, memo) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum == 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of numbers) {
        let rem = targetSum - num;
        let remResult = howSumMemoization(numbers, rem, memo);
        if (remResult !== null) {
            memo[targetSum] = [...remResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
exports.howSumMemoization = howSumMemoization;
;
function howSumDynamicP(numbers, targetSum) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num]; //copy previous value, which adds on additional time
            }
        }
    }
    return table[targetSum];
}
exports.howSumDynamicP = howSumDynamicP;
//# sourceMappingURL=FreeCodingCamp_HowSum.js.map