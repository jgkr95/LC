//{ Driver Code Starts
// Initial Template for javascript
'use strict';

function check(V, res, adj) {
    if (V != res.length) return 0;
    let map = new Array(V);
    map.fill(-1);
    for (let i = 0; i < V; i++) {
        map[res[i]] = i;
    }
    for (let i = 0; i < V; i++) {
        for (const v of adj[i]) {
            if (map[i] > map[v]) return 0;
        }
    }
    return 1;
}

function main() {
    const readline = require("readline").createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let input = [];
    readline.on("line", (line) => { input.push(line); });

    readline.on("close", () => {
        let index = 0;
        let tc = parseInt(input[index++]);
        while (tc-- > 0) {
            let V = parseInt(input[index++]);
            let E = parseInt(input[index++]);
            let x = V;
            let edges = [];
            let adj = new Array(V);
            for (let i = 0; i < V; i++) {
                adj[i] = new Array();
            }

            for (let i = 0; i < E; i++) {
                let [u, v] = input[index++].split(" ").map(Number);
                edges.push([ u, v ]);
                adj[u].push(v);
            }

            let obj = new Solution();
            let res = obj.topoSort(V, edges);
            if (check(x, res, adj)) {
                console.log("true");
            } else {
                console.log("false");
            }
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
    dfs(node, adj, visited, st) {
        visited[node] = true;

        for (const curNode of adj[node] || []) {
            if (!visited[curNode]) {
                this.dfs(curNode, adj, visited, st);
            }
        }

        st.push(node);
    }
    
    buildAdj(edges,V){
        let adj=[]
        for(let i=0;i<V;i++){
            adj[i]=[]
        }
        
        for(const [u,v] of edges){
            adj[u].push(v);
        }
        return adj
    }
    

    topoSort(V, edges) {
        let visited = Array(V).fill(false);
        let st = [];
        let adj=this.buildAdj(edges,V)

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.dfs(i, adj, visited, st)
            }
        }
        //console.log(st)

        return st.reverse(); // Only reverse once
    }
}

