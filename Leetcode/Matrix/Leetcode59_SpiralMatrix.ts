/*
    Leetcode 59: Medium: https://leetcode.com/problems/spiral-matrix-ii/description/

    Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

    Example 1:

    Input: n = 3
    Output: [[1,2,3],[8,9,4],[7,6,5]]

    1  2  3
    8  9  4
    7  6  5

    Example 2:

    Input: n = 1
    Output: [[1]]

    Explanation:

    Solution 1:

    In every direction, either row or column remains constant and other parameter changes (increments/decrements).

    Direction 1: From top left corner to top right corner.

    The row remains constant as layer\text{layer}layer and column increments from layer\text{layer}layer to n−layer−1n-\text{layer}-1n−layer−1

    Direction 2: From top right corner to the bottom right corner.

    The column remains constant as n−layer−1n-layer-1n−layer−1 and row increments from layer+1\text{layer}+1layer+1 to n−layern-\text{layer}n−layer.

    Direction 3: From bottom right corner to bottom left corner.

    The row remains constant as n−layer−1n-\text{layer}-1n−layer−1 and column decrements from n−layer−2n-\text{layer}-2n−layer−2 to layer\text{layer}layer.

    Direction 4: From bottom left corner to top left corner.

    The column remains constant as layer\text{layer}layer and column decrements from n−layer−2n-\text{layer}-2n−layer−2 to layer+1\text{layer}+1layer+1.

    This process repeats (n+1)/2(n+1)/2(n+1)/2 times until all layers are traversed.

    Solution 2:

    Use second matrix to track of coordinates.

    Link too solution: https://leetcode.com/problems/spiral-matrix-ii/solutions/823106/spiral-matrix-ii/

*/

export function generateMatrix(n: number): number[][] {

    if(n = 1) return [[1]];

    let matrix = new Array(n).fill(null).map(() => new Array(n).fill(null));

    let count = 0;
    let size = n*n;
    let left = 0, right = n - 1, top = 0, bottom = n - 1;

    while(count < size){
        //go left to right
        for(let i = left; i <= right; i++){
            count++;
            matrix[top][i] = count;
        }
        top++;

        //go top to bottom
        for(let i = top; i <= bottom; i++){
            count++;
            matrix[i][right] = count;
        }
        right--;

        //go right to left
        for(let i = right; i >= left; i--){
            count++;
            matrix[bottom][i] = count;
        }
        bottom--;

        //go bottom - top
        for(let i = bottom; i >= top; i--){
            count++;
            matrix[i][left] = count;
        }
        left++;
    }

    return matrix;

};