


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

    const maxHeap = new PriorityQueue({
        compare: (a, b) => {
            return charCount[b] - charCount[a]
        }
    })
    
    for(const letter of Object.keys(charCount)){
        maxHeap.enqueue(letter)
    }
    
    let result = ""
    
    while(maxHeap.size() > 1){
        const current = maxHeap.dequeue()
        const next = maxHeap.dequeue()
        result += current
        result += next
        //put it back in the heap but decrease by 1
        charCount[current]--
        charCount[next]--
        if(charCount[current] > 0){
            maxHeap.enqueue(current)
        }
        if(charCount[next] > 0){
            maxHeap.enqueue(next)
        }
    }
    
    
    //may have 1 item left in the heap bc the while loop is > 1
    if(!maxHeap.isEmpty()){
        const lastChar = maxHeap.dequeue()
        if(charCount[lastChar] > 1){
            return ""
        }else{
            return result + lastChar
        }
    }
    
  
    return result
    



}

function swap(arr: any, j: number){
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;

    return arr;
}