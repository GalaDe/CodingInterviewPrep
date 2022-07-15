"use strict";
/*
    Leetcode 5: Medium

    Given a string s, return the longest palindromic substring in s.
    ref: https://leetcode.com/problems/longest-palindromic-substring/solution/

    Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

    Example 2:
    Input: s = "cbbd"
    Output: "bb"

    Solution:
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindromeSubstring_NOT_WORKING = exports.longestPalindromeSubstring = void 0;
// N: length of string
// Time: O(N^2)
// Space: O(1)
function longestPalindromeSubstring(s) {
    let longestStr = "";
    if (s == null || s.length < 1)
        return longestStr;
    for (let i = 0; i < s.length; i++) {
        const length = Math.max(
        // 1st expandFromMiddle handle the case of equality to itself (the middle character) rac|e|car, for example it will check e with e, 
        //and then 2d expandFromMiddle will check c and c
        expandFromMiddle(s, i, i), expandFromMiddle(s, i, i + 1));
        if (length > longestStr.length) {
            // Reason for (length - 1) -- out of bound
            const start = i - Math.floor((length - 1) / 2);
            longestStr = s.slice(start, start + length);
        }
    }
    return longestStr;
}
exports.longestPalindromeSubstring = longestPalindromeSubstring;
function expandFromMiddle(s, left, right) {
    if ((s == null) || (left > right))
        return 0;
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    //right is the highst and -1, because we are dealing with the index
    return right - left - 1;
}
//My not working solution
function longestPalindromeSubstring_NOT_WORKING(s) {
    let mid = Math.floor(s.length / 2);
    let leftP = mid + 1;
    let rightP = mid - 1;
    let start = 0;
    let end = s.length;
    let temp = "";
    let arrStr = [];
    let longestStr = "";
    while (mid < end) {
        if (s.charAt(rightP) == s.charAt(leftP)) {
            temp = s.substring(rightP, leftP + 1);
            rightP--;
            leftP++;
        }
        else {
            arrStr.push(temp);
            temp = "";
            if ((mid != end - 2) && (!Math.floor(s.length / 2)))
                mid++;
            else
                mid--;
        }
    }
    arrStr.forEach(function (word) {
        if (word.length > longestStr.length) {
            longestStr = word;
        }
    });
    return longestStr;
}
exports.longestPalindromeSubstring_NOT_WORKING = longestPalindromeSubstring_NOT_WORKING;
;
//# sourceMappingURL=Leetcode5_LongestPalindromicSubstring.js.map