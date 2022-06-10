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

//TC: O(nlogn), SC = O(n)
export function containsDuplicate(nums: number[]): boolean {

   let left = 0, right = 1;

   //The sorting algorithm is a Dual-Pivot Quicksort offers O(n log(n)) performance on many data sets
   nums.sort();
   while(left < nums.length){
      if(nums[right] == nums[left])
         return true;
      
      left++;
      right++;
   }
   return false;
};

//TC = O(n), SC = O(1)
export function containsDuplicate_2(nums: number[]): boolean {

   let set = new Set();

   for(let n of nums){
      if(set.has(n))
         return true;
      else set.add(n);
   }

   return false;
};