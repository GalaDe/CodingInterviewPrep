import { climbStairs, climbStairsMemoization, climbStairsRec } from "./Leetcode70_ClimbingStairs";
import { fibDynamicProgramming, fibMemoization, fibRec } from "./Leetcode509_FibonacciNumber";
import { longestCommonSubsequence_dp1 } from "./Leetcode1143_LongestCommonSubsequence";
import { longestPalindromeSubstring } from "./Leetcode5_LongestPalindromicSubstring";
import { isMatchDynamicProgrammingImpl2 } from "./Leetcode10_RegularExpressionMatching";
import { shortestCommonSupersequence } from "./Leetcode1092_ShortestCommonSupersequence";
import { uniquePathsMemoization, uniquePathsRec } from "./Leetcode62_UniquePathsGridTraveler";

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


    it('Test Leetcode 62: Unique Path/Gred Traveler with valid data', async () => {
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
    });
});