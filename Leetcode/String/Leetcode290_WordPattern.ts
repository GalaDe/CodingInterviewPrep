/*
    Leetcode 290: Easy: https://leetcode.com/problems/word-pattern/

    Given a pattern and a string s, find if s follows the same pattern. pattern and s are same if:

    Each character in pattern represents a word in s
    No two distinct characters in pattern can represent the same word in s
    No single character in pattern can represent two distinct words in s.
    e.g.:

    pattern = 'abab'; s = 'dog cat dog cat'; return True
    'a' represents 'dog' and 'b' represents cat

    pattern = 'abcb'; s = 'dog cat dog cat'; return False
    'a' represents 'dog', 'b' represents 'cat'. Then 'c' cannot represent 'dog' again as 'a' already represents 'dog' (#2 condition is: No two distinct characters in pattern i.e. 'a' and 'c' can represent same word i.e 'dog'.)

    pattern = 'abcb'; s = 'dog cat hat cat'; return True
    'a' represents 'dog'; 'b' represents 'cat'; 'c' represents 'hat'; and last 'cat' is already represented by 'b' and last character in pattern is also 'b'.

*/

export function wordPattern(pattern: string, s: string): boolean {
    const map = new Map<string, string>(), 
    arrOfWords = s.split(' ');

    if (arrOfWords.length !== pattern.length || new Set(pattern).size !== new Set(arrOfWords).size)
        return false;

    for (let i = 0, n = pattern.length; i < n; i++)
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== arrOfWords[i])
                return false;
        } else map.set(pattern[i], arrOfWords[i]);

    return true;
}