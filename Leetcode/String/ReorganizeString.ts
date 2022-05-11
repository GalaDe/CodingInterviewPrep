


//aab
export function reorganizeString(s: string): string {

    if(s.length == 0) return '';

    let map = new Map();

    //Create map with characters set each to 1, if exists in a map + 1
    for(let i = 0; i < s.length; i++){
        if(!map.has(s.charAt(i)))
            map.set(s.charAt(i), 1);
        else map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    }
}
    



function swap(arr: any, j: number){
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;

    return arr;
}