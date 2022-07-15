"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearchTreeIterativeApproachImpl_1 = require("./BinarySearchTreeIterativeApproachImpl");
const BinarySearchTreeRecursiveApproachImpl_1 = require("./BinarySearchTreeRecursiveApproachImpl");
const BinaryTreeImpl_1 = require("./BinaryTreeImpl");
const BinaryTreeImpl2_1 = require("./BinaryTreeImpl2");
const GenericTreeNArrayTreeImpl_1 = require("./GenericTreeNArrayTreeImpl");
const TrieImplUsingMap_1 = require("./TrieImplUsingMap");
const TrieTreeImpl_1 = require("./TrieTreeImpl");
const Trie_LearnersBucket_Impl_1 = require("./Trie_LearnersBucket_Impl");
const TrinaryTreeImpl_1 = require("./TrinaryTreeImpl");
describe('Tests', () => {
    afterAll((done) => {
        done();
    });
    it('Test: Iterative Approach Binary Search Tree Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let tree = new BinarySearchTreeIterativeApproachImpl_1.BinarySearchTree();
        tree.insertIterative(6);
        tree.insertIterative(4);
        tree.insertIterative(8);
        tree.insertIterative(3);
        tree.insertIterative(5);
        tree.insertIterative(7);
        tree.insertIterative(9);
        tree.inOrderTraverse();
        let node = tree.findIterative(5);
        console.log(node.val);
        tree.deleteIterative(8);
        console.log('PRINT AFTER DELITION');
        tree.inOrderTraverse();
    }));
    it('Test: Recursive Approach Binary Search Tree Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let tree = new BinarySearchTreeRecursiveApproachImpl_1.BinarySearchTreeRec();
        tree.insertRecursive(6);
        tree.insertRecursive(4);
        tree.insertRecursive(8);
        tree.insertRecursive(3);
        tree.insertRecursive(5);
        tree.insertRecursive(7);
        tree.insertRecursive(9);
        tree.inOrderTraverse();
        tree.postOrderTraverse();
        tree.preOrderTraverse();
        let node = tree.findRecursive(5);
        console.log(node.val);
        tree.deleteRecursive(8);
        console.log('PRINT AFTER DELITION');
        tree.inOrderTraverse();
    }));
    it('Test: Binary Tree Implementation with 2 properties: add the node to the already creadted tree', () => __awaiter(void 0, void 0, void 0, function* () {
        let root = new BinaryTreeImpl_1.BTNode(10);
        root.left = new BinaryTreeImpl_1.BTNode(11);
        root.left.left = new BinaryTreeImpl_1.BTNode(7);
        root.right = new BinaryTreeImpl_1.BTNode(9);
        root.right.left = new BinaryTreeImpl_1.BTNode(15);
        root.right.right = new BinaryTreeImpl_1.BTNode(8);
        let tree = new BinaryTreeImpl_1.BinaryTree();
        tree.inOrderTraverse(root);
        console.log('PRINT BEFORE');
        tree.insert(root, 12);
        console.log('PRINT AFTER');
        tree.inOrderTraverse(root);
        tree.delete(root, 11);
        console.log('PRINT AFTER DELITION');
        tree.inOrderTraverse(root);
    }));
    /*
                10               BFS: 10, 11, 7, 9, 15, 8, 12
               /  \              DFS: 10, 7, 12, 8, 11, 15, 9
             11     7            Inorder: 9, 11, 15, 10, 8, 7, 12
            /  \   / \
           9   15 8  12
    */
    it('Test: Binary Tree Implementation: starting from the beginning', () => __awaiter(void 0, void 0, void 0, function* () {
        let tree = new BinaryTreeImpl_1.BinaryTree();
        tree.insert2(10);
        tree.insert2(11);
        tree.insert2(7);
        tree.insert2(9);
        tree.insert2(15);
        tree.insert2(8);
        console.log('PRINT BEFORE');
        tree.inOrder();
        tree.insert2(12);
        console.log('PRINT AFTER');
        tree.inOrder();
        console.log('PRINT BFS_ORDER');
        tree.BFS_PrintTree();
        console.log('PRINT DFS_ORDER');
        tree.DFS_PrintTree();
    }));
    it('Test: Delete in Binary Tree Implementation: GeeksForGeeks Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let root = new BinaryTreeImpl2_1.BinaryTreeNode(10);
        root.left = new BinaryTreeImpl2_1.BinaryTreeNode(11);
        root.left.left = new BinaryTreeImpl2_1.BinaryTreeNode(7);
        root.left.right = new BinaryTreeImpl2_1.BinaryTreeNode(12);
        root.right = new BinaryTreeImpl2_1.BinaryTreeNode(9);
        root.right.left = new BinaryTreeImpl2_1.BinaryTreeNode(15);
        root.right.right = new BinaryTreeImpl2_1.BinaryTreeNode(8);
        console.log('PRINT BEFORE');
        (0, BinaryTreeImpl2_1.inorder)(root);
        (0, BinaryTreeImpl2_1.deletion1)(root, 11);
        console.log('PRINT AFTER');
        (0, BinaryTreeImpl2_1.inorder)(root);
    }));
    it('Test: Delete in Binary Tree Implementation: GeeksForGeeks Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let root = new BinaryTreeImpl2_1.BinaryTreeNode(10);
        root.left = new BinaryTreeImpl2_1.BinaryTreeNode(11);
        root.left.left = new BinaryTreeImpl2_1.BinaryTreeNode(7);
        root.left.right = new BinaryTreeImpl2_1.BinaryTreeNode(12);
        root.right = new BinaryTreeImpl2_1.BinaryTreeNode(9);
        root.right.left = new BinaryTreeImpl2_1.BinaryTreeNode(15);
        root.right.right = new BinaryTreeImpl2_1.BinaryTreeNode(8);
        console.log('PRINT BEFORE');
        (0, BinaryTreeImpl2_1.inorder)(root);
        (0, BinaryTreeImpl2_1.deletion2)(root, 11);
        console.log('PRINT AFTER');
        (0, BinaryTreeImpl2_1.inorder)(root);
    }));
    /*
                              10
                           /     \                  Postorder: 100, 2, 9, 11, 1, 6, 8, -1, 7, 8, 3, 2, 1, 3, 4, 5, 10
                         8        5                 Preorder: 10, 8, 2, 100, 1, 9, 11, 6, 5, 7, -1, 8, 3, 4, 2, 1, 3
                       / | \    / /\ \              BFS: 10, 8, 5, 2, 1, 6, 7, 8, 3, 4, 100, 9, 11, -1, 2, 1, 3
                     2   1  6   7 8 3 4             DFS: 10, 5, 4, 3, 1, 2, 3, 8, 7, -1, 8, 6, 1, 11, 9, 2, 100
                    /    /\     \    /|\
                  100   9 11    -1   2 1 3          NOTE: DFS and Preorder does the same traverse. DFS starts from the right subtree and Preorder from the left subtree
    
    */
    it('Test: Generic N-Array Tree Implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let tree = new GenericTreeNArrayTreeImpl_1.GTNode(10);
        tree.addChild(8);
        tree.addChild(5);
        // Add child node [2,1,6] in node (8)
        tree.children[0].addChild(2);
        tree.children[0].addChild(1);
        tree.children[0].addChild(6);
        // Add child node [9,11] in node (1)
        tree.children[0].children[1].addChild(9);
        tree.children[0].children[1].addChild(11);
        // Add child node [7  8 3  4] in node (5)
        tree.children[1].addChild(7);
        tree.children[1].addChild(8);
        tree.children[1].addChild(3);
        tree.children[1].addChild(4);
        // Add child node [-7] in node (4)
        tree.children[1].children[0].addChild(-1);
        // Add child node [2,1,3] in node (7)
        tree.children[1].children[3].addChild(2);
        tree.children[1].children[3].addChild(1);
        tree.children[1].children[3].addChild(3);
        let genericTreeFunc = new GenericTreeNArrayTreeImpl_1.NArrayGenericTree();
        console.log("POSTORDER: "); //Left-Right-Root
        genericTreeFunc.printPostOrder(tree);
        console.log("PREORDER: "); //Root-Left-Right
        genericTreeFunc.printPreOrder(tree);
        console.log("BFS: LEVEL ORDER: ");
        genericTreeFunc.printBFS_LevelOrder(tree);
        console.log("DFS ORDER: ");
        genericTreeFunc.printDFS_Order(tree);
        console.log('ADD NEW NODE');
        genericTreeFunc.addNodeAtParticularLocation(tree, 2, 100);
        console.log('BFS: LEVEL ORDER: AFTER NEW ISERTION');
        genericTreeFunc.printBFS_LevelOrder(tree);
        console.log("DFS ORDER: ");
        genericTreeFunc.printDFS_Order(tree);
        console.log("POSTORDER: "); //Left-Right-Root
        genericTreeFunc.printPostOrder(tree);
        console.log("PREORDER: "); //Root-Left-Right
        genericTreeFunc.printPreOrder(tree);
        console.log('DELETE NODE');
        genericTreeFunc.delete(tree, 6);
        console.log('BFS: LEVEL ORDER: AFTER DELETION');
        genericTreeFunc.printBFS_LevelOrder(tree);
        let size = genericTreeFunc.calculateSizeOfTree(tree);
        console.log(size);
        let depth = genericTreeFunc.calculateHeightOfTreeDFSRecursive(tree);
        console.log(depth);
        depth = genericTreeFunc.calculateHeightOfTree_BFS(tree);
        console.log(depth);
        depth = genericTreeFunc.calculateHeightOfTree_BFS_2(tree);
        console.log(depth);
    }));
    /*
                     15                     Inorder: 8, 10, 12, 15, 16, 17, 18
                  /  |  \                   Preorder: 15, 12, 8, 10, 18, 16, 17
                12   15  18                 Postorder: 10, 8, 12, 17, 16, 18, 15
               /     |   /                  BFS: 15, 12, 15, 18, 8, 15, 16, 10, 17
              8      15 16                  DFS: 15, 18, 16, 16, 15, 15, 12, 8, 10
               \          \
               10         17
    */
    it('Test: Trinary tree implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        let trinaryTreeFunc = new TrinaryTreeImpl_1.TrinaryTree();
        trinaryTreeFunc.insert(15);
        trinaryTreeFunc.insert(12);
        trinaryTreeFunc.insert(15);
        trinaryTreeFunc.insert(15);
        trinaryTreeFunc.insert(18);
        trinaryTreeFunc.insert(8);
        trinaryTreeFunc.insert(10);
        trinaryTreeFunc.insert(16);
        trinaryTreeFunc.insert(17);
        console.log('PRINT INORDER');
        trinaryTreeFunc.inorder();
        console.log('PRINT POST_ORDER');
        trinaryTreeFunc.postorder();
        console.log('PRINT PRE_ORDER');
        trinaryTreeFunc.preorder();
        console.log('PRINT BFS_ORDER');
        trinaryTreeFunc.BFS_PrintTree();
        console.log('PRINT DFS_ORDER');
        trinaryTreeFunc.DFS_PrintTree();
        trinaryTreeFunc.delete(12);
        console.log('PRINT INORDER');
        trinaryTreeFunc.inorder();
    }));
    it('Test: Trie tree implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        //Test add word with content
        let trie = new TrieTreeImpl_1.Trie();
        trie.addWord1('cat');
        trie.addWord1('cattle');
        trie.addWord1('joke');
        trie.addWord1('kit');
        trie.addWord1('kin');
        trie.autocomplete('joke');
        console.log(trie.searchWord('kit'));
        trie.printWord_rec();
        trie.printWord_using_level_order_traverse();
        trie.printWord_using_dfs_order_traverse();
        console.log(trie.countWords());
        trie.delete('kin');
        trie.delete('cat');
        trie.delete('joke');
        trie.delete('abb');
        console.log(trie.searchWord('joke'));
        trie.printWord_using_level_order_traverse();
    }));
    it('Test: Trie implementation using MAP', () => __awaiter(void 0, void 0, void 0, function* () {
        //Test add word with content
        let trie = new TrieImplUsingMap_1.TrieMap();
        trie.insert('cat');
        trie.insert('cattle');
        trie.insert('joke');
        trie.insert('kit');
        trie.insert('kin');
        trie.deleteRec('joke');
        console.log(trie.search('joke'));
        trie.printAllWords();
    }));
    ref: https: //learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/
     it('Test: Trie Learners Bucket implementation', () => __awaiter(void 0, void 0, void 0, function* () {
        const trie = new Trie_LearnersBucket_Impl_1.TrieTest();
        // insert few values
        trie.insert("peter");
        trie.insert("piper");
        trie.insert("picked");
        trie.insert("pickled");
        trie.insert("pepper");
        // check contains method
        console.log(trie.contains("picked"));
        console.log(trie.contains("pepper"));
        trie.remove("pepper");
        // check find method
        console.log(trie.find("pi"));
        console.log(trie.find("pe"));
    }));
});
//# sourceMappingURL=TestTreeImpl.test.js.map