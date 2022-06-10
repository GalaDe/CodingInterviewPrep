/*
    Leetcode 219: Easy: https://leetcode.com/problems/contains-duplicate-ii/

    Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that 
    nums[i] == nums[j] and abs(i - j) <= k.

 
    Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

    Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

    Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false

    Explanation:

    We need to find 2 elements which are the same and has distance = k

*/

//TC = O(n), SC = O(n)
export function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            if(i - map.get(nums[i]) <= k)
                return true;
        }
        map.set(nums[i], i)
    }
    return false;
};