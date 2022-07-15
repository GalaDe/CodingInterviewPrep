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
const FindFirstConsecutiveIntegerInArray_1 = require("./Two_Pointers/FindFirstConsecutiveIntegerInArray");
const Leetcode121_BestTimeToBuySellStock_1 = require("./Leetcode121_BestTimeToBuySellStock");
const Leetcode217_ContainsDuplicate_1 = require("./Leetcode217_ContainsDuplicate");
const Leetcode219_ContainsDuplicate2_1 = require("./Leetcode219_ContainsDuplicate2");
const Leetcode220_ContainsDuplicate3_1 = require("./Leetcode220_ContainsDuplicate3");
const Leetcode238_ProductOfArrayExceptSelf_1 = require("./Leetcode238_ProductOfArrayExceptSelf");
const Leetcode26_RemoveDuplicatesFromSortedArray_1 = require("./Two_Pointers/Leetcode26_RemoveDuplicatesFromSortedArray");
const RelativeSortArrays_1 = require("./RelativeSortArrays");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test max profit with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode121_BestTimeToBuySellStock_1.maxProfit)([7, 1, 5, 3, 6, 4]));
    }));
    it('Test contains duplicates with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode217_ContainsDuplicate_1.containsDuplicate)([0, 4, 5, 0, 3, 6]));
        console.log((0, Leetcode217_ContainsDuplicate_1.containsDuplicate_2)([0, 4, 5, 0, 3, 6]));
    }));
    it('Test contains duplicates 2 with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode219_ContainsDuplicate2_1.containsNearbyDuplicate)([1, 0, 1, 1], 1));
    }));
    it('Test contains duplicates 3 with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode220_ContainsDuplicate3_1.containsNearbyAlmostDuplicate)([1, 2, 1, 1], 1, 0)); //true
        console.log((0, Leetcode220_ContainsDuplicate3_1.containsNearbyAlmostDuplicate)([1, 2, 3, 1], 3, 0)); //true
        console.log((0, Leetcode220_ContainsDuplicate3_1.containsNearbyAlmostDuplicate)([1, 5, 9, 1, 5, 9], 2, 3)); //false
        console.log((0, Leetcode220_ContainsDuplicate3_1.containsNearbyAlmostDuplicate)([8, 7, 15, 1, 6, 1, 9, 15], 1, 3)); //true
    }));
    it('Test contains duplicates 3 with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let numbers = [1, 3, 4, 5, 22, 23, 6, 8, 9, 23, 24, 22, 23, 15, 16, 17, 33, 23, 23, 15, 16, 17, 11, 1, 2, 99];
        console.log((0, FindFirstConsecutiveIntegerInArray_1.findNumbers)(numbers)); //[1, 3, 22, 6, 8, 23, 22, 15, 33, 23, 23, 15, 11, 1, 99]
    }));
    it('Test relativeSortArray with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, RelativeSortArrays_1.relativeSortArray)([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); //[2,2,2,1,4,3,3,9,6,7,19]
    }));
    it('Test productExceptSelf with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode238_ProductOfArrayExceptSelf_1.productExceptSelf)([1, 2, 3, 4])); //[24, 12, 8, 6]
        console.log((0, Leetcode238_ProductOfArrayExceptSelf_1.productExceptSelf)([-1, 1, 0, -3, 3])); //[0,0,9,0,0]
    }));
    it('Test Leetcode 26: Remove Duplicates from Sorted Array: with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode26_RemoveDuplicatesFromSortedArray_1.removeDuplicates)([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //[24, 12, 8, 6]
        console.log((0, Leetcode26_RemoveDuplicatesFromSortedArray_1.removeDuplicates)([1, 1, 2])); //[0,0,9,0,0]
    }));
});
//# sourceMappingURL=arrays.test.js.map