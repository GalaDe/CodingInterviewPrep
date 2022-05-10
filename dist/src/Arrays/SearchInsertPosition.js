"use strict";
/*
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it
    would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity

    Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

    Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

    Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

    IMPORTANT:
    Solution #2 is much faster then solution #1, because it devides the array with the middle point, then search left or right side
    depends on the target.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInsert_2 = exports.searchInsert = void 0;
// My Solution
function searchInsert(nums, target) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target)
            return i;
        else if (nums[i] < target && nums[i + 1] > target)
            res = i + 1;
        else if (target > nums[i] && nums.length == i + 1)
            res = i + 1;
    }
    return res;
}
exports.searchInsert = searchInsert;
;
//[1, 3, 5, 6] target = 2
function searchInsert_2(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target < nums[mid])
            right = mid - 1;
        else if (target > nums[mid])
            left = mid + 1;
        else
            return mid;
    }
    return left;
}
exports.searchInsert_2 = searchInsert_2;
//# sourceMappingURL=SearchInsertPosition.js.map