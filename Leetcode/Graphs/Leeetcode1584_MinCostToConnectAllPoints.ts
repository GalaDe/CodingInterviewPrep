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

    The algorithm operates by identifying the lowest-weighted edge that is not part of the MST. 
    Then, if the nodes that belong to the edge are not connected, the edge is added to the MST. 
    This process is repeated until all nodes are connected. Since we do not add an edge when its nodes are already connected, 
    no cycles are formed.

    Algoritm:

    1. Sort all the edges in increasing order of weight to prioritize adding the lowest-weighted edges first. 
       We will continue to include edges in our MST until all nodes are connected.

    2. Use a disjoint set data structure also called a union-find data structure

        1. find(a): Function which returns the ID of the group in which node aa belongs.
        2. union(a, b): Function to merge the groups of node a and b. 
           If they already belong to the same group, we don't do anything and return false to signify 
           the edge between a and b was not added. Otherwise, we return true.


    Time complexity: O(N^2 ⋅log(N))
  

    First, we store edges of our complete graph in the allEdges array which will take O(N^2) time, 
    then sorting this array will take O(N^2 * log(N^2)

    Second, we iterate over the allEdges array, and for each element, we perform a union-find operation. 
    The amortized time complexity for union-find by rank and path compression is O(N))

    Space complexity: O(N^2) ==> We use an array allEdges to store all edges


    2. Prime's Algorithm (using Min Heap)

    3. Prim's Algorithm (Optimized)
    
    The algorithm:

    1. set all distances to Infinity / MAX_VALUE, set the result cost to 0;
    2. select point (f.e. 0 point);
    3. calculate all distances to the selected point;
    4. choose the point with the minimal distance;
    5. add the distance to the cost;
    6. exclude the point from next searches and make it selected;
    7. if all points connected, return the result, else go to step 2.


    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    Time: O(n^2)
    Space: O(n)
    
*/


//Approach 3: Prim's Algorithm (Optimized): FASTEST ONE!!!
//Example: [0,0],[2,2],[3,10],[5,2],[7,0]]
export function minCostConnectPoints_Prims_Optimized(points: number[][]): number {
    let cost = 0;
    const n = points.length;
    const dist = Array(n).fill(Infinity);
    dist[0] = 0;
    let next = 0;

    //dist array first filled with Infinity, then updated to weights
    //dist [0 , 4, 13, 7, 7] -> 4 will be selected
    //dist [0, 0, 9, 3, 7 ] -> 3 will be sected
    //dist [0, 0, 9, 0, 4] -> 4 will be selected
    //dist [0, 0, 9, 0, 0] -> 9 will be selected, the array will filled with 0s
    for (let step = 1; step < n; step++) {
        let min = Infinity;
        let point = -1;
        for (let i = 1; i < n; i++) {
            if (dist[i] > 0) {
                dist[i] = Math.min(dist[i], Math.abs(points[i][0] - points[next][0]) + Math.abs(points[i][1] - points[next][1]));
                if (dist[i] < min) {
                    min = dist[i];
                    point = i;
                }
            }
        }
        cost += min;
        dist[point] = 0;
        next = point;
    }
    
    return cost;
};


//Leetcode Prim's Algorithm (Optimized) Solution
export function minCostConnectPoints_Prims_Optimized2(points: number[][]): number  {
    let n = points.length;
    let mstCost = 0;
    let edgesUsed = 0;

    // Track nodes which are visited.
    let inMST = Array(n).fill(false);
    let minDist = Array(n).fill(Infinity);
    minDist[0] = 0;

    while (edgesUsed < n) {
        let currMinEdge = Infinity;
        let currNode = -1;

        // Pick least weight node which is not in MST.
        for (let node = 0; node < n; ++node) {
            if (!inMST[node] && currMinEdge > minDist[node]) {
                currMinEdge = minDist[node];
                currNode = node;
            }
        }

        mstCost += currMinEdge;
        edgesUsed++;
        inMST[currNode] = true;

        // Update adjacent nodes of current node.
        for (let nextNode = 0; nextNode < n; ++nextNode) {
            let weight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
                         Math.abs(points[currNode][1] - points[nextNode][1]);

            if (!inMST[nextNode] && minDist[nextNode] > weight) {
                minDist[nextNode] = weight;
            }
        }
    }

    return mstCost;
}


//-------------------------------------------------------------------------------------------

class MinHeap {
    heap: number[][] = [];
  
