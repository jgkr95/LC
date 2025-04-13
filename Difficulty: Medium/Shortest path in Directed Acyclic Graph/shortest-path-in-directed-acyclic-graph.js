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
    topoSort(node,visited,adj,st){
        visited[node] = true
        
        for(const [v,w] of adj[node]){
            if(!visited[v])
                this.topoSort(v,visited, adj,st)
        }
        
        st.push(node);
    }
    
    shortestPath(V, E, edges) {
        let adj=[]
        for(let i=0;i<V;i++){
            adj[i]=[]
        }
        
        for(const [u,v,w] of edges){
            adj[u].push([v,w])
        }
        
        let visited=Array(V).fill(false);
        let st=[]
        for(let i=0;i<V;i++){
            if(!visited[i]){
                this.topoSort(i,visited,adj,st)
            }
        }
        
        let dist= Array(V).fill(1e9)
        dist[0]=0
        
        while(st.length){
            const u = st.pop();
            
            for(const [v,w] of adj[u]) {
                if(dist[u]+w < dist[v])
                    dist[v] = dist[u]+w
            }
            
        }
        
        return dist.map(x => x === 1e9 ? -1 : x);
    }
}