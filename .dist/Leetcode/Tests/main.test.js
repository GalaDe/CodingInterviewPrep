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
const Leetcode2_AddTwoNumbers_1 = require("../LinkedList/Leetcode2_AddTwoNumbers");
const SinglyLinkedListImpl_1 = require("../../DataStructure/LinkedList/DataStructureImplementation/SinglyLinkedListImpl");
const lengthOflongestSubstring_1 = require("../String/lengthOflongestSubstring");
const FindMedianSortedArrays_1 = require("../Arrays/FindMedianSortedArrays");
const SearchInsertPosition_1 = require("../Arrays/SearchInsertPosition");
const DivideTwoIntegers_1 = require("../MathOperations/DivideTwoIntegers");
const ReverseInteger_1 = require("../MathOperations/ReverseInteger");
const ConvertStringToInt_1 = require("../String/ConvertStringToInt");
const LetterCombinationsPhoneNumber_1 = require("../Backtracking/LetterCombinationsPhoneNumber");
const Leetcode11_ContainerWithMostWater_1 = require("../Arrays/Two_Pointers/Leetcode11_ContainerWithMostWater");
const DayOfTheYear_1 = require("../MathOperations/DayOfTheYear");
const Leetcode23_MergeKSortedLists_1 = require("../LinkedList/Leetcode23_MergeKSortedLists");
const _3Sum_1 = require("../Arrays/Two_Pointers/3Sum");
const _2Sum_1 = require("../Arrays/Two_Pointers/2Sum");
const _3SumClosest_1 = require("../Arrays/Two_Pointers/3SumClosest");
const ReorganizeString_1 = require("../String/ReorganizeString");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test AddTwoNumbers with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode(2);
        l1.next = new SinglyLinkedListImpl_1.ListNode(4);
        l1.next.next = new SinglyLinkedListImpl_1.ListNode(3);
        var l2 = new SinglyLinkedListImpl_1.ListNode(5);
        l2.next = new SinglyLinkedListImpl_1.ListNode(6);
        l2.next.next = new SinglyLinkedListImpl_1.ListNode(4);
        let res = (0, Leetcode2_AddTwoNumbers_1.addTwoNumbers)(l1, l2);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test Merge K Sorted List with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let lists = [];
        var l1 = new SinglyLinkedListImpl_1.ListNode(1);
        l1.next = new SinglyLinkedListImpl_1.ListNode(4);
        l1.next.next = new SinglyLinkedListImpl_1.ListNode(5);
        var l2 = new SinglyLinkedListImpl_1.ListNode(1);
        l2.next = new SinglyLinkedListImpl_1.ListNode(3);
        l2.next.next = new SinglyLinkedListImpl_1.ListNode(4);
        var l3 = new SinglyLinkedListImpl_1.ListNode(2);
        l3.next = new SinglyLinkedListImpl_1.ListNode(6);
        //lists.push(l1);
        lists.push(null);
        lists.push(l2);
        lists.push(l3);
        let res = (0, Leetcode23_MergeKSortedLists_1.mergeKLists)(lists);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test lengthOfLongestSubstring with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, lengthOflongestSubstring_1.lengthOfLongestSubstring)('dvdf');
        console.log(res);
    }));
    it('Test findMedianSortedArrays with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let num1 = [1, 2];
        let num2 = [3, 4];
        let res = (0, FindMedianSortedArrays_1.findMedianSortedArrays)(num1, num2);
        console.log(res);
    }));
    it('Test searchInsert with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [1, 3, 5, 6];
        var target = 0;
        let res = (0, SearchInsertPosition_1.searchInsert_2)(arr, target);
        console.log(res);
    }));
    it('Test divide with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, DivideTwoIntegers_1.divideRecursiveApproach)(10, 3);
        console.log(res);
    }));
    it('Test reverse with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, ReverseInteger_1.reverse_2)(312);
        console.log(res);
    }));
    it('Test convert string to integer with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, ConvertStringToInt_1.myAtoi_2)("123b1");
        console.log(res);
    }));
    it('Test Letter Combinations of a Phone Number with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = [];
        res = (0, LetterCombinationsPhoneNumber_1.letterCombinations_recursive2)('23');
        res.forEach(i => console.log(i));
    }));
    it('Test Container With Most Water with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, Leetcode11_ContainerWithMostWater_1.maxArea)([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        console.log(res);
    }));
    it('Test Day of the Year with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, DayOfTheYear_1.dayOfYear)('2019-02-10');
        console.log(res);
    }));
    it('Test 3Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, _3Sum_1.threeSum)([-1, 0, 1, 2, -1, -4]);
        console.log(res);
    }));
    it('Test 3SumClosest with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [-1, 2, 1, -4];
        let res = (0, _3SumClosest_1.threeSumClosest_1)(arr, 1);
        console.log(res);
    }));
    it('Test 2Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [3, 2, 4];
        let res = (0, _2Sum_1.twoSum_2)(arr, 6);
        console.log(res);
    }));
    it('Test 2Sum with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [3, 2, 4];
        let res = (0, _2Sum_1.twoSum_2)(arr, 6);
        console.log(res);
    }));
    it('Test reorganizeString with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, ReorganizeString_1.reorganizeString)('vvvlo');
        console.log(res);
    }));
});
//# sourceMappingURL=main.test.js.map