    insert(item: number[]) {
      this.heap.push(item);
      this.bubbleUp();
    }
    private bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[parent][0] <= this.heap[index][0]) break;
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ];
        index = parent;
      }
    }
  
    top() {
      return this.heap[0];
    }
  
    bottom() {
      return this.heap[this.heap.length - 1];
    }
  
    pop() {
      let item = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.bubbleDown();
      return item;
    }
    private bubbleDown() {
      let index = 0;
      let mid = index;
      const n = this.heap.length;
      while (index < n) {
        let right = index * 2 + 1;
        let left = right + 1;
        if (
          (left < n && this.heap[left] && this.heap[left][0] < this.heap[index][0]) ||
          (right < n && this.heap[right][0] < this.heap[index][0])
        ) {
          if (right < n) {
            mid = this.heap[left] && this.heap[left][0] < this.heap[right][0] ? left : right;
          } else {
            mid = left;
          }
        }
        if (index == mid) break;
        [this.heap[mid], this.heap[index]] = [this.heap[index], this.heap[mid]];
        index = mid;
      }
    }
    size() {
      return this.heap.length;
    }
  }


export function minCostConnectPoints_Prims(points: number[][]): number {

    const n = points.length;
    const minHeap = new MinHeap();
    const arrSet: boolean[] = new Array(n).fill(false);
    
    
    minHeap.insert([0, 0]);
    let cost = 0;
    let edgesUsed = 0;
    
    while (edgesUsed < n) {
        const [weight, node] = minHeap.pop();
        
        if (arrSet[node]) continue;
        
        arrSet[node] = true;
        edgesUsed++;
        cost += weight;
        
        for (let nextNode = 0; nextNode < n; nextNode++) {
            if (arrSet[nextNode]) continue;
            const newWeight = Math.abs(points[node][0] - points[nextNode][0]) + Math.abs(points[node][1] - points[nextNode][1]);
            minHeap.insert([newWeight, nextNode]);
        }
    }
    
    return cost;
};

function getDistance(p1,p2){
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}

//-------------------------------------------------------------------------------------------



const map = new Map();

export function minCostConnectPoints_Kruskals(points: number[][]): number {

    let n = points.length;
    const edges = [];
    //Go through all coordinates starting from [0,0] to [7,0], calculate the distance
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([points[i], points[j], distance]);
        }
    }

    for (const point of points) {
        map.set(point, point);
    }
    
    edges.sort((a, b) => a[2] - b[2]);
        
    let sum = 0;
    let edgesUsed = 0;
    for (let i = 0; i < edges.length && edgesUsed < n - 1; ++i) {
        let [from, to, distance] = edges[i];

        const p1 = find(from);
        const p2 = find(to);
        
        if (p1 !== p2) {
            sum += distance;
            map.set(p1, p2);
            edgesUsed++;
        }
    }
    // for (const [from, to, distance] of edges) {
    //     const p1 = find(from);
    //     const p2 = find(to);
        
    //     if (p1 !== p2) {
    //         sum += distance;
    //         map.set(p1, p2);
    //         edgesUsed++;
    //     }
    // }
    
    return sum;
};

function find(p){

    if (map.get(p) === p) return p;
    
    const parent = find(map.get(p));
    map.set(p, parent);
    
    return parent   ;
};



//-------------------------------------------------------------------------------------------


class UnionFind {

    group: Array<number>;
    rank: Array<number>;

    constructor(size) {
        this.group = new Array(size).fill(0);
        this.rank = new Array(size).fill(0);
        for (let i = 0; i < size; ++i) {
            this.group[i] = i;
        }
    }

    find(node) {
        if (this.group[node] != node) {
            this.group[node] = this.find(this.group[node]);
        }
        return this.group[node];
    }

    union(node1, node2) {
        let group1 = this.find(node1);
        let group2 = this.find(node2);
        
        // node1 and node2 already belong to same group.
        if (group1 == group2) {
            return false;
        }

        if (this.rank[group1] > this.rank[group2]) {
            this.group[group2] = group1;
        } else if (this.rank[group1] < this.rank[group2]) {
            this.group[group1] = group2;
        } else {
            this.group[group1] = group2;
            this.rank[group2] += 1;
        }

        return true;
    }
};

//Using Kruskals Algoritm and Disjoint set
export function minCostConnectPoints_Kruskals_Leetcode(points: number[][]): number {
    let n = points.length;
    let allEdges = [];//Array to store all the edges of our graph.

    // Storing all edges of our complete graph.
    for (let currNode = 0; currNode < n; ++currNode) {
        for (let nextNode = currNode + 1; nextNode < n; ++nextNode) {
            let weight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
                         Math.abs(points[currNode][1] - points[nextNode][1]);

            allEdges.push([weight, currNode, nextNode]);
        }
    }

    // Sort all edges in increasing order.
    allEdges.sort((a, b) => a[0] - b[0]);

    let uf = new UnionFind(n);
    let mstCost = 0;
    let edgesUsed = 0;

    for (let i = 0; i < allEdges.length && edgesUsed < n - 1; ++i) {
        let [weight, node1, node2] = allEdges[i];

        if (uf.union(node1, node2)) {
            mstCost += weight;
            edgesUsed++;
        }
    }

    return mstCost;
};


