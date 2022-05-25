"use strict";
/*
    Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
    The integer division should truncate toward zero, which means losing its fractional part.
    For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
    Return the quotient after dividing dividend by divisor.

    Example 1:
    Input: dividend = 10, divisor = 3
    Output: 3
    Explanation: 10/3 = 3.33333.. which is truncated to 3.

    Example 2:
    Input: dividend = 7, divisor = -3
    Output: -2
    Explanation: 7/-3 = -2.33333.. which is truncated to -2.

    Solution: doesn't work -- need to finish



*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideDynamicProgrammingApproach = exports.divideRecursiveApproach = void 0;
function divideRecursiveApproach(dividend, divisor) {
    // Bit shifting with negatives doesn't produce the result we want, so we
    // will normalize to always divide positive numbers.  At the end,
    // we will use basic math rules to flip the sign if we have to.
    const positive = (dividend <= 0 && divisor <= 0) || (dividend >= 0 && divisor >= 0);
    divisor = divisor < 0 ? 0 - divisor : divisor;
    dividend = dividend < 0 ? 0 - dividend : dividend;
    // Same meaning as line 28-29
    // if(divisor < 0)
    //     divisor = 0 - divisor;
    // else  divisor = divisor;
    // if(dividend < 0)
    //     dividend = 0 - dividend;
    // else  dividend = dividend;
    // This algorithm is recursive so we need to break out of it when the dividend is less
    // than the divisor.  That will always produce a result of 0.
    if (dividend < divisor) {
        return 0;
    }
    // Also an edge case here.  If the two are equal, the result is 1 or -1 always because ... math.
    if (dividend === divisor) {
        return positive ? 1 : -1;
    }
    // When you multiply any number x * y, it's the same as doing (x + x + x + x ... + x) y times.
    // An easy solution here is to just keep adding the divisor over and over again until we pass the result we want,
    // but that is nasty slow and has O(n) where n is the dividend.  So instead, we are going to bitwise shift the
    // divisor and continue multiplying it by 2.  We continue to do this until the next bit shift breaks past our
    // dividend.  When that happens, you know for sure you can multiply divisor * quotient and your number will be
    // less than dividend.  After that, you just need to add in the remainder and you're good to go.  It is possible
    // to have a big remainder.  That is why we're checking for 0 as well, because once we hit 1073741824 (2147483648 / 2), then
    // next double will cross it over to -2147483648, so we have to handle that as well.
    const _divisor = divisor;
    let quotient = 1;
    for (let next = divisor << 1; next > 0 && next <= dividend; next = divisor << 1) {
        divisor <<= 1;
        quotient <<= 1;
    }
    // We have to add in the remaining division.  If we overflowed, then this number can still be pretty big.
    quotient = quotient + divideRecursiveApproach(dividend - divisor, _divisor);
    // Finally, we know we did positive division.  So if we're expecting a negative number, then we can
    // go ahead and flip the sign by subtracting from 0.
    quotient = positive ? quotient : 0 - quotient;
    // Finally, leet code magic because requirements...
    quotient = Math.min(2147483647, quotient);
    quotient = Math.max(-2147483648, quotient);
    return quotient;
}
exports.divideRecursiveApproach = divideRecursiveApproach;
function divideDynamicProgrammingApproach(dividend, divisor) {
    //MAX_INT represents the maximum positive integer value that can be represented in 32 bits (i.e., 2147483647)
    //MIN_INT represents the minimu negative integer value that can be represented in 32 bits (i.e., -2147483647)
    const MAX_INT = Math.pow(2, 31) - 1; //  == 2147483647
    const MIN_INT = -Math.pow(2, 31); //  == -2147483648
    const negative = (dividend < 0) !== (divisor < 0);
    /*
        Math.abs('-1'); // 1
        Math.abs(-2); // 2
        Math.abs([2]); // 2
    */
    dividend = Math.abs(dividend); //gives an absolute value
    divisor = Math.abs(divisor);
    let result = 0;
    if (divisor === 1) {
        result = dividend;
    }
    else if (divisor === 2) {
        // ** Shifting right with a logical right shift, the least-significant bit is lost and a 0 is inserted on the other end. 
        //    In our case shift right, 0 will be added the left side.
        // ** Logical shifts by 1 -  means perform binary shift, can be useful as efficient ways to perform multiplication or division of unsigned integers by powers of two.
        // ** Shifting LEFT by n bits -- effect of multiplying it by 2n, RIGHT -- division
        //
        // ** Example_1: 1011 (11) >>> 1  →  0101 (5) --> shift by 1
        //               01011
        //               ^   ^
        //          0 added  1 canceled
        //
        //** Example_2: 1011 >>> 3  →  0001 (2) --> shift by 3
        //              0001011
        //               ^   ^
        //         000 added 011 canceled
        result = dividend >>> 1;
    }
    else {
        while (dividend >= divisor) {
            dividend -= divisor;
            ++result;
        }
    }
    if (negative) {
        result = -result;
    }
    if (result > MAX_INT) {
        return MAX_INT;
    }
    else if (result < MIN_INT) {
        return MIN_INT;
    }
    else {
        return result;
    }
}
exports.divideDynamicProgrammingApproach = divideDynamicProgrammingApproach;
//# sourceMappingURL=DivideTwoIntegers.js.map