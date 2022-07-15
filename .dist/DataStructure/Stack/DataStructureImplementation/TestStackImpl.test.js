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
const StackImpl_1 = require("./StackImpl");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test: Stack Implementation using Linked List', () => __awaiter(void 0, void 0, void 0, function* () {
        let stack = new StackImpl_1.Stack2();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let top = stack.top();
        console.log(top);
        stack.pop();
        stack.pop();
    }));
    it('Test: Stack Implementation using Array', () => __awaiter(void 0, void 0, void 0, function* () {
        let stack = new StackImpl_1.Stack1();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let top = stack.top();
        console.log(top);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
    }));
});
//# sourceMappingURL=TestStackImpl.test.js.map