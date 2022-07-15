"use strict";
/*
    Leetcode 133: Medium: https://leetcode.com/problems/clone-graph/

    Given a reference of a node in a connected undirected graph.Return a deep copy (clone) of the graph.
    Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneGraph_1 = exports.cloneGraph = exports.GNode = void 0;
class GNode {
    constructor(val, neighbors) {
        this.val = (val === undefined ? 0 : val);
        this.neighbors = (neighbors === undefined ? [] : neighbors);
    }
    addVertex(vertex) {
        let node = new GNode(vertex);
        this.neighbors.push(node);
    }
    // addConnection(v1, v2, graph){
    //     for(let neighboor of graph.neighbors){
    //         if(neighboor.val === v1)
    //             neighboor.neighbors.push(v2);
    //     }
    // }
    addConnection(v) {
        this.neighbors.push(v);
    }
}
exports.GNode = GNode;
//Different implementation using GNode[] and BFS: TC = V+E, SC = O(n)
//SOLUTION IS NOT RIGHT
function cloneGraph(graph) {
    if (graph == null)
        return null;
    let visited = new Set();
    let graphClone = [];
    let queue = [];
    for (let vertex of graph) {
        queue.push(vertex);
    }
    while (queue.length > 0) {
        let curr = queue.shift();
        if (!visited.has(curr.val)) {
            let newNode = new GNode(curr.val);
            for (let neighboor of curr.neighbors) {
                newNode.neighbors.push(neighboor);
            }
            graphClone.push(newNode);
        }
        visited.add(curr.val);
    }
    return graphClone;
}
exports.cloneGraph = cloneGraph;
//IMPORTANT: CORRECT SOLUTION
function cloneGraph_1(node) {
    let map = new Map();
    return clone(node, map);
}
exports.cloneGraph_1 = cloneGraph_1;
function clone(node, map) {
    if (node == null)
        return null;
    let newNode = new GNode(node.val);
    map.set(node.val, newNode);
    for (let neighboor of node.neighbors) {
        if (map.has(neighboor.val)) {
            newNode.neighbors.push(map.get(neighboor.val));
        }
        else {
            let curr = clone(neighboor, map);
            newNode.neighbors.push(curr);
        }
    }
    return newNode;
}
function cloneGraph_2(node) {
    if (!node)
        return node; // null case
    let map = new Map();
    return walk(node, map);
}
function walk(node, map) {
    let clone = map.get(node.val);
    if (!clone) {
        clone = new GNode(node.val);
        map.set(node.val, clone);
        for (let child of node.neighbors) {
            clone.neighbors.push(map.get(child.val) || walk(child, map));
        }
    }
    return clone;
}
//# sourceMappingURL=Leetcode133_CloneGraph.js.map