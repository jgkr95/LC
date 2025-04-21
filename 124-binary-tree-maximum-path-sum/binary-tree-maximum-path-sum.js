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

    function dfs(node) {
        if (!node) return 0;

        // Get max gain from left and right (ignore negative paths)
        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);

        // Max path sum using this node as the highest point (root of this path)
        const currentPathSum = node.val + leftGain + rightGain;

        // Update global max if needed
        maxSum = Math.max(maxSum, currentPathSum);

        // Return max gain including this node and one of its subtrees
        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return maxSum;
    
};