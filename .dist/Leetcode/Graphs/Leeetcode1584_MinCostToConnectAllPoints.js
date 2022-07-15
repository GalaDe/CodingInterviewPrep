"use strict";
/*
    Leetcode 1584: Medium: https://leetcode.com/problems/min-cost-to-connect-all-points/


    You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
    The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|,
    where |val| denotes the absolute value of val.

    Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.


    What is manhattan distance:

    Manhattan distance is a distance metric between two points in a N dimensional vector space.
    It is the sum of the lengths of the projections of the line segment between the points onto the coordinate axes.
    In simple terms, it is the sum of absolute difference between the measures in all dimensions of two points.

    |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val


    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    1. Kruskals Algorithm
    2. Prime's Algorithm (using Min Heap)



*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PriorityQueue_1 = __importDefault(require("../PriorityQueue"));
class minHeap {
    constractor() {
        this.heap = [];
    }
}
function minCostConnectPoints(points) {
    const n = points.length;
    let totalCost = 0;
    const minHeap = new PriorityQueue_1.default({ comparator: function (a, b) { return b - a; } });
    const visited = new Set();
    visited.add(points[0]);
    for (let i = 1; i < n; i++) {
        const item = [getDistance(points[0], points[i]), points[i]];
        minHeap.enqueue([getDistance(points[0], points[i]), points[i]]);
    }
    while (visited.size < length) {
        const [cost, point] = minHeap.dequeue().element; //dequeue the min cost elem 
        if (visited.has(JSON.stringify(point)))
            continue;
        visited.add(JSON.stringify(point));
        totalCost += cost;
        // add new frontier to minHeap
        for (let i = 0; i < length; i++) {
            const distance = getDistance(point, points[i]);
            if (visited.has(JSON.stringify(points[i])))
                continue;
            if (distance === 0)
                continue;
            minHeap.enqueue([distance, points[i]]);
        }
    }
    return totalCost;
}
;
function getDistance(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}
//# sourceMappingURL=Leeetcode1584_MinCostToConnectAllPoints.js.map