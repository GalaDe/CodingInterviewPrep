
/*
    Trie implementation using map. Full explanation in TrieTreeImpl.ts

    ref: https://www.lavivienpost.net/trie-part-3/#5
    ref: https://leetcode.com/problems/implement-trie-prefix-tree/discuss/156159/Java-solution-with-delete()-method
    ref: https://leetcode.com/problems/implement-trie-prefix-tree/discuss/1510773/What-If-we-add-delete-method-also
    
*/

class TrieNodeMap{
    children: Map<string, TrieNodeMap>;
    content: string;
    isWord: boolean;

    constructor(c = ''){
        this.children = new Map<string, TrieNodeMap>();
        this.content = c;
        this.isWord = false;
    }

}

export class TrieMap{

    root: TrieNodeMap;
    constructor(){
        this.root = new TrieNodeMap('');
    }

    insert(word: string){
        if(word.length == 0) throw new Error ('Nothing to insert');
        if(this.search(word) == true) throw new Error('Word already exists on the trie!');

        let currNode = this.root;
        for(const char of word){
            if(!currNode.children.has(char)) {
                currNode.children.set(char, new TrieNodeMap(char));
            }
            currNode = currNode.children.get(char);
        }
        currNode.isWord = true;
    }

    search(word: string){
        if(word.length == 0) throw new Error ('Word has not been provided');
        
        let currNode = this.root;
        for(const char of word){
            if(!currNode.children.has(char)) 
                return false;
            
            currNode = currNode.children.get(char);   
        }
        return currNode.isWord;
    }

    //Iterative Approach
    delete(word: string){
        if(word.length == 0) throw new Error ('Word has not been provided');
        if(this.search(word) == false) throw new Error('Word DOES NOT exists on the trie!');

        let deleteBelow: TrieNodeMap; // prev node
        let deleteChar;
        let parent = this.root; //next node
        for(const char of word){
            if(!parent.children.has(char)) 
                return;
            
            let curr = parent.children.get(char); 
            
            if(curr == null)
			    return false;

            if(parent.children.size > 1 || parent.isWord) { // Update 'deleteBelow' and 'deleteChar'
                    deleteBelow = parent;
                    deleteChar = char;
            }
                
            parent = curr;
        }

        if(!parent.isWord)
            return false;

        if (parent.children.size == 0 && parent.isWord) {
            deleteBelow.children.delete(deleteChar);
        } 
        else {
            parent.isWord = false; // Delete word by mark it as not the end of a word
        }
        
        return true;

    }

    deleteRec(word: string){
        if(word.length == 0) return;

        this.deleteRecHelper(this.root, word);
    }


    deleteRecHelper(root: TrieNodeMap, wordToDel: string) {
		if(wordToDel.length === 0) return false;

		let char = wordToDel[0]; // k, i, n
		let currNode = root.children.get(char);

		if(currNode == null)
			return false;

        if(currNode.isWord) {
            currNode.isWord = false;
            if(currNode.children.size == 0)  return true;
            else return false;
        }

		let isDelete = this.deleteRecHelper(currNode, wordToDel.substring(1));//(k, 'in'), (i, 'n')

		// We can remove child node only if it is non terminating and its number of children are 0	
		if(isDelete){
            if(currNode.children.size > 1){
                let lastchar = wordToDel[wordToDel.length - 1];
                currNode.children.delete(lastchar);
                return false;
            }
            else {
                //TO-DO: doesn't delete nodes completely
                currNode.children.delete(char);
            }
		}
		return isDelete;
	}

    printAllWords(){
        if(this.root == null) return null;

        let res = [];
        this.printAllWordsHelper(this.root, res, '');
        console.log(res);
    }

    printAllWordsHelper(currNode: TrieNodeMap, arr: any, perfix: string){
        if (currNode.isWord)
            arr.push(perfix + currNode.content);
        for (let child of currNode.children.keys()) 
            this.printAllWordsHelper(currNode.children.get(child), arr, perfix + currNode.content);
    }

    printAutoComplete_rec(root: TrieNodeMap, prefix: string){
        if(root == null) return null;

        let res = [];
        this.printAllWordsHelper(root, res, prefix);
        console.log(res);
    }


    autocomplete(prefix: string){
        if(prefix.length == 0) throw new Error("No suffix has been provided");

        let current = this.root;
        for(const char of prefix) {
            const node = current.children.get(char);
            if (node == null) 
                return false;
            
            if(node.isWord)
                return console.log(prefix)

            current = node;
        }
        prefix = prefix.slice(0, -1);
        this.printAutoComplete_rec(current, prefix);
    }


}