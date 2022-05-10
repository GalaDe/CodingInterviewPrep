import e from "express";

/*
Explanation: 

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Solution:
    1. Merge 2 arrays
    2. Sort
    3. Find median (Note median is not the average)

Median Value
The Median is the "middle" of a sorted list of numbers.

10 11 13 15 16 23 26
         ^  
15 is the middle number in a list of numbers

10 11 13 15 16 23 26 28

15 and 16 is the middle number in a list of numbers
*/

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    //const arr = nums1.concat(nums2).sort(function(a,b){return a - b});
    let arr  = nums1.concat(nums2);
    arr.sort((a, b) => {return (a-b)}); 
    let mid = arr.length/2;
    if(!(arr.length % 2))
        return (arr[mid] + arr[mid - 1])/2       
    else
       return arr[Math.floor(mid)]
};