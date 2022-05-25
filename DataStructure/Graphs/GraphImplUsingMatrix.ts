/*

    ref: https://kalkicode.com/adjacency-matrix-representation-of-undirected-graph-in-typescript
    ref: https://gist.github.com/rishabhverma17/1fa4b51a3c0b89b0cbe7b700c77c2323



    -----------------------------------------------------------------------------------------------------------------
    GRAPH REPRESENTATION USING MATRIX: Matrix representation is better choice if you dealing are primarily with edges.
    -----------------------------------------------------------------------------------------------------------------
    
    An adjacency matrix is a matrix where both dimensions equal the number of nodes in our graph and each cell can 
    either have the value 0 or 1.
    For implementation 2 array has been used one for vertices and for adj matrix.

                A
               / \ 
              B - C  

            A  B  C
          A 0  1  1
          B 1  0  1 
          C 1  1  0 


    -----------------------------------------------------------------------------------------------------------------
    PROS AND CONS:
    -----------------------------------------------------------------------------------------------------------------

    ADJ LIST                                                ADJ MATRIX

    1. Uses less space                                      1. Uses more space
    2. Faster to find all edjes and iterate over them       2. Slower to find all edjes and iterate over them
    3. Slower to find an edge between two vertices          3. Fater to find an edge between two vertices

    -----------------------------------------------------------------------------------------------------------------
    TIME COMPLEXITY:
    -----------------------------------------------------------------------------------------------------------------

    Add Vertex: O(1)
    Add Edge: O(1)
    Remove Vertex: O(V + E)
    Remove Edge: O(E)
    Search: O(V+E)
    
    -----------------------------------------------------------------------------------------------------------------
    SPACE COMPLEXITY: O(V+E)
    -----------------------------------------------------------------------------------------------------------------

*/


/*
    This implementation will only work if vertices are donated by char data type. If vertices are donated by numbers
    implementation would be much easier. IndexOf should be removed.

        Graph for tesing:

        A -> C              DFS(rec): A B D F C E
        |    |              DFS(iter): A C E B D F
        ✔    ✔              BFS: A B C D E F
        B    E
        |
        ✔
        D -> F  
*/
export class GraphImplUsingMatrix{

    adjmatrix: number [][];
    vertices: any [];
    size: number;

    constructor(size: number){
        if(size < 0) 
            throw new Error('Provide valid number for the size');

        this.vertices = [];
        this.adjmatrix = Array(size).fill(null).map(() => new Array(size).fill(null));
        this.size = size;
    }

    addVertex(vertex: any){
        this.vertices.push(vertex);
    }

    addConnection(vertex1: any, vertex2: any, isDirected: boolean){
        
        let vertex1Indx = this.vertices.indexOf(vertex1);
        let vertex2Indx = this.vertices.indexOf(vertex2);
        this.adjmatrix[vertex1Indx][vertex2Indx] = 1;

        if(!isDirected)
            this.adjmatrix[vertex2Indx][vertex1Indx] = 1;
    }

    removeVertex(vertex: any){
        let indx = this.vertices.indexOf(vertex);
        this.vertices = this.vertices.filter(item => item != vertex);

        //Remove row
        this.adjmatrix.splice(indx, 1);
        //Remove col
        for (let i = 0; i < this.vertices.length; i++){
            this.adjmatrix[i].splice(indx, 1);
        }

    }

    printDfsRec(startingVertex: any){
        let visited = new Set();
        return this.printDfsRecHelper(startingVertex, visited)
    }

    printDfsRecHelper(startingVertex, visited){
        let indx = this.vertices.indexOf(startingVertex);
        if(startingVertex == null || indx == -1) throw new Error('Provide valid vertex');

        visited.add(startingVertex);
        console.log(startingVertex);

        for (let i = 0; i < this.adjmatrix[indx].length; i++){
           
            if(this.adjmatrix[indx][i] == 1){
                if (!visited.has(this.vertices[i]))
                    this.printDfsRecHelper(this.vertices[i], visited)
            }
        }
    }

    printDfs(startingVertex: any){
        let indx = this.vertices.indexOf(startingVertex);
        if(startingVertex == null || indx == -1) throw new Error('Provide valid vertex');

        let visited = new Set();
        let stack = [startingVertex];

        while(stack.length > 0){
            let curr = stack.pop();
            console.log(curr);
            visited.add(curr);
            let indx = this.vertices.indexOf(curr);

            for (let i = 0; i < this.adjmatrix[indx].length; i++){
           
                if(this.adjmatrix[indx][i] == 1){
                    if (!visited.has(this.vertices[i]))
                        stack.push(this.vertices[i]);
                }
            }
        }
    }

    printBfs(startingVertex: any){
        let indx = this.vertices.indexOf(startingVertex);
        if(startingVertex == null || indx == -1) throw new Error('Provide valid vertex');

        let visited = new Set();
        let queue = [startingVertex];

        while(queue.length > 0){
            let curr = queue.shift();
            console.log(curr);
            visited.add(curr);

            let indx = this.vertices.indexOf(curr);

            for (let i = 0; i < this.adjmatrix[indx].length; i++){
           
                if(this.adjmatrix[indx][i] == 1){
                    if (!visited.has(this.vertices[i]))
                        queue.push(this.vertices[i]);
                }
            }
        }  
    }
}