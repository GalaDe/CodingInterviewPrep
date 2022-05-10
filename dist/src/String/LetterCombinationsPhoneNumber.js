"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterCombinations = void 0;
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
function letterCombinations(digits) {
    if (!digits)
        return [];
    const visited = new Set();
    const res = [];
    const helper = (s, left) => {
        if (visited.has(s))
            return;
        visited.add(s);
        if (!left) {
            res.push(s);
            return;
        }
        const newLeft = left.slice(1);
        hash[left[0]].forEach((c) => {
            helper(s + c, newLeft);
        });
    };
    helper('', digits);
    return res;
}
exports.letterCombinations = letterCombinations;
;
//# sourceMappingURL=LetterCombinationsPhoneNumber.js.map