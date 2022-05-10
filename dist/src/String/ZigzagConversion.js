"use strict";
/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Solution:

1. Set to counters, since index starts with 0 => (numRows - 1)
2. Edge case:  if (numRows > s.length || numRows <= 1) return s;

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert_1 = void 0;
// Test with Input: s = "PAYPALISHIRING", numRows = 4
function convert_1(s, numRows) {
    if (numRows > s.length || numRows <= 1)
        return s;
    let rows = [];
    let interval = 2 * numRows - 2;
    //responsible for going down
    for (let i = 0; i < s.length; ++i) {
        let rowIndex = i % interval; //0%6=0, 1%6=1, 2%6=2, 3%6=3, 4%6=4, 5%6=5, 6%6=0, 7%6=1, 8%6=2, 9%6=3, 10%6=4, 11%6=5, 12%6=0, 13%6=1
        //responsible for  going up
        if (rowIndex >= numRows) { //4>=4 T 5>=5 T, 6>=6 T, 4>=4 T, 5>=5 T
            rowIndex = interval - rowIndex; // 6-4=2, 6-5=1, 6-6=0, 6-4=2, 6-5=1
        }
        //Responsible to add char to array of strings: 
        // 0: 'PIN'
        // 1: 'ALSIG'
        // 2: 'YAHR'
        // 3: 'PI'
        rows[rowIndex] = (rows[rowIndex] || '') + s[i];
    }
    return rows.join('');
}
exports.convert_1 = convert_1;
function convert_2(s, numRows) {
    let length = s.length;
    if (numRows > length || numRows <= 1) {
        return s;
    }
    let zigZagChars = [];
    let count = 0;
    let interval = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        let step = interval - 2 * i;
        for (let j = i; j < length; j += interval) {
            zigZagChars[count] = s.charAt(j);
            count++;
            if (step > 0 && step < interval && j + step < length) {
                zigZagChars[count] = s.charAt(j + step);
                count++;
            }
        }
    }
    return zigZagChars.join('');
}
//# sourceMappingURL=ZigzagConversion.js.map