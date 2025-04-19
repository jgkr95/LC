/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {

    const visited = new Map();

    const dfs = (node) => {
        if (!node) return null
        if (visited.has(node)) return visited.get(node);

        const clone = new Node(node.val)
        visited.set(node,clone)
        for (const neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }

    return dfs(node)



};