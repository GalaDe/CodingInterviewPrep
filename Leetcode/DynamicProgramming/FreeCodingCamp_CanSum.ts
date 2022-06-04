/*
    Description: 

    Write a function "canSum(target, numbers)" that takes in a targetSum and an array of numbers as argument.

    The function should return a boolean indicating whether or not it is possible to generate targetSum using
    numbers from the array.
    
    You may use an element of the array as many times as needed. You may assume that all imputs numbers are nonnegative.

    If there is no combinations that adds up to the targetSum, then return null.
    If there are multiple combinations possible, you may return any single one.

    Example:

    howSum(8, [2, 3, 5]) ==> [2, 2, 2, 2] or [3, 5] ==> true

    howSum(7, [2, 4]) ==> null ==> false

    howSum(0, [1, 2, 3]) ==> [] ==> true

    Note:  Always start with the decision tree

    ---------------------------------------------------------------------------------------------------------------------------
    Time Complexity & Space Complexity:
    ---------------------------------------------------------------------------------------------------------------------------
    

     ** Recursion (Brute-Force approach):

        Let's say m = target sum and n = array length, therefore O(n^m)

        Time Complexity: O(n^m)
        Space Complexity: O(m)

    ** Memoization: 
        
        Time Complexity: O(n*m)
        Space Complexity: O(m)

    ** DP: 

        Let's say m = targetSum, n = numbers.length

        Time Complexity: O(mn)
        Space Complexity: O(m)
*/


// TC = O(n^m), SC = O(m)
export function canSumRec(numbers: number [], targetSum: number){

    if(targetSum == 0) return true;
    if(targetSum < 0) return false;

    for(let n of numbers){
        let rem = targetSum - n;
        if(canSumRec(numbers, rem) == true)
            return true;
    }
    return false;
}

// TC = O(n*m), SC = O(m)
export function canSumMemoization(numbers: number [], targetSum: number, memo: {}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return true;
    if(targetSum < 0) return false;

    for(let n of numbers){
        let rem = targetSum - n;
        if(canSumMemoization(numbers, rem, memo) == true){
            memo[targetSum] = true;
            return true;
        }
    }
    return false;
}

export function canSumDynamicP(numbers: number [], targetSum: number){
    
    const table = Array(targetSum + 1).fill(false);

    table[0] = true;

    for(let i = 0; i <= targetSum; i++){
        if(table[i] == true){
            for(let num of numbers)
                table[i + num] = true;
        }
    }

    return table[targetSum]
}