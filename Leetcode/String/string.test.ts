import { addStrings, addStrings2 } from "./addTwoNumbersAsString";
import { isValid } from "./Leetcode20_ValidParentheses";
import { isAnagram, isAnagram_2 } from "./Leetcode242_ValidAnagram";
import { convert_1 } from "./ZigzagConversion";
import { lengthOfLastWord } from "./Leetcode58_LengthOfLastWord";
import { wordPattern } from "./Leetcode290_WordPattern";
import { detectCapitalUse } from "./Leetcode520_DetectCapital";



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
    console.log(addStrings2('11', '123')); //134
    //console.log(addStrings('9333852702227987', '85731737104263')); //134
  });

  it('Test Leetcode 242: isAnagram', async () => {
    console.log(isAnagram('rat', 'car')); //134
    console.log(isAnagram('anagram', 'nagaram')); //134
  });


  it('Test Leetcode 242: isAnagram', async () => {
    console.log(isAnagram_2('rat', 'car')); //134
    console.log(isAnagram_2('anagram', 'nagaram')); //134
  });

  it('Test Leetcode 242: isAnagram', async () => {
    //console.log(lengthOfLastWord('Hello World')); //5
    console.log(lengthOfLastWord('   fly me   to   the moon  '));//4
  });

  it('Test Leetcode 290: Word Pattern', async () => {
    console.log(wordPattern('abba', 'dog dog dog dog'));//false
    console.log(wordPattern('aaaa', 'dog cat cat dog'));//false
    console.log(wordPattern('abba', 'dog cat cat dog'));//true
    console.log(wordPattern('abba', 'dog cat cat fish'));//false
  });

  it('Test Leetcode 520: Detect Capital', async () => {
    console.log(detectCapitalUse('USA'));//true
    console.log(detectCapitalUse('Google'));//true
    console.log(detectCapitalUse('leetcode'));//true
    console.log(detectCapitalUse('LeetCode'));//fase
  });


});
