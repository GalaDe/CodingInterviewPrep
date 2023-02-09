/*
    Leetcode 323: Medium: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

    You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates 
    that there is an edge between ai and bi in the graph. Return the number of connected components in the graph.

    Example 1:

    Input: n = 5, edges = [[0,1],[1,2],[3,4]]
    Output: 2   


    0 -- 1 -- 2    3 -- 4

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION: DFS/BFS
    -------------------------------------------------------------------------------------------------------------------------

    Algorithm:

    1.  Create an adjacent list:
        a) Add vertices 
        b) Add connection, since graph is undirected add both ways

    2. Loop through visited set:
        a) Call bfs(adjList, visited, strVertex);
        b) Count unconnected graphs

    3. Return how many graphs

    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    TC = O(E + V)
    SC = O(n)

*/

export function countComponents(n: number, edges: number[][]): number {

    let adjList = new Map< number, Set<number>>();
    let visited = new Set<number>();

    //add vertices to the list
    for(let i = 0; i < n; i++){
        adjList.set(i, new Set());
    }

    //add edges to the list undirected graph
    for(let edge of edges){
        adjList.get(edge[0]).add(edge[1]);
        adjList.get(edge[1]).add(edge[0]);
    }


    //Do DFS or BFS search to find graphs
    let res = 0;
    
    for(let strVertex = 0; strVertex < n && visited.size !== n; strVertex++){
        if(!visited.has(strVertex)){
            bfs(adjList, visited, strVertex);
            res++;
        }
    }
    return res;
};


function bfs(adjList: Map<number, Set<number>>, visited: Set<number>, strVertex: number){

    let queue = [strVertex];

    while(queue.length > 0){
        let curr = queue.shift();
        visited.add(curr);

        for(let neighboor of adjList.get(curr)){
            if(!visited.has(neighboor)){
                queue.push(neighboor);
            }
        }
    }
}