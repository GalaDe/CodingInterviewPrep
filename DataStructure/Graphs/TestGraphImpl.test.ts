import { DirectedWeightedGraphUsingAdjacencyList } from "./DirectedWeightedGraphImplUsingAdjacencyList";
import { GraphImplUsingMatrix } from "./GraphImplUsingMatrix";
import { UndirectedGraphUsingAdjacencyList } from "./UndirectedGraphImplUsingAdjacencyList";




describe('Tests', () => {
    afterAll((done) => {
    done();
    });

    /*
        Undirected Graph:

        A - C           DFS(rec): A B D F C E
        |   |           DFS(iter): A C E B D F
        B   E           BFS: A B C D E F
        |
        D - F
    
        A: B, C
        B: A, D
        C: A, E
        D: B, F
        E: C
        F: D

        Directed Graph:

        A -> C          DFS(rec): A B D F C E
        |    |          DFS(iter): A C E B D F
        ✔    ✔          BFS: A B C D E F
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

    /*
        Directed Graph:

        A -> C              DFS(rec): A B D F C E
        |    |              DFS(iter): A C E B D F
        ✔    ✔              BFS: A B C D E F
        B    E
        |
        ✔
        D -> F
    */
    it('Test: Graph Implementation Using Matrix', async () => {
        let graph = new GraphImplUsingMatrix(6);
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addConnection('A', 'C', false);
        graph.addConnection('A', 'B', false);
        graph.addConnection('B', 'D', false);
        graph.addConnection('D', 'F', false);
        graph.addConnection('C', 'E', false);
        console.log('PRINT DFS RECURSIVE:');
        graph.printDfsRec('A');
        console.log('PRINT DFS ITERRATIVE:');
        graph.printDfs('A');
        console.log('PRINT BFS RECURSIVE:');
        graph.printBfs('A');
    });
});
