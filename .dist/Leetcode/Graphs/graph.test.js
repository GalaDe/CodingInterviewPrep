"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leetcode133_CloneGraph_1 = require("./Leetcode133_CloneGraph");
const Leetcode200_NumberOfIslands_1 = require("./Leetcode200_NumberOfIslands");
const Leetcode207_CourseSchedule_1 = require("./Leetcode207_CourseSchedule");
const Leetcode210_CourseSchedule2_1 = require("./Leetcode210_CourseSchedule2");
const Leetcode261_GraphValidTree_1 = require("./Leetcode261_GraphValidTree");
const Leetcode417_PacificAtlanticWaterFlow_1 = require("./Leetcode417_PacificAtlanticWaterFlow");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test clone graph with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
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
        let node1 = new Leetcode133_CloneGraph_1.GNode(1);
        let node2 = new Leetcode133_CloneGraph_1.GNode(2);
        let node3 = new Leetcode133_CloneGraph_1.GNode(3);
        let node4 = new Leetcode133_CloneGraph_1.GNode(4);
        node1.neighbors.push(node2, node4);
        node2.neighbors.push(node1, node3);
        node3.neighbors.push(node2, node4);
        node4.neighbors.push(node3, node1);
        console.log(node1);
        console.log((0, Leetcode133_CloneGraph_1.cloneGraph_1)(node1));
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
    }));
    it('Test clone graph with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let node1 = new Leetcode133_CloneGraph_1.GNode(1);
        node1.addConnection(2);
        node1.addConnection(4);
        let node2 = new Leetcode133_CloneGraph_1.GNode(2);
        node2.addConnection(1);
        node2.addConnection(3);
        let node3 = new Leetcode133_CloneGraph_1.GNode(3);
        node3.addConnection(2);
        node3.addConnection(4);
        let node4 = new Leetcode133_CloneGraph_1.GNode(4);
        node4.addConnection(3);
        node4.addConnection(1);
        let node = [];
        node.push(node1);
        node.push(node2);
        node.push(node3);
        node.push(node4);
        console.log(node);
        console.log((0, Leetcode133_CloneGraph_1.cloneGraph)(node));
    }));
    it('Test course schedule with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode207_CourseSchedule_1.canFinish)(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]])); //true
        // console.log(canFinish_2(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //true
        // console.log(canFinish_3(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //true
    }));
    it('Test course schedule 2 with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(findOrder(5, [[0,1], [0,2], [1,3],[1,4], [3,4]])); //[4, 3, 2, 1, 0]
        // console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); //[0,1,2,3] or [0,2,1,3].
        // console.log(findOrder(2, [[0,1],[1,0]])); //[]
        console.log((0, Leetcode210_CourseSchedule2_1.findOrder_2)(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]])); //[4, 3, 2, 1, 0]
        console.log((0, Leetcode210_CourseSchedule2_1.findOrder_2)(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); //[0,1,2,3] or [0,2,1,3].
        console.log((0, Leetcode210_CourseSchedule2_1.findOrder_2)(2, [[0, 1], [1, 0]])); //[]
    }));
    it('Test number of islands with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode200_NumberOfIslands_1.numIslands)([
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ])); //1
        console.log((0, Leetcode200_NumberOfIslands_1.numIslands)([
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ])); //3
    }));
    it('Test number of islands solution 3 with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode200_NumberOfIslands_1.numIslands_3)([
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ])); //1
        console.log((0, Leetcode200_NumberOfIslands_1.numIslands_3)([
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ])); //3
    }));
    it('Test pacific Atlantic water flow with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode417_PacificAtlanticWaterFlow_1.pacificAtlantic_DFS)([[1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]]));
        console.log((0, Leetcode417_PacificAtlanticWaterFlow_1.pacificAtlantic_BFS)([[1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]]));
    }));
    it('Test Leetcode 261: Graph Valid Tree', () => __awaiter(void 0, void 0, void 0, function* () {
        //console.log(validTree(5, [[0,1],[0,2],[0,3],[1,4]])); //true
        console.log((0, Leetcode261_GraphValidTree_1.validTree)(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); //false
    }));
});
//# sourceMappingURL=graph.test.js.map