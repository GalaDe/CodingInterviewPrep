"use strict";
/*
    Leetcode 261: Medium: https://leetcode.com/problems/graph-valid-tree/
    -------------------------------------------------------------------------------------------------------------------------
    IMPORTANT:

    This is Spanning Tree Algorithm Problem!!!!!

    According to definition of algorithm, spanning tree of the graph is the subgraph,
    contains all the vertices and is tree. Graph may have many spanning tree.

    Requirement: Spanning tree must be an acyclic, connected, undirected graph.

    -------------------------------------------------------------------------------------------------------------------------

    You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
    Return true if the edges of the given graph make up a valid tree, and false otherwise.

    Example 1: Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]. Output: true

              0
             /|\
            1 2 3
            |
            4

    Example 2: Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]. Output: false

    0 - 1 - 2
        | \ |
        4   3


    -------------------------------------------------------------------------------------------------------------------------
    EXPLANATION:
    -------------------------------------------------------------------------------------------------------------------------

    Recall that a graph, G, is a tree if the following two conditions are met:

    1. G is fully connected. In other words, for every pair of nodes in G, there is a path between them.
    2. G contains no cycles. In other words, there is exactly one path between each pair of nodes in G.

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    This problem has many solutions:

    Before to start with any solution, you need create an adjacensy list.

    1. Use DFS/BFS

        1) G is fully connected if, and only if, we started a depth-first search from a single source and discovered all nodes in G during it.
        2) G contains no cycles if, and only if, the depth-first search never goes back to an already discovered node.
           We need to be careful though not to count trivial cycles of the form A → B → A that occur with most implementations of undirected edges.

    IMPORTANT:

    For the graph to be a valid tree, it must have exactly n - 1 edges.
        ** Any less, and it can't possibly be fully connected.
        ** Any more, and it has to contain cycles.
    
    Additionally, if the graph is fully connected and contains exactly n - 1 edges,
    it can't possibly contain a cycle, and therefore must be a tree!


    Going by this definition, our algorithm needs to do the following:

    1. Check whether or not there are n - 1 edges. If there's not, then return false.
    2. Check whether or not the graph is fully connected. Return true if it is, false if otherwise.




*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.validTree_rec = exports.validTree = void 0;
function validTree(n, edges) {
    //For the graph to be a valid tree, it must have exactly n - 1 edges
    if (edges.length !== n - 1)
        return false;
    //create adjacency list
    let adjacencyList = new Map();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, new Set());
    }
    for (let edge of edges) {
        adjacencyList.get(edge[0]).add(edge[1]);
        adjacencyList.get(edge[1]).add(edge[0]);
    }
    let visitedSize = dfs(adjacencyList, 0);
    return visitedSize == n;
}
exports.validTree = validTree;
function dfs(adjacencyList, startingVertex) {
    let stack = [startingVertex];
    let visited = new Set();
    while (stack.length > 0) {
        let curr = stack.pop();
        visited.add(curr);
        for (let neighboor of adjacencyList.get(curr)) {
            if (!visited.has(neighboor))
                stack.push(neighboor);
            else
                continue;
        }
    }
    return visited.size;
}
function validTree_rec(n, edges) {
    //For the graph to be a valid tree, it must have exactly n - 1 edges
    if (edges.length !== n - 1)
        return false;
    let adjacencyList = new Map();
    let visited = new Set();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, new Set());
    }
    for (let edge of edges) {
        adjacencyList.get(edge[0]).add(edge[1]);
        adjacencyList.get(edge[1]).add(edge[0]);
    }
    dfs_rec(adjacencyList, 0, visited);
    return visited.size == n;
}
exports.validTree_rec = validTree_rec;
function dfs_rec(adjacencyList, startingVertex, visited) {
    if (visited.has(startingVertex))
        return;
    visited.add(startingVertex);
    for (let neighboor of adjacencyList.get(startingVertex)) {
        dfs_rec(adjacencyList, neighboor, visited);
    }
}
function bfs(adjacencyList, startingVertex) {
    let queue = [startingVertex];
    let visited = new Set();
    while (queue.length > 0) {
        let curr = queue.shift();
        visited.add(curr);
        for (let neighboor of adjacencyList.get(curr)) {
            if (!visited.has(neighboor))
                queue.push(neighboor);
            else
                continue;
        }
    }
    return visited.size;
}
//# sourceMappingURL=Leetcode261_GraphValidTree.js.map