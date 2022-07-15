"use strict";
/*
   Leetcode 217: Easy: https://leetcode.com/problems/contains-duplicate/

   Description:

   Given an integer array nums, return true if any value appears at least
   twice in the array, and return false if every element is distinct.


   Example 1:
   Input: nums = [1,2,3,1]
   Output: true

   Example 2:
   Input: nums = [1,2,3,4]
   Output: false
   
   Example 3:
   Input: nums = [1,1,1,3,3,4,3,2,4,2]
   Output: true

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsDuplicate_2 = exports.containsDuplicate = void 0;
//TC: O(nlogn), SC = O(n)
function containsDuplicate(nums) {
    let left = 0, right = 1;
    //The sorting algorithm is a Dual-Pivot Quicksort offers O(n log(n)) performance on many data sets
    nums.sort();
    while (left < nums.length) {
        if (nums[right] == nums[left])
            return true;
        left++;
        right++;
    }
    return false;
}
exports.containsDuplicate = containsDuplicate;
;
//TC = O(n), SC = O(1)
function containsDuplicate_2(nums) {
    let set = new Set();
    for (let n of nums) {
        if (set.has(n))
            return true;
        else
            set.add(n);
    }
    return false;
}
exports.containsDuplicate_2 = containsDuplicate_2;
;
//# sourceMappingURL=Leetcode217_ContainsDuplicate.js.map