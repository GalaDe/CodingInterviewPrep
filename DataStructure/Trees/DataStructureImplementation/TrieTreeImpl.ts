
/*
    ref: https://www.codeguru.co.in/2021/10/implement-trie-data-structure-in.html#:~:text=A%20trie%2C%20also%20called%20a,is%20used%20for%20pattern%20matching.&text=Each%20node%20but%20the%20root%20is%20labeled%20with%20a%20character.
    ref: https://medium.com/@suyashtiwari1798/trie-typescript-4d88be3ec561
    ref: https://leetcode.com/problems/design-add-and-search-words-data-structure/discuss/712019/typescript-trie-solution
    ref: https://johnresig.com/blog/javascript-trie-performance-analysis/
    ref: https://github.com/leekevinyg/js-trie/blob/master/src/Trie.ts
    ref: https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/#:~:text=Implementing%20Trie%20data%20structure%20in,to%20an%20empty%20root%20node.
    ref: https://www.educative.io/blog/data-structures-tutorial-advanced
    ref: https://jojozhuang.github.io/algorithm/data-structure-trie/

    ---------------------------------------------------------------------------------------------------------
    WHAT IS TRIE:
    ---------------------------------------------------------------------------------------------------------
    The word ‘trie’ is derived from the word retrieval. Tries are an ordered tree-like data structure efficient in 
    handling programming problems related to strings.

    A trie, also called a digital tree and sometimes a radix tree or prefix tree (as prefixes can search them), 
    is a kind of search tree—an ordered tree data structure that is used for pattern matching.

    Tries are used in dictionary word searches, spell-checking and in search engines by making auto-suggestions. 
    Some properties are necessary to maintain the overall efficiency of a trie, they include:

        1. A trie is always a set of linked nodes with an empty root node.
        2. Each node represents a unique alphabet.
        3. Each node can point to null or other children nodes.
        4. The depth of a trie depends on the longest word that it stores.
        5. Tries to provide the same path for words that share a common prefix.
        6. The size of a trie depends on the number of alphabets (i.e. the child nodes), and the number of child nodes in a trie 
           depends upon the total number of values possible.

        For example, in English, there are 26 letters so the number of unique nodes cannot exceed 26. 
        Likewise, in Bengali with 50 letters would have 50 unique nodes.

    ---------------------------------------------------------------------------------------------------------
    PROS & CONS of TREE
    ---------------------------------------------------------------------------------------------------------

    Pros: 
    
        1. Trie’s retrieval/insertion time in the worst case is better than hashTable and binary search trees.
        2. It is easy to print all words in alphabetical order

    Cons: 

        1. They require a lot of memory storage for strings.
        2. More complex than other data structures
    
    ---------------------------------------------------------------------------------------------------------
    MAIN FUNCTIONALITY:
    ---------------------------------------------------------------------------------------------------------
        1. Add word
        2. Search word
        3. Count words

    ---------------------------------------------------------------------------------------------------------
    RULES:
    ---------------------------------------------------------------------------------------------------------
        1. Each node but the root is labeled with a character.
        2. Nodes are alphabetically ordered from left to right
        3. The path from child to root yields the string
        4. If there is a word at the end set to true, otherwise is set to false

    ---------------------------------------------------------------------------------------------------------
    APPLICATIONS USES TRIE:
    ---------------------------------------------------------------------------------------------------------
        1. Dictionary lookup
        2. Prefix searches
        3. Auto complete feature in text editors
        4. Command completion in IDE etc
        5. Phone number/contacts searching
        6. IP lookups
        7. Mapping URLs to operations on a web server
        8. Matching sentences (if a trie based on a sequence of words, like Gmail autocompletion)
        9. Index a complete text (as the Ukkonen suffix tree algorithm alternative)

    ---------------------------------------------------------------------------------------------------------
    IMPLEMENTING TRIE:
    ---------------------------------------------------------------------------------------------------------

    Every node in a trie represents an alphabet. A typical node in a trie consists of three data members:

        1. char or content: This stores the character that the node is supposed to contain.
        2. children[]: An array that consists of pointers to children nodes. The size of this array depends on the number of alphabets. 
                       All are set to null.
        3. isEndWord: A flag to indicate the end of a word. It is set to false by default and is only updated when words end during insertion.
                      
    A trie would be implemented using the TrieNode class, and each node would have at most 26 children if we are storing English words. 
    The root node (usually placed on top) contains 26 pointers, each representing a letter in the English alphabet.
    These pointers hold either null or another trieNode.
    The children pointers have a zero index and all words are stored in a top-to-bottom manner. 

    IMPORTANT:
    !!!!!Remember to always set the isEndWord flag to true on the last character to indicate the end of the word !!!!!


    ---------------------------------------------------------------------------------------------------------
    TIME COMPLEXITY: https://iq.opengenus.org/time-complexity-of-trie/
    ---------------------------------------------------------------------------------------------------------

    OPERATION	AVERAGE CASE	WORST CASE	BEST CASE
    Insertion	    O(N)	       O(N)	      O(N)
    Deletion	    O(N)	       O(N)	      O(N)
    Searching	    O(N)	       O(N)	      O(1)

    ---------------------------------------------------------------------------------------------------------
    SPACE COMPLEXITY:
    ---------------------------------------------------------------------------------------------------------

    OPERATION	SPACE COMPLEXITY
    Insertion	    O(N)
    Deletion	    O(1)
    Searching	    O(1)
*/


//This class is kind of a word dictionary
class TrieNode{
    children: {[id: string]: TrieNode};
    isWord: boolean;
    content: String;

    //content field doesn't really hasn't been used anywhere
    constructor(i = ''){
        this.children = {};
        this.isWord  = false;
        this.content = i;
    }

}

