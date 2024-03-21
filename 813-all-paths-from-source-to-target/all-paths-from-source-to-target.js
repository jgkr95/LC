/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {

    let res = [];

    function backtrack(curNode, curArr) {
        curArr.push(curNode)
        if (curNode === graph.length - 1) {
            res.push([...curArr])
        }
        let neighbours = graph[curNode]
        for (let i of neighbours) {
            backtrack(i, curArr);
        }
        curArr.pop()
    }
    backtrack(0, [])
    return res;

};