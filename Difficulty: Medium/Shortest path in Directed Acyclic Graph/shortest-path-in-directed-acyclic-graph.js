//{ Driver Code Starts


// Input Handling
function main() {
    const input = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let t;
    let inputs = [];
    input.on('line', line => { inputs.push(line.trim()); });

    input.on('close', () => {
        let idx = 0;
        t = parseInt(inputs[idx++]);
        while (t--) {
            let n = parseInt(inputs[idx++]);
            let m = parseInt(inputs[idx++]);
            let edges = [];
            for (let i = 0; i < m; i++) {
                edges.push(inputs[idx++].split(' ').map(Number));
            }

            const solution = new Solution();
            const result = solution.shortestPath(n, m, edges);
            console.log(result.join(' '));
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends


class Solution {
    // Helper function for topological sort using DFS
    topoSort(node, visited, adj, st) {
        visited[node] = true;

        // Visit all unvisited adjacent nodes
        for (const [v, w] of adj[node]) {
            if (!visited[v]) {
                this.topoSort(v, visited, adj, st);
            }
        }

        // After visiting all descendants, push the current node to the stack
        st.push(node);
    }

    // Main function to find the shortest path in a DAG
    shortestPath(V, E, edges) {
        let adj = [];

        // Initialize adjacency list
        for (let i = 0; i < V; i++) {
            adj[i] = [];
        }

        // Build the graph from edges
        for (const [u, v, w] of edges) {
            adj[u].push([v, w]); // Directed edge from u to v with weight w
        }

        let visited = Array(V).fill(false);
        let st = [];

        // Perform topological sort on all unvisited nodes
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.topoSort(i, visited, adj, st);
            }
        }

        // Initialize distances to all nodes as infinity (1e9)
        let dist = Array(V).fill(1e9);
        dist[0] = 0; // Distance to the source node (0) is 0

        // Process nodes in topological order
        while (st.length) {
            const u = st.pop();

            // If the node has been reached previously
            if (dist[u] !== 1e9) {
                for (const [v, w] of adj[u]) {
                    // Relax the edge if a shorter path is found
                    if (dist[u] + w < dist[v]) {
                        dist[v] = dist[u] + w;
                    }
                }
            }
        }

        // Replace all unreachable distances (1e9) with -1
        return dist.map(x => x === 1e9 ? -1 : x);
    }
}
