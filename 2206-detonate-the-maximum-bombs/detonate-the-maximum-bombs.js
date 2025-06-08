/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    let n = bombs.length;
    let adj = Array.from({ length: n }, () => [])

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            const [x1, y1, r1] = bombs[i]
            const [x2, y2, r2] = bombs[j]

            let dist = (x1 - x2) ** 2 + (y1 - y2) ** 2;

            if (dist <= r1 ** 2) {
                adj[i].push(j)
            }
        }
    }

    function dfs(node, visited) {
        visited[node] = true;
        let count = 1;
        for (nei of adj[node]) {
            if (!visited[nei]) {
                count += dfs(nei, visited)
            }
        }
        return count;
    }

    let res = 1;
    for (let i = 0; i < n; i++) {
        let visited = Array(n).fill(false)
        res = Math.max(res, dfs(i, visited))
    }
    return res;

};