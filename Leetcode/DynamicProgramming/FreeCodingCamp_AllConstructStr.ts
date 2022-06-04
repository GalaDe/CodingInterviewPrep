/*
    Descriprion:

    Write a function "allConstruct(target, wordBank)" that accepts a target string and an array of strings.

    The function should return 2D array containing all the ways that the target can be constructed by concatenating
    elements of the wordBank array. Each element of the 2D array should represent one combination that costruct the target.

    You may reuse elements of wordBank as many times as needed.

    Example:

    allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c]) ==> 
        [
            [ab, cd, ef],
            [ab, c, def],
            [abc, def],
            [abcd, ef]
        ] 

    allConstruct(purple, [purp, p, ur, le, purpl]) ==> 
       [
           [purp, le],
           [p, ur, p, le]
       ] 
   
    allConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) ==> []
    
        ==> ska + t + ?
            ska + t + boar + ?
            ska + t + bo + ?

    allConstruct('', [bo, rd, ate, t, ska, sk, boar]) ==> [[]]

    Note:  Always start with the decision tree

    ---------------------------------------------------------------------------------------------------------------------------
    DP Approach:
    ---------------------------------------------------------------------------------------------------------------------------

    canConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c]) -> 2

      0      1     2      3     4     5     6    
     [[]]    []    []     []    []    []    []
       a     b     c      d     e     f

     Note: Look one step ahead 1 = a, b = 2, etc. Length is always length of string + 1

    Step 1: 

      0      1     2      3       4        5     6    
     [[]]    []   [ab]   [abc]   [abcd]    []    []
       a     b     c      d       e        f

    Step 2:

      0      1     2      3       4        5     6    
     [[]]    []   [ab]   [abc]   [abcd]    []    []
                                 [ab, cd]
       a     b     c      d       e        f

    Step 3:

      0      1     2      3       4        5     6    
     [[]]    []   [ab]   [abc]   [abcd]    []   [abc,def]
                         [ab,c]  [ab, cd]       [ab,c,def]
                                                [abcd,ef]
                                                [ab,cd,ef]

       a     b     c      d       e        f

                          ^
                          |
            For Example: to create abc(from a - c in array)
                         we can only have in wordBank abc or ab, c
                         Therefore our logic is correct
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

        Let's say m = target, n = wordBank.length

        Time Complexity: O(n^m)  \ can't do any better then exponential time
        Space Complexity: O(n^m) /
*/

export function allConstructRec(target: string, wordBank: string []){

    if(target === '') return [[]];
    
    let arrRes = [];
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length); // add on additional value to the TC & SC, because functionality creates new string every time
            const suffixWays = allConstructRec(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            arrRes.push(...targetWays); 
        }
    }
    return arrRes;
}

export function allConstructMemoization(target: string, wordBank: string [], memo:{}){
    if(target in memo) return memo[target];
    if(target === '') return [[]];
    
    let arrRes = [];
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length); // add on additional value to the TC & SC, because functionality creates new string every time
            const suffixWays = allConstructMemoization(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            arrRes.push(...targetWays); 
        }
    }
    memo[target] = arrRes;
    return arrRes;
}

export function allConstructDynamicP(target: string, wordBank: string []){
    
    const table = Array(target.length + 1).fill([]).map(() => []);

    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            //if the word matches the char starting at position i
            if(target.slice(i, i + word.length) === word){
                let newCombination = table[i].map(subArray => [...subArray, word]);//take all the combinations of the current position and add the word
                table[i + word.length].push(...newCombination);
            }
        }
    }

    return table[target.length];
}

