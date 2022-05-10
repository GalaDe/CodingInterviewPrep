/*

    ref: https://algodaily.com/lessons/implementing-graphs-edge-list-adjacency-list-adjacency-matrix/javascript
    ref: https://ricardoborges.dev/data-structures-in-typescript-graph
    ref: https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
    ref: https://github.com/oshogun/trab_1_grafos/blob/master/src/Graph.ts
    ref: https://medium.com/@ziyoshams/graphs-in-javascript-cc0ed170b156
    ref: https://betterprogramming.pub/basic-interview-data-structures-in-javascript-graphs-3f9118aeb078
    ref: https://www.educative.io/blog/data-structures-101-graphs-javascript
    ref: https://medium.com/@trejonstallsworth/graphs-in-javascript-831db916de10


    ---------------------------------------------------------------------------------------------------------
    WHAT IS GRAPH:
    ---------------------------------------------------------------------------------------------------------
    Graph is a non-linear data structure that is comprised of vertices, also known as nodes. 
    These vertices are then connected by “edges” which can either have a single direction or go both directions. 

    Graph is a group of dots connected by lines. You've seen them plenty of times. We can use graphs to model relationships in the world.

    For example:

    1. Facebook friend networks are a graph where each person is a "dot" or a node, and the friendships and connections between people are lines.

    2. Google Maps uses a series of nodes and lines to model the road network and give you directions to your final destination.

    3. The Internet is a really a giant graph where web pages are dots and the links between pages are lines.

    We can meaningful model groups of relationships, find relations between people, find the shortest path between two points, model objects in space, 
    and document structures all using this concept of nodes connected by edges.

    ---------------------------------------------------------------------------------------------------------
    DIFFERENT TYPES OF GRAPHS:
    ---------------------------------------------------------------------------------------------------------
        *** Directed - one way connection
        *** Undirected - two-way connection

        -----------------------------------
        Undirected:  
        -----------------------------------       
                             
        A - B                
        |                   
        C - D - E            
        
        Adjacent List representation:
                             
        A: B, C
        B: A
        C: A, D
        D: C, E
        E: D
            
        -----------------------------------
        Directed:
        ------------------------------------

        A -> B
        ^
        |                   
        C -> D -> E      
        
        Adjacent List representation:
                             
        A: B
        B: null
        C: A, D
        D: E
        E: null
    ---------------------------------------------------------------------------------------------------------
    APLICATIONS USES GRAPH:
    ---------------------------------------------------------------------------------------------------------
    Graphs have multiple applications in software. They can be useful for social networks, map navigation, 
    browsing the web or even organizing the processes of your computers operating system. 
    For these reasons, focusing on the implementation of graphs and developing algorithms to work with them is a critical concept in computer science.

*/

/*
    IMPLEMENTATION of UNDIRECTED GRAPH
*/
export class UndirectedGraphUsingAdjacencyList{

    adjacencyList: Map<any, Set<any>>;

	constructor() {
		this.adjacencyList = new Map<any, Set<any>>();
	}

    addVertex(vertex: any){
        if(vertex == null) return;

        if(!this.adjacencyList.has(vertex))
            this.adjacencyList.set(vertex, new Set());
        else throw new Error('Already exists');
    }

    removeVertex(vertex: any){
        if(vertex == null) return;

        const vertexList = this.adjacencyList.get(vertex);
		if (vertexList != undefined) {
			for (const entry of vertexList) {
				this.removeConnection(vertex, entry);
			}
		}
		this.adjacencyList.delete(vertex);
    }

    addConnection(vertex1: any, vertex2: any){
        if(vertex1 == null || vertex2 == null) return;

        let list1 = this.adjacencyList.get(vertex1);
        let list2 = this.adjacencyList.get(vertex2);

        if(list1 != undefined && list2 != undefined){
            list1.add(vertex2);
            list2.add(vertex1);
        }
        else if(list1 == undefined)
            throw new Error('Vertex1 is undefined');
        else throw new Error('Vertex2 is undefined');
    }

    removeConnection(vertex1: any, vertex2: any){
		const v2List = this.adjacencyList.get(vertex2);
        v2List.delete(vertex1);
    }

    /*
        IMPORTANT: In order to traverse graph using BFS or DFS, you need to keep track
                   of visited nodes. In my case I decided to use Set, since set doesn't allow duplicate data.
    */

    //Recursive Approaches
    printDfsRec(){
        const visited = new Set();
        const dfs = node => {
            console.log(node);
            visited.add(node);
                for (let neighbour of this.adjacencyList.get(node)) {
                    if (!visited.has(neighbour)) {
                    dfs(neighbour);
                    }
                }
            }
    }

    prinDFSRec(startingVertex){
        const visited = new Set();
        this.prinDFSRecHelper(startingVertex, visited);
      }
      
    prinDFSRecHelper(startingVertex: any, visited: Set<any>){
        visited.add(startingVertex);
        console.log(startingVertex);
          
        for(let neighbour of this.adjacencyList.get(startingVertex)){
          if(!visited.has(neighbour)){
            this.prinDFSRecHelper(neighbour, visited);
          }
        }
    }

 
    //Iterrative Approach
    printDfs(startingVertex: any){
        const visited = new Set();
        let stack = [startingVertex];
        while(stack.length > 0){
            let current = stack.pop();
            visited.add(current);
            console.log(current);
            for(let neighbour of this.adjacencyList.get(current)){
                if(!visited.has(neighbour))
                    stack.push(neighbour);
            }  
        }
    }

    printBfs(startingVertex: any){
        let visited = new Set();
        let queue = [startingVertex];
        while(queue.length > 0){
            let current = queue.shift();
            visited.add(current);
            console.log(current);
            for(let neighbour of this.adjacencyList.get(current)){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                }
            }
        }
    }
}