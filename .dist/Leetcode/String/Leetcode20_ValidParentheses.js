"use strict";
/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    

    Example 1:
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true

    Example 3:
    Input: s = "(]"
    Output: false
    

    Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
//Time complexity: O(n)
//Space complexity: O(n)
function isValid(str) {
    if (str.length == 0)
        return false;
    if (str.length % 2 !== 0)
        return false;
    if ((str[0] === ')' || str[0] === ']' || str[0] === '}'))
        return false;
    let stack = [];
    let set = new Set();
    set.add('()');
    set.add('[]');
    set.add('{}');
    for (let s of str) {
        if ((s !== ')' && s !== ']' && s !== '}')) {
            stack.push(s);
        }
        else {
            let tmp = stack.pop() + s;
            if (!set.has(tmp))
                return false;
        }
    }
    if (stack.length > 0)
        return false;
    else
        return true;
}
exports.isValid = isValid;
;
//# sourceMappingURL=Leetcode20_ValidParentheses.js.map