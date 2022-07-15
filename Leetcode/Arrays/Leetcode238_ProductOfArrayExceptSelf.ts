/*
    Leetscode 26: Easy: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    IMPORTANT: You must write an algorithm that runs in O(n) time and without using the division operation.

    Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

    Example 2:

    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0] 

    Explanation:

    i = 1 ==> 2 * 3 * 4 = 24
    i = 2 ==> 1 * 3 * 4 = 12
    i = 3 ==> 1 * 2 * 4 = 8
    i = 4 ==> 1 * 2 * 3 = 6

    -------------------------------------------------------------------------------------------------------------------------------------------
    Solution:
    -------------------------------------------------------------------------------------------------------------------------------------------

    If there would be the case of using division, it would be much easier just to calculate the whole sum and divide.

    For example: 

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

    sum = 24
    24 : 1 = 24
    24 : 2 = 12
    24 : 3 = 8
    24 : 4 = 6


    In our case we can not use division and we have to use O(n) time complexity.
    NOTE: In this case make two passes, first in-order, second in-reverse, to compute products.

*/

export function productExceptSelf(nums: number[]): number[] {
    let leftArr = [];
    let leftMultiplication = 1;
    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = leftMultiplication;
        leftMultiplication *=  nums[i];
    }
    
    let rightArr = [];
    let rightMultiplication = 1;

    for (let i = nums.length-1; i >= 0; i--) {
        rightArr[i] = rightMultiplication;
        rightMultiplication *= nums[i];
        rightArr[i] *= leftArr[i];
    }
    return rightArr;
};