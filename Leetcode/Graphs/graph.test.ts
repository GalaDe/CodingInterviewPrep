import { GraphImplTopologicalSort } from "../../DataStructure/Graphs/TopologicalSort";
import { cloneGraph, cloneGraph_1, GNode } from "./Leetcode133_CloneGraph";
import { canFinish, canFinish_2, canFinish_3 } from "./Leetcode207_CourseSchedule";
import { findOrder, findOrder_2 } from "./Leetcode210_CourseSchedule2";



describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test clone graph with valid data', async () => {
        // let node = new GNode();
        // node.addVertex(1);
        // node.addVertex(2);
        // node.addVertex(3);
        // node.addVertex(4);
        // node.addConnection(1, 2, node);
        // node.addConnection(1, 4, node);
        // node.addConnection(2, 1, node);
        // node.addConnection(2, 3, node);
        // node.addConnection(3, 2, node);
        // node.addConnection(3, 4, node);
        // node.addConnection(4, 3, node);
        // node.addConnection(4, 1, node);

        //-----------------------------------
        // let node1 = new GNode(1);
        // let node2 = new GNode(2);
        // let node3 = new GNode(3);
        // let node4 = new GNode(4);

        // let map = new Map();
        // map.set(1, node1);
        // map.set(2, node2);
        // map.set(3, node3);
        // map.set(4, node4);

        // map.get(1).neighbors.push([2, 4]);
        // map.get(2).neighbors.push([1, 3]);
        // map.get(3).neighbors.push([2, 4]);
        // map.get(4).neighbors.push([3, 1]);

        //RIGHT SOLUTION FOR THIS EXERSISE
        //-----------------------------------
        let node1 = new GNode(1);
        let node2 = new GNode(2);
        let node3 = new GNode(3);
        let node4 = new GNode(4);

        node1.neighbors.push(node2, node4);
        node2.neighbors.push(node1, node3);
        node3.neighbors.push(node2, node4);
        node4.neighbors.push(node3, node1);

        console.log(node1);
        console.log(cloneGraph_1(node1));

        //------------------------------------
        // let node1 = new GNode(1);
        // let node2 = new GNode(2);
        // let node3 = new GNode(3);
        // let node4 = new GNode(4);

        // let neighbors1 = new Array();
        // let neighbors2 = new Array();
        // let neighbors3 = new Array();
        // let neighbors4 = new Array();

        // neighbors1.push(node2);
        // neighbors1.push(node4);
        // node1.neighbors = neighbors1;

        // neighbors2.push(node1);
        // neighbors2.push(node3);
        // node2.neighbors = neighbors2;

        // neighbors3.push(node2);
        // neighbors3.push(node4);
        // node3.neighbors = neighbors3;

        // neighbors4.push(node2);
        // neighbors4.push(node3);
        // node4.neighbors = neighbors4;

    });

    it('Test clone graph with valid data', async () => {
        let node1 = new GNode(1);
        node1.addConnection(2);
        node1.addConnection(4);

        let node2 = new GNode(2);
        node2.addConnection(1);
        node2.addConnection(3);

        let node3 = new GNode(3);
        node3.addConnection(2);
        node3.addConnection(4);

        let node4 = new GNode(4);
        node4.addConnection(3);
        node4.addConnection(1);

        let node: GNode [] = [];

        node.push(node1);
        node.push(node2);
        node.push(node3);
        node.push(node4);

        console.log(node);
        console.log(cloneGraph(node));
    });

    it('Test course schedule with valid data', async () => {
        console.log(canFinish(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //true
        // console.log(canFinish_2(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //true
        // console.log(canFinish_3(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //true
    });
    
    it('Test course schedule 2 with valid data', async () => {
        // console.log(findOrder(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //[4, 3, 2, 1, 0]
        // console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); //[0,1,2,3] or [0,2,1,3].
        // console.log(findOrder(2, [[0,1],[1,0]])); //[]

        console.log(findOrder_2(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //[4, 3, 2, 1, 0]
        console.log(findOrder_2(4, [[1,0],[2,0],[3,1],[3,2]])); //[0,1,2,3] or [0,2,1,3].
        console.log(findOrder_2(2, [[0,1],[1,0]])); //[]
    });
});
