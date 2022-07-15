"use strict";
/* Coder pad javascript demo
 *  Find all numbers that are the first number of consecutive
 * sequential integers within an array.
 *  An array may contain multiple sets consecutive sequential
 * integers

 * Some examples are below:
 * input: [1, 2, 3] —> output: [1]
 * input: [5] —> output: [5]
 * input: [1, 2, 3, 8, 9] —> output: [1, 8]
 * input: [2, 2] —> output: [2, 2]
 * input: [1, 3, 4, 5, 18, 19, 8, 9, 11] —> output: [1, 3, 18, 8, 11]
 *
 * Please implement the find number function below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNumbers = void 0;
//let numbers =  [1,3,4,5,22,23,6,8,9,23,24,22,23,15,16,17,33,23,23,15,16,17,11,1,2,99];
function findNumbers(numbers) {
    if (numbers.length == 0)
        return [];
    let leftP = 0, rigthP = 1;
    let resArr = [];
    let steps = 1;
    while (rigthP <= numbers.length) {
        if (numbers[rigthP] - steps == numbers[leftP]) {
            rigthP++;
            steps++;
        }
        else {
            resArr.push(numbers[leftP]);
            steps = 1;
            leftP = rigthP;
            rigthP++;
        }
    }
    return resArr;
}
exports.findNumbers = findNumbers;
//# sourceMappingURL=FindFirstConsecutiveIntegerInArray.js.map