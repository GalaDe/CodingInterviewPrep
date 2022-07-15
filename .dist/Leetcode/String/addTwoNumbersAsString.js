"use strict";
/*
    Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

    You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

    Example 1:

    Input: num1 = "11", num2 = "123"
    Output: "134"
    Example 2:

    Input: num1 = "456", num2 = "77"
    Output: "533"
    Example 3:

    Input: num1 = "0", num2 = "0"
    Output: "0"

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStrings2 = exports.addStrings = void 0;
//Solution doesn't work, because of the MAX_SAFE_INTEGER
function addStrings(num1, num2) {
    if (num1.length == 0 && num2.length == 0)
        return '';
    if (num1.length == 0)
        return num2;
    if (num2.length == 0)
        return num1;
    const MAX_SAFE_INTEGER = 9007199254740991;
    let sum = 0;
    let n1 = Number(num1);
    let n2 = Number(num2);
    if (n1 > MAX_SAFE_INTEGER || n2 > MAX_SAFE_INTEGER)
        sum = n1 + n2 - 1;
    else
        sum = n1 + n2;
    return sum.toString();
}
exports.addStrings = addStrings;
;
//Example 11 & 123
function addStrings2(num1, num2) {
    let ptrA = num1.length - 1, ptrB = num2.length - 1, result = "", carry = 0;
    while (ptrA >= 0 || ptrB >= 0 || carry) {
        const val1 = num1[ptrA] || 0;
        const val2 = num2[ptrB] || 0;
        let sum = +val1 + +val2 + carry; // +val1/+val2 ==> converts char to int
        //carry = sum > 9 ? 1 : 0; same as bellow
        if (sum > 9)
            carry = 1;
        else
            carry = 0;
        result = sum % 10 + result; //4 => 34 => 134
        ptrA--;
        ptrB--;
    }
    return result;
}
exports.addStrings2 = addStrings2;
;
//# sourceMappingURL=addTwoNumbersAsString.js.map