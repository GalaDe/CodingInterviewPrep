import { addStrings } from "./addTwoNumbersAsString";
import { isValid } from "./Leetcode20_ValidParentheses";
import { convert_1 } from "./ZigzagConversion";



describe('Tests', () => {
    afterAll((done) => {
      done();
    });
  it('Test zigzagConversion with valid data', async () => {
    let res = convert_1('PAYPALISHIRING', 4);
    console.log(res); 
  });

  it('Test Valid Parentheses with data', async () => {
    console.log(isValid('((')); //false
    console.log(isValid('())()()'));//false
    console.log(isValid('(((({}))))')); //true
    console.log(isValid('(((({})))]')); //false
  });

  it('Test addStrings with data', async () => {
    //console.log(addStrings('11', '123')); //134
    console.log(addStrings('9333852702227987', '85731737104263')); //134
  });

});
