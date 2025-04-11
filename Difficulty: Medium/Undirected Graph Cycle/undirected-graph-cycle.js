//{ Driver Code Starts
// Initial Template for javascript
'use strict';

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
            let edges = [];
            for (let i = 0; i < E; i++) {
                let [u, v] = input[index++].split(" ").map(Number);
                edges.push([ u, v ]);
            }

            let obj = new Solution();
            let ans = obj.isCycle(V, edges);
            console.log(ans ? "true" : "false");
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
 * @returns {boolean}
 */
class Solution {
    
    buildAdj(edges,V){
        let adj=[];
        for(let i=0;i<V;i++){
            adj[i]=[]
        }
        
        for(let [u,v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }
        return adj;
    }
    
    dfs(node,parent, visited, adj){
        visited[node]=true;
        
        for(const curNode of adj[node]){
            if(!visited[curNode]) {
                if(this.dfs(curNode,node,visited,adj)) return true;
            }
            else if(curNode != parent) {
                return true
            }
        }
        return false;
    }
    
    //isCycle undirected graph
    isCycle(V, edges) {
        let adj = this.buildAdj(edges,V)
        
        let visited = Array(V).fill(false);
        
        for(let i=0;i<V;i++){
            if(!visited[i]){
                if(this.dfs(i,-1,visited,adj)) return true
            }
        }
        
        return false;
    }
}