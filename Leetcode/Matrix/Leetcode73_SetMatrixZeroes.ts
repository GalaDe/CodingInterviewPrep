/*
    Leetcode 73: Medium: https://leetcode.com/problems/set-matrix-zeroes/

    Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
    You must do it in place.

    Example 1:

    1 1 1               1 0 1
    1 0 1  => output:   0 0 0
    1 1 1               1 0 1

    Example 2:

    0 1 2 0             0 0 0 0
    3 4 5 2 => output:  0 4 5 0
    1 3 1 5             0 3 1 0

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    Algorithm:

        1. Loop through array, add the zeros coordinates to the set
        2. Loop through the set -> call the function set
            1. Set horizontal
            2. Set verticaly

    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    Time: O(row * col) => or O(M*N)
    Space: O(n), because set has been used
*/


export function setZeroes(matrix: number[][]): void {

    let zerosSet = new Set<Array<number>>();

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] == 0){
                zerosSet.add([row,col])
            }
        }
    }
    for(let coor of zerosSet){
        set(matrix, coor[0], coor[1]);
    }
}


function set(matrix: number[][], row: number, col: number){

    //set horizontal
    for(let i = row; i <= row; i++){
        for(let j = 0; j < matrix[0].length; j++){
            matrix[i][j] = 0;
        }
    }

    //set vertical
    for(let i = 0; i < matrix.length; i++){
        for(let j = col; j <= col; j++){
                matrix[i][j] = 0;
        }
    }
}