import { maxDepth, TreeNode } from "./Leetcode104_MaximumDepthOfBinaryTree";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test longestCommonSubsequence with valid data', async () => {
        let root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        console.log(maxDepth(root));
    })
});
