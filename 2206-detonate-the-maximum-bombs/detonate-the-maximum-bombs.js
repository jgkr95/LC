/**
 * @param {number[][]} bombs - An array where each element is [x, y, r] representing a bomb's coordinates and blast radius.
 * @return {number} - Maximum number of bombs that can be detonated in a chain reaction.
 */
var maximumDetonation = function (bombs) {
    let n = bombs.length;

    // Adjacency list to represent the directed graph
    let adj = Array.from({ length: n }, () => []);

    // Build the graph: if bomb i can reach bomb j (within radius), add j to i's adjacency list
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            const [x1, y1, r1] = bombs[i];
            const [x2, y2, r2] = bombs[j];

            // Calculate squared distance between bomb i and bomb j
            let dist = (x1 - x2) ** 2 + (y1 - y2) ** 2;

            // If bomb j is within the blast radius of bomb i
            if (dist <= r1 ** 2) {
                adj[i].push(j); // i can detonate j
            }
        }
    }

    // DFS function to count how many bombs can be detonated starting from `node`
    function dfs(node, visited) {
        visited[node] = true;
        let count = 1; // include the current bomb

        for (let nei of adj[node]) {
            if (!visited[nei]) {
                count += dfs(nei, visited); // recursive DFS for neighbors
            }
        }

        return count;
    }

    let res = 1;

    // Try detonating each bomb and track the maximum chain reaction
    for (let i = 0; i < n; i++) {
        let visited = Array(n).fill(false);
        res = Math.max(res, dfs(i, visited));
    }

    return res;
};
