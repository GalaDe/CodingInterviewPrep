/* 
    Leetcode 520: Detect Capital


    We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".
    Given a string word, return true if the usage of capitals in it is right.

    Example 1:

    Input: word = "USA"
    Output: true

    Example 2:

    Input: word = "FlaG"
    Output: false

*/

export function detectCapitalUse(word: string): boolean {

    let countUp = 0;
    let countLow = 0;
    let fisrtUp = false;
    let firstLow = false;

    if(word[0] >= 'A' && word[0] <= 'Z'){
        fisrtUp = true;
        if(word.length == 1) return true;
    }

    if(word[0] >= 'a' && word[0] <= 'z'){
        firstLow = true;
        if(word.length == 1) return true;
    }
      
    for(let i = 1; i <= word.length; i++){
        if(word[i] >= 'A' && word[i] <= 'Z')
            countUp++;
        if(word[i] >= 'a' && word[i] <= 'z')
            countLow++;
    }
   
    if(fisrtUp){
        if(1 + countLow == word.length)
            return true;
        if(1 + countUp == word.length)
            return true;       
    }

    if(firstLow){
        if(1 + countLow == word.length)
            return true; 
    }

    return false;
};


//Revised version
function detectCapitalUse2(word: string): boolean {
    const capital = word[word.length - 1] === word[word.length - 1].toUpperCase();
    if (capital && word[0] !== word[0].toUpperCase()) return false;

    if (capital) {
        for (let i = 1; i < word.length - 1; i++) {
            if (word[i] !== word[i].toUpperCase()) return false;
        }

        return true;
    }

    for (let i = 1; i < word.length - 1; i++) {
        if (word[i] === word[i].toUpperCase()) return false;
    }

    return true;
};