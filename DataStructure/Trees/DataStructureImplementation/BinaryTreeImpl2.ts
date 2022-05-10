   
   /*
        Geeks for Geeks Implementation: https://www.geeksforgeeks.org/deletion-binary-tree/

        Algorithm:

        1. Starting at the root, find the deepest and rightmost node in binary tree and node which we want to delete. 
        2. Replace the deepest rightmost node’s data with the node to be deleted. 
        3. Then delete the deepest rightmost node.

    
     Node to delete is 12

         13                            
        /  \
       12  10
      / \  / \
     4  19 16 9


    Replace 12 with deepest node

         13
        /  \
       9   10
      / \  / \
     4  19 16 9

    Delete the deepest node

         13
        /  \
       9   10
      / \  / 
     4  19 16 


     IMPORTANT:

     Note: We can also replace node’s data that is to be deleted with any node whose left and right child points to NULL,
           but in sace of this algorithm it uses deepest node in order to maintain the Balance of a binary tree.

     Important Note: The above code will not work if the node to be deleted is the deepest node itself. Uses the right most node.
   
   */
   
   
   
   export class BinaryTreeNode{
        left: BinaryTreeNode | null;
        right: BinaryTreeNode | null;
        data: number;

        constructor(data) {
            this.left = null;
            this.right = null;
            this.data = data;
        }
    }
    
    // Inorder traversal of a binary tree
    export function inorder(temp){
        if (temp == null)
            return;

        inorder(temp.left);
        console.log(temp.key);
        inorder(temp.right);
    }

    // Function to delete deepest
    // element in binary tree
    function deleteDeepest(root, delNode){
        let q = [];
        q.push(root);
        let temp = null;

        // Do level order traversal until last node
        while (q.length > 0){
            temp = q[0];
            q.shift();

            if (temp == delNode){
                temp = null;
                return;
            }
            if (temp.right != null){
                if (temp.right == delNode){
                    temp.right = null;
                    return;
                }
            }
            else
                q.push(temp.right);
        }

        if (temp.left != null){
            if (temp.left == delNode){
                temp.left = null;
                return;
            }
            else
                q.push(temp.left);
        }
    }

    // Function to delete given element in binary tree
    export function deletion1(root, key)
    {
        if (root == null)
            return;

        if (root.left == null && root.right == null){
            if (root.data == key){
                root = null;
                return;
            }
            else
                return;
        }

        let q = [];
        q.push(root);
        let temp = null, keyNode = null;

        // Do level order traversal until we find key and last node.
        while (q.length > 0){
            temp = q[0];
            q.shift();

            if (temp.data == key)
                keyNode = temp;

            if (temp.left != null)
                q.push(temp.left);

            if (temp.right != null)
                q.push(temp.right);
        }

        if (keyNode != null){
            let x = temp.data;
            deleteDeepest(root, temp);
            keyNode.data = x;
        }
    }


    //IMPROVED Function -- doesn't use deleteDeepest
    export function deletion2(root, key){
        if (root == null)
            return;

        if (root.left == null && root.right == null){
            if (root.key == key){
                root = null;
                return;
            }
            else
                return;
        }

        let q = [];
        q.push(root);
        let temp = null, keyNode = null, last = null;

        // Do level order traversal until we find key and last node.
        while (q.length > 0){
            temp = q[0];
            q.shift();

            if (temp.data == key)
                keyNode = temp;

            if (temp.left != null){
                last = temp; //storing the parent node
                q.push(temp.left);
            }
            if (temp.right != null){
                last = temp; //storing the parent node
                q.push(temp.right);
            }
        }

        if (keyNode != null){
            keyNode.data = temp.data; //replacing key_node's data to deepest node's data
            if(last.right == temp)
                last.right = null;
            else last.left = null;
        }
    }
