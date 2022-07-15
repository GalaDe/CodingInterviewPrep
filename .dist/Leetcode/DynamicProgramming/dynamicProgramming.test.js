"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leetcode70_ClimbingStairs_1 = require("./Leetcode70_ClimbingStairs");
const Leetcode509_FibonacciNumber_1 = require("./Leetcode509_FibonacciNumber");
const Leetcode1143_LongestCommonSubsequence_1 = require("./Leetcode1143_LongestCommonSubsequence");
const Leetcode5_LongestPalindromicSubstring_1 = require("./Leetcode5_LongestPalindromicSubstring");
const Leetcode10_RegularExpressionMatching_1 = require("./Leetcode10_RegularExpressionMatching");
const Leetcode1092_ShortestCommonSupersequence_1 = require("./Leetcode1092_ShortestCommonSupersequence");
const Leetcode62_UniquePathsGridTraveler_1 = require("./Leetcode62_UniquePathsGridTraveler");
const Leetcode198_HouseRobber_1 = require("./Leetcode198_HouseRobber");
const FreeCodingCamp_HowSum_1 = require("./FreeCodingCamp_HowSum");
const FreeCodingCamp_BestSum_1 = require("./FreeCodingCamp_BestSum");
const FreeCodingCamp_CanCostructStr_1 = require("./FreeCodingCamp_CanCostructStr");
const FreeCodingCamp_CountConstructStr_1 = require("./FreeCodingCamp_CountConstructStr");
const FreeCodingCamp_AllConstructStr_1 = require("./FreeCodingCamp_AllConstructStr");
const FreeCodingCamp_CanSum_1 = require("./FreeCodingCamp_CanSum");
const Leetcode1115_RollDiceWithTargetSum_1 = require("./Leetcode1115_RollDiceWithTargetSum");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test longestCommonSubsequence with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, Leetcode1143_LongestCommonSubsequence_1.longestCommonSubsequence_dp1)('abcde', 'ace');
        console.log(res);
    }));
    it('Test shortestCommonSupersequence with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, Leetcode1092_ShortestCommonSupersequence_1.shortestCommonSupersequence)('abac', 'cab');
        console.log(res);
    }));
    it('Test Regular Expression Matching with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let s = "bly";
        let p = "a*b.*y";
        let res = (0, Leetcode10_RegularExpressionMatching_1.isMatchDynamicProgrammingImpl2)(s, p);
        console.log(res);
    }));
    it('Test longestPalindromeSubstring with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, Leetcode5_LongestPalindromicSubstring_1.longestPalindromeSubstring)("babad");
        console.log(res);
    }));
    it('Test Leetcode 509: Fibonacci Numbers with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode509_FibonacciNumber_1.fibRec)(4));
        console.log((0, Leetcode509_FibonacciNumber_1.fibDynamicProgramming)(4));
        console.log((0, Leetcode509_FibonacciNumber_1.fibMemoization)(4, {}));
    }));
    it('Test Leetcode 70: Climbing Stairs with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode70_ClimbingStairs_1.climbStairs)(5));
        console.log((0, Leetcode70_ClimbingStairs_1.climbStairsRec)(5));
        console.log((0, Leetcode70_ClimbingStairs_1.climbStairsMemoization)(5, {}));
    }));
    it('Test Leetcode 198: House Robber with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode198_HouseRobber_1.rob)([1, 2, 3, 1]));
        console.log((0, Leetcode198_HouseRobber_1.rob)([2, 7, 9, 3, 1]));
    }));
    it('Test Leetcode 62: Unique Path/Grid Traveler with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsMemoization)(1, 1, {}));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsMemoization)(2, 3, {}));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsMemoization)(3, 2, {}));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsMemoization)(3, 3, {}));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsMemoization)(18, 18, {}));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsRec)(1, 1));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsRec)(2, 3));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsRec)(3, 2));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsRec)(3, 3));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsRec)(18, 18));
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsDynamicP)(1, 1)); //1
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsDynamicP)(2, 3)); //3
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsDynamicP)(3, 2)); //3
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsDynamicP)(3, 3)); //6
        console.log((0, Leetcode62_UniquePathsGridTraveler_1.uniquePathsDynamicP)(18, 18)); //2333606220
    }));
    it('Test Free Coding Camp: Can Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_CanSum_1.canSumDynamicP)([5, 3, 4], 7)); // true
        console.log((0, FreeCodingCamp_CanSum_1.canSumDynamicP)([2, 4], 7)); // false
        console.log((0, FreeCodingCamp_CanSum_1.canSumDynamicP)([2, 3, 6, 7], 7)); //true
        console.log((0, FreeCodingCamp_CanSum_1.canSumMemoization)([5, 3, 4, 7], 7, {})); //true
        console.log((0, FreeCodingCamp_CanSum_1.canSumMemoization)([2, 4], 7, {})); //false
        console.log((0, FreeCodingCamp_CanSum_1.canSumMemoization)([2, 3, 6, 7], 7, {})); // true
    }));
    it('Test Free Coding Camp: How Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_HowSum_1.howSumRec)([5, 3, 4, 7], 7)); // [4, 3]
        console.log((0, FreeCodingCamp_HowSum_1.howSumRec)([2, 4], 7)); // null
        console.log((0, FreeCodingCamp_HowSum_1.howSumRec)([2, 3, 6, 7], 7)); // [5, 2]
        console.log((0, FreeCodingCamp_HowSum_1.howSumMemoization)([5, 3, 4, 7], 7, {})); //[4,3]
        console.log((0, FreeCodingCamp_HowSum_1.howSumMemoization)([2, 4], 7, {})); //null
        console.log((0, FreeCodingCamp_HowSum_1.howSumMemoization)([2, 3, 6, 7], 7, {})); // [ 3, 2, 2 ]
        console.log((0, FreeCodingCamp_HowSum_1.howSumDynamicP)([5, 3, 4, 7], 7)); //[4,3]
        console.log((0, FreeCodingCamp_HowSum_1.howSumDynamicP)([2, 4], 7)); //null
        console.log((0, FreeCodingCamp_HowSum_1.howSumDynamicP)([2, 3, 6, 7], 7)); // [ 3, 2, 2 ]
    }));
    it('Test Free Coding Camp: Best Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_BestSum_1.bestSumRec)([5, 3, 4, 7], 7)); // [7]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumRec)([2, 3, 5], 8)); // [3, 5]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumRec)([1, 4, 5], 8)); // [4, 4]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumMemoization)([5, 3, 4, 7], 7, {})); // [7]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumMemoization)([2, 3, 5], 8, {})); // [3, 5]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumMemoization)([1, 4, 5], 8, {})); // [4, 4]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumDynamicP)([5, 3, 4, 7], 7)); // [7]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumDynamicP)([2, 3, 5], 8)); // [3, 5]
        console.log((0, FreeCodingCamp_BestSum_1.bestSumDynamicP)([1, 4, 5], 8)); // [4, 4]
    }));
    it('Test Free Coding Camp: Can Construct with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructRec)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructRec)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructRec)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //false
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructMemoization)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {})); // true
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructMemoization)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //false
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructMemoization)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //false
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructDynamicP)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructDynamicP)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
        console.log((0, FreeCodingCamp_CanCostructStr_1.canConstructDynamicP)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //false
    }));
    it('Test Free Coding Camp: Count Construct with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructRec)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructRec)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructRec)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructRec)('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructMemoization)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'], {})); //1
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructMemoization)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructMemoization)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructMemoization)('purple', ['purp', 'p', 'ur', 'le', 'purpl'], {})); //2
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructDynamicP)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructDynamicP)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructDynamicP)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //0
        console.log((0, FreeCodingCamp_CountConstructStr_1.countConstructDynamicP)('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
    }));
    it('Test Free Coding Camp: All Construct with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructRec)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructRec)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructRec)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructRec)('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le],[p, ur, p, le]] 
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructMemoization)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'], {})); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructMemoization)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], {})); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructMemoization)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'], {})); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructMemoization)('purple', ['purp', 'p', 'ur', 'le', 'purpl'], {})); //[[purp, le],[p, ur, p, le]] 
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructDynamicP)('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); //[[ab, cd, ef],[ab, c, def],[abc, def],[abcd, ef]] 
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructDynamicP)('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructDynamicP)('eeeeeeeeeeeeeeeeeef', ['eeee', 'f', 'eeef'])); //[]
        console.log((0, FreeCodingCamp_AllConstructStr_1.allConstructDynamicP)('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[[purp, le],[p, ur, p, le]] 
    }));
    it('Test Leetcode 1115: Roll dice with target sum: return all possible combinations', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget)(2, 6, 7)); // 6 ways
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget)(1, 6, 3)); // 1 way
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget)(30, 30, 500)); // 1 way
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_DP)(2, 6, 7)); // 6 ways
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_DP)(1, 6, 3)); // 1 way
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_DP)(30, 30, 500)); // 1 way
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_Memoization)(2, 6, 7)); // 6 ways
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_Memoization)(1, 6, 3)); // 1 way
        console.log((0, Leetcode1115_RollDiceWithTargetSum_1.numRollsToTarget_Memoization)(30, 30, 500)); // 1 way
    }));
});
//# sourceMappingURL=dynamicProgramming.test.js.map