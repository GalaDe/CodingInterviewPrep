"use strict";
/*
    Leetcode 200: Medium: https://leetcode.com/problems/number-of-islands/

    Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

    Example 1:

    Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
    ]
    Output: 1

    Example 2:

    Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
    ]
    Output: 3


    Explanation:

    Think of this problem as a ajacency matrix. We can only go 4 directions.

    Solution 1: Set has been used for tracking visited nodes. Adds up additional space
    Solution 2 & 3: Uses flip the bit, if node visited flip 1 to 0

    Basic Algorithm:

        * UP: (row - 1, col)
        * DOWN: (row + 1, col)
        * LEFT: (row, col - 1)
        * RIGHT: (row, col + 1)
        
     0  1  2  3  4
   0 1  1  0  0  0
   1 1  1  0  0  0
   2 0  0  1  0  0
   3 0  0  0  1  1

   Output: 3 islands.
        
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numIslands_3 = exports.numIslands_2 = exports.numIslands = void 0;
//Runtime: 182 ms
//Memory Usage: 55MB
//Recursive Approach: TC = O(rc), SC = O(n)
function numIslands(grid) {
    if (grid.length == 0)
        return 0;
    let visited = new Set();
    let islandCount = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (dfsTraverse(grid, r, c, visited) == true)
                islandCount++;
        }
    }
    return islandCount;
}
exports.numIslands = numIslands;
;
function dfsTraverse(grid, r, c, visited) {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds)
        return false;
    if (grid[r][c] === "0")
        return false;
    const pos = r + ',' + c;
    if (visited.has(pos))
        return false;
    visited.add(pos);
    dfsTraverse(grid, r - 1, c, visited); //go up
    dfsTraverse(grid, r + 1, c, visited); //go down
    dfsTraverse(grid, r, c - 1, visited); //go left
    dfsTraverse(grid, r, c + 1, visited); //go right
    return true;
}
// Runtime 121 ms, faster then 66.67%
// Memory Usage: 45 MB, less than 97.89% 
//  DFS solution: TC = O(m*n)
function numIslands_2(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                helper(i, j, grid);
            }
        }
    }
    return count;
}
exports.numIslands_2 = numIslands_2;
;
// i = row, j = col
function helper(i, j, grid) {
    grid[i][j] = '0';
    if (i > 0 && grid[i - 1][j] == '1') {
        helper(i - 1, j, grid); // go up
    }
    if (i < grid.length - 1 && grid[i + 1][j] == '1') {
        helper(i + 1, j, grid); // go down
    }
    if (j > 0 && grid[i][j - 1] == '1') {
        helper(i, j - 1, grid); //go left
    }
    if (j < grid[i].length - 1 && grid[i][j + 1] == '1') {
        helper(i, j + 1, grid); // go right
    }
}
//Personally like 3rd solution, more readable
function numIslands_3(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                bfs(grid, i, j); // dfs(grid, i, j);
                result += 1;
            }
        }
    }
    return result;
}
exports.numIslands_3 = numIslands_3;
;
//Runtime: 126 ms, faster than 61.58% 
//Memory Usage: 45.4 MB, less than 86.67%
function dfs(grid, r, c) {
    if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] == "0") {
        return;
    }
    grid[r][c] = "0";
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}
//Runtime: 178 ms, faster than 27.37%
//Memory Usage: 50.7 MB, less than 38.77%
function bfs(grid, x, y) {
    let queue = [];
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    queue.push([x, y]);
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let curr = queue.shift();
            for (const dir of direction) {
                let r = curr[0] + dir[0];
                let c = curr[1] + dir[1];
                if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == "0") {
                    continue;
                }
                grid[r][c] = "0";
                queue.push([r, c]);
            }
        }
    }
}
//# sourceMappingURL=Leetcode200_NumberOfIslands.js.map