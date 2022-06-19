import { climbStairs, climbStairsMemoization, climbStairsRec } from "./Leetcode70_ClimbingStairs";
import { fibDynamicProgramming, fibMemoization, fibRec } from "./Leetcode509_FibonacciNumber";
import { longestCommonSubsequence_dp1 } from "./Leetcode1143_LongestCommonSubsequence";
import { longestPalindromeSubstring } from "./Leetcode5_LongestPalindromicSubstring";
import { isMatchDynamicProgrammingImpl2 } from "./Leetcode10_RegularExpressionMatching";
import { shortestCommonSupersequence } from "./Leetcode1092_ShortestCommonSupersequence";
import { uniquePathsDynamicP, uniquePathsMemoization, uniquePathsRec } from "./Leetcode62_UniquePathsGridTraveler";
import { rob } from "./Leetcode198_HouseRobber";
import { combinationSum } from "./Leetcode39_CombinationSum";
import { howSumDynamicP, howSumMemoization, howSumRec } from "./FreeCodingCamp_HowSum";
import { bestSumDynamicP, bestSumMemoization, bestSumRec } from "./FreeCodingCamp_BestSum";
import { canConstructDynamicP, canConstructMemoization, canConstructRec } from "./FreeCodingCamp_CanCostructStr";
import { countConstructDynamicP, countConstructMemoization, countConstructRec } from "./FreeCodingCamp_CountConstructStr";
import { allConstructDynamicP, allConstructMemoization, allConstructRec } from "./FreeCodingCamp_AllConstructStr";
import { canSumDynamicP, canSumMemoization } from "./FreeCodingCamp_CanSum";
import { numRollsToTarget, numRollsToTarget_DP, numRollsToTarget_Memoization } from "./Leetcode1115_RollDiceWithTargetSum";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test longestCommonSubsequence with valid data', async () => {
        let res = longestCommonSubsequence_dp1('abcde', 'ace');
        console.log(res); 
    })

    it('Test shortestCommonSupersequence with valid data', async () => {
        let res = shortestCommonSupersequence('abac', 'cab');
        console.log(res); 
      })

    it('Test Regular Expression Matching with valid data', async () => {
        let s = "bly"
        let p = "a*b.*y"
        let res = isMatchDynamicProgrammingImpl2(s, p);
        console.log(res); 
    });
  
    it('Test longestPalindromeSubstring with valid data', async () => {
      let res = longestPalindromeSubstring("babad");
      console.log(res); 
    });

    it('Test Leetcode 509: Fibonacci Numbers with valid data', async () => {
      console.log(fibRec(4));
      console.log(fibDynamicProgramming(4));
      console.log(fibMemoization(4, {}));
    });


    it('Test Leetcode 70: Climbing Stairs with valid data', async () => {
      console.log(climbStairs(5));
      console.log(climbStairsRec(5));
      console.log(climbStairsMemoization(5, {}));
    });


    it('Test Leetcode 198: House Robber with valid data', async () => {
      console.log(rob([1,2,3,1]));
      console.log(rob([2,7,9,3,1]));
    });


    it('Test Leetcode 62: Unique Path/Grid Traveler with valid data', async () => {
      console.log(uniquePathsMemoization(1, 1, {}));
      console.log(uniquePathsMemoization(2, 3, {}));
      console.log(uniquePathsMemoization(3, 2, {}));
      console.log(uniquePathsMemoization(3, 3, {}));
      console.log(uniquePathsMemoization(18, 18, {}));

      console.log(uniquePathsRec(1, 1));
      console.log(uniquePathsRec(2, 3));
      console.log(uniquePathsRec(3, 2));
      console.log(uniquePathsRec(3, 3));
      console.log(uniquePathsRec(18, 18));

      console.log(uniquePathsDynamicP(1, 1));//1
      console.log(uniquePathsDynamicP(2, 3));//3
      console.log(uniquePathsDynamicP(3, 2));//3
      console.log(uniquePathsDynamicP(3, 3));//6
      console.log(uniquePathsDynamicP(18, 18));//2333606220
    });


    it('Test Free Coding Camp: Can Sum with valid data', async () => {
      console.log(canSumDynamicP([5, 3, 4], 7)); // true
      console.log(canSumDynamicP([2, 4], 7)); // false
      console.log(canSumDynamicP([2, 3, 6, 7], 7)); //true

      console.log(canSumMemoization([5, 3, 4, 7], 7, {})); //true
      console.log(canSumMemoization([2, 4], 7, {})); //false
      console.log(canSumMemoization([2, 3, 6, 7], 7, {})); // true
    });

    it('Test Free Coding Camp: How Sum with valid data', async () => {
      console.log(howSumRec([5, 3, 4, 7], 7)); // [4, 3]
      console.log(howSumRec([2, 4], 7)); // null
      console.log(howSumRec([2, 3, 6, 7], 7)); // [5, 2]

      console.log(howSumMemoization([5, 3, 4, 7], 7, {})); //[4,3]
      console.log(howSumMemoization([2, 4], 7, {})); //null
      console.log(howSumMemoization([2, 3, 6, 7], 7, {})); // [ 3, 2, 2 ]

      console.log(howSumDynamicP([5, 3, 4, 7], 7)); //[4,3]
      console.log(howSumDynamicP([2, 4], 7,)); //null
      console.log(howSumDynamicP([2, 3, 6, 7], 7,)); // [ 3, 2, 2 ]
    });

    it('Test Free Coding Camp: Best Sum with valid data', async () => {
      console.log(bestSumRec([5, 3, 4, 7], 7)); // [7]
      console.log(bestSumRec([2, 3, 5], 8)); // [3, 5]
      console.log(bestSumRec([1, 4, 5], 8)); // [4, 4]

      console.log(bestSumMemoization([5, 3, 4, 7], 7, {})); // [7]
      console.log(bestSumMemoization([2, 3, 5], 8, {})); // [3, 5]
      console.log(bestSumMemoization([1, 4, 5], 8, {})); // [4, 4]

      console.log(bestSumDynamicP([5, 3, 4, 7], 7)); // [7]
      console.log(bestSumDynamicP([2, 3, 5], 8)); // [3, 5]
      console.log(bestSumDynamicP([1, 4, 5], 8)); // [4, 4]
    });


    it('Test Free Coding Camp: Can Construct with valid data', async () => {
      console.log(canConstructRec('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
      console.log(canConstructRec('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
      console.log(canConstructRec('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //false

      console.log(canConstructMemoization('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {})); // true
      console.log(canConstructMemoization('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //false
      console.log(canConstructMemoization('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //false

      console.log(canConstructDynamicP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
      console.log(canConstructDynamicP('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
      console.log(canConstructDynamicP('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //false
    });

    it('Test Free Coding Camp: Count Construct with valid data', async () => {
      console.log(countConstructRec('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
      console.log(countConstructRec('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
      console.log(countConstructRec('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //0
      console.log(countConstructRec('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2

      console.log(countConstructMemoization('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {})); //1
      console.log(countConstructMemoization('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //0
      console.log(countConstructMemoization('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //0
      console.log(countConstructMemoization('purple', ['purp', 'p', 'ur', 'le', 'purpl'], {})); //2


      console.log(countConstructDynamicP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
      console.log(countConstructDynamicP('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
      console.log(countConstructDynamicP('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //0
      console.log(countConstructDynamicP('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
    });

    it('Test Free Coding Camp: All Construct with valid data', async () => {
      console.log(allConstructRec('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
      console.log(allConstructRec('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //[]
      console.log(allConstructRec('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //[]
      console.log(allConstructRec('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le],[p, ur, p, le]] 

      console.log(allConstructMemoization('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'], {})); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
      console.log(allConstructMemoization('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //[]
      console.log(allConstructMemoization('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //[]
      console.log(allConstructMemoization('purple', ['purp', 'p', 'ur', 'le', 'purpl'], {})); //[[purp, le],[p, ur, p, le]] 

      console.log(allConstructDynamicP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
      console.log(allConstructDynamicP('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //[]
      console.log(allConstructDynamicP('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //[]
      console.log(allConstructDynamicP('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le],[p, ur, p, le]] 
    });


    it('Test Leetcode 1115: Roll dice with target sum: return all possible combinations', async () => {
      console.log(numRollsToTarget(2, 6, 7)); // 6 ways
      console.log(numRollsToTarget(1, 6, 3)); // 1 way
      console.log(numRollsToTarget(30, 30, 500)); // 1 way

      console.log(numRollsToTarget_DP(2, 6, 7)); // 6 ways
      console.log(numRollsToTarget_DP(1, 6, 3)); // 1 way
      console.log(numRollsToTarget_DP(30, 30, 500)); // 1 way

      console.log(numRollsToTarget_Memoization(2, 6, 7)); // 6 ways
      console.log(numRollsToTarget_Memoization(1, 6, 3)); // 1 way
      console.log(numRollsToTarget_Memoization(30, 30, 500)); // 1 way

    });
});




