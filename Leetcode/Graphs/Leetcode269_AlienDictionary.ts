/*
    Leetcode: 269: Hard: https://leetcode.com/problems/alien-dictionary/

    There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.
    You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically 
    by the rules of this new language.

    Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. 
    If there is no solution, return "". If there are multiple solutions, return any of them.

    A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t 
    in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

    Example 1:
    Input: words = ["wrt","wrf","er","ett","rftt"]
    Output: "wertf"

    Example 2:
    Input: words = ["z","x"]
    Output: "zx"

    Example 3:
    Input: words = ["z","x","z"]
    Output: ""
    Explanation: The order is invalid, so return "".

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION: This is a Topological Sort Problem
    -------------------------------------------------------------------------------------------------------------------------

    1. BFS Approach

        Example: words = ["wrt","wrf","er","ett","rftt"]

        Algorithm:

            1. Create an Adjacency List + Indegree Map (set indegree map each character to 0)

                Adjacency List will look:

                0: w
                1: r
                2: t
                3: f
                4: e

                Indegree map will look like:

                0: w -> 0
                1: r -> 0
                2: t -> 0
                3: f -> 0
                4: e -> 0

            2. Set connection + for indegree map: set incerement # of incoming edjes comming to specific vertex

                Adjacency List will look:

                0: w -> e
                1: r -> t
                2: t -> f
                3: f -> 
                4: e -> r

                Indegree map will look like:

                0: w -> 0
                1: r -> 1
                2: t -> 1
                3: f -> 1
                4: e -> 1


                The complete graph will look like:

                w -> e -> r -> t -> f

            3. BFS
            
                3.1 Run through the indegree map, select all characters with indegree 0, push to the queue
                3.2 Peek the fist element from the queue
                3.3 Add char to the result string
                3.4 Run through adjacency list looking for next coonection to curr element, decrement the indegree
                        - If indegree of next element == 0, enquee the element to the queue
                        - Continue until all element setted up to 0

            4. Check if string length is not less than the indegree map size, if less return ""
            5. Return result string.


    2. DFS Approach.

    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    Time Complexity: O(C)

    Let N be the total number of strings in the input list.
    Let C be the total length of all the words in the input list, added together.
    Let U be the total number of unique letters in the alien alphabet. While this is limited to 26 in the question description, 
    we'll still look at how it would impact the complexity if it was not limited (as this could potentially be a follow-up question).

    Space Complexity: O(1)????


*/


//Example: words = ["wrt","wrf","er","ett","rftt"]
export function alienOrder(words: string[]): string {

    //Step 0: create an adjacency list and find all unique letters
    let adjList = new Map<any, Array<string>>();
    let indegreeMap = new Map<string, number>();

    for(let word of words){
        for(let char of word){
            if(!adjList.has(char)){
                adjList.set(char, new Array());
                indegreeMap.set(char, 0)
            }
        }
    }

    //Step 1: Find all edges.
    for(let i = 0; i < words.length - 1; i++){
        let word1 = words[i];
        let word2 = words[i + 1];
        // Check that word2 is not a prefix of word1.
        if(word1.length > word2.length && word1.startsWith(word2))
            return "";

        // Find the first non match and insert the corresponding relation.
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1.charAt(j) != word2.charAt(j)) {
                adjList.get(word1.charAt(j)).push(word2.charAt(j));
                indegreeMap.set(word2.charAt(j), indegreeMap.get(word2.charAt(j)) + 1);
                break;
            }
        }
    }

     // Step 2: Breadth-first search.
     let resStr = "";
     let queue = [];
     for (let item of indegreeMap) {
        if(indegreeMap.get(item[0]) == 0)
            queue.push(item[0]);
         
     }
     while (queue.length > 0) {
         let curr = queue.shift();
         resStr += curr;
         for (let next of adjList.get(curr)) {
             indegreeMap.set(next, indegreeMap.get(next) - 1);
             if (indegreeMap.get(next) == 0) {
                 queue.push(next);
             }
         }
     }
     
     if (resStr.length < indegreeMap.size) {
         return "";
     }
     return resStr;

};

