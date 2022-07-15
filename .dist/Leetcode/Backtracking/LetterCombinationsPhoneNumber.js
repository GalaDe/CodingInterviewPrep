"use strict";
/*
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

    Example 1:
    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

    Example 2:
    Input: digits = ""
    Output: []

    Example 3:
    Input: digits = "2"
    Output: ["a","b","c"]

    Solution: The best approach to resolve the problem is to use Backtracking Algorithm with DFS approach

    TC: Number of combinations(different inputs) we are going to have by length of each output string: O(n * 4^n)
        Why 4^n? Since we know that 9 contains wxyz, which is the longest string, thherefore TC => 4^n

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterCombinations_recursive2 = exports.letterCombinations_dynamic = exports.letterCombinations_recursive1 = void 0;
const hash = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};
//Recursive Approach
function letterCombinations_recursive1(digits) {
    if (!digits)
        return [];
    const visited = new Set();
    const res = [];
    const helper = (s, left) => {
        if (visited.has(s))
            return;
        visited.add(s); // '',
        if (!left) {
            res.push(s);
            return;
        }
        const newLeft = left.slice(1); // 3
        hash[left[0]].forEach((c) => {
            helper(s + c, newLeft);
        });
    };
    helper('', digits);
    return res;
}
exports.letterCombinations_recursive1 = letterCombinations_recursive1;
;
//Dynamic Approach
function letterCombinations_dynamic(digits) {
    if (digits.length === 0) {
        return [];
    }
    const stringArr = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];
    const res = [""];
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const len = res.length;
        for (let k = 0; k < len; k++) {
            const letter1 = res.shift();
            for (let j = 0; j < stringArr[digit].length; j++) {
                const letter2 = stringArr[digit][j];
                res.push(letter1 + letter2);
            }
        }
    }
    return res;
}
exports.letterCombinations_dynamic = letterCombinations_dynamic;
//Easy to understand approach uses backtracking algorith with DFS approach
function letterCombinations_recursive2(digits) {
    const results = [];
    if (digits == null || digits.length === 0)
        return results;
    const map = {
        0: "",
        1: "",
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    function backTrack(index, currentChar) {
        if (index === digits.length) {
            results.push(currentChar);
            return;
        }
        const chars = map[digits[index]];
        for (let char of chars) {
            backTrack(index + 1, currentChar + char);
        }
    }
    backTrack(0, "");
    return results;
}
exports.letterCombinations_recursive2 = letterCombinations_recursive2;
/*
    
  backTrack(0, "");
  backTrack(1, "a");
    backTrack(2, "ad") / backTrack(2, "ae") / backTrack(2, "af")
  backTrack(1, "b");
    backTrack(2, "bd") / backTrack(2, "be") / backTrack(2, "bf")
  backTrack(1, "b");
    backTrack(2, "bd") / backTrack(2, "be") / backTrack(2, "bf")

*/
//Output: ad, ae, af, bd, be, bf, cd, ce, cf
//# sourceMappingURL=LetterCombinationsPhoneNumber.js.map