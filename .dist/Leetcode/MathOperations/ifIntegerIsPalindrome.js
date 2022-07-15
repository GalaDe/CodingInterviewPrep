"use strict";
/*
    Given an integer x, return true if x is palindrome integer.

    An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

    Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

    Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

    Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(x) {
    if (x < 0)
        return false;
    let rev = 0;
    let temp = x;
    while (temp / 10) {
        rev = rev * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x == rev)
        return true;
    else
        return false;
}
exports.isPalindrome = isPalindrome;
;
//# sourceMappingURL=ifIntegerIsPalindrome.js.map