// class TrieNode{
//     children: {[id: string]: TrieNode};
//     isWord: boolean;
//     constructor(){
//         this.children = {}
//         this.isWord  = false;
//     }
// }

export class Trie{

    root: TrieNode;

    constructor(){
        this.root = new TrieNode();
    }

    addWord1(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
          if (!current.children[word[i]])
            current.children[word[i]] = new TrieNode(word[i]);
          
          current = current.children[word[i]];
        }
        current.isWord = true;
        //current.children = null;
      }

    addWord2(word: string): void {
        let curr = this.root;
        for(const char of word) {
            if(!curr.children[char]) {
                curr.children[char] = new TrieNode(char);
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
    }


    /*      
                            ROOT
                           /  | \               DFS: |cjk|aoi|tknt|te|l|e
                          c   j  k
                         /    |   \
                        a     o    i
                       /      |   / \ 
                      t       k  n   t
                     /        |
                    t         e
                   /
                  l
                 / 
                e
     
    
    */

    // For example: search: joke            
    searchWord(word: String){
        if(word.length == 0) throw new Error("There are no string has been provided");

        let current = this.root;
        for(const char of word) {
            const node = current.children[char]; // j with children o, k, e -> o with k, e -> o with e -> e
            if (node == null) 
                return false;

            current = node; // e, k, o
        }
        return current.isWord;
    }

    autocomplete(prefix: string){
        if(prefix.length == 0) throw new Error("No suffix has been provided");

        let current = this.root;
        for(const char of prefix) {
            const node = current.children[char];
            if (node == null) 
                return false;
            
            if(node.isWord)
                return console.log(prefix)

            current = node;
        }
        prefix = prefix.slice(0, -1);
        this.printAutoComplete_rec(current, prefix);
    }

    //Function uses DFS
    countWords() {
        if (!this.root) {
          return console.log('No root node found');
        }
        var queue = [this.root];
        var counter = 0;
        while (queue.length) {
          var node = queue.shift();
          if (node.isWord) {
            counter++;
          }
          for (var child in node.children) {
            //hasOwnProperty -- Determines whether an object has a property with the specified name.
            if (node.children.hasOwnProperty(child)) {
              queue.push(node.children[child]);
            }
          }
        }
        return counter;
    }

    //Uses DFS
    //Result: |cjk|aoi|tknt|te|l|e
    printWord_using_level_order_traverse() {
        if (!this.root)
            return console.log('No root node found');

        var newline = new TrieNode('|');
        var queue = [this.root, newline];
        var string = '';
        while (queue.length > 0) {
            var node = queue.shift();
            string += node.content.toString() + ' ';
            if (node === newline && queue.length) {
                queue.push(newline);
            }
            for (var child in node.children) {
                if (node.children.hasOwnProperty(child)) {
                    queue.push(node.children[child]);
                }
            }
        }
        console.log(string.slice(0, -2).trim());
    }

    //'kin', 'kit', 'joke', 'cat', 'cattle' 
    printWord_using_dfs_order_traverse(){
        if (!this.root)
            return console.log('No root node found');

        //var newline = new TrieNode('|');
        let prefix;
        let isPrefix = false;
        var stack = [this.root];
        var string = '';
        while (stack.length > 0) {
            var node = stack.pop();

            if(isPrefix && node.isWord){
                if(!string.includes(prefix))
                    string += prefix + node.content.toString();
                else   string += node.content.toString();
            }
            else   
                string += node.content.toString();

            if(node.isWord == true){
                console.log(string);
                if(Object.keys(node.children).length == 0)
                    string = '';      
            }

            for (var child in node.children) {
                if(Object.keys(node.children).length > 1 && node.children[child].isWord){
                    prefix = string;
                    isPrefix = true;
                }
                else if(Object.keys(node.children[child].children).length > 0){
                    prefix = string;
                    isPrefix = true;
                }
                else{
                    prefix = '';
                    isPrefix = false;
                }
                stack.push(node.children[child]);
            }
        }
    }

    //Result: [ 'cat', 'cattle', 'joke', 'kit', 'kin' ]
    printAutoComplete_rec(root: TrieNode, prefix: string){
        if(root == null) return null;

        let res = [];
        this.printWord_rec_helper(root, res, prefix);
        console.log(res);
    }

    //Result: [ 'cat', 'cattle', 'joke', 'kit', 'kin' ]
    printWord_rec(){
        if(this.root == null) return null;

        let res = [];
        this.printWord_rec_helper(this.root, res, '');
        console.log(res);
    }

    printWord_rec_helper(currNode: TrieNode, arr: any, perfix: string){
        if (currNode.isWord)
            arr.push(perfix + currNode.content);
        for (var child in currNode.children) 
            this.printWord_rec_helper(currNode.children[child], arr, perfix + currNode.content);
    }

    delete(key: String){
        if (this.root == null || key == null){
            console.log("None key or empty trie error");
            return;
        } 
        return this.deleteHelper(this.root, key);
    }


    deleteHelper(root: TrieNode, wordToDel: String) {
		if(wordToDel.length === 0) return false;

		let char = wordToDel[0]; // k, i, n
		let currNode = root.children[char];

		if(currNode == null)
			return false;

        if(currNode.isWord) {
            currNode.isWord = false;
            if(Object.keys(currNode.children).length == 0)  return true;
            else return false;
        }

		let isDelete = this.deleteHelper(currNode, wordToDel.substring(1));//(k, 'in'), (i, 'n')

		// We can remove child node only if it is non terminating and its number of children are 0	
		if(isDelete){
            if(Object.keys(currNode.children).length > 1){
                let ch = wordToDel[wordToDel.length - 1];
                delete currNode.children[ch];
                return false;
            }
            else delete root.children[char];
		}
		return isDelete;
	}

}