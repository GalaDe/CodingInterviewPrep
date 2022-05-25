
/*
    ref: https://medium.com/@konduruharish/topological-sort-in-typescript-and-c-6d5ecc4bad95
    ref: https://adelachao.medium.com/graph-topological-sort-javascript-implementation-1cc04e10f181


    -----------------------------------------------------------------------------------------------------------------
    TOPOLOGICAL SORT FOR DIRECTED ACYCLIC GRAPH -- ONLY:
    -----------------------------------------------------------------------------------------------------------------

    Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, 
    vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.

    -----------------------------------------------------------------------------------------------------------------
    Topological Sorting vs Depth First Traversal (DFS): 
    -----------------------------------------------------------------------------------------------------------------

    In DFS, we print a vertex and then recursively call DFS for its adjacent vertices. In topological sorting, we need to print a vertex 
    before its adjacent vertices. For example, in the given graph, the vertex ‘5’ should be printed before vertex ‘0’, but unlike DFS, 
    the vertex ‘4’ should also be printed before vertex ‘0’. So Topological sorting is different from DFS. 
    For example, a DFS of the shown graph is “5 2 3 1 0 4”, but it is not a topological sorting.
    
            5                        DFS: 5 2 3 1 0 4
           / \                       TS: 5 4 2 3 1 0
          ✔   ✔ 
         2    0 <- 4     
          \       /
           ✔     ✔  
           3 -> 1     
    -----------------------------------------------------------------------------------------------------------------
    Time Complexity:  
    -----------------------------------------------------------------------------------------------------------------

    Time complexity of our algorithm here will be O(V + E) where V is the number of vertices and E will the 
    number of edges in the given graph. And, space complexity will be O(V) as we are using additional space for and 
    In-Degree map and a queue in BFS approach and a stack in DFS approach.

    -----------------------------------------------------------------------------------------------------------------
    Real-Word Usage:  
    -----------------------------------------------------------------------------------------------------------------

    The most common use case of topological ordering is for scheduling a task/job which has prerequisites in proper order.

    For Example: In order to take a 400s classes, you first need to take 100s classes.


*/

export class GraphImplTopologicalSort{

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

    addConnection(vertex1: any, vertex2: any){
        if(vertex1 == null || vertex2 == null) return;

        let list1 = this.adjacencyList.get(vertex1);

        if(list1 != undefined)
            list1.add(vertex2);
        else throw new Error('Vertex1 is undefined');
    }

    topologicalSortDfsRec(){
        let visited = new Set();
        let stack = [];
        let tSort = [];

        for(let vertex of this.adjacencyList.keys()){
            if(!visited.has(vertex))
                this.topologicalSortDfsRecHelper(vertex, visited, stack);
        }

        while(stack.length > 0)
            tSort.push(stack.pop());

        return tSort;
    }

    topologicalSortDfsRecHelper(vertex, visited, stack){
        visited.add(vertex);

        for(let neighbour of this.adjacencyList.get(vertex)){
            if(!visited.has(neighbour))
                this.topologicalSortDfsRecHelper(neighbour, visited, stack)
        }
        stack.push(vertex);
    }

    /*
        Implementation of iterative BFS snd DFS approach requeres indegree of the graph implementation. Indegree, means # of edges comming to vertex V.
        Use this ref for better understanding ogf algorithm: https://medium.com/@konduruharish/topological-sort-in-typescript-and-c-6d5ecc4bad95   
    */
    topologicalSortDfs(){
        let tSort = [];
        let inDegree: Map<any, number> = new Map(); // map will keep track of # of edges comming to vertex V.

        // find in-degree for each vertex
        this.adjacencyList.forEach((edges, vertex) => {
            // If vertex is not in the map, add it to the inDegree map
            if (!inDegree.has(vertex)) 
                inDegree.set(vertex, 0);
        
            edges.forEach(edge => {
                    // Increase the inDegree for each edge
                    if (inDegree.has(edge)) 
                        inDegree.set(edge, inDegree.get(edge) + 1);
                    else 
                        inDegree.set(edge, 1);
                });
        });

        // Stack for holding vertices that has 0 inDegree Value
        let stack: any[] = [];
        inDegree.forEach((degree, vertex) => {
            // Add vertices with inDegree 0 to the queue
            if (degree == 0)
                stack.push(vertex);
        });

        // Traverse through the leaf vertices
        while (stack.length > 0) {
            let current = stack.pop();
            tSort.push(current);
            // Mark the current vertex as visited and decrease the inDegree for the edges of the vertex
            // Imagine we are deleting this current vertex from our graph
            if (this.adjacencyList.has(current)) {
                this.adjacencyList.get(current).forEach(edge => {
                    if (inDegree.has(edge) && inDegree.get(edge) > 0) {
                        // Decrease the inDegree for the adjacent vertex
                        let newDegree = inDegree.get(edge) - 1;
                        inDegree.set(edge, newDegree);

                        // if inDegree becomes zero, we found new leaf node.
                        // Add to the queue to traverse through its edges
                        if (newDegree == 0) {
                            stack.push(edge);
                        }
                    }
                });
            }
        }
        return tSort;
    }

