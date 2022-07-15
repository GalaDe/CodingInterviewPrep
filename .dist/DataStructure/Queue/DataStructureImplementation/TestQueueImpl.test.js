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
const QueueArrayImpl_1 = require("./QueueArrayImpl");
const QueueLinkedListImpl_1 = require("./QueueLinkedListImpl");
const QueueStackImpl_1 = require("./QueueStackImpl");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test: Queue Implementation using Array', () => __awaiter(void 0, void 0, void 0, function* () {
        let queue = new QueueArrayImpl_1.QueueArr();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        let val = queue.peek();
        console.log(val);
        queue.dequeue();
        queue.dequeue();
    }));
    it('Test: Queue Implementation using Linked List', () => __awaiter(void 0, void 0, void 0, function* () {
        let queue = new QueueLinkedListImpl_1.QueueLL();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.peek();
        queue.dequeue();
        queue.dequeue();
    }));
    it('Test: Queue Implementation using two stacks', () => __awaiter(void 0, void 0, void 0, function* () {
        let queue = new QueueStackImpl_1.QueueStack();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        let val = queue.peek();
        console.log(val);
        queue.dequeue();
        queue.dequeue();
    }));
});
//# sourceMappingURL=TestQueueImpl.test.js.map