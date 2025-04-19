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
            let res = obj.getComponents(V, edges);

            // Sort each component
            for (let component of res) {
                component.sort((a, b) => a - b);
            }

            // Sort all components lexicographically
            res.sort((a, b) => {
                let len = Math.min(a.length, b.length);
                for (let i = 0; i < len; i++) {
                    if (a[i] !== b[i]) return a[i] - b[i];
                }
                return a.length - b.length;
            });

            // Print the result
            for (let component of res) {
                console.log(component.join(" "));
            }
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends


class Solution {
    /**
    * @param number V
    * @param number[][] edges

    * @returns number[][]
    */
    getComponents(V, edges) {
         let adj=Array.from({length: V}, ()=>[])
        
        for(const [u,v] of edges){
            adj[u].push(v)
            adj[v].push(u)
        }
        
        const visited = Array(V).fill(false);
        let components = [];
        let component = []
        
        function dfs(node){
            visited[node] = true
            component.push(node);
            for(const curNode of adj[node]){
                if(!visited[curNode])
                    dfs(curNode)
            }
        }
        
        for(let i=0;i<V;i++){
            component = []
            if(!visited[i]){
                components.push(component);
                dfs(i);
            }
        }
        
        return components;
    
    }
}