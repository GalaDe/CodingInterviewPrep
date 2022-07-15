import { findNumbers } from "./Two_Pointers/FindFirstConsecutiveIntegerInArray";
import { maxProfit } from "./Leetcode121_BestTimeToBuySellStock";
import { containsDuplicate, containsDuplicate_2 } from "./Leetcode217_ContainsDuplicate";
import { containsNearbyDuplicate } from "./Leetcode219_ContainsDuplicate2";
import { containsNearbyAlmostDuplicate } from "./Leetcode220_ContainsDuplicate3";
import { productExceptSelf } from "./Leetcode238_ProductOfArrayExceptSelf";
import { removeDuplicates } from "./Two_Pointers/Leetcode26_RemoveDuplicatesFromSortedArray";
import { relativeSortArray } from "./RelativeSortArrays";
import { longestConsecutive, longestConsecutive_usingSet } from "./Leetcode128_LongestConsecutiveSequence";
import { hasGroupsSizeX } from "./FindPairInDeckOfCards";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test max profit with valid data', async () => {
        console.log(maxProfit([7,1,5,3,6,4]));
    })

    it('Test contains duplicates with valid data', async () => {
      console.log(containsDuplicate([0,4,5,0,3,6]));
      console.log(containsDuplicate_2([0,4,5,0,3,6]));
    })

    it('Test contains duplicates 2 with valid data', async () => {
        console.log(containsNearbyDuplicate([1,0,1,1], 1));
    })


    it('Test contains duplicates 3 with valid data', async () => {
        console.log(containsNearbyAlmostDuplicate([1,2,1,1], 1, 0)); //true
        console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)); //true
        console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)); //false
        console.log(containsNearbyAlmostDuplicate([8,7,15,1,6,1,9,15], 1, 3)); //true
    })

    it('Test contains duplicates 3 with valid data', async () => {
        let numbers =  [1,3,4,5,22,23,6,8,9,23,24,22,23,15,16,17,33,23,23,15,16,17,11,1,2,99];
        console.log(findNumbers(numbers)); //[1, 3, 22, 6, 8, 23, 22, 15, 33, 23, 23, 15, 11, 1, 99]
    })

    it('Test relativeSortArray with valid data', async () => {
        console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])); //[2,2,2,1,4,3,3,9,6,7,19]
    })

    it('Test productExceptSelf with valid data', async () => {
        console.log(productExceptSelf([1, 2, 3, 4])); //[24, 12, 8, 6]
        console.log(productExceptSelf([-1,1,0,-3,3])); //[0,0,9,0,0]
    })

    it('Test Leetcode 26: Remove Duplicates from Sorted Array: with valid data', async () => {
        console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //
        console.log(removeDuplicates([1,1,2])); //
    })

    it('Test 128: Longest Consecutive Sequence using Array sort', async () => {
        //console.log(longestConsecutive([100,4,200,1,3,2])); // 4
        console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); //9 
        console.log(longestConsecutive([1,2,0,1])) //3
    })

    it('Test 128: Longest Consecutive Sequence using Hash Set', async () => {
        console.log(longestConsecutive_usingSet([100,4,200,1,3,2])); // 4
        console.log(longestConsecutive_usingSet([0,3,7,2,5,8,4,6,0,1])); //9 
        console.log(longestConsecutive_usingSet([1,2,0,1])) //3
    })

    it('Test 128: Longest Consecutive Sequence using Hash Set', async () => {
        console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])); // 4
        // console.log(longestConsecutive_usingSet([0,3,7,2,5,8,4,6,0,1])); //9 
        // console.log(longestConsecutive_usingSet([1,2,0,1])) //3
    })
});
