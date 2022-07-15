"use strict";
/*
    Leetcode 509: Easy

    Fibonacci Numbers:

    Fibonacci numbers are a sequence of numbers where every number is the sum of the preceding two numbers.
    It starts from 0 and 1 as the first two numbers. This sequence is one of the famous formulas in mathematics.
    You can find Fibonacci numbers in plant and animal structures. These numbers are also called nature's universal rule, or nature's secret code.


    F0	F1	F2	F3	F4	F5	F6	F7	F8	F9
    0	1	1	2	3	5	8	13	21	34

    Formula to Find Fibonacci Numbers: Fn = Fn-1 + Fn-2

    Note: Base case would be F(0), which is always = 0 & F(1), which is always = 1

    The top-down approach to management is when company-wide decisions are made solely by leadership at the top,
    while the bottom-up approach gives all teams a voice in these types of decisions.

    Example Recursive Implementation: Decision Tree

             F(4)
           /      \
        F(3)      F(2)
       /   \      /   \
     F(2)  F(1)  F(1) F(0)
     /  \
   F(1) F(0)

   F(1) = 1, F(0) = 0, ==> 1+0 =1
   F(2) = 1
   F(3) = F(2) + F(1) ==> 1 + 1 = 2
   F(4) = F(3) + F(2) ==> 2 + 1 = 3

   Example Dynamic Implementation:

   F0  F1  F2  F3  F4
   0   1   1   2   3


   Time Complexity:

   Dynamic approach is much faster, then the recursive, because recursive compute the same values. It more like a Brute-Force approach.

        ** Dynamic Programming:

           TC = O(n), SC = O(n), since addional array has been used

        ** Memoization

            TC = O(n), SC = O(n), since recursion uses built in stack

        ** Recursive:

           TC = O(2^n), since it uses decision tree and it recomputes same values
           SC = O(n), since recursion uses built in stack

    
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibMemoization = exports.fibRec = exports.fibDynamicProgramming = void 0;
//Bottom-up approach: means start from left to right or 0 index first
function fibDynamicProgramming(n) {
    if ((n == 0) || (n == 1))
        return n;
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
exports.fibDynamicProgramming = fibDynamicProgramming;
;
//Run time 183ms
function fibRec(n) {
    if ((n == 0) || (n == 1))
        return n;
    return fibRec(n - 1) + fibRec(n - 2);
}
exports.fibRec = fibRec;
;
//Run time 71 ms
function fibMemoization(n, memo) {
    if (n in memo)
        return memo[n];
    if ((n == 0) || (n == 1))
        return n;
    memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
    return memo[n];
}
exports.fibMemoization = fibMemoization;
;
//# sourceMappingURL=Leetcode509_FibonacciNumber.js.map