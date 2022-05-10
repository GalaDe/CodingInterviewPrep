/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Solution: This problem can be resolved with 3 different approaches:

              1. Brute-Force: 2 loops => TC = O(n^2)
              2. Two pointers solution: TC = O(NLogN), since we applied sorting
                    In this approach several things need to be done:
                        a) Copy the original array (we need in order to return original indexes)
                        b) Sort array => TC for sorting = O(NLogN)
                        c) Create 2 pointers 
              3. Map/Hash Table: TC and SC = O(N)

*/

//[2,7,11,15], target = 9
export function twoSum_1(nums: number[], target: number): number[] {

    let map = new Map();
    let arr: number [] = [];
    for (let i = 0; i < nums.length; i++) {
        let reminder  = target - nums[i];
        if(map.has(reminder)){
            arr.push(i, map.get(reminder))
        }          
        else
            map.set(nums[i], i);
    }
    return arr;
};

//Solution uses 2 pointers ==> TC = O(NlogN)
export function twoSum_2(nums: number[], target: number): number[] {

    let arr: number [] = [];
    let leftP = 0, rightP = nums.length - 1;
    let sum = 0;

    if(nums.length == 0) return arr;

    let copyArr = [];
    for (let i = 0; i < nums.length; i++) {
        copyArr[i] = nums[i];
    }

    nums.sort((a,b)=> a-b);
   
    while(leftP <=rightP) {
        sum  = nums[leftP] + nums[rightP]
        if(sum == target){
            break;
        }
        else if (sum > target){
            rightP--;
        }
        else
            leftP++;
    }

    for (let i = 0; i < copyArr.length; i++) {
        if(copyArr[i] == nums[leftP] || copyArr[i] == nums[rightP]){
            arr.push(i);
            if(arr.length == 2)
                break;
        }
    }
    return arr;
};