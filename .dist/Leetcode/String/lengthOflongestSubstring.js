"use strict";
/*
Explanation:

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
function lengthOfLongestSubstring(s) {
    if (s.length == 0)
        return 0;
    let left = 0;
    let right = 0;
    let longestSubstring = 0;
    let seen = new Set();
    while (right < s.length) {
        if (!seen.has(s[right])) {
            seen.add(s[right]);
            right++;
            longestSubstring = Math.max(seen.size, longestSubstring);
        }
        else {
            seen.delete(s[left]);
            left++;
        }
    }
    return longestSubstring;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
;
//# sourceMappingURL=lengthOflongestSubstring.js.map