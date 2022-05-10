/*
    LeetCode 1092: https://leetcode.com/problems/shortest-common-supersequence/

    Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.
    A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

    Example 1:
    Input: str1 = "abac", str2 = "cab"
    Output: "cabac"
    
    Explanation: 
    str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
    str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
    The answer provided is the shortest such string that satisfies these properties.
    
    Example 2:
    Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
    Output: "aaaaaaaa"

    Solution: 
    1. Can be done using recursion
    2. Dynamic Programming: Top-Down and Bottom-Up variations using the simular algorithm as I use
                            for resolving LongestCommonSubsequence.



    In order to build string expected = "cabac"; str1 = abac and str2 = cab
    We can see that the common part for str1 and str2 is "ab" and once again in the LCS question.
    First need to code LCS, the onlt differene is that you really need the string back and not the length of LCS.
    Instead of int[,] array we have string[,] dp and we init everything into string.empty instead of 0.

    The hard part, assuming we have LCS "ab" what are the letter we have befor it and after it.
    well the answer is... all the letters that are not in LCS and are in str1 and str2, so basically we need to iterate LCS letter and iterate str1 and copy all the letters which are not LCS letters,
    we do the same for str 2.

    Logic:

    1. Create 2D array of strings
    2. Fill out 0s rows with str1: abac ==> for (let i = 0; i <= str1.length; i++) arr[i][0] = str1.substring(0,i);
    3. Fill out 0s cols with str2: cab ==> for (let i = 0; i <= str2.length; i++) arr[0][j] = str1.substring(0,j);

    ┌─────────┬───┬───┬───┬
    │   ''    │ c │ca │cab│
    ├─────────┼───┼───┼───┼
    │   a     │'' │'' │'' │
    │   ab    │'' │'' │'' │
    │   aba   │'' │'' │'' │
    │   abac  │'' │'' │'' │
    └─────────┴───┴───┴───┴

    4. Create 2 for loops i and j starts with 1 <= str1.length & j <= str2.length 
    5. Inside of the loop check following:
        a) if(str1[i-1] === str2[j-1])
            arr[i][j] = arr[i-1][j-1] + str1[i-1];
        b) else {
            if(arr[i-1][j].length < arr[i][j-1].length)
                arr[i][j] = arr[i-1][j] + str1[i-1];
            else
                arr[i][j] = arr[i][j-1] + str2[j-1];
            }

    Final result: return arr[str1.length][str2.length];     
    ┌────────┬───-┬───--┬───--┬
    │   ''   │c   │ ca  │cab  │ 
    ├────────┼───-┼───--┼───--┼
    │   a    │ac  │ca   │cab  │
    │   ab   │abc │cab  │cab  │
    │   aba  │abac│abca │caba │
    │   abac │abac│abaca│cabac│
    └────────┴───-┴───--┴───--┴

    
    --------------------------------------
    Time Complexity: Recursive Approach: 
    --------------------------------------
    
    The worst-case time complexity of the above solution is O(2(m+n)) and occupies space in the call stack, 
    where m and n are the length of the strings X and Y. The worst case happens when there is no common 
    subsequence present in X and Y (i.e., LCS is 0), and each recursive call will end up in two recursive calls.

    --------------------------------------
    Time Complexity: Dynamic Approach: 
    --------------------------------------
    The time complexity of the above bottom-up solution is O(m.n) and requires O(m.n) extra space, where m and n are the length of the strings X and Y. 
    The space complexity of the above solution can be improved to O(n) as calculating LCS of a row of the LCS table requires only the solutions 
    to the current row and the previous row.
    
*/



// Example: abac cab
export function shortestCommonSupersequence(str1: string, str2: string): string {

    //Both solution for initialization of 2D arrays works: 1st creates array filled with empty string, 2nd without empty string
    const arr: string[][] = Array(str1.length + 1).fill(undefined).map(() => Array(str2.length + 1).fill(''));

    // Initialize base cases
    for (let i = 0; i <= str1.length; i++) {
        arr[i][0] = str1.substring(0,i);
    }
        
    for (let j = 0; j <= str2.length; j++) {
        arr[0][j] = str2.substring(0,j);
    } 

    for(let i = 1; i <= str1.length; i++){
        for(let j = 1; j <= str2.length; j++){
            if(str1[i-1] === str2[j-1])
                arr[i][j] = arr[i-1][j-1] + str1[i-1];
            else {
                if(arr[i-1][j].length < arr[i][j-1].length)
                    arr[i][j] = arr[i-1][j] + str1[i-1];
                else
                    arr[i][j] = arr[i][j-1] + str2[j-1];
            }

        }
    }
    return arr[str1.length][str2.length];
}
