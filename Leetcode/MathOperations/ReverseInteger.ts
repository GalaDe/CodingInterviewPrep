/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Solution:

1. Use division, mode, and then multiply reverse int by 10 + rem. For the negative number create sign variable and store the sign.
   At the end multiply reversed number by sign

   TC = O(n)

2. Convert int to string, then split. Use reverse and join

*/

function reverse(x: number): number {

    const sign = x < 0 ? -1 : 1;
    
    x = Math.abs(x); // Math.abs gives a value without the minus in case of nagative nuumber
    let rev = 0;

    while (x / 10) {
        rev = rev * 10 + x % 10;
        x = Math.floor(x / 10);   
    }
    
    if (+ rev > 2147483647) {
        return 0;
    }
    
    return sign * rev;
}

export function reverse_2(x: number): number {
    //x = 312  
    let s: string = x.toString().split("").reverse().join(''); // s = '312'
    let reverseNum: number = parseInt(s, 10); //Converts string to an integer. Use 10 to specify base -> reverseNum = 213
    
    if (reverseNum > Math.pow(2, 31)) {
        return 0;
    } else if ( x < 0) {
        return reverseNum * (-1);
    } else {
        return reverseNum;
    }
};