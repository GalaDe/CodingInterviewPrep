import { DirectedWeightedGraphUsingAdjacencyList } from "./DirectedWeightedGraphImplUsingAdjacencyList";
import { GraphImplUsingMatrix } from "./GraphImplUsingMatrix";
import { UndirectedGraphUsingAdjacencyList } from "./UndirectedGraphImplUsingAdjacencyList";
import { GraphImplTopologicalSort } from "./TopologicalSort";




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
        graph.addConnection('A', 'C', true);
        graph.addConnection('A', 'B', true);
        graph.addConnection('B', 'D', true);
        graph.addConnection('D', 'F', true);
        graph.addConnection('C', 'E', true);
        graph.removeVertex('E');
        console.log('PRINT DFS RECURSIVE:');
        graph.printDfsRec('A');
        console.log('PRINT DFS ITERRATIVE:');
        graph.printDfs('A');
        console.log('PRINT BFS RECURSIVE:');
        graph.printBfs('A');
    });

    /*
            A                        DFS: 5 2 3 1 0 4
           / \                       TS: A F B D E C
          ✔   ✔ 
         B    C <- F     
          \       /
           ✔     ✔  
           D -> E  
    
    */
    it('Test: Topological Sort', async () => {
        let graph = new GraphImplTopologicalSort();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addConnection('A', 'B');
        graph.addConnection('A', 'C');
        graph.addConnection('F', 'C');
        graph.addConnection('F', 'E');
        graph.addConnection('B', 'D');
        graph.addConnection('D', 'E');
        console.log(`PRINT TOPOLOGICAL SORT RECURSIVE DFS RECURSIVE: ${graph.topologicalSortDfsRec()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING DFS ITERATIVE: ${graph.topologicalSortDfs()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING BFS ITERATIVE: ${graph.topologicalSortBfs()}`);
    });

    it('Test: Topological Sort', async () => {
        let graph = new GraphImplTopologicalSort();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addVertex('G');
        graph.addConnection('A', 'B');
        graph.addConnection('A', 'C');
        graph.addConnection('B', 'C');
        graph.addConnection('B', 'D');
        graph.addConnection('C', 'E');
        graph.addConnection('D', 'F');
        graph.addConnection('D', 'E');
        graph.addConnection('G', 'F');
        graph.addConnection('G', 'E');

        console.log(`PRINT TOPOLOGICAL SORT RECURSIVE DFS RECURSIVE: ${graph.topologicalSortDfsRec()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING DFS ITERATIVE: ${graph.topologicalSortDfs()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING BFS ITERATIVE: ${graph.topologicalSortBfs()}`);
    });


    it('Test: Topological Sort', async () => {
        let graph = new GraphImplTopologicalSort();
        graph.addVertex(0);
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);
        graph.addVertex(4);
        graph.addVertex(5);
        graph.addConnection(5, 2);
        graph.addConnection(5, 0);
        graph.addConnection(4, 0);
        graph.addConnection(4, 1);
        graph.addConnection(2, 3);
        graph.addConnection(3, 1);
        console.log(`PRINT TOPOLOGICAL SORT RECURSIVE DFS RECURSIVE: ${graph.topologicalSortDfsRec()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING DFS ITERATIVE: ${graph.topologicalSortDfs()}`);
        console.log(`PRINT TOPOLOGICAL SORT USING BFS ITERATIVE: ${graph.topologicalSortBfs()}`);
    });
});
