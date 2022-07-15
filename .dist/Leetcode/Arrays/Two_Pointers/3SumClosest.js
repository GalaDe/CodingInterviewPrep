"use strict";
/*
    Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
    Return the sum of the three integers.
    You may assume that each input would have exactly one solution.

    Example 1:
    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

    Example 2:
    Input: nums = [0,0,0], target = 1
    Output: 0

    Solution:
    
    Time Complexity:
    We are scanning the entire array keeping one element fixed. We are doing this for every element in the array.
    Thus, we are scanning each element of array n number of times. And we are doing this for n times, hence the
    worst case time complexity will be O(n2 + n * log n) which comes down to O(n2).

    Space Complexity:
    We are not using any data structure for the intermediate computations, hence the space complexity is O(1).
    
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeSumClosest_1 = void 0;
//This solution uses SC = O(N), since it putting items in array and then locate the closest number to the target
function threeSumClosest_1(nums, target) {
    if (nums.length == 0)
        return 0;
    if (nums.length == 1)
        return nums[0];
    nums.sort((a, b) => a - b); // ascending order
    let closesSum = 0;
    let arr = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let tempSum = nums[i] + nums[l] + nums[r];
            arr.push(tempSum);
            if (tempSum > target)
                r--;
            else
                l++;
        }
    }
    closesSum = arr.reduce(function (prev, curr) {
        return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
    });
    return closesSum;
}
exports.threeSumClosest_1 = threeSumClosest_1;
//This solution is faster then the Solution 1, since it doesn't use extra spece and checking the closest element to the target on the go.
function threeSumClosest_2(nums, target) {
    nums.sort((a, b) => a - b); // ascending order
    let closest = nums[0] + nums[1] + nums[2];
    for (let start = 0; start < nums.length - 2; start++) {
        let mid = start + 1;
        let end = nums.length - 1;
        while (mid < end) {
            let sum = nums[start] + nums[mid] + nums[end];
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                // beats previous closest
                closest = sum;
            }
            if (sum == target) {
                // can't get better than this
                return sum;
            }
            else if (sum < target) {
                mid++;
            }
            else if (sum > target) {
                end--;
            }
        }
    }
    return closest;
}
;
//# sourceMappingURL=3SumClosest.js.map