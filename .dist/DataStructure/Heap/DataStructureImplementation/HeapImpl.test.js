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
const MaxHeapImpl_1 = require("./MaxHeapImpl");
const MinHeapImpl_1 = require("./MinHeapImpl");
const HeapSortImpl_1 = require("./HeapSortImpl");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test: Insert Impl & Delete of Max Heap', () => __awaiter(void 0, void 0, void 0, function* () {
        let maxHeap = new MaxHeapImpl_1.MaxHeap();
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(15);
        maxHeap.insert(30);
        maxHeap.insert(40);
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
    }));
    it('Test: Insert Impl & Delete of Min Heap', () => __awaiter(void 0, void 0, void 0, function* () {
        let minHeap = new MinHeapImpl_1.MinHeap();
        minHeap.insert(10);
        minHeap.insert(20);
        minHeap.insert(15);
        minHeap.insert(30);
        minHeap.insert(40);
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
    }));
    it('Test: Heap Sort using Max Heap', () => __awaiter(void 0, void 0, void 0, function* () {
        let arr = [1, 12, 9, 5, 6, 10];
        let heapSort = new HeapSortImpl_1.HeapSort();
        heapSort.sort(arr); //[1, 5, 6, 9, 10, 12]
    }));
});
//# sourceMappingURL=HeapImpl.test.js.map