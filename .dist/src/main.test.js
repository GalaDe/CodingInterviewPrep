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
const AddTwoNumbers_1 = require("./LinkedList/AddTwoNumbers");
const ListNode_1 = require("./LinkedList/ListNode");
const lengthOflongestSubstring_1 = require("./String/lengthOflongestSubstring");
const FindMedianSortedArrays_1 = require("./Arrays/FindMedianSortedArrays");
const RegularExpressionMatching_1 = require("./String/RegularExpressionMatching");
const LongestPalindromicSubstring_1 = require("./String/LongestPalindromicSubstring");
const SearchInsertPosition_1 = require("./Arrays/SearchInsertPosition");
const DivideTwoIntegers_1 = require("./MathOperations/DivideTwoIntegers");
const ReverseInteger_1 = require("./MathOperations/ReverseInteger");
const ZigzagConversion_1 = require("./String/ZigzagConversion");
const ConvertStringToInt_1 = require("./String/ConvertStringToInt");
const LetterCombinationsPhoneNumber_1 = require("./String/LetterCombinationsPhoneNumber");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test AddTwoNumbers with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new ListNode_1.ListNode(2);
        l1.next = new ListNode_1.ListNode(4);
        l1.next.next = new ListNode_1.ListNode(3);
        var l2 = new ListNode_1.ListNode(5);
        l2.next = new ListNode_1.ListNode(6);
        l2.next.next = new ListNode_1.ListNode(4);
        let res = AddTwoNumbers_1.addTwoNumbers(l1, l2);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test lengthOfLongestSubstring with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = lengthOflongestSubstring_1.lengthOfLongestSubstring('dvdf');
        console.log(res);
    }));
    it('Test findMedianSortedArrays with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let num1 = [1, 2];
        let num2 = [3, 4];
        let res = FindMedianSortedArrays_1.findMedianSortedArrays(num1, num2);
        console.log(res);
    }));
    it('Test Regular Expression Matching with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let s = "bly";
        let p = "a*b.*y";
        let res = RegularExpressionMatching_1.isMatchDynamicProgrammingImpl2(s, p);
        console.log(res);
    }));
    it('Test longestPalindromeSubstring with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = LongestPalindromicSubstring_1.longestPalindromeSubstring("babad");
        console.log(res);
    }));
    it('Test searchInsert with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [1, 3, 5, 6];
        var target = 0;
        let res = SearchInsertPosition_1.searchInsert_2(arr, target);
        console.log(res);
    }));
    it('Test divide with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = DivideTwoIntegers_1.divideRecursiveApproach(10, 3);
        console.log(res);
    }));
    it('Test reverse with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = ReverseInteger_1.reverse_2(312);
        console.log(res);
    }));
    it('Test zigzagConversion with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = ZigzagConversion_1.convert_1('PAYPALISHIRING', 4);
        console.log(res);
    }));
    it('Test convert string to integer with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = ConvertStringToInt_1.myAtoi_2("123b1");
        console.log(res);
    }));
    it('Test Letter Combinations of a Phone Number with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = [];
        LetterCombinationsPhoneNumber_1.letterCombinations("123b1");
        //res.forEach(i => console.log(i)); 
    }));
});
//# sourceMappingURL=main.test.js.map