    topologicalSortBfs(){
        let tSort = [];
        let inDegree: Map<any, number> = new Map();;

        // find in-degree for each vertex
        this.adjacencyList.forEach((edges, vertex) => {
            // If vertex is not in the map, add it to the inDegree map
            if (!inDegree.has(vertex)) 
                inDegree.set(vertex, 0);
        
            edges.forEach(edge => {
                    // Increase the inDegree for each edge
                    if (inDegree.has(edge)) 
                        inDegree.set(edge, inDegree.get(edge) + 1);
                    else 
                        inDegree.set(edge, 1);
                });
        });

        // Queue for holding vertices that has 0 inDegree Value
        let queue: any[] = [];
        inDegree.forEach((degree, vertex) => {
            // Add vertices with inDegree 0 to the queue
            if (degree == 0)
                queue.push(vertex);
        });

        // Traverse through the leaf vertices
        while (queue.length > 0) {
            let current = queue.shift();
            tSort.push(current);
            // Mark the current vertex as visited and decrease the inDegree for the edges of the vertex
            // Imagine we are deleting this current vertex from our graph
            if (this.adjacencyList.has(current)) {
                this.adjacencyList.get(current).forEach(edge => {
                    if (inDegree.has(edge) && inDegree.get(edge) > 0) {
                        // Decrease the inDegree for the adjacent vertex
                        let newDegree = inDegree.get(edge) - 1;
                        inDegree.set(edge, newDegree);

                        // if inDegree becomes zero, we found new leaf node.
                        // Add to the queue to traverse through its edges
                        if (newDegree == 0) {
                            queue.push(edge);
                        }
                    }
                });
            }
        }
        return tSort;
    }

    /*
     Identities a cycle in the given graph
    */
    isThereALoop(): boolean {
        let count = 0;
        let inDegree: Map<string, number> = new Map();;

        // find in-degree for each vertex
        this.adjacencyList.forEach((edges, vertex) => {
            // If vertex is not in the map, add it to the inDegree map
            if (!inDegree.has(vertex)) {
                inDegree.set(vertex, 0);
            }

            edges.forEach(edge => {
                // Increase the inDegree for each edge
                if (inDegree.has(edge)) {
                    inDegree.set(edge, inDegree.get(edge) + 1);
                } else {
                    inDegree.set(edge, 1);
                }
            });
        });

        // Queue for holding vertices that has 0 inDegree Value
        let queue: string[] = [];
        inDegree.forEach((degree, vertex) => {
            // Add vertices with inDegree 0 to the queue
            if (degree == 0) {
                queue.push(vertex);
            }
        });

        // Traverse through the leaf vertices
        while (queue.length > 0) {
            let current = queue.shift();
            // Increase the visited node count
            count++;
            // Mark the current vertex as visited and decrease the inDegree for the edges of the vertex
            // Imagine we are deleting this current vertex from our graph,
            // by which the edges from this vertex also gets deleted. Once the edges are deleted, inDegree will also be reduced
            if (this.adjacencyList.has(current)) {
                this.adjacencyList.get(current).forEach(edge => {
                    if (inDegree.has(edge) && inDegree.get(edge) > 0) {
                        // Decrease the inDegree for the adjacent vertex
                        let newDegree = inDegree.get(edge) - 1;
                        inDegree.set(edge, newDegree);

                        // if inDegree becomes zero, we found new leaf node.
                        // Add to the queue to traverse through its edges
                        if (newDegree == 0) {
                            queue.push(edge);
                        }
                    }
                });
            }
        }
        return !(count == inDegree.size);
    }
}