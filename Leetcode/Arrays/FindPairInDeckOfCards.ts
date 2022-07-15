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

*/


export function hasGroupsSizeX(deck: number[]): boolean {
    
    if(deck.length == 0) return false;

    let map = new Map();
    let result = 0;

    for(let d of deck){
        if(!map.has(d))
            map.set(d, 1)
        else map.set(d, map.get(d) + 1)
    }

    for(const [key, val] of map){
        result = gcd(result, val);
    }
                            
    return true;
};

// function gcd (a, b){
//     if(b === 0) 
//         return a;
        
//     gcd(b, a % b);
// }

const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));