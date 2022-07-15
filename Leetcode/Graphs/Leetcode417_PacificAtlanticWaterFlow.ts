/*
    There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. 
    The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

    The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents 
    the height above sea level of the cell at coordinate (r, c).

    The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west 
    if the neighboring cell's height is less than or equal to the current cell's height. 
    Water can flow from any cell adjacent to an ocean into the ocean.

    Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) 
    to both the Pacific and Atlantic oceans.


    Example:
    
     [1,2,2,3,5]
     [3,2,3,4,4]
     [2,4,5,3,1]
     [6,7,1,4,5]
     [5,1,1,2,4]

    --------------------------------------------------------------------------------------------------------------------------
    Solution:
    --------------------------------------------------------------------------------------------------------------------------

    Think:

    In the beginning, I did NOT get what are the start points for the flows. Literally, the question only mentions 
    "find the flow which reaches Pacific and Atlantic oceans". Therefore, there're no start points.
    Well, let's move on. If there's no start spot, can we find the list or spots that can reach the oceans? Yes, for sure,
    we can use dfs/bfs "on every cell/spot" and find out which flows would eventually move toward oceans. 
    So the formula could denote as 
    c < 0 || c >= C,   or r < 0 || r >= R

    Given that c stands for column, C represent size of columns in matrix, r stands for row, and R represents size of rows in Matrix 
    It's good step. However, it costs too high, O(mxnxmxn) time complexity, since every spots you have to traverse to confirm whether the flow can 
    reach oceans. The solution beats 0% with 116ms in golang. Poor performance.
    On the other hand, can we concern abount just the boundaries？
    c == 0 || c == C-1,   or r == 0 || r == R-1

    We can start with this POV. we reverse the procedure. we traverse which paths can reach to those boundaries.
    We eliminiate the points into (2x(M+N)), so the time complexity would be O((M+N)xMxN) by DFS/BFS. The different port is that we check a flow from instead,
    because we don't know where the start points are from this POV.
    Then, we can check out both of the paths if there're intersections.
    which means a path exists, and is capable of reaching to both sides,   
    visited_P[r][c] && visited_A[r][c]

    Checking the paths costs O(MxN) time complexity. Now, We can beats 77.72% submissions with 60ms.
    The space complexity would be O(2xMxN) for both sides reachable paths
    
    BFS Approach:
    ---------------

    1) If the input is empty, immediately return an empty array.

    2) Initialize variables that we will use to solve the problem:

        ** Number of rows and columns in our matrix;
        ** 2 queues, one for the Atlantic Ocean and one for the Pacific Ocean that will be used for BFS;
        ** 2 data structures, again one for each ocean, that we'll use to keep track of cells we already visited, to avoid infinite loops;
        ** A small array [(0, 1), (1, 0), (-1, 0), (0, -1)] that will help with BFS.
    
    3) Figure out all the cells that are adjacent to each ocean, and fill the respective data structures with them.

    4) Perform BFS from each ocean. The data structure used to keep track of cells already visited has a double purpose - it also contains every cell that can flow into that ocean.

    5) Find the intersection, that is all cells that can flow into both oceans.
    
    DFS Approach:
    ---------------

    Intuitively, BFS makes more sense for this problem since water flows in the same manner. 
    However, we can also use DFS, and it doesn't really make much of a difference. 
    So, if you prefer DFS, then that's perfectly fine for this problem. 
    Additionally, it's possible that your interviewer will ask you to implement the problem recursively instead of iteratively. 
    Recursion must be DFS, not BFS.

    Algorithm

    DFS is very similar to BFS. Instead of using a queue and working iteratively, we'll use recursion. 
    Our dfs method will be called for every reachable cell. Note: we could also work iteratively with DFS, 
    in which case we would simply use a stack instead of a queue like in the Approach 1 code, 
    with mostly everything else being identical to the BFS approach.

    1. Fill out pacific set with coordinates
    2. Fill out atlantic set with coordinates
    3. Find adjacent coordinates in both sets.


    Given the following 5x5 matrix:

    Pacific ~   ~   ~   ~   ~ 
        ~  1   2   2   3  (5) *
        ~  3   2   3  (4) (4) *
        ~  2   4  (5)  3   1  *
        ~ (6) (7)  1   4   5  *
        ~ (5)  1   1   2   4  *
            *   *   *   *   * Atlantic

    Return:

    [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix)


    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------
    
    Time complextiy : O(mn), where M is the number of rows and N is the number of columns.
    Space complexity : O(mn), where M is the number of rows and N is the number of columns.




*/


