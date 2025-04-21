/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity

    function dfs(root){
        if(!root){
            return 0;
        }

        let leftSum = Math.max(dfs(root.left),0)
        let rightSum = Math.max(dfs(root.right),0)

        let currentPathSum = root.val + leftSum + rightSum

        maxSum = Math.max(maxSum,currentPathSum)

        return root.val + Math.max(leftSum, rightSum)
    }

    dfs(root)
    return maxSum
    
};