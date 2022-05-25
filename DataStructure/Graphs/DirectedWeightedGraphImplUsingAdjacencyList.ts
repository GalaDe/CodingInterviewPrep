
/*

    -----------------------------------------------------------------------------------------------------------------------------
    GRAPH REPRESENTATION USING ADJACENCY LIST AND WEIGHTS: List is better choice if you are dealing primarily with vertices.
    -----------------------------------------------------------------------------------------------------------------------------


*/

export class Vertex{
    connectedTo: any;
    weight: number; 

    constructor(dest, weight){
        this.connectedTo = dest;
        this.weight = weight;
    }
}

export class DirectedWeightedGraphUsingAdjacencyList{

    adjacencyList: Map<any, Vertex[]>;

    constructor(){
        this.adjacencyList = new Map<any, Vertex[]>();
    }

    addVertex(vertex: any){
        if(vertex == null) throw new Error('Vertex has not been defined');
        
        if(!this.adjacencyList.has(vertex))
            this.adjacencyList.set(vertex, []);

    }

    addConnection(source: any, dest: any, weight: number){
        if(source == null || dest == null) throw new Error('Vertex has not been defined');

        let edge = new Vertex(dest, weight);
        this.adjacencyList.get(source).push(edge);
    }

    //TO-DO: Figure out how to delete vertexes
    removeVertex(vertex: any){
        if(vertex == null) throw new Error('Vertex has not been defined');

        try{
            this.adjacencyList.delete(vertex);
            //this.adjacencyList.forEach(entry => entry.filter(item => item.connectedTo == vertex));
        }
        catch(error){
            console.error('Vertex does not exists');
        }
    }

    /*
        IMPORTANT: In order to traverse graph using BFS or DFS, you need to keep track
                   of visited nodes. In my case I decided to use Set, since set doesn't allow duplicate data.
    */

    prinDFSRec(startingVertex){
        const visited = new Set();
        let startNode = new Vertex(startingVertex, null);
        this.prinDFSRecHelper(startNode, visited);
    }
                  
    prinDFSRecHelper(startingVertex: any, visited: Set<any>){
        visited.add(startingVertex.connectedTo);
        console.log(startingVertex.connectedTo);
          
        for(let neighbour of this.adjacencyList.get(startingVertex.connectedTo)){
          if(!visited.has(neighbour.connectedTo)){
            this.prinDFSRecHelper(neighbour, visited);
          }
        }
    }

    printDfs(fromVertex: any){
        const visited = new Set();
        let startNode = new Vertex(fromVertex, null);
        let stack = [startNode];

        while(stack.length > 0){
            let curr = stack.pop();
            visited.add(curr.connectedTo);
            console.log(curr.connectedTo);
            for(let neighbour of this.adjacencyList.get(curr.connectedTo)){
                if(!visited.has(neighbour.connectedTo))
                    stack.push(neighbour);
            }
        }
    }

    printBfs(startingVertex: any){
        let visited = new Set();
        let startNode = new Vertex(startingVertex, null);
        let queue = [startNode];
        while(queue.length > 0){
            let current = queue.shift();
            visited.add(current.connectedTo);
            console.log(current.connectedTo);
            for(let neighbour of this.adjacencyList.get(current.connectedTo)){
                if(!visited.has(neighbour.connectedTo)){
                    queue.push(neighbour);
                }
            }
        }
    }

    //TO DO: Figure out how to calculate cost
    costOfPath(dest: any, source: any){
        const visited = new Set();
        let startNode = new Vertex(dest, null);
        let stack = [startNode];

        while(stack.length > 0){
            let curr = stack.pop();
            if(curr.connectedTo == source)
                return
            visited.add(curr.connectedTo);
            let list = this.adjacencyList.get(curr.connectedTo);
            for(let neighbour of this.adjacencyList.get(curr.connectedTo)){
                if(!visited.has(neighbour.connectedTo))
                    stack.push(neighbour);
            }
        }
    }
}
