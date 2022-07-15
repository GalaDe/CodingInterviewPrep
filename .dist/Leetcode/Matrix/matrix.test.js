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
const Leetcode48_RotateImage_1 = require("./Leetcode48_RotateImage");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test max profit with valid data', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log((0, Leetcode48_RotateImage_1.rotate)([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    }));
});
//# sourceMappingURL=matrix.test.js.map