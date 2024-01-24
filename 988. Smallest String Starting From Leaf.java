// 988. Smallest String Starting From Leaf
// Solved
// Medium
// Topics
// Companies
// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// As a reminder, any shorter prefix of a string is lexicographically smaller.

// For example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 
class Solution {
    private String result = "~"; // Set initial result to a large lexicographical value
    public String smallestFromLeaf(TreeNode root) {
        dfs(root, "");
        return result;
    }

    public void dfs(TreeNode root,String curPath){

        if(root == null) return;

        curPath = (char)('a'+root.val) + curPath;

        if(root.left == null && root.right == null){
            result = curPath.compareTo(result) < 0 ? curPath : result;
        }
        dfs(root.left,curPath);
        dfs(root.right,curPath);
    }
}