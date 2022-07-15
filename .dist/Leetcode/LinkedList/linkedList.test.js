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
const Leetcode141_LinkedListCycle_1 = require("./Leetcode141_LinkedListCycle");
const Leetcode82_RemoveDuplicates2_1 = require("./Leetcode82_RemoveDuplicates2");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test hasCycle with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let node = new Leetcode141_LinkedListCycle_1.ListNode(3);
        node.next = new Leetcode141_LinkedListCycle_1.ListNode(2);
        node.next.next = new Leetcode141_LinkedListCycle_1.ListNode(0);
        node.next.next.next = new Leetcode141_LinkedListCycle_1.ListNode(-4);
        node.next.next.next.next = node.next;
        console.log((0, Leetcode141_LinkedListCycle_1.hasCycle)(node));
    }));
    it('Test deleteDuplicates with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let node = new Leetcode141_LinkedListCycle_1.ListNode(1);
        node.next = new Leetcode141_LinkedListCycle_1.ListNode(2);
        node.next.next = new Leetcode141_LinkedListCycle_1.ListNode(3);
        node.next.next.next = new Leetcode141_LinkedListCycle_1.ListNode(3);
        node.next.next.next.next = new Leetcode141_LinkedListCycle_1.ListNode(4);
        node.next.next.next.next.next = new Leetcode141_LinkedListCycle_1.ListNode(4);
        node.next.next.next.next.next.next = new Leetcode141_LinkedListCycle_1.ListNode(5);
        console.log((0, Leetcode82_RemoveDuplicates2_1.deleteDuplicates)(node));
    }));
});
//# sourceMappingURL=linkedList.test.js.map