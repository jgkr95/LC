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
var diameterOfBinaryTree = function (root) {
    let res = 0;
    function dfs(root) {

        if (!root) {
            return 0;
        }

        let leftHeight =  dfs(root.left)
        let rightHeight = dfs(root.right)

        let currentDiameter = Math.max(res, leftHeight+rightHeight)

        res = Math.max(currentDiameter, res)

        return 1+ Math.max(leftHeight,rightHeight)
    }

    dfs(root)
    return res

};