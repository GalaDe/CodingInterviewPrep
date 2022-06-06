

export class Edges{
    connectedTo: any;
    weight: number; 

    constructor(dest, weight){
        this.connectedTo = dest;
        this.weight = weight;
    }
}

export class DirectedWeightedGraphUsingAdjacencyList{

    adjacencyList: Map<any, Edges[]>;

    constructor(){
        this.adjacencyList = new Map<any, Edges[]>();
    }

    addVertex(vertex: any){
        if(vertex == null) throw new Error('Vertex has not been defined');
        
        if(!this.adjacencyList.has(vertex))
            this.adjacencyList.set(vertex, []);

    }

    addConnection(source: any, dest: any, weight: number){
        if(source == null || dest == null) throw new Error('Vertex has not been defined');

        let edge = new Edges(dest, weight);
        this.adjacencyList.get(source).push(edge);
    }

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
        let startNode = new Edges(startingVertex, null);
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
        let startNode = new Edges(fromVertex, null);
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
        let startNode = new Edges(startingVertex, null);
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

    costOfPath(dest: any, source: any){
        const visited = new Set();
        let startNode = new Edges(dest, null);
        let stack = [startNode];
        let sum = 0;

        while(stack.length > 0){
            let curr = stack.pop();
            visited.add(curr.connectedTo);
            let neighbourSize = this.adjacencyList.get(curr.connectedTo);
            if(neighbourSize.length == 0){
                
            }
            for(let neighbour of this.adjacencyList.get(curr.connectedTo)){
                if(!visited.has(neighbour.connectedTo))
                    stack.push(neighbour);
            }


        }
    }

}
