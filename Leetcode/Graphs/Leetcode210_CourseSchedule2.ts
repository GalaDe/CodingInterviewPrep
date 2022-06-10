/*
    Leetcode 210: Medium: https://leetcode.com/problems/course-schedule-ii/

    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
    You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first 
    if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    Example 1:

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: [0,1]
    Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. 
    So the correct course order is [0,1].
    
    Example 2:

    Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    Output: [0,2,1,3]
    Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
    So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
    
    Example 3:

    Input: numCourses = 1, prerequisites = []
    Output: [0]

    Explanation:

    This is a topological sort exersise. Derected graph has been used for this exersise.
    Also you need verify that graph doesn't contain any cycles, if cycle exists return false.

    1. Create an adjacency list with key = course, value = array of prereq
    2. Create visited set, in order to track the visited nodes, to prevent the cycle in graph.

    Solution 1: Using DFS

    Example: 5, [[0,1], [0,2], [1,3],[1,4], [3,4]]


    0 --> 1 --> 3               PrereqMap      Visited
    |      \    |
    ✔       \   |               0: [1,2]        1 => 2
    2         \ |               1: [3,4]        1 => 2
                ✔               2: []           1 => 2
                4               3: [4]          1 => 2
                                4: []           1 => 2

    Solution 2: Using Outdegree (Outdegree of vertex V is the number of edges which are going out from the vertex V)

    PrereqMap       Outdegree: (1st look)     Outdegree: (complite look)     Completed Table:

    0: []           0: 2                       0: 0                          [2, 4, 3, 1, 0] 
    1: [0]          1: 2                       1: 0
    2: [0]          2: 0                       2: 0
    3: [1]          3: 1                       3: 0
    4: [1, 3]       4: 1                       4: 0


    Time Complexity: O(n + p), where n is the # of nodes and p is the prerequisites.

*/

//Using DFS
//visited: 1 = visiting, 2 =  visited
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {

    let preMap = new Map<number, number[]>();
    let visited: number[] = [];
    let resArray: number[] = []

    let num = 0;
    //Add courses to the map
    while(num < numCourses){
        preMap.set(num, []);
        num++;
    }

    //Map each course to prereq list
    for(let course of prerequisites){
        preMap.get(course[0]).push(course[1]);
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, visited, preMap, resArray))
          return [];
    }

    return resArray;
};

function dfs(course: number, visited: number[], preMap: Map<number, number[]>, resArray: number[]): boolean {
    if(visited[course] == 2) return false; //fully visited
    if(visited[course] == 1) return true; //still visiting

    visited[course] = 1;
    for(let p of preMap.get(course)){
        if(dfs(p, visited, preMap, resArray))
          return true;
    }
    visited[course] = 2;
    resArray.push(course);

    return false;
}

//My Implementation: Using Outdegree concept, since the graph is directed.
export function findOrder_2(numCourses: number, prerequisites: number[][]): number[] {

    let preReqmap = new Map<number, Array<number>>();
    let outDegree = new Array<number>(numCourses).fill(0);
    let completed = new Array<number>();
    let resArr: number [] = []

    let num = 0;
    //Add courses to the map
    while(num < numCourses){
        preReqmap.set(num, []);
        num++;
    }

    for (let i = 0; i < prerequisites.length; i++) {
        preReqmap.get(prerequisites[i][1]).push(prerequisites[i][0]);
        outDegree[prerequisites[i][0]]++;
    }
    
    for (let i = 0; i < numCourses; i++) {
      if (outDegree[i] === 0) {
        completed.push(i);
      }
    }
    while (completed.length > 0) {
      let item = completed.shift();
      resArr.push(item);
      const neighbors = preReqmap.get(item) || [];
      for (let neighbor of neighbors) {
        outDegree[neighbor]--;
        if (outDegree[neighbor] === 0) {
          completed.push(neighbor);
        }
      }
    }
    if(outDegree.every((item) => item === 0))
      return resArr;
    
    return [];
  }