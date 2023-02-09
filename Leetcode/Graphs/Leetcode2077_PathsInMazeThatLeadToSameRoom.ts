/*
    Leetcode 2077: Medium: https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/


    A maze consists of n rooms numbered from 1 to n, and some rooms are connected by corridors. You are given a 2D integer array corridors where corridors[i] = [room1i, room2i] indicates that there is a corridor connecting room1i and room2i, allowing a person in the maze to go from room1i to room2i and vice versa.
    The designer of the maze wants to know how confusing the maze is. The confusion score of the maze is the number of different cycles of length 3.

    For example, 1 → 2 → 3 → 1 is a cycle of length 3, but 1 → 2 → 3 → 4 and 1 → 2 → 3 → 2 → 1 are not.
    Two cycles are considered to be different if one or more of the rooms visited in the first cycle is not in the second cycle.

    Return the confusion score of the maze.


    Example 1:

    Input: n = 5, corridors = [[1,2],[5,2],[4,1],[2,4],[3,1],[3,4]]
    Output: 2 (contains 2 cycles)

        5
        |
        2 
     /     \
    1   -   4
     \     /
        3


    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION: This is a Topological Sort Problem
    -------------------------------------------------------------------------------------------------------------------------
    It's not difficult to figure out to use dfs to solve the problem, the biggest obstacle here is how to avoid repeated 
    visiting the same visited cycle when starting from different nodes as starting point in this cycle.
    The trick here is always traverse in a single monotonic direction, i.e., either from small to large or vice versa.

    Then when we count up to 3 nodes in a single path, in order to know the next node could be the starting point, 
    we need to check if there is a path leading to it from the last node of the 3. 
    That leads to the second trick - use HashSet instead of List when building the graph from edges at the beginning.

    Approach 1: For every edge we count common neighbours

    Approach 2: DFS


    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------
         
    Time Complexity = O(n^2), 
    Space Complexity = O(n)
*/

let ans = 0;
export function numberOfPaths(n: number, corridors: number[][]): number {

    let adjList = new Map<number, Set<number>>();
    
    //add vertexes
    for(let i = 1; i <= n; i++){
        adjList.set(i, new Set());
    }
    
    //add edges
    for(let conn of corridors){
        if(conn[0] < conn[1])
            adjList.get(conn[0]).add(conn[1]);
        else 
            adjList.get(conn[1]).add(conn[0]);
    }

    //Approach 1
    let res =  0;
    //for every edge we count common neighbours
    for (let connection of corridors) {
        let i = connection[0];
        let j = connection[1];
        
        for (let neighboor of adjList.get(i)) {
            if (adjList.get(j).has(neighboor)) {
                res++;
            }
        }
    }
    
    return res;
    
    //Approach 2: DFS
    // for(let i = 1; i <= n; i++)
    //     dfs(adjList, i, i, 1);
    
    //return ans;
}

function dfs(adjList: Map<number, Set<number>>, start: number, curr: number, count: number){

    if(count == 3){
        if(adjList.get(curr).has(start))
            ans++;
        return;
    }
    for(let next of adjList.get(curr)){
        if(next < curr)
            continue;
        dfs(adjList, start, next, count + 1);
    }
    return;
}