export function pacificAtlantic_DFS(matrix: number[][]): number[][] {
    const result = [];
    const pac = new Set();
    const atl = new Set();
    const LAST_ROW = matrix.length - 1;
    const LAST_COL = matrix[0].length - 1;

    // Check if input is empty
    if (matrix.length == 0 || matrix[0].length == 0) {
                return result;     
    }

    //                                                 v    v         v    v    v                   v    v
    //pacific set contains: {0 0, 1 0, 0 1, 1 1, 2 1, 3 1, 2 2, 1 2, 1 3, 1 4, 0 4, 0 2, 0 3, 2 0, 3 0, 4 0 }
    //                        v    v    v                   v                        v    v    v
    //atlantic set contains:{4 0, 3 0, 3 1, 4 1, 4 2, 3 2, 2 2, 3 3, 3 4, 4 3, 4 4, 0 4, 1 4, 1 3, 2 4, 2 3 }
    //result array will be: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
    for(let i = 0; i <= LAST_COL; i++){
        dfs(matrix, 0, i, pac, matrix[0][i]) // starts with coordinates: 0 0
        dfs(matrix, LAST_ROW, i, atl, matrix[LAST_ROW][i])// starts with coordinates: 4 0
    }
    
   
    for(let i = 0; i <= LAST_ROW; i++){
        dfs(matrix, i, 0, pac, matrix[i][0])
        dfs(matrix, i, LAST_COL, atl, matrix[i][LAST_COL])
    }
    
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(atl.has(`${i} ${j}`) && pac.has(`${i} ${j}`)){
                result.push([i, j])
            }
        }
    }
    
    return result
};

//We need to use prevHeight, because we will compare current with prevHeight
function dfs(matrix, i, j, visited, prevHeight){

    //edge case for out of bounnds
    if(i < 0 || i >= matrix.length  || j < 0 || j >= matrix[0].length)
        return;
    if(matrix[i][j] < prevHeight || visited.has(`${i} ${j}`))
        return;
    
    
    visited.add(`${i} ${j}`)
    
    dfs(matrix, i+1, j, visited, matrix[i][j]) //go down
    dfs(matrix, i-1, j, visited, matrix[i][j]) //go up
    dfs(matrix, i, j+1, visited, matrix[i][j]) //go right
    dfs(matrix, i, j-1, visited, matrix[i][j]) //go left

}

// directionX_axis = [0, 0, 1, -1]
// directionY_axis = [1, -1, 0, 0]

const directions = [[0,1], [0,-1], [1,0], [-1,0]];

export function pacificAtlantic_BFS(matrix: number[][]): number[][] {

    const LAST_ROW = matrix.length - 1;
    const LAST_COL = matrix[0].length - 1;

    const pacificBeachQueue: [number, number][] = [];
    const atlanticBeachQueue: [number, number][] = [];

    //Collect coordinates for rows
    for (let y = 0; y <= LAST_ROW; y++) {
        pacificBeachQueue.push([y, 0]); //[[0, 0], [1, 0], [2, 0], [3,0]]
        atlanticBeachQueue.push([y, LAST_COL]);//[[0, 4], [1, 4], [2, 4], [3,4]]
    }

    //Collect coordinates for colums
    for (let x = 0; x <= LAST_COL; x++) {
        pacificBeachQueue.push([0, x]);//[[0, 0], [0, 1], [0, 2], [0,3]]
        atlanticBeachQueue.push([LAST_ROW, x]);//[[4, 0], [4, 1], [4, 2], [4,3]]
    }
    
    //pacific coordinates rows + col: [[0, 0], [1, 0], [2, 0], [3,0], [0, 0], [0, 1], [0, 2], [0,3]]
    //atlantic coordinates rows + col: [[0, 4], [1, 4], [2, 4], [3,4], [4, 0], [4, 1], [4, 2], [4,3]]
    const flowsPacific = bfs_usingSet(matrix, pacificBeachQueue);
    const flowsAtlantic = bfs_usingSet(matrix, atlanticBeachQueue);
    
    const result = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            // if (flowsPacific[y][x] && flowsAtlantic[y][x]) {
            //     result.push([y,x]);
            // }
            if (flowsPacific.has(`${y} ${x}`) && flowsAtlantic.has(`${y} ${x}`)) {
                result.push([y,x]);
            }
        }
    }
    return result;
}

