"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorganizeString = void 0;
//aab
function reorganizeString(s) {
    if (s.length == 0)
        return '';
    let map = new Map();
    //Create map with characters set each to 1, if exists in a map + 1
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s.charAt(i)))
            map.set(s.charAt(i), 1);
        else
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    }
}
exports.reorganizeString = reorganizeString;
function swap(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    return arr;
}
//# sourceMappingURL=ReorganizeString.js.map