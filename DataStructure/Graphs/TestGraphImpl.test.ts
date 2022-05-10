import { DirectedWeightedGraphUsingAdjacencyList } from "./DirectedWeightedGraphImpl_AdjacencyList";
import { UndirectedGraphUsingAdjacencyList } from "./UndirectedGraphImpl_AdjacencyList";




describe('Tests', () => {
    afterAll((done) => {
    done();
    });

    /*
        Undirected Graph:

        A - C
        |   |
        B   E
        |
        D - F
    
        A: B, C
        B: A, D
        C: A, E
        D: B, F
        E: C
        F: D

        Directed Graph:

        A -> C
        |    |
        ✔    ✔
        B    E
        |
        ✔
        D -> F
    
        A: B, C
        B: D
        C: E
        D: F
        E: null
        F: null


    */

    it('Test: Undirected Graph Implementation Using Adjacency List', async () => {
        let graph = new UndirectedGraphUsingAdjacencyList();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addConnection('A','B');
        graph.addConnection('A','C');
        graph.addConnection('B','D');
        graph.addConnection('D','F');
        graph.addConnection('C','E');
        console.log('PRINT DFS ITERRATIVE:');
        graph.printDfs('A');
        console.log('PRINT DFS RECURSIVE:');
        graph.prinDFSRec('A');
        console.log('PRINT BFS RECURSIVE:');
        graph.printBfs('A');
    });

    it('Test: Directed Weighted Graph Implementation Using Adjacency List', async () => {
        let graph = new DirectedWeightedGraphUsingAdjacencyList();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addConnection('A','B', 5);
        graph.addConnection('A','C', 3);
        graph.addConnection('B','D', 6);
        graph.addConnection('D','F', 5);
        graph.addConnection('C','E', 2);
        graph.costOfPath('A', 'D');
        //graph.removeVertex('A');
        console.log('PRINT DFS ITERRATIVE:');
        graph.printDfs('A');
        console.log('PRINT DFS RECURSIVE:');
        graph.prinDFSRec('A');
        console.log('PRINT BFS RECURSIVE:');
        graph.printBfs('A');
    });
});
