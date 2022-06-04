/*
    Descriprion:

    Write a function "canConstruct(target, wordBank)" that accepts a target string and an array of strings.

    The function should return a boolean indicating whether or not the target can be constructed by concatenating of the wordBank array.

    You may reuse elements of wordBank as many times as needed.

    Example:

    canConstruct(abcdef, [ab, abc, cd, def, abcd]) ==> abc + def ==> true

    canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) ==> false
    
        ==> ska + t + ?
            ska + t + boar + ?
            ska + t + bo + ?

    canConstruct('', [bo, rd, ate, t, ska, sk, boar]) ==> true

    Note:  Always start with the decision tree

    ---------------------------------------------------------------------------------------------------------------------------
    DP Approach:
    ---------------------------------------------------------------------------------------------------------------------------

    canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true

     0    1     2      3     4     5     6    
     T    F     F      F     F     F     F
     a    b     c      d     e     f

     Note: Look one step ahead 1 = a, b = 2, etc. Length is always length of string + 1

    0    1     2      3     4     5    6 
    T    F     T      T     T     F    T
    a    b     c      d     e     f

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

        Time Complexity: O(m^2*n)
        Space Complexity: O(m)
*/

export function canConstructRec(target: string, wordBank: string []){

    if(target === '') return true;
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length); // add on additional value to the TC & SC, because functionality creates new string every time
            if(canConstructRec(suffix, wordBank) === true)
                return true;
        }
    }
    return false;
}

export function canConstructMemoization(target: string, wordBank: string [], memo: {}){
    if(target in memo) return memo[target];
    if(target === '') return true;
    
    for(const word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            if(canConstructRec(suffix, wordBank) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    return false;
}

export function canConstructDynamicP(target: string, wordBank: string []){
    
    const table = Array(target.length + 1).fill(false);

    table[0] = true;

    for(let i = 0; i <= target.length; i++){
        if(table[i] === true){
            for(let word of wordBank)
                //if the word matches the char starting at position i
                if(target.slice(i, i + word.length) === word)
                    table[i + word.length] = true;
        }
    }

    return table[target.length];
}