"use strict";
/*
    Leetcode 26: Easy: https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/

    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
    The relative order of the elements should be kept the same.
    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
    More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.

    IMPORTANT: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Example 1:

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

    Example 2:

    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores

    --------------------------------------------------------------------------------------------------------------------------
    Solution:
    --------------------------------------------------------------------------------------------------------------------------
    
    Uses 2 pointers solution.

    Since the array is already sorted, we can keep two pointers leftP and rightP, where leftP is the slow-runner
    while rightP is the fast-runner. As long as nums[leftP] = nums[rightP, we increment rightP and leftP to skip the duplicate.

    --------------------------------------------------------------------------------------------------------------------------
    Time Complexity:
    --------------------------------------------------------------------------------------------------------------------------
    
    Time complextiy : O(n). Assume that n is the length of array. Each of leftP and rightP traverses at most n steps.

    Space complexity : O(1).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = void 0;
//[0,1,0,1,1,2,2,3,3,4]
function removeDuplicates(nums) {
    if (nums.length == 0)
        return 0;
    let leftP = 0;
    let rightP = 1;
    while (rightP < nums.length) {
        if (nums[leftP] == nums[rightP]) {
            nums.splice(leftP, 1);
        }
        else {
            rightP++;
            leftP++;
        }
    }
    return nums.length;
}
exports.removeDuplicates = removeDuplicates;
;
//# sourceMappingURL=Leetcode26_RemoveDuplicatesFromSortedArray.js.map