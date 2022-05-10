/*
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    Notice that the solution set must not contain duplicate triplets.

    Example 1:

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

    Solution: There are 2 solutions for this question: Brute-Force Approach(TC = O(n^3)) and Two Pointers Approach(TC = O(n^2)). Sorry, no TC= O(n) exists

    Explanation: Two Pointers Solution

    1. Sort the array (in time O(n * log(n))).
    2. Now for each element i, do the following steps
    3. Set two pointers left — j = i + 1 and right — k = nums.length - 1.
    4. Check if nums[i] + nums[j] + nums[k] == 0 and if it is zero, add these three numbers to the resultant list.
    5. If the sum nums[i] + nums[j] + nums[k] < 0, this means we can move left pointer forward because since the array is sorted and the sum is less than zero, therefore, it makes sense to check for greater value to make the sum bigger.
    6. If the sum nums[i] + nums[j] + nums[k] > 0, this means we are too right and can move the right pointer backward because since the array is sorted and the sum is greater than zero, therefore, it makes sense to check for smaller value to make the sum lesser.
    7. In between loops, we also need to make sure that we are not checking for duplicate values.
    
    Time Complexity:
    We are scanning the entire array keeping one element fixed. We are doing this for every element in the array. 
    Thus, we are scanning each element of array n number of times. And we are doing this for n times, hence the 
    worst case time complexity will be O(n2 + n * log n) which comes down to O(n2).

    Space Complexity:
    We are not using any data structure for the intermediate computations, hence the space complexity is O(1).

    ref: https://redquark.org/leetcode/0015-3-sum/
*/

//Ex: [-1,0,1,2,-1,-4]
export function threeSum(nums: number[]): number[][] {

    let res = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break; //since the array is sorted, if we come across
		//an initial value that is greater than 0, no numbers after it will let it sum to 0
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        //since the array is sorted, we can check the number right before our value
		//to see if we have seen it already
		
        let l = i + 1;
        let r = nums.length - 1;
        
        while (l < r) {            
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
				//since the array is sorted, decrementing r will result in a smaller sum
            } else if (sum < 0) {
                l++;
				//since the array is sorted, incrementing l will result in a larger sum
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while(l < r && nums[l] === nums[l - 1]) l++;
				//to ignore duplicates, we increment l until another unique value is found
            }
            
        }
    }
    return res;
};

