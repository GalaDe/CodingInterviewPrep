/*
    Leetcode 1277: Madium: https://leetcode.com/problems/count-square-submatrices-with-all-ones/

    Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

    Example 1:

    Input: matrix =
    [
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
    ]
    Output: 15
    Explanation: 
    There are 10 squares of side 1.
    There are 4 squares of side 2.
    There is  1 square of side 3.
    Total number of squares = 10 + 4 + 1 = 15.

    Example 2:

    Input: matrix = 
    [
    [1,0,1],
    [1,1,0],
    [1,1,0]
    ]
    Output: 7
    Explanation: 
    There are 6 squares of side 1.  
    There is 1 square of side 2. 
    Total number of squares = 6 + 1 = 7.

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    One of the solution for this problem is to use Dynamic Programming.

        [0,1,1,1]
        [1,1,1,1]
        [0,1,1,1]

        Every time we take square starting ==> (0,0), (0,1), (1,0), (1,1)
        then slide the window of square by 1 ==> (0,1), (1,1), (0, 2), (1, 2), then (0,2), (1,2), (0,3), (1,3)


        Final matrix look:

        [0,1,1,1]
        [1,1,2,2]
        [0,1,2,3]

        Calculate all the values from matrix. Result will be 15.

    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    Time: O(row * col)
    Space: O(1)


*/


export function countSquares(matrix: number[][]): number {

    if(matrix.length == 0 && matrix[0].length) return 0;

    let count = 0;

    for(let row = 1; row < matrix.length; row++){
        for(let col = 1; col < matrix[0].length; col++){
            if(matrix[row][col] == 1){
                matrix[row][col] = Math.min(matrix[row - 1][col], matrix[row][col - 1], matrix[row - 1][col - 1]) + 1;
            }
        }
    }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            count += matrix[row][col];
        }
    }

    return count;
};
