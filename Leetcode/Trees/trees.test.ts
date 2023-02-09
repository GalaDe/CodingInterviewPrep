import { isSameTree } from "./Leetcode100_SameTree";
import { levelOrder } from "./Leetcode102_BinaryTreeLevelOrderTraversal";
import { maxDepth, TreeNode } from "./Leetcode104_MaximumDepthOfBinaryTree";
import { maxPathSumRec1 } from "./Leetcode124_BinaryTreeMaxPathSum";
import { invertTreeIterrative, invertTreeRec } from "./Leetcode226_InvertBinaryTree";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test Leetcode 104: Maximum depth of Binary tree', async () => {
        let root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        console.log(maxDepth(root));
    })

    it('Test Leetcode 100: Same Tree', async () => {
      let rootA = new TreeNode(1);
      rootA.left = new TreeNode(null);
      rootA.right = new TreeNode(3);
      // rootA.right.left = new TreeNode(15);
      // rootA.right.right = new TreeNode(7);

      let rootB = new TreeNode(1);
      rootB.left = new TreeNode(2);
      rootB.right = new TreeNode(3);
      // rootB.right.left = new TreeNode(15);
      // rootB.right.right = new TreeNode(7);

      console.log(isSameTree(rootA, rootB));
  })

  it('Test Leetcode 226: Invert Tree Recursive', async () => {
    let rootA = new TreeNode(4);
    rootA.left = new TreeNode(2);
    rootA.right = new TreeNode(7);
    rootA.left.left = new TreeNode(1);
    rootA.left.right = new TreeNode(3);
    rootA.right.left = new TreeNode(6);
    rootA.right.right = new TreeNode(9);

    console.log(invertTreeRec(rootA));
  })

  it('Test Leetcode 226: Invert Tree Iterrative', async () => {
    let rootA = new TreeNode(4);
    rootA.left = new TreeNode(2);
    rootA.right = new TreeNode(7);
    rootA.left.left = new TreeNode(1);
    rootA.left.right = new TreeNode(3);
    rootA.right.left = new TreeNode(6);
    rootA.right.right = new TreeNode(9);

    console.log(invertTreeIterrative(rootA));
  })

  it('Test Leetcode 124:  Binary Tree Maximum Path Sum', async () => {
    let rootA = new TreeNode(0);
    rootA.left = new TreeNode(9);
    rootA.right = new TreeNode(20);
    rootA.left.left = new TreeNode(15);
    rootA.left.right = new TreeNode(7);
    rootA.right.left = new TreeNode(15);
    rootA.right.right = new TreeNode(7);

    console.log(maxPathSumRec1(rootA));
  })

  it('Test Leetcode 124:  Binary Tree Level Order Traversal', async () => {
    let rootA = new TreeNode(1);
    rootA.left = new TreeNode(2);
    rootA.right = new TreeNode(null);
    rootA.left.left = new TreeNode(3);
    rootA.left.right = new TreeNode(null);
    rootA.left.left.left = new TreeNode(4);
    rootA.left.left.right  = new TreeNode(null);
    rootA.left.left.left.left  = new TreeNode(5);

    console.log(levelOrder(rootA));
  })


});


