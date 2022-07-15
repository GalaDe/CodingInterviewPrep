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
const addTwoNumbersAsString_1 = require("./addTwoNumbersAsString");
const Leetcode20_ValidParentheses_1 = require("./Leetcode20_ValidParentheses");
const ZigzagConversion_1 = require("./ZigzagConversion");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test zigzagConversion with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        let res = (0, ZigzagConversion_1.convert_1)('PAYPALISHIRING', 4);
        console.log(res);
    }));
    it('Test Valid Parentheses with data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode20_ValidParentheses_1.isValid)('((')); //false
        console.log((0, Leetcode20_ValidParentheses_1.isValid)('())()()')); //false
        console.log((0, Leetcode20_ValidParentheses_1.isValid)('(((({}))))')); //true
        console.log((0, Leetcode20_ValidParentheses_1.isValid)('(((({})))]')); //false
    }));
    it('Test addStrings with data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, addTwoNumbersAsString_1.addStrings2)('11', '123')); //134
        //console.log(addStrings('9333852702227987', '85731737104263')); //134
    }));
});
//# sourceMappingURL=string.test.js.map