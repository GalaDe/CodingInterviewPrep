"use strict";
/*

    -----------------------------------------------------------------------------------------------------------------------------
    GRAPH REPRESENTATION USING ADJACENCY LIST AND WEIGHTS: List is better choice if you are dealing primarily with vertices.
    -----------------------------------------------------------------------------------------------------------------------------


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectedWeightedGraphUsingAdjacencyList = exports.Vertex = void 0;
class Vertex {
    constructor(dest, weight) {
        this.connectedTo = dest;
        this.weight = weight;
    }
}
exports.Vertex = Vertex;
class DirectedWeightedGraphUsingAdjacencyList {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (vertex == null)
            throw new Error('Vertex has not been defined');
        if (!this.adjacencyList.has(vertex))
            this.adjacencyList.set(vertex, []);
    }
    addConnection(source, dest, weight) {
        if (source == null || dest == null)
            throw new Error('Vertex has not been defined');
        let edge = new Vertex(dest, weight);
        this.adjacencyList.get(source).push(edge);
    }
    //TO-DO: Figure out how to delete vertexes
    removeVertex(vertex) {
        if (vertex == null)
            throw new Error('Vertex has not been defined');
        try {
            this.adjacencyList.delete(vertex);
            //this.adjacencyList.forEach(entry => entry.filter(item => item.connectedTo == vertex));
        }
        catch (error) {
            console.error('Vertex does not exists');
        }
    }
    /*
        IMPORTANT: In order to traverse graph using BFS or DFS, you need to keep track
                   of visited nodes. In my case I decided to use Set, since set doesn't allow duplicate data.
    */
    prinDFSRec(startingVertex) {
        const visited = new Set();
        let startNode = new Vertex(startingVertex, null);
        this.prinDFSRecHelper(startNode, visited);
    }
    prinDFSRecHelper(startingVertex, visited) {
        visited.add(startingVertex.connectedTo);
        console.log(startingVertex.connectedTo);
        for (let neighbour of this.adjacencyList.get(startingVertex.connectedTo)) {
            if (!visited.has(neighbour.connectedTo)) {
                this.prinDFSRecHelper(neighbour, visited);
            }
        }
    }
    printDfs(fromVertex) {
        const visited = new Set();
        let startNode = new Vertex(fromVertex, null);
        let stack = [startNode];
        while (stack.length > 0) {
            let curr = stack.pop();
            visited.add(curr.connectedTo);
            console.log(curr.connectedTo);
            for (let neighbour of this.adjacencyList.get(curr.connectedTo)) {
                if (!visited.has(neighbour.connectedTo))
                    stack.push(neighbour);
            }
        }
    }
    printBfs(startingVertex) {
        let visited = new Set();
        let startNode = new Vertex(startingVertex, null);
        let queue = [startNode];
        while (queue.length > 0) {
            let current = queue.shift();
            visited.add(current.connectedTo);
            console.log(current.connectedTo);
            for (let neighbour of this.adjacencyList.get(current.connectedTo)) {
                if (!visited.has(neighbour.connectedTo)) {
                    queue.push(neighbour);
                }
            }
        }
    }
    //TO DO: Figure out how to calculate cost
    costOfPath(dest, source) {
        const visited = new Set();
        let startNode = new Vertex(dest, null);
        let stack = [startNode];
        while (stack.length > 0) {
            let curr = stack.pop();
            if (curr.connectedTo == source)
                return;
            visited.add(curr.connectedTo);
            let list = this.adjacencyList.get(curr.connectedTo);
            for (let neighbour of this.adjacencyList.get(curr.connectedTo)) {
                if (!visited.has(neighbour.connectedTo))
                    stack.push(neighbour);
            }
        }
    }
}
exports.DirectedWeightedGraphUsingAdjacencyList = DirectedWeightedGraphUsingAdjacencyList;
//# sourceMappingURL=DirectedWeightedGraphImplUsingAdjacencyList.js.map