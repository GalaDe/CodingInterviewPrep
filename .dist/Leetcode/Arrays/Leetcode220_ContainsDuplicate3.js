"use strict";
/*
    Leetcode 220: https://leetcode.com/problems/contains-duplicate-iii/

    Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the
    array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

 
    Example 1:
    Input: nums = [1,2,3,1], k = 3, t = 0
    Output: true

    Example 2:
    Input: nums = [1,0,1,1], k = 1, t = 2
    Output: true

    Example 3:
    Input: nums = [1,5,9,1,5,9], k = 2, t = 3
    Output: false

    Explanation:

            0 1 2 3 4 5
    nums = [1,5,9,1,5,9], k = 2, t = 3
            ^ ^ ==> 5-1=4 => 4 <= 3 F
            ^   ^ ==> 9-1=8 => 8 <= 3 F



     1. Let's assume we have i and j, we need to move forward j from i <= k steps, if j greater, move i forward
     2. Find abs value: nums[j] - nums[i] ==> if value <= t, return true, else false

      0 1 2 3 4 5
     [1,2,2,3,4,5], k = 3, t = 0
      ^ ^ ==> 2-1=1 => 1 <= 0 F


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsNearbyAlmostDuplicate = void 0;
//TC = O(n), SC = O(n), Runtime 203 ms
function containsNearbyAlmostDuplicate(nums, k, t) {
    if (t < 0)
        return false;
    let buckets = {};
    for (let i = 0; i < nums.length; i++) {
        //console.log(buckets)
        let bucketId = getBucketId(nums[i], t);
        // there exists one in the bucket
        if (bucketId in buckets)
            return true;
        // check one before and one after
        let bucketIdBack = (bucketId - 1) + "";
        if (bucketIdBack in buckets && Math.abs(nums[i] - buckets[bucketIdBack]) <= t)
            return true;
        let bucketIdForward = (bucketId + 1) + "";
        if (bucketIdForward in buckets && Math.abs(nums[i] - buckets[bucketIdForward]) <= t)
            return true;
        buckets[bucketId] = nums[i];
        // if i >= k delete trailing 
        if (i >= k) {
            delete buckets[getBucketId(nums[i - k], t)];
        }
    }
    return false;
}
exports.containsNearbyAlmostDuplicate = containsNearbyAlmostDuplicate;
;
function getBucketId(n, t) {
    if (t == 0)
        return n;
    return Math.floor(n / t);
}
//TC=O(N^2), SC=O(1), Runtime 1286 ms
function containsNearbyAlmostDuplicate_2(nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k)
                return true;
        }
    }
    return false;
}
;
//# sourceMappingURL=Leetcode220_ContainsDuplicate3.js.map