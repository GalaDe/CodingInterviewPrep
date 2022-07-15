/*
    Leetcode 128: Medium: https://leetcode.com/problems/longest-consecutive-sequence/


    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    You must write an algorithm that runs in O(n) time.

 
    Example 1:

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

    Example 2:

    Input: nums = [0,3,7,2,5,8,4,6,0,1] ==> 0 1 2 3 4 5 6 7 8
    Output: 9


*/


//Solution 1: The complexity of this approach will be O(nlogn), because array sorting uses Tim Sort/Quick Sort, whose TC is O(nlogn)
//TC = O(nlogn), SC = O(1) 
export function longestConsecutive(nums: number[]): number {

    if(nums.length == 0) return 0;

    nums.sort((a,b) => a - b);

    let leftP = 0, rightP = 1, countSet = 1, maxSet = 1;

    while(rightP < nums.length){
        if(nums[leftP] + 1 == nums[rightP]){
            countSet++;
            maxSet = Math.max(maxSet, countSet);
        }
        else if(nums[leftP] == nums[rightP]){
            leftP++;
            rightP++;
            continue;
        } 
        else countSet = 0;

        leftP++;
        rightP++;
    }

    return maxSet;
};

//Solution 2: TC = O(N), SC = O(n)
export function longestConsecutive_usingSet(nums: number[]): number {

    if(nums.length == 0) return 0;

    let maxSet = 1;
    let numSet = new Set<number>(nums);


    for(let num of numSet){
        if(!numSet.has(num - 1)){
            let currNum = num;
            let countSet = 1;
            
            while(numSet.has(currNum + 1)){
                currNum++;
                countSet++;
            }
            maxSet = Math.max(maxSet, countSet);
        }
    }

    return maxSet;
};