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
const CircularDoublyLinkedListImpl_1 = require("./CircularDoublyLinkedListImpl");
const CircularSinglyLinkedListImpl_1 = require("./CircularSinglyLinkedListImpl");
const DoblyLinkedListImpl_1 = require("./DoblyLinkedListImpl");
const SinglyLinkedListImpl_1 = require("./SinglyLinkedListImpl");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test: get size of the list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode(2);
        l1.next = new SinglyLinkedListImpl_1.ListNode(4);
        l1.next.next = new SinglyLinkedListImpl_1.ListNode(3);
        var l2 = new SinglyLinkedListImpl_1.ListNode(5);
        l2.next = new SinglyLinkedListImpl_1.ListNode(6);
        l2.next.next = new SinglyLinkedListImpl_1.ListNode(4);
        let res = (0, SinglyLinkedListImpl_1.getSize)(l1);
        console.log(res);
    }));
    it('Test: Add node at the begging of the list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode('aaa');
        l1.next = new SinglyLinkedListImpl_1.ListNode('bbb');
        l1.next.next = new SinglyLinkedListImpl_1.ListNode('ccc');
        let res = (0, SinglyLinkedListImpl_1.addNodeFront)('abc', l1);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test: Add node at the end of the list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode('aaa');
        l1.next = new SinglyLinkedListImpl_1.ListNode('bbb');
        l1.next.next = new SinglyLinkedListImpl_1.ListNode('ccc');
        let res = (0, SinglyLinkedListImpl_1.addNodeLast)('abc', l1);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test: Add node at the proper of the list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode('aaa');
        l1.next = new SinglyLinkedListImpl_1.ListNode('bbb');
        l1.next.next = new SinglyLinkedListImpl_1.ListNode('ccc');
        let res = (0, SinglyLinkedListImpl_1.addNodeAtPosition)('abc', l1, 1);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test: Remove list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode('aaa');
        l1.next = new SinglyLinkedListImpl_1.ListNode('bbb');
        l1.next.next = new SinglyLinkedListImpl_1.ListNode('ccc');
        let res = (0, SinglyLinkedListImpl_1.remove)(l1, 'ccc');
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test: Revesre list', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new SinglyLinkedListImpl_1.ListNode('aaa');
        l1.next = new SinglyLinkedListImpl_1.ListNode('bbb');
        l1.next.next = new SinglyLinkedListImpl_1.ListNode('ccc');
        let res = (0, SinglyLinkedListImpl_1.reverse)(l1);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
    it('Test: DoublyLinkedList Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let list = new DoblyLinkedListImpl_1.DoublyLinkedList();
        list.add(1);
        list.add(3);
        list.add(5);
        list.add(7);
        list.addNodeAtPosition(25, 3);
        list.addNodeAtPosition(25, 1);
        list.removeNodeAtPosition(2);
        list.reverse();
    }));
    it('Test: CircularLinkedList Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let list = new CircularSinglyLinkedListImpl_1.CircularLinkedList();
        list.insertAtStart(1);
        list.insertAtStart(3);
        list.insertAtStart(5);
        list.insertAtStart(8);
        list.insertAtEnd(100);
        list.insertAtEnd(200);
        list.delete(200);
    }));
    it('Test: CircularDoublyLinkedList Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let list = new CircularDoublyLinkedListImpl_1.CDoublyLinkedList();
        list.insertAtFront(1);
        list.insertAtFront(3);
        list.insertAtFront(5);
        list.insertAtFront(8);
        list.insertAtEnd(100);
        list.insertAtEnd(200);
        list.insertAtPosition(2, 2);
        list.removeAtPosition(100);
    }));
});
//# sourceMappingURL=TestListImpl.test.js.map