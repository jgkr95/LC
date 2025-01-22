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
    let queue = [];
    queue.push(root);
    let res = [];
    while(queue.length){
        let rightSide = null;
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node = queue.shift();
            if(node != null){
                rightSide=node;
                queue.push(node.left);
                queue.push(node.right);

            }
        }
        if(rightSide != null)
            res.push(rightSide.val)
    }
    return res;
};