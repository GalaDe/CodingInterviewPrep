/*
    Descriprion:

    Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.

    The function should return a number of ways that the target can be constructed by concatenating of the wordBank array.

    You may reuse elements of wordBank as many times as needed.

    Example:

    countConstruct(abcdef, [ab, abc, cd, def, abcd]) ==> abc + def ==> 1

    countConstruct(purple, [purp, p, ur, le, purpl]) ==> purp + le, p+ur+p+le ==> 2

    countConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) ==> 0
    
        ==> ska + t + ?
            ska + t + boar + ?
            ska + t + bo + ?

    countConstruct('', [bo, rd, ate, t, ska, sk, boar]) ==> 1

    Note:  Always start with the decision tree

    ---------------------------------------------------------------------------------------------------------------------------
    DP Approach:
    ---------------------------------------------------------------------------------------------------------------------------

    canConstruct(purple, [purp, p, ur, le, purpl]) -> 2

     0    1     2      3     4     5     6    
     1    0     0      0     0     0     0
     p    u     r      p     l     e

     Note: Look one step ahead 1 = a, b = 2, etc. Length is always length of string + 1

    Step 1: Look for purp

    0    1     2      3     4     5    6 
    1    0     0      0     1     0    0
    p    u     r      p     l     e

    Step 2: Look for p

    0    1     2      3     4     5    6 
    1    1     0      0     1     0    0
    p    u     r      p     l     e

    Step 3: Look for purpl

    0    1     2      3     4     5    6 
    1    1     0      0     1     1    0
    p    u     r      p     l     e

    Last Step:

    0    1     2      3     4     5    6 
    1    1     0      1     2     1    2
    p    u     r      p     l     e

    purpl + le
    p + ur + p + le

    ---------------------------------------------------------------------------------------------------------------------------
    Time Complexity & Space Complexity:
    ---------------------------------------------------------------------------------------------------------------------------

        ** Recursive/Brute force: 
        
            m = target.lenth, n = wordBank.length, 
            and this line "let suffix = target.slice(word.length);" -- creates creates new string every time, which makes addition to TC & SC
            
            Time Complexity: O(n^m * m), exponential TC, n to the power of m
            Space Complexity: O(m^2)

        ** Memoization: 
        
            Time Complexity: O(n * m * m) ==> O(n*m^2)
            Space Complexity: O(m^2)

        ** DP: 
        
            We know we will be iterate through the table at least m times, but for every itteration of that loop, we need also itterate through 
            the numbers of input array ==> n*m, and also we need to copy over the array of current position into forward looking position, in the 
            worst case m.length

            m = target, n = wordBank.length

            Time Complexity: O(m^2*n)  \  both in polynomial time
            Space Complexity: O(m)   / 
*/

export function countConstructRec(target: string, wordBank: string []){

    if(target === '') return 1;
    
    let count = 0;
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length); // add on additional value to the TC & SC, because functionality creates new string every time
            let numOfways = countConstructRec(suffix, wordBank);
            count += numOfways;
        }
    }
    return count;
}

//Top Down Approach
export function countConstructMemoization(target: string, wordBank: string [], memo:{}){
    if(target in memo) return memo[target];
    if(target === '') return 1;
    
    let count = 0;
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length); // add on additional value to the TC & SC, because functionality creates new string every time
            let numOfways = countConstructMemoization(suffix, wordBank, memo);
            count += numOfways;
        }
    }
    memo[target] = count;
    return count;
}

//Bottom Up Approach
export function countConstruct_Tabulation(target: string, wordBank: string []){
    
    const table = Array(target.length + 1).fill(0);

    table[0] = 1; //seed value, because one way to make the empty string

    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            //if the word matches the char starting at position i
            if(target.slice(i, i + word.length) === word)
                table[i + word.length] += table[i];
        }
    }

    return table[target.length];
}