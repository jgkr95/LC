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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let vis={}
    let res=[]
    function dfs(node, level)  {
        if(node==null){
            return
        }
        if(!vis[level]){
            res.push(node.val)
        }
        vis[level]=true
        dfs(node.right,level+1)
        dfs(node.left,level+1)
    } 
    dfs(root,0)
    return res
};