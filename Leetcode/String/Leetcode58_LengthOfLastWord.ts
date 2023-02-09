/*

    Leetcode 58: Easy: https://leetcode.com/problems/length-of-last-word/

    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.

    Example 1:

    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

    Example 2:

    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

    Example 3:

    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.

    Explanation:

    Solution 1: Reverse the string, count letters until space
    Solution 2: Start from the end

*/


export function lengthOfLastWord(s: string): number {

    let charCount = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== ' ') {
        charCount++;
      } else if (s[i] === ' ' && charCount !== 0) {
        return charCount;
      }
    }
    return charCount;
};


//Solution did pass alll tests
export function lengthOfLastWord_2(s: string): number {

    if(s.length == 0) return 0;
    if((s.length == 1) && (s[0] == ' ')) return 0;
    if((s.length == 1) && (s[0] > 'a' && s[0] < 'z')) return 1;

    // Here’s a short overview of what the regular expression does:
    // \s: matches any whitespace symbol: spaces, tabs, and line breaks
    // +: match one or more of the preceding tokens (referencing \s)
    // g: the g at the end indicates iterative searching throughout the full string
    const newStr = s.replace(/\s+/g, ' ').trim();
    let lastChar = newStr.length - 1;
    let counter = 0;

    while(newStr[lastChar] != ' '){
        counter++;
        lastChar--;
    }

    return counter;
};