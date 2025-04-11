//{ Driver Code Starts
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
            let ans = obj.isCyclic(V, edges);
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
 * @param {number[][]} edges
 * @returns {boolean}
 */
class Solution {
    
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
    
    dfs(node, visited, pathVisited, adj) {
        visited[node]=true
        pathVisited[node]=true
        
        for(const curNode of adj[node]){
            //if node is not visited
            if(!visited[curNode]){
                if(this.dfs(curNode,visited,pathVisited,adj)) return true;
            }
            //if node is visited and also pathVisited then there is cycle
            else if(pathVisited[curNode]){
                return true;
            }
        }
        
        pathVisited[node]=false;
        return false;
    }
    
    
    
    
    isCyclic(V, edges) {
        
        let adj=this.buildAdj(edges,V);
        let visited = Array(V).fill(false);
        let pathVisited = Array(V).fill(false);
    
        
        for(let i=0;i<V;i++){
            if(!visited[i]){
                if(this.dfs(i,visited,pathVisited,adj)) return true;
            }
        }
        
        return false;

    }
}