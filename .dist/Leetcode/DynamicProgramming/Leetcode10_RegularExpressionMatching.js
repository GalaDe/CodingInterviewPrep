"use strict";
/*

Leetcode 10: Hard: https://leetcode.com/problems/regular-expression-matching/


Explanation:

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial)

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means ZERO or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "ZERO or more (*) of any character (.)".

Example 4:

a*b.*y

by, bly, ably, ablmy --> true
ay, ab --> false, because we need to have b in first case, and y in second case


Solution:

1. Can be done using recursion
2. Dynamic Programming: Top-Down and Bottom-Up variations
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatchDynamicProgrammingImpl2 = exports.isMatchDynamicProgrammingImpl = exports.isMatch = void 0;
//My implementation
function isMatch(s, p) {
    let i = 0;
    let minLength = Math.min(s.length, p.length);
    let maxLength = Math.max(s.length, p.length);
    if (p.charAt[i] === '.' && p.charAt[i + 1] === '*')
        return true;
    if (p.charAt[i] === s.charAt[i] && p.charAt[i + 1] === '*')
        return true;
    while (i < minLength) {
        if ((s.charAt[i] !== p.charAt[i]) && (p.charAt[i] !== '.'))
            return false;
        if ((s.charAt[i] !== p.charAt[i]) && (p.charAt[i] === '*')) {
            let j = i;
            while (s.charAt[j] === s.charAt[j + 1]) {
                j++;
            }
            if (j + 1 === minLength)
                return true;
            else
                i = j;
        }
        if (s.charAt[i] === p.charAt[i])
            i++;
        else
            return false;
    }
    if (maxLength - i !== 0)
        return false;
    else
        return true;
}
exports.isMatch = isMatch;
;
function isMatchRecursiveImpl1(s, p, ss = 0, ps = 0) {
    if (p.length - ps <= 0) {
        return s.length - ss <= 0;
    }
    const firstMatch = s.length - ss > 0 && (s[ss] === p[ps] || '.' === p[ps]);
    if (p.length - ps >= 2 && p[ps + 1] === '*') {
        return isMatchRecursiveImpl1(s, p, ss, ps + 2) || (firstMatch && isMatchRecursiveImpl1(s, p, ss + 1, ps));
    }
    else {
        return firstMatch && isMatchRecursiveImpl1(s, p, ss + 1, ps + 1);
    }
}
;
function isMatchRecursiveImpl2(s, p) {
    // solution for lazy :-D
    // return new RegExp(`^${p}$`).test(s);
    if (!p || p.length == 0)
        return s.length == 0;
    const charMatch = s.length > 0 && (s[0] == p[0] || p[0] == ".");
    // is repeater
    if (p.length > 1 && p[1] == "*") {
        // in case charMatch == false (zero repeats)
        // check the same string with the next rule
        const noRepeatsMatch = isMatchRecursiveImpl2(s, p.substring(2));
        // in case charMatch == true, we have repeats
        // check the next substring with the same rule
        const hasRepeatsMatch = charMatch && isMatchRecursiveImpl2(s.substring(1), p);
        // if one of above matches is true, the we found match!
        return noRepeatsMatch || hasRepeatsMatch;
    }
    // no repeater, single char rule
    else {
        // check the next substring with the next rule
        return charMatch && isMatchRecursiveImpl2(s.substring(1), p.substring(1));
    }
}
function isMatchDynamicProgrammingImpl(s, p) {
    const memo = {};
    const dp = (i, j) => {
        const key = i + ',' + j;
        if (key in memo) {
            return memo[key] === true;
        }
        let ans = false;
        // if at end of patter, only valid if also at end of string
        if (j === p.length) {
            ans = i === s.length;
        }
        else {
            // check current indices characters match
            const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');
            // if next character is wildcard
            if (p[j + 1] === '*') {
                // check if pattern after wildcard matches string or characters match and next index of string matches pattern
                ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
            }
            else {
                // no wildcard, characters must match and so must next increments of string and pattern
                ans = firstMatch && dp(i + 1, j + 1);
            }
        }
        // save and return result
        return (memo[key] = !!ans);
    };
    const result = dp(0, 0);
    return result;
}
exports.isMatchDynamicProgrammingImpl = isMatchDynamicProgrammingImpl;
/*
Notes on Implementation:

memo[i][j] ==> i(row) = text / j(col) = pattern

1) if((str[i] ==  pattern[j]) || (pattern[j] == '.')) ==> in this condition takes value of:   memo[i-1][j-1]
2) if patter[j] == '*'
    2.1) if 0 occurrence ==> in this condition takes value of:  memo[i][j-2]
    2.2) if(str[i] == pattern[j-1]) || (patter[j-1] == '.') ==> in this condition takes value of: memo[i-1][j]

Important:

 ** i - runs outside loop, j - inside loop
 ** patternt and text starts with 1
 ** array filled with False values first and memo[0][0] is True
 ** Logic:
      1. IF equals T, else  F
      2. IF * ==> check 2 steps back same row, if T place value as T, if F check the diagonal value
      3. IF . ==> check diagonal value

       a * b . * y
     0 1 2 3 4 5 6
   0 T F T F F F F  <--- Deals with patterns like a* or a*b* or a*b*c*
 b 1 F F F F F F F
 l 2 F F F F F F F
 y 3 F F F F F F F

       a * b . * y
     0 1 2 3 4 5 6
   0 T F T F F F F
 b 1 F F F T F T F  <--- 1 st itteration of i=1, j=1,2,3,4,5,6
 l 2 F F F F T F F  <--- 1 st itteration of i=2, j=1,2,3,4,5,6
 y 3 F F F F F T T  <--- 1 st itteration of i=3, j=1,2,3,4,5,6
                 ^ result
                 
*/
function isMatchDynamicProgrammingImpl2(text, pattern) {
    const memo = new Array(text.length + 1)
        .fill(false)
        .map(() => new Array(pattern.length + 1).fill(false));
    memo[0][0] = true;
    //Deals with patterns like a* or a*b* or a*b*c*
    for (let i = 1; i < memo[0].length; i++) {
        if (pattern[i - 1] == '*') {
            memo[0][i] = memo[0][i - 2];
        }
    }
    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[0].length; j++) {
            if (pattern[j - 1] == '.' || pattern[j - 1] == text[i - 1]) {
                memo[i][j] = memo[i - 1][j - 1];
            }
            else if (pattern[j - 1] == '*') {
                memo[i][j] = memo[i][j - 2];
                if (pattern[j - 2] == '.' || pattern[j - 2] == text[i - 1]) {
                    memo[i][j] = memo[i][j] || memo[i - 1][j];
                }
            }
            else {
                memo[i][j] = false;
            }
        }
    }
    return memo[text.length][pattern.length];
}
exports.isMatchDynamicProgrammingImpl2 = isMatchDynamicProgrammingImpl2;
//# sourceMappingURL=Leetcode10_RegularExpressionMatching.js.map