/*
  LeetCode: https://leetcode.com/submissions/detail/662576751/

  Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
  A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted 
  without changing the relative order of the remaining characters.

  For example, "ace" is a subsequence of "abcde".
  A common subsequence of two strings is a subsequence that is common to both strings.

 

  Example 1:
  Input: text1 = "abcde", text2 = "ace" 
  Output: 3  
  Explanation: The longest common subsequence is "ace" and its length is 3.

  Example 2:
  Input: text1 = "abc", text2 = "abc"
  Output: 3
  Explanation: The longest common subsequence is "abc" and its length is 3.
  
  Example 3:
  Input: text1 = "abc", text2 = "def"
  Output: 0
  Explanation: There is no such common subsequence, so the result is 

    Solution: 
    1. Can be done using recursion
    2. Dynamic Programming: Top-Down and Bottom-Up variations

    --------------------------------------
    Logic Recursive:
    --------------------------------------

    LCS(ABCBDAB, BDCABA) = maximum (LCS(ABCBDA, BDCABA), LCS(ABCBDAB, BDCAB))
 
    LCS(ABCBDA, BDCABA) = LCS(ABCBD, BDCAB) + A
    LCS(ABCBDAB, BDCAB) = LCS(ABCBDA, BDCA) + B
 
    LCS(ABCBD, BDCAB) = maximum (LCS(ABCB, BDCAB), LCS(ABCBD, BDCA))
    LCS(ABCBDA, BDCA) = LCS(ABCBD, BDC) + A
    
    --------------------------------------
    Time Complexity: Recursive Approach: 
    --------------------------------------
    
    The worst-case time complexity of the above solution is O(2(m+n)) and occupies space in the call stack, 
    where m and n are the length of the strings X and Y. The worst case happens when there is no common 
    subsequence present in X and Y (i.e., LCS is 0), and each recursive call will end up in two recursive calls.

    --------------------------------------
    Time Complexity: Dynamic Approach: 
    --------------------------------------
    The time complexity of the above bottom-up solution is O(m.n) and requires O(m.n) extra space, where m and n are the length of the strings X and Y. 
    The space complexity of the above solution can be improved to O(n) as calculating LCS of a row of the LCS table requires only the solutions 
    to the current row and the previous row.
    
*/


//Dynamic Programming Top-Down Approach 
export function longestCommonSubsequence_dp1(text1: string, text2: string): number {
    let len1 = text1.length;
    let len2 = text2.length;
  
    // Create a 2D array full of zeroes, with an extra buffer row and column at start
    // to let us search up and left without going out of bounds later
    let array: number[][] = new Array(len1 + 1);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(len2 + 1).fill(0); //first start fill with 0 first row, ect
    }

    /*
    //Same as above one line solution to fill out the array
    const array: number[][] = Array(le1 + 1).fill(undefined).map(() => Array(len2 + 1).fill(0));
    */
  
    // Begin counting character matches at the start of the buffer zone (i.e., array[1][1]),
    // then traverse the array from top-left to bottom-right
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
          // If the characters match, increase the current matching streak by one
          // from the value top-left of this spot
          array[i][j] = array[i - 1][j - 1] + 1;
        } else {
          // If not, just copy the largest current streak either up or left 
          array[i][j] = Math.max(array[i - 1][j], array[i][j - 1]);
        }
      }
    }
  
    // Since the array cannot decrease in value as it's traversed,
    // the maximum value will always be in the bottom-right corner,
    // which is the length of the longest matching subsequence.
    return array[len1][len2];
  }
  
  /** 
   * Example Input: text1 = "abcde", text2 = "ace"
   * 
   * Final Array after traversal:
  ┌─────────┬───┬───┬───┬───┐
  │ (index) │ 0 │ a │ c │ e │
  ├─────────┼───┼───┼───┼───┤
  │    0    │ 0 │ 0 │ 0 │ 0 │
  │    a    │ 0 │ 1 │ 1 │ 1 │
  │    b    │ 0 │ 1 │ 1 │ 1 │
  │    c    │ 0 │ 1 │ 2 │ 2 │
  │    d    │ 0 │ 1 │ 2 │ 2 │
  │    e    │ 0 │ 1 │ 2 │ 3 │
  └─────────┴───┴───┴───┴───┘
  */


  function longestCommonSubsequence_dp2(text1: string, text2: string): number {
    const dp = Array(text2.length + 1).fill(0)
    
    for (let i = 0; i < text1.length; i++) 
      for (let j = 0, temp = 0, preTemp = 0; j < text2.length; j++) {
        temp = preTemp
        preTemp = dp[j + 1]
        
        if (text1.charAt(i) === text2.charAt(j))
          dp[j + 1] = temp + 1
        else
          dp[j + 1] = Math.max(dp[j], dp[j + 1])
      }
    
    return dp[text2.length]
  };

 
  //Recursive Approach
  export function longestCommonSubsequence_recursive(text1: string, text2: string): number {

    return lcs(text1, text2, text1.length, text2.length);
  }

  function lcs(text1: string, text2: string, len1: number, len2: number): number {

    if(len1 == 0 || len2 == 0) return 0;

    if (text1.charAt(len1 - 1) == text2.charAt(len2 - 1)) 
        return lcs(text1, text2, len1 - 1, len2 - 1) + 1;
    else 
        return Math.max(lcs(text1, text2, len1 - 1,len2), lcs(text1, text2, len1, len2 - 1));
        
  }