//Uses Adjacent Matrix to track visited nodes
function bfs_usingAdjacentMatrix (matrix: number[][], queue: [number, number][]){

    const visited: boolean[][] = new Array(matrix.length).fill(undefined).map(() => new Array(matrix[0].length).fill(false))
    
    while (queue.length > 0) {
        const [y,x] = queue.shift();
        visited[y][x] = true;
        
        for (const [dy, dx] of directions) //[0,1], [0,-1], [1,0], [-1,0] ==> dy = 0, dx = 1, ect
        {
            const nextY = dy + y;
            const nextX = dx + x;
            
            if (nextY < 0 || nextY >= matrix.length) continue;
            if (nextX < 0 || nextX >= matrix[0].length) continue;
            if (visited[nextY][nextX]) continue;
            
            if (matrix[y][x] <= matrix[nextY][nextX])
                queue.push([nextY, nextX]);
        }
    }

    return visited;
}

//Uses Set to track visited nodes
function bfs_usingSet (matrix: number[][], queue: [number, number][]){

    let visited = new Set();
    
    while (queue.length > 0) {
        const [y,x] = queue.shift();
        visited.add(`${y} ${x}`);
        
        for (const [dy, dx] of directions) //[0,1], [0,-1], [1,0], [-1,0] ==> dy = 0, dx = 1, ect
        {
            const nextY = dy + y;
            const nextX = dx + x;
            
            if (nextY < 0 || nextY >= matrix.length) continue;
            if (nextX < 0 || nextX >= matrix[0].length) continue;
            if(visited.has(`${nextY} ${nextX}`)) continue;
            
            if (matrix[y][x] <= matrix[nextY][nextX])
                queue.push([nextY, nextX]);
        }
    }

    return visited;
}


//-------------------------------------------------------------------------------------------------------//
class Cell {
    height: number;
    row: number;
    col: number;
    pacific: boolean;
    atlantic: boolean;
    constructor(row: number, col: number, pacific: boolean, atlantic: boolean) {
        this.row = row;
        this.col = col;
        this.pacific = pacific;
        this.atlantic = atlantic;
    }
}

function pacificAtlantic(heights: number[][]): number[][] {
    if (heights.length === 0 || heights[0].length === 0) {
        return [];
    }
    
    const m = heights.length;
    const n = heights[0].length;
    
    const pacificQueue: number[][] = [];
    const atlanticQueue: number[][] = [];
    
     // Init each queue with the border cells
    for (let r = 0; r < m; r++) {
        pacificQueue.push([r, 0]);
        atlanticQueue.push([r, n - 1]);
    }
    
    for (let c = 0; c < n; c++) {
        pacificQueue.push([0, c]);
        atlanticQueue.push([m - 1, c]);
    }
    
    // Do BFS from the ocean borders
    const canReachPacific = bfs(pacificQueue, heights);
    const canReachAtlantic = bfs(atlanticQueue, heights);
    
    const canReachBoth: number[][] = [];
    
    // Return the cells that can reach both oceans
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (canReachPacific[r][c] && canReachAtlantic[r][c]) {
                canReachBoth.push([r, c]);
            }
        }
    }
    
    return canReachBoth;
};

function bfs(queue: number[][], heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const reachable = new Array(m).fill(null).map(() => new Array(n).fill(false));
    
    while (queue.length !== 0) {
        const cell = queue.shift();
        const r = cell[0];
        const c = cell[1];
        
        // We reached this cell so mark it
        reachable[r][c] = true;
    
        // Visit all neighbours of this cell
        for (let d of dir) {
            const row = r + d[0];
            const col = c + d[1];

            // Out of bounds, don't visit them
            if (row < 0 || row >= m || col < 0 || col >= n) {
                continue;
            }

            // They cannot flow into the current cell -> not reachable
            if (heights[r][c] > heights[row][col]) {
                continue;
            }
            
            // If we've already visited them
            if (reachable[row][col]) {
                continue;
            }

            // We can reach them
            queue.push([row, col]);
        }
    }
    
    return reachable;
};

/**

Topographic map - from the higher cells water will flow down into lower cells, will collect in valleys

Question is -> for each cell, is there path from that cell to both the pacific and atlantic oceans

Where we define a path to the pacific ocean = a path to the top or left boundary
                a path to the atlantic ocean = a path to the bottom or right boundary
                
                boundary is the leftmost/rightmost/topmost/bottommost row/col
                
How to know if there is a path?
    There exists a path FROM cell A TO cell B if B's height (cell value) is <= A's height
    
We can do DFS or BFS
DFS recursive is easiest to follow
BFS for shortest path so maybe BFS -> if a cell reaches the ocean-> all of its neighbours can reach the ocean

We could also do a pass over the grid and build a graph but not necessary

We should start BFS from both oceans, then check which cells can reach both
Since its possible edge cells don't flow into each other we need to try BFS from every cell that we know initially reaches atlantic or pacific
**/



  
