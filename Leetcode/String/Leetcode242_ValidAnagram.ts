/*
    Leetcode 242: Easy: https://leetcode.com/problems/valid-anagram/

    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.


    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    Anagram Rules:

    1. Both strings should be the same length
    2. Should have the same letters apperance

    Algorithms:

        1. Sorting: TC = O(n LOG n), because of sorting
            a) Convert string to array
            b) Sort arrays
            c) If arrA !== arrB return false

        2. Count apperence algorithm
            a) Create hash map
            b) Add letters from str1, if letter exists +1
            c) Loop through str2:
                ** if letter exists - 1, if doesn't exists return false
                ** if value == 0, map.delete(str2[i])
            d) if map.size == 0, return true;

    

    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------

    SORTING ALGORITHM:

        TC = O(n LOG n);
        SC = O(n);

    COUNT APPERENCE:

        TC = O(n);
        SC = O(n);


*/


// COUNT APPERENCE: TC = O(n), SC = O(n)
export function isAnagram(s: string, t: string): boolean {
    
    if(s.length !== t.length) return false;
    
    let map = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i]))
            map.set(s[i], 1)
        else map.set(s[i], map.get(s[i]) + 1)
    }
    
    for(let i = 0; i < t.length; i++){
        if(map.get(t[i]))
            map.set(t[i], map.get(t[i]) - 1)
        else 
            return false;

        if(map.get(t[i]) == 0)
            map.delete(t[i])
    }
        
    return map.size == 0;
}

// SORTING: TC = O(n), SC = O(n)
export function isAnagram_2(s: string, t: string): boolean {

    if(s.length !== t.length) return false;

    let arrS = [...s]; //split the string using spread operator
    let arrT = [...t];

    arrS.sort();
    arrT.sort();

    let res = arrS.filter((element) => {
        return !arrT.includes(element)
    });

    if(res.length == 0)
        return true;
    else return false;

}