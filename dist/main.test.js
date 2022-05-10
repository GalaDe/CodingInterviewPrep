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
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test AddTwoNumbers with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        var l1 = new ListNode_1.ListNode(2, new ListNode_1.ListNode());
        l1.next = new ListNode_1.ListNode(4);
        l1.next.next = new ListNode_1.ListNode(3);
        var l2 = new ListNode_1.ListNode(5);
        l2.next = new ListNode_1.ListNode(6);
        l2.next.next = new ListNode_1.ListNode(4);
        let res = AddTwoNumbers_1.addTwoNumbers(null, null);
        while (res != null) {
            console.log(res.val);
            res = res.next;
        }
    }));
});
//# sourceMappingURL=main.test.js.map