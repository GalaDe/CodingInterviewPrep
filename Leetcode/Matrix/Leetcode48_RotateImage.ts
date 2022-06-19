/*
    Leetcode 48: Medium: https://leetcode.com/problems/rotate-image/

    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
    DO NOT allocate another 2D matrix and do the rotation.


    1   2   3     7  4  1
    4   5   6     8  5  2
    7   8   9     9  6  3

    Example input:

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

    Explanation:

    Round 1: Swap 2 & 4
    Round 2: Swap 3 & 7
    Round 3: Swap 6 & 8

    After Swap:

    1  4  7
    2  5  8
    3  6  9

    After Reverse:

    7  4  1
    8  5  2 
    9  6  3

*/

export function rotate(matrix: number[][]){

    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            //[matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let row of matrix)
        row.reverse();

    return matrix;
};
