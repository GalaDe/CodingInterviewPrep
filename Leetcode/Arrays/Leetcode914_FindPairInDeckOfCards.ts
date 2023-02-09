/*

    In a deck of cards, each card has an integer written on it.

    Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

    Each group has exactly X cards.
    All the cards in each group have the same integer.
    

    Example 1:
    Input: deck = [1,2,3,4,4,3,2,1]
    Output: true
    Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

    Example 2:
    Input: deck = [1,1,1,2,2,2,3,3]
    Output: false
    Explanation: No possible partition.

    -------------------------------------------------------------------------------------------------------------------------
    SOLUTION:
    -------------------------------------------------------------------------------------------------------------------------

    In this problem we can have different amounts of group 2, 3, 4, ect.

    In this case we need to find Greatest Common Divisor -- value which is devisible by any amount of repeted values.

    For example:

    Deck of cards Map:

    1: 4
    2: 6
    3: 8

    4, 6, 8 ==> all devisible by 2, therefore 2 is their GCD

    Algorithm:

    1. Add value to the map => key: item from array, vaue: count each apperance of an item
    2. Find the minimum value of apperance
    3. Set groupSize = 2, groupSize <= min, then run through the map, check if each value is divisible by groupSize:

               if(val % groupSize !== 0)
                    isFound = false;



    -------------------------------------------------------------------------------------------------------------------------
    COMPLEXITY:
    -------------------------------------------------------------------------------------------------------------------------

    Time: O(n)
    Space: O(n)
    

*/


export function hasGroupsSizeX(deck: number[]): boolean {
    
    if(deck.length == 0) return false;

    let map = new Map();

    for(let d of deck){
        if(!map.has(d))
            map.set(d, 1)
        else map.set(d, map.get(d) + 1)
    }

    let min = Infinity;
    for(const [key, val] of map){
        min = Math.min(val, min);
    }

    for(let groupSize = 2; groupSize <= min; groupSize++){
        let isFound = true;
        for(const [key, val] of map){
            if(val % groupSize !== 0)
                isFound = false;
        }

        if(isFound)
            return true;

    }  
    
    return false;
}
