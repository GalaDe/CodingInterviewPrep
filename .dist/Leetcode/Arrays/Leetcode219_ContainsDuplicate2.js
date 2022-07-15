"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsNearbyDuplicate = void 0;
//TC = O(n), SC = O(n)
function containsNearbyDuplicate(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k)
                return true;
        }
        map.set(nums[i], i);
    }
    return false;
}
exports.containsNearbyDuplicate = containsNearbyDuplicate;
;
//# sourceMappingURL=Leetcode219_ContainsDuplicate2.js.map