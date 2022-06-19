/*
    Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

    Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
    Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

    Example 1:

    Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    Output: [2,2,2,1,4,3,3,9,6,7,19]

    Example 2:

    Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
    Output: [22,28,8,6,17,44]



*/

//Runtime: 84 ms, faster than 75.86% of TypeScript online submissions for Relative Sort Array.
//Memory Usage: 44.6 MB, less than 68.97% of TypeScript online submissions for Relative Sort Array.
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {

    if(arr1.length == 0)
        return arr2;
    
    if(arr1.length == 0 && arr2.length == 0) return [];

    let res: number [] = [];
    let map = new Map();
    let remArr = [];

    for(let n of arr1){
        if(!map.has(n))
            map.set(n, 1);
        else map.set(n, map.get(n) + 1);
    }

    for(let n of arr2){
        if(map.has(n)){
            let len = map.get(n);
            while(len > 0){
                res.push(n);
                len--;
            }
            map.delete(n)
        }
    }

    for (var [key, val] of map) {
        if(val >= 1){
            let len = map.get(key);
            while(len > 0){
                remArr.push(key);
                len--;
            }
        }   
    }

    remArr.sort((a,b) => a - b);
    res.push(...remArr);

    return res;
};