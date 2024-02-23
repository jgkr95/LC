/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
let visited = new Set();
function dfs(start){

    if (start < 0 || start > arr.length - 1) return false;

    if(visited.has(start)) return false;

    if (arr[start] == 0) return true;

    visited.add(start)

    return dfs(start + arr[start]) || dfs( start - arr[start])
}

return dfs(start);

};