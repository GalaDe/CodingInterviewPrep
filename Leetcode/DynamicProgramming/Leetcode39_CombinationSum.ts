/*

    Description: 

    Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates 
    where the chosen numbers sum to target. You may return the combinations in any order.
    The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at 
    least one of the chosen numbers is different. It is guaranteed that the number of unique combinations that sum up to target is 
    less than 150 combinations for the given input.

    Example 1:
    Input: candidates = [2,3,6,7], target = 7
    Output: [[2,2,3],[7]]
    Explanation:
    2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
    7 is a candidate, and 7 = 7.
    These are the only two combinations.

    Example 2:
    Input: candidates = [2,3,5], target = 8
    Output: [[2,2,2,2],[2,3,3],[3,5]]

    Example 3:
    Input: candidates = [2], target = 1
    Output: []

    Explanation:

    Write function that takes in a targetSum and array of numbers. The function should return an array containing 
    any combination of elements that add up to exactly the targetSum. If there is no combinations that adds up to the targetSum, then return null.

    If there are multiple combinations possible, you may return any single one.


*/

//TO DO: DOESN'T WORK
export function combinationSum(candidates: number[], target: number){
    let memo: {} = {};
    return combinationSumHelper(candidates, target, memo);

}

export function combinationSumHelper(candidates: number[], target: number, memo:{}){

    if(target in memo) return memo[target]
    if(target == 0) return [];
    if(target < 0) return null;

    for(let num of candidates){
        let rem = target - num;
        let remResult = combinationSumHelper(candidates, rem, memo);
        if(remResult !== null){
            memo[target] = [...remResult, num]
            return memo[target];
        } 
    }

    memo[target] = null;
    return null;
};