class Solution {
    // Depth-First Search for Topological Sort
    // dfs(node, adj, visited, st) {
    //     visited[node] = true;

    //     // Visit all adjacent nodes
    //     for (const curNode of adj[node] || []) {
    //         if (!visited[curNode]) {
    //             this.dfs(curNode, adj, visited, st);
    //         }
    //     }

    //     // Push current node to stack after visiting all neighbors
    //     st.push(node);
    // }

    buildAdj(edges, V) {
        let adj = [];
        for (let i = 0; i < V; i++) {
            adj[i] = [];
        }

        for (const [u, v] of edges) {
            adj[u].push(v); // Directed edge from u to v
        }

        return adj;
    }

    topoSort(V, edges) {
        //let visited = Array(V).fill(false);
        //let st = [];
        //let adj = this.buildAdj(edges, V);

        //for (let i = 0; i < V; i++) {
            //if (!visited[i]) {
        //        this.dfs(i, adj, visited, st);
        //  }
        //}

        //return st.reverse(); // Return reversed stack as topological order
        
        let adj = this.buildAdj(edges, V);
        let indegree = Array(V).fill(0);
        let queue = [];
        
        for(let i=0;i<V;i++){
            for(const node of adj[i]){
                indegree[node]++;
            }
        }
        
        
        for(let i=0;i<V;i++){
            if(indegree[i]==0){
                queue.push(i);
            }
        }
        let topo = [];
        let front = 0;
        
        while(front < queue.length){
            let node = queue[front++]
            
            topo.push(node);
            
            for(const curNode of adj[node]){
                indegree[curNode]--;
                if(indegree[curNode]==0) queue.push(curNode);
            }
        }
        
        return topo
        
        
    }
}
